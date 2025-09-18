import React from 'react';
import { Sparkles } from 'lucide-react';

interface FinalCTAProps {
  currentLanguage: 'en' | 'ur';
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: 'READY. SET. INVEST.',
      subtitle: 'Join NafaVerse today and start your journey to financial independence with Islamic principles and AI guidance.',
      primaryCTA: 'Start Free Trial',
      secondaryCTA: 'Join Community'
    },
    ur: {
      title: 'Ready • Set • Invest',
      subtitle: 'Aaj hi NafaVerse join karein aur Islamic principles + AI guidance ke saath financial azaadi ka safar shuru karein.',
      primaryCTA: 'Free Trial shuru karein',
      secondaryCTA: 'Community join karein'
    }
  } as const;

  const t = content[currentLanguage];

  return (
    <section className="py-20 bg-nv-gradient-dark relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-[rgb(var(--nv-accent))] mx-auto animate-pulse" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {t.title}
        </h2>
        <p className="text-xl md:text-2xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="nv-glow-btn px-8 py-4 rounded-xl text-lg">
            {t.primaryCTA}
          </button>
          <button className="border rounded-xl px-8 py-4 text-lg border-white/20 text-white hover:bg-white/10">
            {t.secondaryCTA}
          </button>
        </div>
      </div>
    </section>
  );
};