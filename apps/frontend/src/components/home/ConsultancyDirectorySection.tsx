'use client';

import React, { useState } from 'react';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MapPin,
  Building2,
  Users,
  ArrowRight,
  FileCheck,
} from 'lucide-react';

export interface Consultancy {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  destinations: string[];
  specialty: string;
  licenseNumber: string;
  accreditation: string;
  location: string;
  verificationBadge: string;
  freeConsultation: boolean;
}

export const CONSULTANCIES: Consultancy[] = [
  {
    id: 'c-1',
    name: 'Apex Global Education Advisory',
    rating: 4.9,
    reviewsCount: 348,
    destinations: ['USA 🇺🇸', 'Canada 🇨🇦', 'UK 🇬🇧'],
    specialty: 'Graduate Assistantships & Visa Interview Prep',
    licenseNumber: 'MoEST Reg. #4412',
    accreditation: 'AIRC Certified & NAFSA Member',
    location: 'Kathmandu & Virtual Worldwide',
    verificationBadge: 'Verified MoEST License',
    freeConsultation: true,
  },
  {
    id: 'c-2',
    name: 'EuroPathway Academic Advisors',
    rating: 4.9,
    reviewsCount: 220,
    destinations: ['Germany 🇩🇪', 'Finland 🇫🇮', 'France 🇫🇷'],
    specialty: 'Tuition-Free English Programs & Blocked Accounts',
    licenseNumber: 'MoEST Reg. #3190',
    accreditation: 'ICEF Agency Certified #0941',
    location: 'Pokhara & Frankfurt Support Office',
    verificationBadge: 'Verified MoEST License',
    freeConsultation: true,
  },
  {
    id: 'c-3',
    name: 'BridgeWater International Studies',
    rating: 4.8,
    reviewsCount: 512,
    destinations: ['Australia 🇦🇺', 'New Zealand 🇳🇿'],
    specialty: 'RTP Scholarships, GTE Clearance & PSWV Support',
    licenseNumber: 'MoEST Reg. #5122',
    accreditation: 'PIER Qualified Education Agent',
    location: 'Lalitpur & Sydney Support Office',
    verificationBadge: 'Verified MoEST License',
    freeConsultation: true,
  },
  {
    id: 'c-4',
    name: 'Orient Scholars Alliance',
    rating: 4.9,
    reviewsCount: 184,
    destinations: ['Japan 🇯🇵', 'South Korea 🇰🇷'],
    specialty: 'MEXT & GKS Full Ride Mentorship & Professor Outreach',
    licenseNumber: 'MoEST Reg. #2904',
    accreditation: 'JASSO Official Partner Network',
    location: 'Kathmandu & Tokyo Liaison',
    verificationBadge: 'Verified MoEST License',
    freeConsultation: true,
  },
];

