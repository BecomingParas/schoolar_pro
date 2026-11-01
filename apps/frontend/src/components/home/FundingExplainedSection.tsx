import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Award,
  HeartHandshake,
} from 'lucide-react';

export default function FundingExplainedSection() {
  const fundingTypes = [
    {
      title: 'Fully Funded (Full Ride)',
      badge: 'Most Coveted',
      description:
        'Covers 100% of academic tuition fees, monthly living allowances, accommodation, airfare, and comprehensive medical insurance.',
      tuitionCoverage: '100% Covered',
      stipend: '$1,000 - $2,200 / mo',
      flights: 'Round-trip airfare included',
      popularExamples: 'MEXT (Japan), GKS (Korea), Chevening (UK), Australia Awards, Erasmus Mundus',
      icon: Award,
    },
    {
      title: 'Graduate Assistantships (GRA/GTA)',
      badge: 'Master’s & PhD',
      description:
        'Departments waive your tuition and pay a monthly stipend in exchange for 15–20 hours/week conducting research or assisting professors.',
      tuitionCoverage: '100% Waived',
      stipend: 'Monthly research salary',
      flights: 'Usually student-covered',
      popularExamples: 'US & Canadian Public Research Universities (STEM/Engineering)',
      icon: Briefcase,
    },
    {
      title: 'Full Tuition Waiver',
      badge: 'High Availability',
      description:
        'The university absorbs 100% of course credits and academic fees. Students only need to finance personal room and board costs.',
      tuitionCoverage: '100% Tuition Waived',
      stipend: 'Self-funded or campus job',
      flights: 'Student-covered',
      popularExamples: 'German Public Universities, Nordic Programs, Dean’s Excellence Grants',
      icon: GraduationCap,
    },
    {
      title: 'Need-Based Financial Aid',
      badge: 'Income-Matched',
      description:
        'Financial packages determined by evaluating your family’s annual income and financial need via CSS Profile or institutional aid forms.',
      tuitionCoverage: 'Matched to Need',
      stipend: 'Varies by income bracket',
      flights: 'Often covered for low-income',
      popularExamples: 'Harvard, Yale, Princeton, Amherst, Dartmouth (Need-Blind)',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="funding-explained" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block mb-2">
            Funding Breakdown
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
            Scholarship Funding Types Explained
          </h2>
          <p className="mt-2 text-base text-slate-500 font-normal">
            Not all scholarships are created equal. Understand exactly what
            each grant covers before planning your budget.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fundingTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-5 h-5 text-slate-500" />
                      <h3 className="text-lg font-normal text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-xs font-normal px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Specs breakdown */}
                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600 font-normal">
                  <div className="flex items-center justify-between py-1 border-b border-slate-100/60">
                    <span className="text-slate-400">Tuition:</span>
                    <span className="text-slate-900 font-medium">
                      {item.tuitionCoverage}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-100/60">
                    <span className="text-slate-400">Living Allowance:</span>
                    <span className="text-slate-700">
                      {item.stipend}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-100/60">
                    <span className="text-slate-400">Airfare:</span>
                    <span className="text-slate-700">
                      {item.flights}
                    </span>
                  </div>
                  <div className="pt-2 text-slate-500">
                    <span className="text-slate-400 block mb-0.5">
                      Key Programs:
                    </span>
                    <span className="text-slate-700">{item.popularExamples}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
