'use client';

import {
  CREATE_TODO_MUTATION,
  DELETE_TODO_MUTATION,
  TODOS_QUERY,
  UPDATE_TODO_MUTATION,
} from '@sass-project/contracts';
import { useCallback, useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import styles from './page.module.css';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

const graphqlUrl =
  process.env.NEXT_PUBLIC_GRAPHQL_URL ?? 'http://localhost:3333/graphql';

async function requestGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const response = await fetch(graphqlUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed (${response.status}).`);
  }

  const result = (await response.json()) as GraphQLResponse<T>;

  if (result.errors?.length) {
    throw new Error(result.errors.map((error) => error.message).join(' '));
  }

  if (!result.data) {
    throw new Error('The GraphQL API returned no data.');
  }

  return result.data;
}

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const loadTodos = useCallback(async () => {
    try {
      setError('');
      const data = await requestGraphQL<{ todos: Todo[] }>(TODOS_QUERY);
      setTodos(data.todos);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load todos.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadTodos();
  }, [loadTodos]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError('Add a title for your todo.');
      return;
    }

    try {
      setSaving(true);
      setError('');
      const data = await requestGraphQL<{ createTodo: Todo }>(
        CREATE_TODO_MUTATION,
        { title: trimmedTitle }
      );
      setTodos((current) => [data.createTodo, ...current]);
      setTitle('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not create todo.');
    } finally {
      setSaving(false);
    }
  }

  async function toggleTodo(todo: Todo) {
    try {
      setError('');
      const data = await requestGraphQL<{ updateTodo: Todo }>(
        UPDATE_TODO_MUTATION,
        { id: todo.id, completed: !todo.completed }
      );
      setTodos((current) =>
        current.map((item) =>
          item.id === todo.id ? data.updateTodo : item
        )
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not update todo.');
    }
  }

  async function deleteTodo(id: string) {
    try {
      setError('');
      await requestGraphQL<{ deleteTodo: string }>(DELETE_TODO_MUTATION, { id });
      setTodos((current) => current.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not delete todo.');
    }
  }

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <main className={styles.page}>
      <section className={styles.panel} aria-labelledby="page-title">
        <div className={styles.eyebrow}>A little more focus</div>
        <h1 id="page-title">Today&apos;s todos</h1>
        <p className={styles.subtitle}>
          Keep the next step clear. You&apos;ve got this.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.visuallyHidden} htmlFor="todo-title">
            New todo
          </label>
          <input
            id="todo-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={200}
            placeholder="What needs doing?"
            disabled={saving}
          />
          <button type="submit" disabled={saving || !title.trim()}>
            {saving ? 'Adding…' : 'Add todo'}
          </button>
        </form>

        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}

        <div className={styles.listHeader}>
          <h2>Your list</h2>
          <span>
            {completedCount} of {todos.length} done
          </span>
        </div>

        {loading ? (
          <p className={styles.empty}>Loading your todos…</p>
        ) : todos.length === 0 ? (
          <p className={styles.empty}>
            Nothing on your list yet. Add your first todo above.
          </p>
        ) : (
          <ul className={styles.list}>
            {todos.map((todo) => (
              <li className={styles.todo} key={todo.id}>
                <label className={styles.todoLabel}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => void toggleTodo(todo)}
                  />
                  <span
                    className={
                      todo.completed ? styles.completed : styles.todoTitle
                    }
                  >
                    {todo.title}
                  </span>
                </label>
                <button
                  className={styles.deleteButton}
                  type="button"
                  onClick={() => void deleteTodo(todo.id)}
                  aria-label={`Delete ${todo.title}`}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
