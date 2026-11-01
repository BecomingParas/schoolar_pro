'use client';

import React, { useState } from 'react';
import {
  Sliders,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface PersonalizedMatchingProps {
  onMatchComplete?: (degree: string, country: string) => void;
}

export default function PersonalizedMatchingSection({
  onMatchComplete,
}: PersonalizedMatchingProps) {
  const [level, setLevel] = useState('masters');
  const [region, setRegion] = useState('usa');
  const [gpa, setGpa] = useState('high');
  const [fundingNeed, setFundingNeed] = useState('full');

  // Dynamic calculation for demonstration
  const getEstimatedMatches = () => {
    let count = 184;
    let maxVal = '$75,000';
    if (level === 'phd') {
      count = 92;
      maxVal = '$85,000/yr (Full Ride)';
    } else if (level === 'undergrad') {
      count = 210;
      maxVal = '$40,000/yr';
    }
    if (gpa === 'flexible') count = Math.round(count * 0.7);
    return { count, maxVal };
  };

  const { count, maxVal } = getEstimatedMatches();

  const handleStartMatching = () => {
    if (onMatchComplete) {
      onMatchComplete(level, region);
    }
    const el = document.getElementById('scholarships');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="personalized-matching" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
              Precision Matching
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight leading-tight">
              Personalized Matching in Seconds
            </h2>

            <p className="text-base text-slate-500 font-normal leading-relaxed">
              Don't manually search through 15,000 grants. BidyaGo's smart
              matching matrix cross-references your target degree, GPA, country
              of origin, and financial goals against official donor criteria.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-normal text-slate-900">
                    Profile-Based Eligibility Guidance
                  </h4>
                  <p className="text-xs text-slate-500 font-normal">
                    Filter opportunities matching your degree level, GPA, destination goals,
                    and academic discipline.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-normal text-slate-900">
                    Full Tuition & Stipend Breakdown
                  </h4>
                  <p className="text-xs text-slate-500 font-normal">
                    Clearly distinguish 100% full rides (tuition, living stipend, flights) from
                    partial waivers and assistantships.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-normal text-slate-900">
                    Direct Official Portals
                  </h4>
                  <p className="text-xs text-slate-500 font-normal">
                    Direct links to verified university financial aid and embassy portal pages
                    with zero middleman fees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Match Simulator Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <Sliders className="w-4 h-4 text-slate-500" />
                  <div>
                    <h3 className="text-base font-normal text-slate-900">
                      Scholarship Match Simulator
                    </h3>
                    <p className="text-xs text-slate-400 font-normal">
                      Select your criteria to see real-time matching grants
                    </p>
                  </div>
                </div>
                <span className="text-xs font-normal text-slate-500 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200">
                  Live Calculator
                </span>
              </div>

              {/* Form Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Degree Level */}
                <div className="space-y-1.5">
                  <label className="text-xs font-normal text-slate-500">
                    Study Level
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden cursor-pointer"
                  >
                    <option value="undergrad">Undergraduate (Bachelor’s)</option>
                    <option value="masters">Master’s / Graduate</option>
                    <option value="phd">PhD / Doctoral</option>
                    <option value="diploma">Diploma / Certificate</option>
                  </select>
                </div>

                {/* Preferred Destination */}
                <div className="space-y-1.5">
                  <label className="text-xs font-normal text-slate-500">
                    Target Destination
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden cursor-pointer"
                  >
                    <option value="usa">United States 🇺🇸</option>
                    <option value="uk">United Kingdom 🇬🇧</option>
                    <option value="canada">Canada 🇨🇦</option>
                    <option value="germany">Germany & Europe 🇩🇪</option>
                    <option value="australia">Australia 🇦🇺</option>
                    <option value="asia">Japan & South Korea 🇯🇵</option>
                  </select>
                </div>

                {/* Academic Standing */}
                <div className="space-y-1.5">
                  <label className="text-xs font-normal text-slate-500">
                    Academic Standing (GPA / Grade)
                  </label>
                  <select
                    value={gpa}
                    onChange={(e) => setGpa(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden cursor-pointer"
                  >
                    <option value="high">High Distinction (GPA 3.6 - 4.0 / 80%+)</option>
                    <option value="mid">Solid Merit (GPA 3.0 - 3.5 / 65-79%)</option>
                    <option value="flexible">Flexible / Any GPA Accepted</option>
                  </select>
                </div>

                {/* Funding Expectation */}
                <div className="space-y-1.5">
                  <label className="text-xs font-normal text-slate-500">
                    Funding Objective
                  </label>
                  <select
                    value={fundingNeed}
                    onChange={(e) => setFundingNeed(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden cursor-pointer"
                  >
                    <option value="full">100% Fully Funded (Tuition + Stipend)</option>
                    <option value="tuition">Tuition Waiver Only</option>
                    <option value="partial">Partial Merit Scholarship ($10k-$25k)</option>
                  </select>
                </div>
              </div>

              {/* Minimalist Result Banner */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-normal text-slate-400 uppercase tracking-wider block">
                    Calculated Matching Grants
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl font-light text-slate-900 tracking-tight">{count}</span>
                    <span className="text-xs font-normal text-slate-500">
                      Scholarships Available
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 font-normal">
                    Potential Max Award: <span className="text-slate-800 font-medium">{maxVal}</span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleStartMatching}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-900 hover:bg-primary-600 text-white text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>View Matched Grants</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-slate-400 font-normal text-center pt-1">
                * Note: Matching results are educational guidance. Final eligibility and scholarship selection are determined solely by official granting institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
