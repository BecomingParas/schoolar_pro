'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Mail,
  Lock,
  UserPlus,
  BarChart3,
  Globe2,
} from 'lucide-react';

type OrgType = 'consultancy' | 'university';
type ActiveTab = 'overview' | 'consultancy' | 'university' | 'invitations' | 'management' | 'register';

export default function OrganizationPortalPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [orgType, setOrgType] = useState<OrgType>('consultancy');

  // Registration Form State
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [licenseOrCode, setLicenseOrCode] = useState('');
  const [city, setCity] = useState('Kathmandu');
  const [teamSize, setTeamSize] = useState('1-5');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sign In Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginSubmitted, setLoginSubmitted] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoginSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      {/* Top Banner indicating Partner Subdomain */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center font-normal flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>BidyaGo Partner Ecosystem</span>
        <span className="text-slate-400 font-mono text-[11px] px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">
          partners.bidyago.com
        </span>
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-block group focus:outline-hidden" aria-label="BidyaGo Home">
            <Image
              src="/bidyago_logo.png"
              alt="BidyaGo"
              width={150}
              height={38}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </Link>
          <span className="text-slate-300 font-light">|</span>
          <span className="text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-[#4b37df]" />
            Organization Portal
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-normal text-slate-500 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Student Portal</span>
          </Link>

          <button
            type="button"
            onClick={() => setActiveTab('register')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            <span>Register Organization</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
            Organization Workspace • For Consultancies & Universities
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight leading-tight">
            Centralized Operations for Education Leaders
          </h1>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto">
            BidyaGo provides education consultancies and higher education institutions with a modern management workspace to coordinate student applications, verify credentials, and manage team workflows.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex items-center justify-center overflow-x-auto pb-2">
          <div className="inline-flex p-1 rounded-full bg-slate-50 border border-slate-200/80 gap-1 text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Portal Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('consultancy')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'consultancy'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Consultancy Dashboard
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('university')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'university'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              University Dashboard
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('invitations')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'invitations'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Employee Invitations
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('management')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'management'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Organization Management
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('register')}
              className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeTab === 'register'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-purple-700 bg-purple-50/60 hover:bg-purple-100'
              }`}
            >
              Register / Sign In
            </button>
          </div>
        </div>

        {/* Tab 1: Overview & Core Pillars */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#4b37df]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-slate-900">
                  Consultancy Dashboard
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Replace fragmented WhatsApp messages and Excel sheets. Centralize student cases, assign counsellors, and track visa pipelines.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('consultancy')}
                  className="text-xs font-medium text-[#4b37df] hover:underline flex items-center gap-1 pt-1"
                >
                  Explore features <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#4b37df]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-slate-900">
                  University Dashboard
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Showcase undergraduate and graduate programmes, highlight available scholarships, and receive verified student inquiries directly.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('university')}
                  className="text-xs font-medium text-[#4b37df] hover:underline flex items-center gap-1 pt-1"
                >
                  Explore features <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#4b37df]">
                  <UserPlus className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-slate-900">
                  Employee Invitations
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Invite your counsellors, admissions team, and branch managers. Set custom permissions and distribute incoming student leads effortlessly.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('invitations')}
                  className="text-xs font-medium text-[#4b37df] hover:underline flex items-center gap-1 pt-1"
                >
                  Explore features <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#4b37df]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-medium text-slate-900">
                  Organization Management
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Secure document vaults, MoEST verification badge verification, multi-branch operations, and real-time application analytics.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('management')}
                  className="text-xs font-medium text-[#4b37df] hover:underline flex items-center gap-1 pt-1"
                >
                  Explore features <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Quick Action Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-light text-slate-900">
                  Ready to onboard your agency or educational institution?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-xl">
                  Register your organization today. Our team conducts verification with Nepal MoEST criteria and international accreditation databases.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('register')}
                className="px-6 py-3 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer shrink-0"
              >
                Start Organization Registration
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Consultancy Dashboard */}
        {activeTab === 'consultancy' && (
          <div className="space-y-8 animate-in fade-in-0 duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
                  For Education Consultancies
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-900">
                  Built to manage 10 to 300+ student cases seamlessly.
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Consultancies pay for business management software, workflow automation, and counsellor coordination—not for unconsented access to student data.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-slate-900">Centralized Student Records</h4>
                      <p className="text-xs text-slate-500 font-normal">View academic history, target country, GPA, and document readiness in one place.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-slate-900">Counsellor Lead Assignment</h4>
                      <p className="text-xs text-slate-500 font-normal">Assign specific students to specialized counsellors (e.g. Japan, Australia, UK).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-slate-900">Application Task Checklists</h4>
                      <p className="text-xs text-slate-500 font-normal">Set SOP review milestones, transcript translation dates, and visa submission deadlines.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mock Dashboard Preview */}
              <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold text-slate-800">Consultancy Workspace Live View</span>
                  </div>
                  <span className="text-[11px] text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    Kathmandu Branch
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 uppercase">Active Cases</span>
                    <p className="text-xl font-light text-slate-900 mt-0.5">84</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 uppercase">Counsellors</span>
                    <p className="text-xl font-light text-slate-900 mt-0.5">6</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 uppercase">Deadlines (7d)</span>
                    <p className="text-xl font-light text-slate-900 mt-0.5 text-amber-600">12</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-100 space-y-2">
                  <span className="text-[11px] font-medium text-slate-800 block">Recent Student Case Activity</span>
                  <div className="text-xs text-slate-500 flex justify-between border-b border-slate-50 pb-1">
                    <span>Aarav S. (MEXT Japan 2027)</span>
                    <span className="text-emerald-600 font-medium">Docs Verified</span>
                  </div>
                  <div className="text-xs text-slate-500 flex justify-between border-b border-slate-50 pb-1">
                    <span>Pooja T. (Australia GTE)</span>
                    <span className="text-blue-600 font-medium">Under Review</span>
                  </div>
                  <div className="text-xs text-slate-500 flex justify-between">
                    <span>Rohan K. (UK Chevening SOP)</span>
                    <span className="text-amber-600 font-medium">Action Needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: University Dashboard */}
        {activeTab === 'university' && (
          <div className="space-y-8 animate-in fade-in-0 duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
                  For Colleges & Universities
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-slate-900">
                  Connect with high-intent international scholars.
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  Showcase degree programmes and institutional scholarships to motivated students from Nepal seeking international higher education.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-slate-900">Verified Institutional Profile</h4>
                      <p className="text-xs text-slate-500 font-normal">Present official accreditation, campus locations, tuition estimates, and faculty highlights.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-slate-900">Publish Programme & Grant Catalog</h4>
                      <p className="text-xs text-slate-500 font-normal">List undergraduate, master’s, and doctoral offerings alongside merit awards.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-slate-900">Receive Direct Student Enquiries</h4>
                      <p className="text-xs text-slate-500 font-normal">Prospective applicants send structured academic enquiries directly to your admissions office.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* University Feature Box */}
              <div className="lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#4b37df]" />
                    <span className="text-xs font-semibold text-slate-800">University Admissions Portal</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Verified Institution
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-100 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-medium text-slate-900">Global Tech University</h4>
                      <p className="text-xs text-slate-400">Tokyo Campus • Japan</p>
                    </div>
                    <span className="text-xs font-medium text-slate-700 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                      12 Programmes Listed
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Enquiries this month</span>
                      <span className="text-base font-light text-slate-900">142</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Scholarship applicants</span>
                      <span className="text-base font-light text-slate-900">68</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Employee Invitations */}
        {activeTab === 'invitations' && (
          <div className="space-y-8 animate-in fade-in-0 duration-200 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
                Team Management
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900">
                Employee & Counsellor Invitations
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-xl mx-auto">
                Invite counsellors, document officers, and branch managers to your organization. Delegate student pipelines with role-based access.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#4b37df]" />
                  <span className="text-sm font-medium text-slate-900">Active Staff Seats (4 / 10 Used)</span>
                </div>
                <button
                  type="button"
                  onClick={() => alert('Enter employee email to send invite link.')}
                  className="px-4 py-2 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Send Staff Invitation</span>
                </button>
              </div>

              {/* Mock Staff List */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-medium text-slate-900 block">Suman Adhikari</span>
                    <span className="text-slate-400">suman@kathmanduglobal.edu.np • Senior Japan Counsellor</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium text-[11px]">Active</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-medium text-slate-900 block">Binod Karki</span>
                    <span className="text-slate-400">binod@kathmanduglobal.edu.np • Australia & UK Counsellor</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium text-[11px]">Active</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-medium text-slate-900 block">Anjali Shrestha</span>
                    <span className="text-slate-400">anjali@kathmanduglobal.edu.np • Document Specialist</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-medium text-[11px]">Pending Invite</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Organization Management */}
        {activeTab === 'management' && (
          <div className="space-y-8 animate-in fade-in-0 duration-200 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
                Workspace Administration
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900">
                Organization Management & Compliance
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-xl mx-auto">
                Maintain verification credentials, manage multiple branches, configure document vaults, and review team performance reports.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                <h4 className="text-sm font-medium text-slate-900">Verification Status</h4>
                <p className="text-xs text-slate-500 font-normal">MoEST / Educational Accreditation verified and renewed annually.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                <BarChart3 className="w-5 h-5 text-[#4b37df]" />
                <h4 className="text-sm font-medium text-slate-900">Operational Analytics</h4>
                <p className="text-xs text-slate-500 font-normal">Monitor application completion rates, counsellor response times, and visa milestones.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                <Globe2 className="w-5 h-5 text-[#4b37df]" />
                <h4 className="text-sm font-medium text-slate-900">Multi-Branch Setup</h4>
                <p className="text-xs text-slate-500 font-normal">Manage branches across Kathmandu, Pokhara, Chitwan, and international offices.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Register & Sign In Split Forms */}
        {activeTab === 'register' && (
          <div className="space-y-8 animate-in fade-in-0 duration-200 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
                partners.bidyago.com
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-slate-900">
                Join the BidyaGo Partner Network
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-xl mx-auto">
                Register your consultancy or university. Once approved by BidyaGo administration, your team can invite employees and access the management workspace.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Organization Registration Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="text-base font-medium text-slate-900">
                    Organization Registration
                  </h3>

                  {/* Toggle Org Type */}
                  <div className="flex p-0.5 bg-slate-100 rounded-full text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setOrgType('consultancy')}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                        orgType === 'consultancy'
                          ? 'bg-white text-slate-900 shadow-2xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      Consultancy
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrgType('university')}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                        orgType === 'university'
                          ? 'bg-white text-slate-900 shadow-2xs'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      University
                    </button>
                  </div>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="text-base font-medium text-emerald-950">Registration Submitted</h4>
                    <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                      Thank you for submitting <strong>{orgName}</strong>. Our team will verify your credentials against accreditation records and contact you at <strong>{workEmail}</strong> within 1-2 business days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-4 py-1.5 rounded-full bg-emerald-800 text-white text-xs font-medium"
                    >
                      Submit Another Registration
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-normal text-slate-600 block">
                        {orgType === 'consultancy' ? 'Consultancy / Agency Legal Name' : 'University / College Full Name'}
                      </label>
                      <input
                        type="text"
                        required
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder={orgType === 'consultancy' ? 'e.g. Kathmandu Education Consultancy Pvt. Ltd.' : 'e.g. Global Tech University'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white focus:outline-hidden focus:border-slate-400 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-normal text-slate-600 block">
                          Contact Person / Officer
                        </label>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. Suresh Shrestha"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white focus:outline-hidden focus:border-slate-400 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-normal text-slate-600 block">
                          Official Work Email
                        </label>
                        <input
                          type="email"
                          required
                          value={workEmail}
                          onChange={(e) => setWorkEmail(e.target.value)}
                          placeholder="director@agency.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white focus:outline-hidden focus:border-slate-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-normal text-slate-600 block">
                          {orgType === 'consultancy' ? 'MoEST Reg. Number' : 'Institution Code'}
                        </label>
                        <input
                          type="text"
                          required
                          value={licenseOrCode}
                          onChange={(e) => setLicenseOrCode(e.target.value)}
                          placeholder="e.g. MOEST-2079/042"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white focus:outline-hidden focus:border-slate-400 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-normal text-slate-600 block">
                          Headquarters City
                        </label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Kathmandu"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white focus:outline-hidden focus:border-slate-400 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-normal text-slate-600 block">
                          Team Size
                        </label>
                        <select
                          value={teamSize}
                          onChange={(e) => setTeamSize(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white focus:outline-hidden focus:border-slate-400 transition-colors cursor-pointer"
                        >
                          <option value="1-5">1 - 5 staff</option>
                          <option value="6-15">6 - 15 staff</option>
                          <option value="16-30">16 - 30 staff</option>
                          <option value="30+">30+ staff (Multi-branch)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-normal text-slate-600 block">
                        Official Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+977-01-XXXXXXX or mobile"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white focus:outline-hidden focus:border-slate-400 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      <span>{isLoading ? 'Submitting Application...' : 'Submit Organization for Verification'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Right: Partner Staff Sign In */}
              <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="text-base font-medium text-slate-900">
                    Partner Workspace Sign In
                  </h3>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    For verified counsellors, admissions officers, and administrators.
                  </p>
                </div>

                {loginSubmitted ? (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800">
                    Signing in to organization workspace...
                  </div>
                ) : (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-normal text-slate-600 block">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          required
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          placeholder="staff@organization.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:outline-hidden focus:border-slate-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-normal text-slate-600 block">
                        Workspace Password
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="password"
                          required
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:outline-hidden focus:border-slate-400 transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                    >
                      Sign In to Workspace
                    </button>
                  </form>
                )}

                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-900 block">Need a student account instead?</span>
                  <p className="text-xs text-slate-500 font-normal">
                    Students discover scholarships and track personal applications on the main BidyaGo portal.
                  </p>
                  <Link
                    href="/signup"
                    className="inline-block text-xs font-medium text-[#4b37df] hover:underline pt-1"
                  >
                    Go to Student Registration →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-normal">
        <p>© {new Date().getFullYear()} BidyaGo Partner Network (partners.bidyago.com). All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="/" className="hover:text-slate-900 transition-colors">Student Portal</Link>
          <Link href="/#faqs" className="hover:text-slate-900 transition-colors">Verification Standards</Link>
          <Link href="/#faqs" className="hover:text-slate-900 transition-colors">Partner Terms</Link>
        </div>
      </footer>
    </div>
  );
}
