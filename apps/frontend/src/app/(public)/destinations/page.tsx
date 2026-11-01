'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import {
  Calendar,
  Briefcase,
  Coins,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const DESTINATIONS = [
  {
    country: 'Japan',
    flag: '🇯🇵',
    hero: 'World-class universities, English-taught programmes, and MEXT 100% full-ride funding.',
    intakeFocus: 'April & September Intakes',
    livingCost: '¥80,000 – ¥120,000 / month',
    workPermit: '28 hrs/week part-time permitted',
    topScholarships: ['MEXT Japanese Government', 'JASSO Honors', 'ADB-Japan'],
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    hero: '1-year master’s programmes, globally recognized research, and the prestigious Chevening Scholarship.',
    intakeFocus: 'September/October & January Intakes',
    livingCost: '£800 – £1,300 / month',
    workPermit: '20 hrs/week term-time + 2-year Graduate Route',
    topScholarships: ['Chevening Scholarships', 'Commonwealth', 'GREAT Scholarships'],
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    hero: 'Top Group of Eight universities, strong student safety ratings, and Australia Awards support.',
    intakeFocus: 'Semester 1 (Feb/Mar) & Semester 2 (Jul/Aug)',
    livingCost: 'AUD $1,800 – $2,500 / month',
    workPermit: '48 hrs per fortnight while studying',
    topScholarships: ['Australia Awards', 'Destination Australia', 'RTP Research'],
  },
  {
    country: 'South Korea',
    flag: '🇰🇷',
    hero: 'High-tech academic infrastructure, cutting-edge STEM laboratories, and the Global Korea Scholarship (GKS).',
    intakeFocus: 'Spring (March) & Fall (September)',
    livingCost: 'KRW 800,000 – 1,200,000 / month',
    workPermit: 'Part-time permitted with university & immigration endorsement',
    topScholarships: ['Global Korea Scholarship (GKS)', 'KOICA Fellowships', 'SNU Global'],
  },
  {
    country: 'Germany & Europe',
    flag: '🇩🇪',
    hero: 'Tuition-free public universities, Erasmus Mundus consortia, and generous DAAD research stipends.',
    intakeFocus: 'Winter Semester (Oct) & Summer Semester (Apr)',
    livingCost: '€850 – €1,100 / month',
    workPermit: '140 full days or 280 half days / year',
    topScholarships: ['DAAD EPOS / Helmut-Schmidt', 'Erasmus Mundus (EMJMD)', 'Deutschlandstipendium'],
  },
  {
    country: 'United States & Canada',
    flag: '🇺🇸',
    hero: 'Global research powerhouses, comprehensive campus financial aid, and teaching assistantships.',
    intakeFocus: 'Fall (August/Sept) & Spring (Jan)',
    livingCost: '$1,200 – $2,000 / month',
    workPermit: 'On-campus 20 hrs/week; OPT/CPT work authorization',
    topScholarships: ['Fulbright Foreign Student', 'University Fellowships', 'Canada Vanier'],
  },
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
              Study Abroad Hubs
            </span>
            <h1 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Study Destinations for Nepali Scholars
            </h1>
            <p className="text-sm sm:text-base text-slate-500 font-normal max-w-2xl">
              Compare intake cycles, realistic living expenses, work-study policies, and flagship government grants across top destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map((dest) => (
              <div
                key={dest.country}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{dest.flag}</span>
                    <h3 className="text-lg font-medium text-slate-900">{dest.country}</h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {dest.hero}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{dest.intakeFocus}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Coins className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{dest.livingCost}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{dest.workPermit}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-normal text-slate-400 uppercase block mb-1.5">
                      Top Scholarships
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.topScholarships.map((sch) => (
                        <span
                          key={sch}
                          className="text-[11px] font-normal text-slate-700 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100"
                        >
                          {sch}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`/scholarships?country=${encodeURIComponent(dest.country)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-900 hover:text-[#4b37df] transition-colors"
                  >
                    <span>View {dest.country} Scholarships</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs text-slate-500">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              BidyaGo publishes verified immigration and educational policies. We never guarantee visa issuance or admission outcomes.
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
