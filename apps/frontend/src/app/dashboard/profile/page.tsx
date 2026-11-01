'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Save,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';

export default function StudentProfilePage() {
  const [fullName, setFullName] = useState('Aarav Sharma');
  const [email] = useState('aarav.sharma@example.com');
  const [gpa, setGpa] = useState('3.72');
  const [ielts, setIelts] = useState('7.5');
  const [targetDegree, setTargetDegree] = useState('masters');
  const [fieldOfStudy, setFieldOfStudy] = useState('Computer Science & AI');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-block group focus:outline-hidden" aria-label="BidyaGo Home">
              <Image
                src="/bidyago_logo.png"
                alt="BidyaGo"
                width={130}
                height={34}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
              Academic Profile
            </span>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-950"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </Link>
        </div>
      </header>

      {/* Subnav */}
      <div className="bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6 text-xs font-medium text-slate-500 overflow-x-auto">
          <Link href="/dashboard" className="py-3 border-b-2 border-transparent hover:text-slate-900">
            Overview
          </Link>
          <Link href="/dashboard/profile" className="py-3 border-b-2 border-slate-900 text-slate-900">
            Academic Profile
          </Link>
          <Link href="/dashboard/saved" className="py-3 border-b-2 border-transparent hover:text-slate-900">
            Saved Grants (4)
          </Link>
          <Link href="/dashboard/applications" className="py-3 border-b-2 border-transparent hover:text-slate-900">
            Application Tracker (2)
          </Link>
        </div>
      </div>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-light text-slate-900">
            Personal & Academic Qualifications
          </h1>
          <p className="text-xs text-slate-500">
            Your criteria is matched securely against official embassy and university funding databases.
          </p>
        </div>

        {saved && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Academic profile successfully updated. Scholarship matching recalculated.</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-normal text-slate-600">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-normal text-slate-600">Email Address</label>
              <input
                type="email"
                disabled
                value={email}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-normal text-slate-500 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-normal text-slate-600">Target Degree</label>
              <select
                value={targetDegree}
                onChange={(e) => setTargetDegree(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 cursor-pointer"
              >
                <option value="undergraduate">Undergraduate (Bachelor’s)</option>
                <option value="masters">Master’s Degree</option>
                <option value="phd">PhD / Doctoral</option>
                <option value="diploma">Diploma / Vocational</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-normal text-slate-600">Undergrad GPA / %</label>
              <input
                type="text"
                value={gpa}
                onChange={(e) => setGpa(e.target.value)}
                placeholder="e.g. 3.7 or 78%"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-normal text-slate-600">English Test (IELTS / TOEFL)</label>
              <input
                type="text"
                value={ielts}
                onChange={(e) => setIelts(e.target.value)}
                placeholder="e.g. 7.5 or 100"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-normal text-slate-600">Intended Academic Discipline</label>
            <input
              type="text"
              value={fieldOfStudy}
              onChange={(e) => setFieldOfStudy(e.target.value)}
              placeholder="e.g. Mechanical Engineering, International Relations, Data Science"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-900 focus:bg-white"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-[#4b37df] text-white text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Academic Profile</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
