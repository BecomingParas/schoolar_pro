'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

export default function CtaSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-slate-900 text-white p-8 sm:p-14 lg:p-16 overflow-hidden">
          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-normal text-primary-300 uppercase tracking-widest block">
              Start Free
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              Ready to Explore International Scholarships?
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto font-normal">
              Discover verified scholarships, review eligibility requirements, and plan your
              applications to institutions worldwide—completely free for all students.
            </p>

            {/* Email / Match Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 max-w-md mx-auto sm:flex items-center gap-2 bg-white/10 p-1.5 rounded-full border border-white/20"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your student email..."
                  required
                  className="w-full pl-11 pr-3 py-2.5 text-xs sm:text-sm rounded-full bg-transparent text-white placeholder-white/50 focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto mt-2 sm:mt-0 px-6 py-2.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {submitted && (
              <div className="inline-flex items-center gap-2 text-xs font-normal text-emerald-300 bg-white/10 px-4 py-2 rounded-full animate-fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Thank you! Your matching dashboard link is on its way.</span>
              </div>
            )}

            {/* Micro assurances */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-normal">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% Free core discovery
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Official provider links
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Student data privacy guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
