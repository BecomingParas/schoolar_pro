'use client';

import React from 'react';
import {
  Code,
  Stethoscope,
  Cpu,
  Briefcase,
  Palette,
  Leaf,
  Scale,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory?: (categoryName: string) => void;
}

export default function CategoriesSection({ onSelectCategory }: CategoriesSectionProps) {
  const categories = [
    {
      name: 'Computer Science & AI',
      count: '2,450+ Grants',
      icon: Code,
      color: 'bg-indigo-50 text-indigo-600',
      description: 'Software engineering, machine learning, data science & robotics.',
    },
    {
      name: 'Medicine & Healthcare',
      count: '1,890+ Grants',
      icon: Stethoscope,
      color: 'bg-emerald-50 text-emerald-600',
      description: 'Pre-med, clinical surgery, nursing, public health & genomics.',
    },
    {
      name: 'Engineering & Robotics',
      count: '3,120+ Grants',
      icon: Cpu,
      color: 'bg-blue-50 text-blue-600',
      description: 'Mechanical, aerospace, electrical, civil & renewable energy.',
    },
    {
      name: 'Business, MBA & Finance',
      count: '1,640+ Grants',
      icon: Briefcase,
      color: 'bg-amber-50 text-amber-600',
      description: 'Executive MBA, entrepreneurship, global trade & economics.',
    },
    {
      name: 'Arts, Design & Humanities',
      count: '1,210+ Grants',
      icon: Palette,
      color: 'bg-purple-50 text-purple-600',
      description: 'Visual media, architecture, literature, music & cultural studies.',
    },
    {
      name: 'Environmental Science',
      count: '940+ Grants',
      icon: Leaf,
      color: 'bg-teal-50 text-teal-600',
      description: 'Climate policy, marine biology, conservation & sustainability.',
    },
    {
      name: 'Law & International Policy',
      count: '880+ Grants',
      icon: Scale,
      color: 'bg-rose-50 text-rose-600',
      description: 'Human rights law, international relations & diplomatic diplomacy.',
    },
    {
      name: 'Education & Social Sciences',
      count: '760+ Grants',
      icon: BookOpen,
      color: 'bg-sky-50 text-sky-600',
      description: 'Pedagogy, developmental psychology & sociology fellowships.',
    },
  ];

  const handleCategoryClick = (name: string) => {
    if (onSelectCategory) {
      onSelectCategory(name);
    }
    const el = document.getElementById('scholarships');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider mb-2">
              Academic Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Scholarships by Field
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Target funding explicitly earmarked for your specific major,
              research discipline, or career pathway.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleCategoryClick('STEM')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 hover:text-primary-700 group cursor-pointer"
          >
            <span>View all disciplines</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                onClick={() => handleCategoryClick(cat.name)}
                className="bg-white rounded-3xl p-6 border border-slate-100 hover:border-primary-200 shadow-xs hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-primary-600 transition-colors">
                  <span>Browse programs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
