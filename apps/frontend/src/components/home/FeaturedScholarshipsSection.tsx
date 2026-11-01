'use client';

import React, { useState } from 'react';
import {
  Calendar,
  Bookmark,
  ExternalLink,
  Filter,
} from 'lucide-react';

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  country: string;
  flag: string;
  amount: string;
  amountType: 'Full' | 'Partial' | 'Stipend';
  degree: string[];
  field: string;
  category: 'STEM' | 'Business' | 'Medicine' | 'Humanities' | 'Need-Based';
  deadline: string;
  daysLeft: number;
  officialUrl: string;
  lastVerified: string;
  featured?: boolean;
}

export const INITIAL_SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'sch-1',
    title: 'MEXT Japanese Government Research Scholarship',
    provider: 'Ministry of Education, Culture, Sports & Technology (MEXT)',
    country: 'Japan',
    flag: '🇯🇵',
    amount: '100% Tuition + 144,000 JPY/mo',
    amountType: 'Full',
    degree: ['Masters', 'PhD'],
    field: 'All Academic Fields',
    category: 'STEM',
    deadline: 'May 20, 2027',
    daysLeft: 180,
    officialUrl: 'https://www.np.emb-japan.go.jp',
    lastVerified: 'Verified Oct 2026',
    featured: true,
  },
  {
    id: 'sch-2',
    title: 'Chevening International Scholarships (UK)',
    provider: 'Foreign, Commonwealth & Development Office (FCDO)',
    country: 'United Kingdom',
    flag: '🇬🇧',
    amount: 'Full Tuition + £1,400/mo Stipend',
    amountType: 'Full',
    degree: ['Masters'],
    field: 'All 1-Year Master Disciplines',
    category: 'Business',
    deadline: 'Nov 05, 2026',
    daysLeft: 4,
    officialUrl: 'https://www.chevening.org/scholarship/nepal',
    lastVerified: 'Verified Oct 2026',
    featured: true,
  },
  {
    id: 'sch-3',
    title: 'Australia Awards Scholarships',
    provider: 'Department of Foreign Affairs & Trade (DFAT)',
    country: 'Australia',
    flag: '🇦🇺',
    amount: 'Full Tuition + Return Airfare + OSHC',
    amountType: 'Full',
    degree: ['Masters'],
    field: 'Priority Development Disciplines',
    category: 'Humanities',
    deadline: 'Apr 30, 2027',
    daysLeft: 160,
    officialUrl: 'https://www.dfat.gov.au/people-to-people/australia-awards',
    lastVerified: 'Verified Oct 2026',
    featured: true,
  },
  {
    id: 'sch-4',
    title: 'Global Korea Scholarship (GKS - Embassy Track)',
    provider: 'National Institute for International Education (NIIED)',
    country: 'South Korea',
    flag: '🇰🇷',
    amount: '100% Tuition + 1,000,000 KRW/mo',
    amountType: 'Full',
    degree: ['Undergraduate', 'Masters', 'PhD'],
    field: 'Engineering, Sciences & Humanities',
    category: 'STEM',
    deadline: 'Mar 15, 2027',
    daysLeft: 114,
    officialUrl: 'https://www.studyinkorea.go.kr',
    lastVerified: 'Verified Oct 2026',
    featured: true,
  },
  {
    id: 'sch-5',
    title: 'Erasmus Mundus Joint Master Degrees (EMJM)',
    provider: 'European Commission (Erasmus+ Programme)',
    country: 'European Union (Multi-Country)',
    flag: '🇪🇺',
    amount: 'Full Participation + €1,400/mo',
    amountType: 'Full',
    degree: ['Masters'],
    field: 'Interdisciplinary Programmes',
    category: 'Need-Based',
    deadline: 'Jan 15, 2027',
    daysLeft: 75,
    officialUrl: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus_en',
    lastVerified: 'Verified Oct 2026',
    featured: true,
  },
  {
    id: 'sch-6',
    title: 'DAAD Helmut-Schmidt Master’s Scholarships',
    provider: 'German Academic Exchange Service (DAAD)',
    country: 'Germany',
    flag: '🇩🇪',
    amount: '€934/mo + Tuition Waiver + Insurance',
    amountType: 'Full',
    degree: ['Masters'],
    field: 'Public Policy, Governance & Social Sciences',
    category: 'Medicine',
    deadline: 'Jul 31, 2027',
    daysLeft: 250,
    officialUrl: 'https://www.daad.de',
    lastVerified: 'Verified Oct 2026',
  },
];

interface FeaturedScholarshipsSectionProps {
  searchQuery?: string;
  selectedDegree?: string;
}

