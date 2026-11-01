'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import {
  Search,
  Filter,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

interface ScholarshipItem {
  id: string;
  title: string;
  provider: string;
  country: string;
  flag: string;
  level: string;
  amount: string;
  fundingType: string;
  deadline: string;
  description: string;
  officialUrl: string;
}

const ALL_SCHOLARSHIPS: ScholarshipItem[] = [
  {
    id: 'mext-japan',
    title: 'MEXT Japanese Government Research & Undergraduate Scholarship',
    provider: 'Ministry of Education, Culture, Sports, Science and Technology (MEXT)',
    country: 'Japan',
    flag: '🇯🇵',
    level: 'Undergraduate / Master’s / PhD',
    amount: '100% Tuition + ¥143,000–¥145,000/mo stipend + roundtrip flights',
    fundingType: 'Full Ride (Government)',
    deadline: 'May 2027 (Embassy Track)',
    description: 'Japan’s premier scholarship for international scholars with zero tuition fees and monthly living allowances.',
    officialUrl: 'https://www.np.emb-japan.go.jp/itpr_en/mext.html',
  },
  {
    id: 'chevening-uk',
    title: 'Chevening UK Master’s Scholarship',
    provider: 'Foreign, Commonwealth & Development Office (FCDO)',
    country: 'United Kingdom',
    flag: '🇬🇧',
    level: '1-Year Taught Master’s',
    amount: 'Full tuition + monthly living stipend + flights to UK',
    fundingType: 'Full Ride (Government)',
    deadline: 'Early November annually',
    description: 'UK government’s flagship global scholarship program for emerging leaders to pursue a one-year Master’s degree.',
    officialUrl: 'https://www.chevening.org/scholarship/nepal/',
  },
  {
    id: 'australia-awards',
    title: 'Australia Awards Scholarships',
    provider: 'Department of Foreign Affairs and Trade (DFAT)',
    country: 'Australia',
    flag: '🇦🇺',
    level: 'Master’s Degree',
    amount: 'Full tuition, return airfare, establishment allowance, contribution to living expenses',
    fundingType: 'Full Ride (Government)',
    deadline: 'April 30 annually',
    description: 'Prestigious awards for Nepali citizens to contribute to development priorities upon returning to Nepal.',
    officialUrl: 'https://www.australiaawardsnepal.org/',
  },
  {
    id: 'gks-korea',
    title: 'Global Korea Scholarship (GKS / KGSP)',
    provider: 'National Institute for International Education (NIIED)',
    country: 'South Korea',
    flag: '🇰🇷',
    level: 'Undergraduate & Graduate',
    amount: '100% tuition waiver, airfare, monthly stipend (1,000,000 KRW), Korean language training',
    fundingType: 'Full Ride (Government)',
    deadline: 'September (Undergrad) / March (Grad)',
    description: 'South Korean government program aimed at promoting international educational exchanges.',
    officialUrl: 'https://www.studyinkorea.go.kr',
  },
  {
    id: 'erasmus-mundus',
    title: 'Erasmus Mundus Joint Master Degrees (EMJMD)',
    provider: 'European Commission (European Union)',
    country: 'European Union',
    flag: '🇪🇺',
    level: 'Joint Master’s Degrees (2-Year)',
    amount: '100% participation costs, travel allowance + €1,400 monthly living allowance',
    fundingType: 'Full Ride (EU Consortium)',
    deadline: 'December – February annually',
    description: 'Study across at least two European countries with full EU consortium grant support.',
    officialUrl: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en',
  },
  {
    id: 'daad-germany',
    title: 'DAAD Helmut-Schmidt-Programme & Development-Related Master’s (EPOS)',
    provider: 'German Academic Exchange Service (DAAD)',
    country: 'Germany',
    flag: '🇩🇪',
    level: 'Master’s / PhD',
    amount: '€934/month stipend, travel subsidy, health insurance + tuition waiver at public universities',
    fundingType: 'Full Funding (Stipend + Waiver)',
    deadline: 'August – October depending on programme',
    description: 'Support for professionals from developing countries pursuing postgraduate education at renowned German universities.',
    officialUrl: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
  },
];

export default function ScholarshipsPage() {
  const [query, setQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');

  const filtered = ALL_SCHOLARSHIPS.filter((s) => {
    const matchesQuery =
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.description.toLowerCase().includes(query.toLowerCase()) ||
      s.country.toLowerCase().includes(query.toLowerCase());
    const matchesCountry =
      selectedCountry === 'all' || s.country.toLowerCase().includes(selectedCountry.toLowerCase());
    return matchesQuery && matchesCountry;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
              Global Scholarship Database
            </span>
            <h1 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Explore Verified Scholarships
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-normal max-w-2xl">
              100% free core discovery. Every grant links directly to official embassy and university application sources.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by scholarship title, country, or provider..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:outline-hidden focus:border-slate-400"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:outline-hidden cursor-pointer"
              >
                <option value="all">All Destinations</option>
                <option value="japan">Japan 🇯🇵</option>
                <option value="united kingdom">United Kingdom 🇬🇧</option>
                <option value="australia">Australia 🇦🇺</option>
                <option value="south korea">South Korea 🇰🇷</option>
                <option value="european union">European Union 🇪🇺</option>
                <option value="germany">Germany 🇩🇪</option>
              </select>
            </div>
          </div>

          {/* Scholarships Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-normal text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                      <span>{item.flag}</span>
                      <span>{item.country}</span>
                    </span>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      {item.fundingType}
                    </span>
                  </div>

                  <h3 className="text-base font-medium text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-slate-400">Coverage:</span>
                      <span className="font-medium text-slate-800 text-right">{item.amount}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span className="text-slate-400">Deadline:</span>
                      <span className="font-medium text-slate-800">{item.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={item.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs font-medium transition-colors"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href={`/dashboard?save=${item.id}`}
                    className="text-xs font-normal text-slate-500 hover:text-slate-900"
                  >
                    Save to tracker →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Educational Disclaimer */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs text-slate-500">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              BidyaGo does not award scholarships directly or collect application fees. All application links route to officially verified embassy, ministry, and university financial aid portals.
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
