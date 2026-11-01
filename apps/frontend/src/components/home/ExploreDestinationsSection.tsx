'use client';

import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export interface Destination {
  id: string;
  country: string;
  flag: string;
  totalFunding: string;
  scholarshipCount: string;
  popularGrant: string;
  avgLivingCost: string;
  workWhileStudying: string;
  intakeFocus: string;
  tag: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'japan',
    country: 'Japan',
    flag: '🇯🇵',
    totalFunding: 'MEXT & University Grants',
    scholarshipCount: 'Embassy & University Tracks',
    popularGrant: 'MEXT Research & Undergraduate',
    avgLivingCost: '¥80,000 - ¥130,000 / mo',
    workWhileStudying: '28 hrs/week during terms',
    intakeFocus: 'April & October Intakes',
    tag: 'Flagship MEXT Full Ride',
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    totalFunding: 'Australia Awards & RTP',
    scholarshipCount: 'Government & Institutional',
    popularGrant: 'Australia Awards & Destination Australia',
    avgLivingCost: 'AUD $1,400 - $1,900 / mo',
    workWhileStudying: '48 hrs/fortnight permitted',
    intakeFocus: 'Feb & July Semesters',
    tag: 'Post-Study Work Pathways',
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    totalFunding: 'Chevening & Commonwealth',
    scholarshipCount: 'Merit & Need-Based Grants',
    popularGrant: 'Chevening, Commonwealth & GREAT',
    avgLivingCost: '£900 - £1,400 / mo',
    workWhileStudying: '20 hrs/week permitted',
    intakeFocus: 'September/October Intake',
    tag: '1-Year Master Degrees',
  },
  {
    id: 'korea',
    country: 'South Korea',
    flag: '🇰🇷',
    totalFunding: 'GKS Full Government Aid',
    scholarshipCount: 'Embassy & University Quotas',
    popularGrant: 'Global Korea Scholarship (GKS)',
    avgLivingCost: '₩800,000 - ₩1,200,000 / mo',
    workWhileStudying: '20-25 hrs/week permitted',
    intakeFocus: 'March & September Intakes',
    tag: '100% Fully Funded Options',
  },
  {
    id: 'europe',
    country: 'Germany & Europe (Erasmus+)',
    flag: '🇪🇺',
    totalFunding: 'Erasmus Mundus & DAAD',
    scholarshipCount: 'Multi-Country Consortiums',
    popularGrant: 'Erasmus Mundus Joint Masters & DAAD',
    avgLivingCost: '€850 - €1,150 / mo',
    workWhileStudying: '140 full days/yr allowed',
    intakeFocus: 'Winter & Summer Semesters',
    tag: 'Tuition-Free & Joint Degrees',
  },
  {
    id: 'north-america',
    country: 'USA & Canada',
    flag: '🇺🇸',
    totalFunding: 'Assistantships & Fellowships',
    scholarshipCount: 'GRA/GTA & Need-Blind Aid',
    popularGrant: 'Fulbright, Graduate Assistantships',
    avgLivingCost: '$1,000 - $1,700 / mo',
    workWhileStudying: '20 hrs/week on-campus',
    intakeFocus: 'Fall & Spring Semesters',
    tag: 'Premier Research Hubs',
  },
];

interface ExploreDestinationsSectionProps {
  onSelectCountry?: (country: string) => void;
}

export default function ExploreDestinationsSection({
  onSelectCountry,
}: ExploreDestinationsSectionProps) {
  const handleDestinationClick = (country: string) => {
    if (onSelectCountry) {
      onSelectCountry(country);
    }
    const el = document.getElementById('scholarships');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block mb-2">
              Global Hubs
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
              Explore Top Study Destinations
            </h2>
            <p className="mt-2 text-base text-slate-500 font-normal max-w-xl">
              Compare average living expenses, work-permit policies, and
              verified scholarship pools across premier destination countries.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleDestinationClick('all')}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-900 hover:text-primary-600 group cursor-pointer"
          >
            <span>View all destination grants</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleDestinationClick(dest.country)}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Flag & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" role="img" aria-label={dest.country}>
                      {dest.flag}
                    </span>
                    <div>
                      <h3 className="text-base font-normal text-slate-900 group-hover:text-primary-600 transition-colors">
                        {dest.country}
                      </h3>
                      <p className="text-xs text-slate-400 font-normal">
                        {dest.scholarshipCount}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-normal px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200">
                    {dest.tag}
                  </span>
                </div>

                {/* Minimal Funding Row */}
                <div className="my-4 py-3 border-y border-slate-100 flex items-baseline justify-between">
                  <span className="text-xs font-normal text-slate-400">
                    Available Funding Pool
                  </span>
                  <span className="text-base font-light text-slate-900 tracking-tight">
                    {dest.totalFunding}
                  </span>
                </div>

                {/* Key Metrics */}
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center justify-between py-1 border-b border-slate-100/60">
                    <span className="text-slate-400 font-normal">Top Program:</span>
                    <span className="font-normal text-slate-700 text-right truncate max-w-[190px]">
                      {dest.popularGrant}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-100/60">
                    <span className="text-slate-400 font-normal">Monthly Living:</span>
                    <span className="font-normal text-slate-700">
                      {dest.avgLivingCost}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400 font-normal">Work Rights:</span>
                    <span className="font-normal text-slate-700">
                      {dest.workWhileStudying}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-normal">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{dest.intakeFocus}</span>
                </div>
                <span className="text-xs font-medium text-slate-900 group-hover:text-primary-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Explore Grants</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
