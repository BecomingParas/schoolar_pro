import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      value: '100% Free',
      label: 'Core Scholarship Discovery',
    },
    {
      value: 'Official',
      label: 'Provider-Verified Sources',
    },
    {
      value: 'Global Hubs',
      label: 'Japan, UK, Australia, EU & More',
    },
    {
      value: 'Direct',
      label: 'Official Application Routes',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-100 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="px-4 sm:px-6 space-y-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