export default function FeaturedScholarshipsSection({
  searchQuery = '',
  selectedDegree = 'all',
}: FeaturedScholarshipsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set(['sch-1']));
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);

  const categories = [
    'All',
    'STEM',
    'Business',
    'Medicine',
    'Humanities',
    'Need-Based',
  ];

  const toggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filtered = INITIAL_SCHOLARSHIPS.filter((sch) => {
    // Category filter
    if (activeCategory !== 'All' && sch.category !== activeCategory) {
      return false;
    }
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        sch.title.toLowerCase().includes(q) ||
        sch.provider.toLowerCase().includes(q) ||
        sch.field.toLowerCase().includes(q) ||
        sch.country.toLowerCase().includes(q);
      if (!match) return false;
    }
    // Degree filter
    if (selectedDegree !== 'all') {
      const matchDegree = sch.degree.some((d) =>
        d.toLowerCase().includes(selectedDegree.toLowerCase())
      );
      if (!matchDegree) return false;
    }
    return true;
  });

  return (
    <section id="scholarships" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block mb-2">
              Verified Directory
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
              Featured Scholarships & Fellowships
            </h2>
            <p className="mt-2 text-base text-slate-500 font-normal max-w-xl">
              Verified programs offering direct financial backing, tuition
              coverage, and living stipends for top candidates.
            </p>
          </div>

          {/* Minimalist Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scholarships Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => {
              const isSaved = savedIds.has(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top row: Flag, Provider, Bookmark */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl" role="img" aria-label={item.country}>
                          {item.flag}
                        </span>
                        <div>
                          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                            {item.provider}
                          </p>
                          <p className="text-[11px] text-slate-500 font-normal">
                            {item.country}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleSave(item.id)}
                        className={`p-2 rounded-xl transition-colors cursor-pointer ${
                          isSaved
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-slate-300 hover:text-slate-600 hover:bg-slate-50'
                        }`}
                        title={isSaved ? 'Remove Bookmark' : 'Save Scholarship'}
                        aria-label="Bookmark scholarship"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${isSaved ? 'fill-primary-600' : ''}`}
                        />
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-normal text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Field */}
                    <p className="mt-1.5 text-xs text-slate-500 font-normal">
                      Field: <span className="text-slate-700">{item.field}</span>
                    </p>

                    {/* Clean Minimal Amount Row */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                      <div>
                        <span className="text-[11px] font-normal text-slate-400 block">
                          Award Amount
                        </span>
                        <span className="text-xl font-light text-slate-900 tracking-tight">
                          {item.amount}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-slate-500">
                        {item.amountType} Funding
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.degree.map((deg, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-normal"
                        >
                          {deg}
                        </span>
                      ))}
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-700 text-xs font-normal">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom: Deadline & CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-normal">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>
                        Due <span className="text-slate-700 font-medium">{item.deadline}</span>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedScholarship(item)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 hover:bg-primary-600 text-white text-xs font-medium transition-colors cursor-pointer"
                    >
                      <span>Apply</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center mb-4">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="text-base font-normal text-slate-900">
              No matching scholarships found
            </h3>
            <p className="mt-1 text-xs text-slate-500 font-normal">
              Try adjusting your keyword, study level, or clearing category
              filters to view all available funding options.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="mt-5 px-5 py-2 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Modal for Application Details */}
        {selectedScholarship && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {selectedScholarship.provider}
                  </span>
                  <h3 className="text-xl font-normal text-slate-900 mt-1">
                    {selectedScholarship.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedScholarship(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-normal text-slate-400 block">
                  Total Award Value
                </span>
                <p className="text-2xl font-light text-slate-900 tracking-tight">
                  {selectedScholarship.amount}
                </p>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  Location: {selectedScholarship.flag} {selectedScholarship.country}
                </p>
              </div>

              <div className="space-y-2 text-sm text-slate-600 font-normal">
                <p>
                  <span className="text-slate-400">Eligible Degrees:</span>{' '}
                  {selectedScholarship.degree.join(', ')}
                </p>
                <p>
                  <span className="text-slate-400">Academic Track:</span> {selectedScholarship.field}
                </p>
                <p>
                  <span className="text-slate-400">Application Deadline:</span>{' '}
                  {selectedScholarship.deadline} ({selectedScholarship.daysLeft} days remaining)
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <span className="text-emerald-700 font-normal">
                    ✓ {selectedScholarship.lastVerified}
                  </span>
                  <span className="text-slate-400">
                    Application Route: Official External Portal
                  </span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 font-normal leading-relaxed">
                Applications for this programme are completed directly on the official
                issuing portal. BidyaGo provides verified criteria and deadline tracking free.
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedScholarship(null)}
                  className="flex-1 py-2.5 text-xs font-normal text-slate-600 hover:bg-slate-100 rounded-full cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={selectedScholarship.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 text-center text-xs font-normal text-white bg-slate-900 hover:bg-[#4b37df] rounded-full transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5"
                >
                  <span>Apply on Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-[10px] text-center text-slate-400 font-normal pt-1">
                BidyaGo does not award scholarships, guarantee admission, or charge application fees.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