export default function ConsultancyDirectorySection() {
  const [selectedConsultancy, setSelectedConsultancy] = useState<Consultancy | null>(null);
  const [booked, setBooked] = useState(false);
  const [agencyModalOpen, setAgencyModalOpen] = useState(false);
  const [agencySubmitted, setAgencySubmitted] = useState(false);
  const [agencyForm, setAgencyForm] = useState({
    agencyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    licenseNumber: '',
  });

  const handleBook = (consultancy: Consultancy) => {
    setSelectedConsultancy(consultancy);
    setBooked(false);
  };

  const handleAgencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAgencySubmitted(true);
  };

  const handleCloseAgencyModal = () => {
    setAgencyModalOpen(false);
    setAgencySubmitted(false);
    setAgencyForm({
      agencyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      licenseNumber: '',
    });
  };

  return (
    <section id="consultancies" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Student-Facing Discovery Header */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block mb-2">
                Verified Advisors
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
                Consultancy & Advisor Directory
              </h2>
              <p className="mt-2 text-base text-slate-500 font-normal max-w-xl">
                Discover government-licensed education consultancies in Nepal for
                personalized visa guidance, test prep, and application counselling.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-normal text-slate-500 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ministry of Education Licensed</span>
            </div>
          </div>

          {/* Consultancy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONSULTANCIES.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 hover:border-slate-400 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Name, Rating, License */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-normal text-slate-900">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-normal text-slate-900">
                            {item.rating}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 font-normal">
                          ({item.reviewsCount} reviews)
                        </span>
                        <span className="text-slate-200">•</span>
                        <span className="text-[11px] font-normal text-slate-500">
                          {item.licenseNumber}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-normal px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-600 border border-slate-200">
                      {item.verificationBadge}
                    </span>
                  </div>

                  {/* Specialties & Accreditation */}
                  <p className="text-xs text-slate-500 font-normal leading-relaxed mb-4">
                    <span className="text-slate-400">Focus:</span> {item.specialty}
                  </p>

                  {/* Meta Pills */}
                  <div className="space-y-2 text-xs text-slate-500 font-normal mb-5">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Destinations:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.destinations.map((d, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-normal"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-700 font-normal">
                        {item.accreditation}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-normal text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Free Initial Counselling
                  </span>

                  <button
                    type="button"
                    onClick={() => handleBook(item)}
                    className="px-4 py-1.5 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs font-normal transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Book Session</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Consultancy Business Workspace Showcase (anchor: #consultancy-workspace) */}
        <div id="consultancy-workspace" className="pt-12 border-t border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block mb-2">
                Business Workspace
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
                For Education Consultancies
              </h3>
              <p className="mt-2 text-base text-slate-500 font-normal max-w-xl">
                Replace spreadsheets, WhatsApp threads, and manual follow-ups with an organized
                workspace to manage students, counsellors, documents, and applications.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setAgencyModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs sm:text-sm font-normal transition-colors cursor-pointer shrink-0"
            >
              <span>Register Your Consultancy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Workspace Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80">
              <Users className="w-5 h-5 text-slate-700 mb-3" />
              <h4 className="text-base font-normal text-slate-900 mb-1">
                Student & Case Management
              </h4>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Centralize student records, assign cases to counsellors, record consultation notes,
                and track application status in real time.
              </p>
            </div>

            <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80">
              <FileCheck className="w-5 h-5 text-slate-700 mb-3" />
              <h4 className="text-base font-normal text-slate-900 mb-1">
                Document Checklist & Verification
              </h4>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Organize transcripts, test scores, SOP drafts, and financial documents with clear
                student consent controls and checklist workflows.
              </p>
            </div>

            <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80">
              <Building2 className="w-5 h-5 text-slate-700 mb-3" />
              <h4 className="text-base font-normal text-slate-900 mb-1">
                Team Coordination & Deadlines
              </h4>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Automated intake reminders, appointment schedules, branch coordination, and
                operational reports to keep your team aligned.
              </p>
            </div>
          </div>

          {/* Proposed Plans Notice Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-normal text-slate-400 uppercase tracking-wider block">
                  Proposed Workspace Plans
                </span>
                <p className="text-xs text-slate-500 font-normal mt-0.5">
                  Consultancies pay for management software, workflow automation, and team collaboration.
                </p>
              </div>
              <span className="text-[11px] font-normal text-slate-500 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 shrink-0">
                Early Access Onboarding
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2">
                <span className="text-xs text-slate-400 font-normal uppercase">Starter</span>
                <p className="text-2xl font-light text-slate-900 tracking-tight">Rs. 2,999<span className="text-xs text-slate-400 font-normal">/mo (Proposed)</span></p>
                <ul className="text-xs text-slate-500 font-normal space-y-1 pt-2">
                  <li>• Up to 3 staff members</li>
                  <li>• Up to 30 active student cases</li>
                  <li>• Student management & reminders</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                <span className="text-xs text-[#4b37df] font-normal uppercase">Growth</span>
                <p className="text-2xl font-light text-slate-900 tracking-tight">Rs. 6,999<span className="text-xs text-slate-400 font-normal">/mo (Proposed)</span></p>
                <ul className="text-xs text-slate-500 font-normal space-y-1 pt-2">
                  <li>• Up to 10 staff members</li>
                  <li>• Up to 100 active student cases</li>
                  <li>• Counsellor assignments & documents</li>
                  <li>• Reports & operational analytics</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2">
                <span className="text-xs text-slate-400 font-normal uppercase">Pro</span>
                <p className="text-2xl font-light text-slate-900 tracking-tight">Rs. 12,999<span className="text-xs text-slate-400 font-normal">/mo (Proposed)</span></p>
                <ul className="text-xs text-slate-500 font-normal space-y-1 pt-2">
                  <li>• Up to 25 staff members</li>
                  <li>• Up to 300 active student cases</li>
                  <li>• Multi-branch management</li>
                  <li>• Custom workflows & advanced reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Student Booking */}
        {selectedConsultancy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-normal text-slate-400 uppercase tracking-wider">
                    {selectedConsultancy.licenseNumber}
                  </span>
                  <h3 className="text-xl font-light text-slate-900 mt-1">
                    Book Free Counseling Session
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    With {selectedConsultancy.name}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedConsultancy(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {!booked ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setBooked(true);
                  }}
                  className="space-y-3.5"
                >
                  <div>
                    <label className="text-xs font-normal text-slate-500 block mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Thapa"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-normal text-slate-500 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@gmail.com"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-normal text-slate-500 block mb-1">
                      Target Country
                    </label>
                    <select className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden cursor-pointer">
                      <option>Japan 🇯🇵</option>
                      <option>Australia 🇦🇺</option>
                      <option>United Kingdom 🇬🇧</option>
                      <option>South Korea 🇰🇷</option>
                      <option>Germany & Europe 🇪🇺</option>
                      <option>USA & Canada 🇺🇸</option>
                    </select>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedConsultancy(null)}
                      className="flex-1 py-2.5 text-xs font-normal text-slate-600 hover:bg-slate-100 rounded-full cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 text-xs font-normal text-white bg-slate-900 hover:bg-[#4b37df] rounded-full transition-colors cursor-pointer"
                    >
                      Confirm Free Session
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 text-center space-y-3 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-normal text-slate-900">
                    Session Request Confirmed!
                  </h4>
                  <p className="text-xs text-slate-500 font-normal">
                    An advisor from {selectedConsultancy.name} will contact you
                    within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedConsultancy(null);
                      setBooked(false);
                    }}
                    className="mt-3 px-5 py-2 text-xs font-normal text-white bg-slate-900 rounded-full cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Modal for Consultancy Agency Registration */}
        {agencyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-normal text-slate-400 uppercase tracking-wider">
                    Consultancy Workspace
                  </span>
                  <h3 className="text-xl font-light text-slate-900 mt-1">
                    Register Your Consultancy
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    Manage student cases, applications, and counsellors in one workspace.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCloseAgencyModal}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {!agencySubmitted ? (
                <form onSubmit={handleAgencySubmit} className="space-y-3.5">
                  <div>
                    <label className="text-xs font-normal text-slate-500 block mb-1">
                      Consultancy / Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={agencyForm.agencyName}
                      onChange={(e) =>
                        setAgencyForm({ ...agencyForm, agencyName: e.target.value })
                      }
                      placeholder="e.g. Himalayan Education Network"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-normal text-slate-500 block mb-1">
                      MoEST Registration / License No.
                    </label>
                    <input
                      type="text"
                      required
                      value={agencyForm.licenseNumber}
                      onChange={(e) =>
                        setAgencyForm({ ...agencyForm, licenseNumber: e.target.value })
                      }
                      placeholder="e.g. MoEST Reg. #4120"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-normal text-slate-500 block mb-1">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        required
                        value={agencyForm.contactPerson}
                        onChange={(e) =>
                          setAgencyForm({ ...agencyForm, contactPerson: e.target.value })
                        }
                        placeholder="Managing Director"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-normal text-slate-500 block mb-1">
                        Official Email
                      </label>
                      <input
                        type="email"
                        required
                        value={agencyForm.email}
                        onChange={(e) =>
                          setAgencyForm({ ...agencyForm, email: e.target.value })
                        }
                        placeholder="info@consultancy.com"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm font-normal rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={handleCloseAgencyModal}
                      className="flex-1 py-2.5 text-xs font-normal text-slate-600 hover:bg-slate-100 rounded-full cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 text-xs font-normal text-white bg-slate-900 hover:bg-[#4b37df] rounded-full transition-colors cursor-pointer"
                    >
                      Request Workspace Setup
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 text-center space-y-3 bg-slate-50 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-normal text-slate-900">
                    Registration Request Received!
                  </h4>
                  <p className="text-xs text-slate-500 font-normal">
                    Our verification team will review your MoEST license ({agencyForm.licenseNumber})
                    and send your workspace credentials within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleCloseAgencyModal}
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
