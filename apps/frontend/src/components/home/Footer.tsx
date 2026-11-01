import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Globe2,
  ShieldCheck,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group focus:outline-hidden" aria-label="BidyaGo Home">
              <Image
                src="/bidyago_logo.png"
                alt="BidyaGo"
                width={170}
                height={42}
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              BidyaGo connects students, educational institutions, and consultancies through one unified international scholarship and opportunity platform.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-500">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-center transition-all"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: For Students */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
              For Students
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 font-normal">
              <li>
                <Link href="#scholarships" className="hover:text-slate-950 transition-colors">
                  Find Scholarships (Free)
                </Link>
              </li>
              <li>
                <Link href="#destinations" className="hover:text-slate-950 transition-colors">
                  Study Destinations
                </Link>
              </li>
              <li>
                <Link href="#personalized-matching" className="hover:text-slate-950 transition-colors">
                  Eligibility Guidance
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-slate-950 transition-colors">
                  Application Flow
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-slate-950 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: For Consultancies */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
              For Consultancies
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 font-normal">
              <li>
                <a href="#consultancies" className="hover:text-slate-950 transition-colors">
                  Directory Listing
                </a>
              </li>
              <li>
                <a href="#consultancy-workspace" className="hover:text-slate-950 transition-colors">
                  Agency Workspace
                </a>
              </li>
              <li>
                <a href="#consultancy-workspace" className="hover:text-slate-950 transition-colors">
                  Student Case Tracking
                </a>
              </li>
              <li>
                <a href="#consultancy-workspace" className="hover:text-slate-950 transition-colors">
                  Counsellor Management
                </a>
              </li>
              <li>
                <a href="#consultancy-workspace" className="hover:text-slate-950 transition-colors">
                  Workspace Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: For Universities & Trust */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">
              Universities & Trust
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 font-normal">
              <li>
                <a href="#for-colleges" className="hover:text-slate-950 transition-colors">
                  For Universities
                </a>
              </li>
              <li>
                <a href="#for-colleges" className="hover:text-slate-950 transition-colors">
                  Institutional Verification
                </a>
              </li>
              <li>
                <a href="#trust-verification" className="hover:text-slate-950 transition-colors">
                  Data Verification Standards
                </a>
              </li>
              <li>
                <a href="#trust-verification" className="hover:text-slate-950 transition-colors">
                  Official Application Policy
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-slate-950 transition-colors">
                  Privacy & Data Consent
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p>© {new Date().getFullYear()} BidyaGo, Inc. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Free Scholarship Discovery
            </span>
            <span className="flex items-center gap-1.5 text-slate-600 font-medium">
              <Globe2 className="w-4 h-4 text-primary-600" />
              Direct Official Application Routes
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
