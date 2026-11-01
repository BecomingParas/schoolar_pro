import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ExternalLink,
  FileCheck2,
} from 'lucide-react';

export default function VerificationTrustSection() {
  const trustPillars = [
    {
      title: 'Official Provider Sourcing',
      description:
        'Every opportunity is cataloged directly from embassy cultural attachés, national education ministries (e.g. MEXT, DFAT, NIIED), and university registrar portals.',
      icon: FileCheck2,
    },
    {
      title: 'Direct External Applications',
      description:
        'Zero application fees, zero hidden markups, and zero paid middlemen. BidyaGo directs students straight to official external application systems.',
      icon: ExternalLink,
    },
    {
      title: 'Student Privacy & Explicit Consent',
      description:
        'Students retain total control over their profile and documents. Consultancies and universities cannot access student data without explicit consent.',
      icon: Lock,
    },
    {
      title: 'Regular Verification Audits',
      description:
        'Transparent cycle verification dates ensure students never waste time preparing dossiers for discontinued or expired grant cycles.',
      icon: ShieldCheck,
    },
  ];

  const officialSources = [
    { name: 'MEXT Japan', logo: '🇯🇵 Ministry of Education (Monbukagakusho)' },
    { name: 'British Council', logo: '🇬🇧 British Council / Chevening' },
    { name: 'Australia Awards', logo: '🇦🇺 Australian Govt. Dept. of Foreign Affairs' },
    { name: 'NIIED Korea', logo: '🇰🇷 Global Korea Scholarship (GKS)' },
    { name: 'Erasmus+ EU', logo: '🇪🇺 European Commission Erasmus+' },
    { name: 'DAAD Germany', logo: '🇩🇪 German Academic Exchange' },
  ];

  return (
    <section id="trust-verification" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block mb-2">
            Integrity First
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
            Official Verification & Student Safety
          </h2>
          <p className="mt-2 text-base text-slate-500 font-normal">
            BidyaGo was built to eliminate fake scholarship scams and predatory
            agencies. Here is how we guarantee student peace of mind.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <Icon className="w-5 h-5 text-slate-500 mb-3" />
                  <h3 className="text-base font-normal text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-normal">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Certified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Data Source Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80">
          <p className="text-center text-xs font-normal text-slate-400 uppercase tracking-wider mb-6">
            Cataloged & Cross-Referenced from Official Diplomatic & University Registries
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            {officialSources.map((source, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center"
              >
                <span className="text-xs font-normal text-slate-800">
                  {source.name}
                </span>
                <span className="text-[10px] text-slate-400 font-normal mt-0.5 line-clamp-1">
                  {source.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
