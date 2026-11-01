'use client';

import React, { useState } from 'react';
import {
  GraduationCap,
  Users2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Mail,
  Building,
} from 'lucide-react';

export default function ForCollegesSection() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    country: 'United States',
    programsOffered: 'Undergraduate & Graduate',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setPartnerModalOpen(false);
    setSubmitted(false);
    setFormData({
      institutionName: '',
      contactPerson: '',
      email: '',
      country: 'United States',
      programsOffered: 'Undergraduate & Graduate',
    });
  };

  const benefits = [
    {
      icon: Users2,
      title: 'Global Talent Pipeline',
      description:
        'Connect your department scholarships and funded research openings directly with over 85,000 verified, high-achieving applicants worldwide.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Middleman Markups',
      description:
        'We never charge agency commissions or gatekeep student dossiers. Applications are channeled directly into your official admissions portal.',
    },
    {
      icon: GraduationCap,
      title: 'Targeted Program Visibility',
      description:
        'Promote tuition waivers, graduate research assistantships (GRA/GTA), and diversity grants to candidates matching your exact entry criteria.',
    },
  ];

  return (
    <section
      id="for-colleges"
      className="py-16 sm:py-24 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block mb-2">
              Institutional Network
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
              For Colleges & Universities
            </h2>
            <p className="mt-2 text-base text-slate-500 font-normal max-w-xl">
              Publish your institution’s scholarship programs and assistantships
              directly to qualified international students.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setPartnerModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs sm:text-sm font-normal transition-colors cursor-pointer shrink-0"
          >
            <span>Partner as a College</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Minimal Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-normal text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-normal">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Institutional Integration</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Options (Basic Free, Featured, Partner) */}
        <div className="mt-12 bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-normal text-slate-400 uppercase tracking-wider block">
                Institutional Partnership Options
              </span>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Educational institutions must submit verification documents before receiving an approved institutional profile.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPartnerModalOpen(true)}
              className="px-5 py-2 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs sm:text-sm font-normal transition-colors cursor-pointer shrink-0"
            >
              Register Your Institution
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <span className="text-xs text-slate-500 font-normal uppercase">Basic Institutional (Free)</span>
              <p className="text-lg font-light text-slate-900 tracking-tight">Verified Institutional Profile</p>
              <ul className="text-xs text-slate-500 font-normal space-y-1 pt-1">
                <li>• Official university & college profile</li>
                <li>• Publish bachelor's, master's & PhD offerings</li>
                <li>• Direct official external application URLs</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <span className="text-xs text-[#4b37df] font-normal uppercase">Featured Visibility (Proposed)</span>
              <p className="text-lg font-light text-slate-900 tracking-tight">Destination Promotion</p>
              <ul className="text-xs text-slate-500 font-normal space-y-1 pt-1">
                <li>• Promoted destination & degree listings</li>
                <li>• Clearly labelled sponsored badges</li>
                <li>• Enhanced programme showcase</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2">
              <span className="text-xs text-slate-500 font-normal uppercase">Institutional Partner (Proposed)</span>
              <p className="text-lg font-light text-slate-900 tracking-tight">Direct Enquiries & Analytics</p>
              <ul className="text-xs text-slate-500 font-normal space-y-1 pt-1">
                <li>• Receive student enquiries directly via BidyaGo</li>
                <li>• Recruitment & interest analytics</li>
                <li>• Tailored institutional agreements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* College Partnership Inquiry Modal */}
        {partnerModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-normal text-slate-400 uppercase tracking-wider">
                    Institutional Network
                  </span>
                  <h3 className="text-xl font-light text-slate-900 mt-1">
                    Partner With BidyaGo
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    List scholarships and attract vetted international candidates.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-xs font-normal text-slate-500 block mb-1">
                      College / University Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.institutionName}
                        onChange={(e) =>
                          setFormData({ ...formData, institutionName: e.target.value })
                        }
                        placeholder="e.g. University of Edinburgh"
                        className="w-full pl-10 pr-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-normal text-slate-500 block mb-1">
                        Contact Person & Title
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) =>
                          setFormData({ ...formData, contactPerson: e.target.value })
                        }
                        placeholder="Dr. Eleanor Vance, Dean"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-normal text-slate-500 block mb-1">
                        Official Institutional Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="admissions@ed.ac.uk"
                          className="w-full pl-10 pr-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-normal text-slate-500 block mb-1">
                        Country of Campus
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden cursor-pointer"
                      >
                        <option>United States 🇺🇸</option>
                        <option>United Kingdom 🇬🇧</option>
                        <option>Canada 🇨🇦</option>
                        <option>Germany 🇩🇪</option>
                        <option>Australia 🇦🇺</option>
                        <option>Japan / Korea 🇯🇵</option>
                        <option>Other / International</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-normal text-slate-500 block mb-1">
                        Primary Programs
                      </label>
                      <select
                        value={formData.programsOffered}
                        onChange={(e) =>
                          setFormData({ ...formData, programsOffered: e.target.value })
                        }
                        className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden cursor-pointer"
                      >
                        <option>Undergraduate & Graduate</option>
                        <option>Master’s & PhD Research</option>
                        <option>Doctoral Fellowships Only</option>
                        <option>STEM & Medical Grants</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="flex-1 py-2.5 text-xs font-normal text-slate-600 hover:bg-slate-100 rounded-full cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 text-xs font-normal text-white bg-slate-900 hover:bg-[#4b37df] rounded-full transition-colors cursor-pointer"
                    >
                      Submit Partnership Request
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 text-center space-y-3 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-normal text-slate-900">
                    Partnership Request Received!
                  </h4>
                  <p className="text-xs text-slate-500 font-normal">
                    Thank you. Our university liaison team will verify your institutional
                    domain ({formData.email || 'institutional email'}) and contact you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-3 px-5 py-2 text-xs font-normal text-white bg-slate-900 rounded-full cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
