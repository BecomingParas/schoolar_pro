'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Is BidyaGo free for students?',
    answer:
      'Yes. The core scholarship discovery experience is 100% free. Students never have to pay to discover scholarships, review eligibility requirements, view official links, or understand application procedures.',
    category: 'Students',
  },
  {
    question: 'Can I apply for scholarships directly through BidyaGo?',
    answer:
      'In most cases, applications must be submitted directly through the official external source—such as the issuing embassy, government portal, or university admissions system. BidyaGo provides verified links and application guidance. When an official institutional partnership is in place, participating universities may also accept direct enquiries or applications through BidyaGo.',
    category: 'Applications',
  },
  {
    question: 'Does BidyaGo guarantee admission or scholarship selection?',
    answer:
      'No. BidyaGo does not award scholarships, guarantee admission, or guarantee scholarship selection. Eligibility recommendations and matching scores are guidance tools to help you plan your applications. Final selection decisions are made solely by the official granting organization.',
    category: 'Eligibility',
  },
  {
    question: 'How does scholarship matching work?',
    answer:
      'BidyaGo cross-references your academic level, target study destination, GPA, and field of study against official donor criteria to help you discover grants where you meet key requirements. It serves as educational guidance to save you time.',
    category: 'Matching',
  },
  {
    question: 'How are scholarships verified on BidyaGo?',
    answer:
      'Our team audits scholarship listings against official government ministry gazettes, embassy cultural announcements (such as MEXT Japan, GKS Korea, Chevening UK, and Australia Awards), and accredited university financial aid portals. We record and display verification timestamps for active cycles.',
    category: 'Verification',
  },
  {
    question: 'What do education consultancies get from BidyaGo?',
    answer:
      'BidyaGo provides education consultancies in Nepal with a dedicated business management workspace. It replaces spreadsheets and manual follow-ups by centralizing student records, assigning cases to counsellors, organizing documents, tracking deadlines, and monitoring operational analytics.',
    category: 'Consultancies',
  },
  {
    question: 'Can universities and colleges register on BidyaGo?',
    answer:
      'Yes. Accredited colleges and universities can submit institutional verification to receive an approved profile, publish their academic programmes and scholarships, and connect with prospective international students from Nepal.',
    category: 'Universities',
  },
  {
    question: 'Can consultancies or universities access my personal documents?',
    answer:
      'No. Students retain full control over their personal data. Consultancies and universities cannot automatically access your profile or documents. Information is only shared when you explicitly and voluntarily choose to submit an enquiry or application.',
    category: 'Privacy',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-normal text-slate-400 uppercase tracking-widest block mb-2">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-base text-slate-500 font-normal">
            Everything you need to know about navigating scholarships, funding
            types, and verified advisors.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-normal text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-slate-900 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-slate-500 font-normal leading-relaxed border-t border-slate-100 mt-1 animate-in fade-in-50 duration-200">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-slate-500 shrink-0" />
            <div>
              <h4 className="text-sm font-normal text-slate-900">
                Still have a question?
              </h4>
              <p className="text-xs text-slate-500 font-normal">
                Our student support team and advisor community are here to help.
              </p>
            </div>
          </div>

          <a
            href="mailto:support@bidyago.com"
            className="px-5 py-2 rounded-full bg-slate-900 hover:bg-primary-600 text-white text-xs font-medium transition-colors shrink-0"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
}
