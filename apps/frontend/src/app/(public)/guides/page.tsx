'use client';

import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { ArrowRight } from 'lucide-react';

const GUIDES = [
  {
    title: 'MEXT Japan: Complete Embassy Application Walkthrough',
    category: 'Application Guide',
    readTime: '7 min read',
    description: 'Everything you need to know about preparing research plans, Japanese embassy exams in Kathmandu, and securing university acceptance letters.',
    link: '#',
  },
  {
    title: 'How to Write a Winning Chevening Leadership Essay',
    category: 'Essay Strategy',
    readTime: '9 min read',
    description: 'Deconstructing the 4 Chevening essay pillars: leadership, networking, studying in the UK, and long-term career plan upon returning to Nepal.',
    link: '#',
  },
  {
    title: 'Australia Awards: Development Impact & Re-entry Plans',
    category: 'Scholarship Guide',
    readTime: '6 min read',
    description: 'Formulating a convincing case that aligns your proposed Australian degree with Nepal’s national development priorities.',
    link: '#',
  },
  {
    title: 'Global Korea Scholarship (GKS): NIIED Guidelines Explained',
    category: 'Government Funding',
    readTime: '8 min read',
    description: 'Detailed instructions on GPA conversion, required notarizations, apostille verification, and Korean language foundation periods.',
    link: '#',
  },
  {
    title: 'Erasmus Mundus: Applying to Multiple European Consortia',
    category: 'EU Scholarships',
    readTime: '10 min read',
    description: 'How to maximize your application chances across up to 3 joint European master programmes with full mobility grants.',
    link: '#',
  },
  {
    title: 'Understanding DAAD EPOS & Helmut-Schmidt Programmes',
    category: 'Germany Guide',
    readTime: '6 min read',
    description: 'Navigating public university requirements in Germany, 2 years of professional work experience verification, and language prerequisites.',
    link: '#',
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
              Resources & Insights
            </span>
            <h1 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Scholarship Guides & Application Advice
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-normal max-w-2xl">
              Authentic step-by-step guides written to demystify complex government application processes and interview milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUIDES.map((guide) => (
              <div
                key={guide.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#4b37df] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                      {guide.category}
                    </span>
                    <span className="text-xs text-slate-400">{guide.readTime}</span>
                  </div>

                  <h3 className="text-base font-medium text-slate-900 leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {guide.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-900 hover:text-[#4b37df] transition-colors cursor-pointer">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
