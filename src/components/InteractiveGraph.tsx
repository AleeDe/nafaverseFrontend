import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface InteractiveGraphProps {
  currentLanguage: 'en' | 'ur';
}

export const InteractiveGraph: React.FC<InteractiveGraphProps> = ({ currentLanguage }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('1 Year');

  const content = {
    en: {
      title: 'See the Power of Smart Investing',
      subtitle: 'Compare traditional saving vs NafaVerse investing',
      saving: 'Just Saving',
      investing: 'NafaVerse Investing',
      periods: ['1 Year', '3 Years', '5 Years']
    },
    ur: {
      title: 'Smart investing ki power dekhein',
      subtitle: 'Riwayati bachat vs NafaVerse investing',
      saving: 'Sirf Saving',
      investing: 'NafaVerse Investing',
      periods: ['1 saal', '3 saal', '5 saal']
    }
  } as const;

  const t = content[currentLanguage];

  const graphData = {
    '1 Year': [
      { month: 'Jan', saving: 1000, investing: 1000 },
      { month: 'Mar', saving: 3000, investing: 3200 },
      { month: 'Jun', saving: 6000, investing: 6800 },
      { month: 'Sep', saving: 9000, investing: 10800 },
      { month: 'Dec', saving: 12000, investing: 15000 }
    ],
    '3 Years': [
      { month: 'Y1', saving: 12000, investing: 15000 },
      { month: 'Y1.5', saving: 18000, investing: 24000 },
      { month: 'Y2', saving: 24000, investing: 35000 },
      { month: 'Y2.5', saving: 30000, investing: 48000 },
      { month: 'Y3', saving: 36000, investing: 65000 }
    ],
    '5 Years': [
      { month: 'Y1', saving: 12000, investing: 15000 },
      { month: 'Y2', saving: 24000, investing: 35000 },
      { month: 'Y3', saving: 36000, investing: 65000 },
      { month: 'Y4', saving: 48000, investing: 110000 },
      { month: 'Y5', saving: 60000, investing: 180000 }
    ]
  } as const;

  const data = graphData[selectedPeriod as keyof typeof graphData] as unknown as any[];

  const basePeriods = ['1 Year', '3 Years', '5 Years'] as const;

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#1E1B4B] via-[#0F0A2E] to-[#312E81]">
      <div className="absolute inset-0 opacity-15">
              <div className="absolute top-20 left-10 w-32 h-32 bg-[#8B5CF6] rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#F59E0B] rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#8B5CF6]/50 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--nv-lightText)] mb-3">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.subtitle}
          </p>
        </div>

        <div className="rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
          {/* Period Toggle Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            {t.periods.map((period, index) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(basePeriods[index])}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPeriod === basePeriods[index]
                    ? 'bg-[rgb(var(--nv-accent))] text-white shadow-lg'
                    : 'nv-gradient-dark text-[color:var(--nv-lightText)] border-2 border-slate-200 hover:border-[rgb(var(--nv-secondary))]'
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Graph */}
          <div className="h-[320px] sm:h-[380px] md:h-[420px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" opacity={0.4} />
                <XAxis dataKey="month" stroke="#475569" fontSize={12} />
                <YAxis stroke="#475569" fontSize={12} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip 
                  formatter={(value: any, name: any) => [
                    `$${value.toLocaleString()}`,
                    name === 'saving' ? t.saving : t.investing
                  ]}
                  labelStyle={{ color: '#334155', fontWeight: 'bold' }}
                  contentStyle={{ backgroundColor: 'white', border: '1px solid #cbd5e1', borderRadius: 12 }}
                />
                <Legend wrapperStyle={{ color: '#334155', fontWeight: 600, fontSize: 14 }} />
                <Line type="monotone" dataKey="saving" stroke="#64748b" strokeWidth={3} dot={{ r: 4 }} name={t.saving} />
                <Line type="monotone" dataKey="investing" stroke="#00B8A9" strokeWidth={3} dot={{ r: 4 }} name={t.investing} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 mt-6">
            <div className="rounded-xl p-4 sm:p-6 border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 font-medium">{t.saving}</p>
                  <p className="text-xl sm:text-2xl font-bold text-red-600">
                    ${data[data.length - 1].saving.toLocaleString()}
                  </p>
                </div>
                <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
              </div>
            </div>
            
            <div className="rounded-xl p-4 sm:p-6 border border-emerald-200 bg-emerald-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 font-medium">{t.investing}</p>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-600">
                    ${data[data.length - 1].investing.toLocaleString()}
                  </p>
                </div>
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};