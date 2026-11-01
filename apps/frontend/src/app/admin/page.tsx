'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle2,
  XCircle,
  Filter,
  ArrowLeft,
} from 'lucide-react';

interface PendingVerification {
  id: string;
  name: string;
  type: 'consultancy' | 'university';
  applicantName: string;
  applicantEmail: string;
  phone: string;
  licenseNumber: string;
  city: string;
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

const INITIAL_PENDING: PendingVerification[] = [
  {
    id: 'VER-001',
    name: 'Kathmandu International Studies',
    type: 'consultancy',
    applicantName: 'Bikram Thapa',
    applicantEmail: 'info@kismepal.com',
    phone: '+977 1 4429811',
    licenseNumber: 'MoEST-REG-2081-331',
    city: 'Kathmandu',
    submittedDate: '2026-10-29',
    status: 'pending',
  },
  {
    id: 'VER-002',
    name: 'Pokhara Abroad Study Center',
    type: 'consultancy',
    applicantName: 'Suman Gurung',
    applicantEmail: 'contact@pokharastudy.edu.np',
    phone: '+977 61 520111',
    licenseNumber: 'MoEST-REG-2079-094',
    city: 'Pokhara',
    submittedDate: '2026-10-30',
    status: 'pending',
  },
  {
    id: 'VER-003',
    name: 'Nagoya Future University (International Liaison)',
    type: 'university',
    applicantName: 'Kenji Sato',
    applicantEmail: 'admissions-asia@nagoya-u.ac.jp',
    phone: '+81 52 789 5111',
    licenseNumber: 'MEXT-UNI-JP-391',
    city: 'Nagoya, Japan',
    submittedDate: '2026-10-31',
    status: 'pending',
  },
];

export default function AdminPortalPage() {
  const [items, setItems] = useState<PendingVerification[]>(INITIAL_PENDING);
  const [filterType, setFilterType] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PendingVerification | null>(INITIAL_PENDING[0]);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const handleApprove = (id: string, name: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: 'approved' } : i))
    );
    setActionNotice(`Approved partner credentials for "${name}". Partner credentials unlocked.`);
    setTimeout(() => setActionNotice(null), 4000);
  };

  const handleReject = (id: string, name: string) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: 'rejected' } : i))
    );
    setActionNotice(`Rejected application for "${name}". Notification dispatched.`);
    setTimeout(() => setActionNotice(null), 4000);
  };

  const filtered = items.filter((item) => {
    if (filterType !== 'all' && item.type !== filterType) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      {/* Admin Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-block group focus:outline-hidden" aria-label="BidyaGo Home">
              <Image
                src="/bidyago_logo.png"
                alt="BidyaGo"
                width={130}
                height={34}
                className="h-8 w-auto object-contain brightness-0 invert"
                priority
              />
            </Link>
            <span className="text-slate-600">|</span>
            <span className="text-xs font-mono font-medium text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded-full">
              ADMIN CONTROL CENTER
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Exit Admin</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-light text-slate-900">Institutional Compliance & Review</h1>
            <p className="text-xs text-slate-500 mt-1">
              Verify MoEST registration licenses, tax compliance, and university liaison partnerships.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-xs">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              aria-label="Filter verification requests by type"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-transparent border-none text-xs text-slate-700 focus:outline-hidden"
            >
              <option value="all">All Submissions</option>
              <option value="consultancy">Consultancies (MoEST)</option>
              <option value="university">Universities / Colleges</option>
            </select>
          </div>
        </div>

        {actionNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
            <span>{actionNotice}</span>
            <button
              onClick={() => setActionNotice(null)}
              className="text-emerald-700 hover:text-emerald-900 font-medium"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Applications list */}
          <div className="space-y-3">
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider px-1">
              Pending Queue ({filtered.length})
            </div>

            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`w-full text-left p-4 rounded-2xl border transition-all ${
                  selectedItem?.id === item.id
                    ? 'bg-white border-slate-900 shadow-2xs ring-1 ring-slate-900'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-slate-400">{item.id}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                      item.status === 'approved'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : item.status === 'rejected'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </span>
                </div>

                <div className="text-sm font-medium text-slate-900 line-clamp-1">{item.name}</div>
                <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                  <span>{item.city}</span>
                  <span>•</span>
                  <span className="capitalize">{item.type}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            {selectedItem ? (
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xs">
                <div className="flex items-start justify-between pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-1">
                      {selectedItem.id} • {selectedItem.submittedDate}
                    </span>
                    <h2 className="text-xl font-medium text-slate-900">{selectedItem.name}</h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {selectedItem.type === 'consultancy' ? 'Education Consultancy' : 'Higher Education Institution'} • {selectedItem.city}
                    </p>
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      selectedItem.status === 'approved'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : selectedItem.status === 'rejected'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                  >
                    Status: {selectedItem.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 bg-slate-50 rounded-xl space-y-1">
                    <span className="text-slate-400">Primary Contact:</span>
                    <div className="font-medium text-slate-900">{selectedItem.applicantName}</div>
                    <div className="text-slate-500">{selectedItem.applicantEmail}</div>
                    <div className="text-slate-500">{selectedItem.phone}</div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl space-y-1">
                    <span className="text-slate-400">Regulatory Accreditation:</span>
                    <div className="font-mono font-medium text-slate-900">{selectedItem.licenseNumber}</div>
                    <div className="text-slate-500">Jurisdiction: Government of Nepal / Regional Dept</div>
                  </div>
                </div>

                {/* Verification Checkpoints */}
                <div className="space-y-3">
                  <h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Auditor Checklist
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>MoEST Licensed Directory Match verified</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>PAN / Tax clearance status verified with Inland Revenue Department</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Zero consumer protection scam flags recorded</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                {selectedItem.status === 'pending' && (
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => handleApprove(selectedItem.id, selectedItem.name)}
                      className="px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-normal hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Approve & Issue Verified Badge</span>
                    </button>
                    <button
                      onClick={() => handleReject(selectedItem.id, selectedItem.name)}
                      className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 text-xs font-normal hover:bg-rose-50 hover:text-rose-600 transition-colors flex items-center gap-1.5"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Reject Application</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-8 text-center text-xs text-slate-400">
                Select an application from the queue to review details.
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 text-xs py-4 text-center border-t border-slate-800">
        BidyaGo Internal Compliance Administration • Authorized Staff Only
      </footer>
    </div>
  );
}
