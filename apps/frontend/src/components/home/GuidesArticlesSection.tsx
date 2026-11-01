'use client';

import React, { useState } from 'react';
import {
  Clock,
  ArrowRight,
} from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'How to Write an Irresistible Statement of Purpose (SOP) for 2026 Fellowships',
    category: 'SOP & Essays',
    readTime: '6 min read',
    excerpt:
      'Learn the exact 5-paragraph structure winning scholars use to demonstrate leadership, research vision, and institutional alignment without sounding generic.',
    author: 'Dr. Sarah Mitchell, Oxford Chevening Alum',
    date: 'Oct 24, 2026',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'art-2',
    title: 'Studying in Germany Tuition-Free: Complete English-Taught Program & DAAD Guide',
    category: 'Destinations',
    readTime: '8 min read',
    excerpt:
      'Detailed walkthrough of how international students study at top German public universities for zero tuition, plus monthly DAAD stipend applications.',
    author: 'Marcus Weber, DAAD Scholar',
    date: 'Oct 18, 2026',
    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'art-3',
    title: 'How to Win Graduate Assistantships (GRA/GTA) in the US and Canada',
    category: 'Graduate Funding',
    readTime: '7 min read',
    excerpt:
      'The proven cold-email framework to contact university research professors, secure lab positions, and unlock full tuition waivers with monthly stipends.',
    author: 'Ankit Sharma, Purdue Graduate Fellow',
    date: 'Oct 12, 2026',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=80',
  },
];

export default function GuidesArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="guides" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block mb-2">
              Expert Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
              Guides & Strategy Articles
            </h2>
            <p className="mt-2 text-base text-slate-500 font-normal max-w-xl">
              Written by former scholarship selection committee members,
              Chevening alumni, and Fulbright recipients.
            </p>
          </div>

          <a
            href="#guides"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-900 hover:text-primary-600 group cursor-pointer"
          >
            <span>Browse all articles</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-normal text-slate-700 shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-normal">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-base font-normal text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-normal line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read CTA */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-normal text-slate-400 truncate max-w-[170px]">
                  {article.author}
                </span>

                <span className="text-xs font-medium text-slate-900 group-hover:text-primary-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal preview */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-normal text-slate-400 uppercase tracking-wider">
                    {selectedArticle.category} • {selectedArticle.readTime}
                  </span>
                  <h3 className="text-xl font-light text-slate-900 mt-1">
                    {selectedArticle.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 font-normal space-y-1.5">
                <p>
                  <span className="text-slate-400">Author:</span> {selectedArticle.author}
                </p>
                <p>
                  <span className="text-slate-400">Published:</span> {selectedArticle.date}
                </p>
              </div>

              <div className="text-sm text-slate-600 font-normal space-y-3 leading-relaxed">
                <p>{selectedArticle.excerpt}</p>
                <p className="text-xs text-slate-400 italic">
                  Full downloadable checklist, SOP sample templates, and
                  professor outreach cold-email scripts are available inside the
                  BidyaGo Scholar portal.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="flex-1 py-2.5 text-xs font-normal text-slate-600 hover:bg-slate-100 rounded-full cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert('Sample SOP & Checklist downloaded!');
                    setSelectedArticle(null);
                  }}
                  className="flex-1 py-2.5 text-xs font-normal text-white bg-slate-900 hover:bg-[#4b37df] rounded-full transition-colors cursor-pointer"
                >
                  Download Free Template
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
