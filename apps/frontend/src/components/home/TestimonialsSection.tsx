import React from 'react';
import { Star, Quote, Award, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maya Chen',
      role: 'M.S. Artificial Intelligence',
      university: 'Stanford University',
      award: '$45,000 Gates Fellowship',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      quote:
        'I had spent 4 months sifting through outdated blog posts with broken links. ScholarshipPro matched me to a specialized STEM grant I had never even heard of. I received my award letter two months later!',
      rating: 5,
    },
    {
      name: 'David Osei',
      role: 'Ph.D. Biomedical Engineering',
      university: 'Oxford University',
      award: 'Full Tuition + £19,000 Stipend',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      quote:
        'As an international student, navigating funding felt nearly impossible. The deadline alerts and eligibility filter saved my academic career. Fully funded for my doctorate without taking on debt.',
      rating: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'B.S. Aerospace Engineering',
      university: 'MIT',
      award: '$32,000 Women in Tech Grant',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
      quote:
        'The essay structure checklists and requirements tracker gave me the confidence to apply for competitive top-tier awards. I won 2 out of the 3 scholarships I submitted through ScholarshipPro!',
      rating: 5,
    },
  ];

  return (
    <section id="success-stories" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
            <CheckCircle2 className="w-4 h-4" />
            Verified Scholar Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hear from Students Who Won Full Funding
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Over $120 million awarded to students across top institutions. Here
            is what winning scholars have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary-200" />
                </div>

                {/* Award Banner */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-100/70 text-emerald-800 text-xs font-bold mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>Award: {t.award}</span>
                </div>

                {/* Quote text */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Scholar profile */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-primary-600 font-semibold">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-slate-400">{t.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
