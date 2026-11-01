import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Discover & Match Free',
      description:
        'Explore verified international scholarships by country, study level, and funding type. Access requirements and official links with zero paywalls.',
      perks: ['100% Free scholarship discovery', 'Degree & destination filters', 'Official source verification'],
    },
    {
      step: '02',
      title: 'Review Criteria & Prepare',
      description:
        'Check complete funding breakdowns (tuition, stipends, flights), review required academic documents, and prepare your application dossier.',
      perks: ['Transparent stipend details', 'Document checklists', 'Deadline reminders'],
    },
    {
      step: '03',
      title: 'Apply at Official Portals & Track',
      description:
        'Submit your application directly on the official embassy, government, or university website, while tracking deadlines inside BidyaGo.',
      perks: ['Direct official external routes', 'Application milestone tracking', 'Accredited advisor guidance'],
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block mb-2">
            Application Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
            How BidyaGo Works
          </h2>
          <p className="mt-2 text-base text-slate-500 font-normal">
            A clear, transparent roadmap from scholarship discovery to official application submission.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-light text-slate-300 group-hover:text-primary-600 transition-colors mb-4">
                  {item.step}
                </div>

                <h3 className="text-lg font-normal text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 font-normal leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bullet checklist */}
              <div className="space-y-2 pt-4 border-t border-slate-100">
                {item.perks.map((perk, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-center gap-2 text-xs text-slate-600 font-normal"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-normal text-slate-900">
              Need personalized assistance or grant consulting?
            </h4>
            <p className="text-xs text-slate-500 font-normal mt-0.5">
              Join thousands of scholars who unlocked full tuition funding this cycle.
            </p>
          </div>
          <Link
            href="#scholarships"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-primary-600 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer shrink-0"
          >
            <span>Start Matching Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
