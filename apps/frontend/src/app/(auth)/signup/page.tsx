'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to the Terms of Service and Privacy Policy to proceed.');
      return;
    }

    setIsLoading(true);
    setSuccessMessage('');

    // Simulate account creation
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Student account created successfully! Check your email to verify your address.');
    }, 1000);
  };

  const handleGoogleSignUp = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Setting up your student account with Google...');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Top minimal header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
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

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main split content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Student Signup Form */}
        <div className="lg:col-span-6 max-w-md w-full mx-auto lg:mx-0 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block">
              Student Registration
            </span>
            <h1 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight">
              Create Your Student Account
            </h1>
            <p className="text-sm text-slate-500 font-normal">
              Discover international scholarships, calculate eligibility matches, and track your applications 100% free.
            </p>
          </div>

          {/* Social Google Signup Button */}
          <div>
            <button
              type="button"
              onClick={handleGoogleSignUp}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs sm:text-sm font-normal transition-all shadow-xs cursor-pointer disabled:opacity-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Sign up with Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-xs text-slate-400 font-normal uppercase tracking-wider relative">
              or sign up with email
            </span>
          </div>

          {/* Feedback Banner */}
          {successMessage && (
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-normal flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* Student Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-normal text-slate-600 block">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aarav Sharma"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white focus:outline-hidden focus:border-slate-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-normal text-slate-600 block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aarav.sharma@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white focus:outline-hidden focus:border-slate-400 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-normal text-slate-600 block">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white focus:outline-hidden focus:border-slate-400 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-hidden cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="text-[11px] text-slate-400 font-normal">
                Use 8 or more characters with a mix of letters and numbers.
              </p>
            </div>

            {/* Terms and Privacy Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="terms"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 rounded-sm border-slate-300 text-slate-900 focus:ring-0 cursor-pointer mt-0.5"
              />
              <label htmlFor="terms" className="text-xs font-normal text-slate-600 leading-snug cursor-pointer">
                I agree to BidyaGo's <Link href="/#faqs" className="text-slate-900 underline hover:text-[#4b37df]">Terms of Service</Link> and <Link href="/#faqs" className="text-slate-900 underline hover:text-[#4b37df]">Privacy Policy</Link>, and understand that BidyaGo provides educational guidance without admission guarantees.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-6 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs sm:text-sm font-normal transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
            >
              <span>{isLoading ? 'Creating Student Account...' : 'Create Free Student Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Switch to Login */}
          <div className="text-center space-y-1.5 pt-2">
            <p className="text-xs font-normal text-slate-500">
              Already have a BidyaGo student account?{' '}
              <Link
                href="/login"
                className="text-slate-900 font-medium hover:underline hover:text-[#4b37df] transition-colors"
              >
                Sign in
              </Link>
            </p>
            <p className="text-[11px] text-slate-400 font-normal">
              Are you an organization?{' '}
              <Link href="/organizations" className="text-slate-600 hover:text-slate-950 underline">
                Partner Portal
              </Link>
            </p>
          </div>
        </div>

        {/* Right Column: Visual Value Proposition for Students */}
        <div className="hidden lg:block lg:col-span-6 pl-8">
          <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-10 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-normal uppercase tracking-wider text-slate-400 block">
                100% Free For Students
              </span>
              <h2 className="text-2xl font-light text-slate-900 leading-snug">
                Your future. Your scholarship. Your international journey.
              </h2>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Connect with verified global programs, calculate real scholarship eligibility, and track every application milestone.
              </p>
            </div>

            {/* Feature points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                <GraduationCap className="w-5 h-5 text-[#4b37df] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-medium text-slate-900">
                    Flagship Global Scholarships
                  </h4>
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                    Direct guides and alerts for MEXT Japan, Chevening UK, Australia Awards, GKS Korea, and DAAD.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-medium text-slate-900">
                    Verified Application Portals
                  </h4>
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                    Every grant application links directly to the official government embassy or university website.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-medium text-slate-900">
                    Smart Application Tracker
                  </h4>
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                    Keep your SOPs, transcripts, and deadline calendars organized in your personal dashboard.
                  </p>
                </div>
              </div>
            </div>

            {/* Student Privacy Note */}
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-2xs">
              <p className="text-xs font-medium text-slate-900">
                100% Student Data Privacy
              </p>
              <p className="text-[11px] text-slate-500 font-normal mt-0.5 leading-relaxed">
                You own your profile and academic documents. BidyaGo never sells student information to unauthorized third parties.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-normal">
        <p>© {new Date().getFullYear()} BidyaGo, Inc. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="/#faqs" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
          <Link href="/#faqs" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
          <Link href="/#faqs" className="hover:text-slate-600 transition-colors">Help Center</Link>
        </div>
      </footer>
    </div>
  );
}
