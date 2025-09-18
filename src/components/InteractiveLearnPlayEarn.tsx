import React from 'react';
import { BookOpen, Gamepad2, Coins, ArrowRight, CheckCircle2, Clock3, Trophy, Play } from 'lucide-react';
import { Button } from './ui/button';

interface InteractiveLearnPlayEarnProps {
  currentLanguage: 'en' | 'ur';
}

export const InteractiveLearnPlayEarn: React.FC<InteractiveLearnPlayEarnProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: 'Learn. Play. Earn.',
      subtitle: 'Boost your financial IQ and earn rewards',
      quizCta: 'Take a quiz now',
      quizTitle: 'Finance Quiz',
      level: 'Level 1',
      question: 'What is compound interest?',
      answers: ['Interest earned on interest', 'Simple interest only', 'Bank fees', 'Inflation rate'],
      panelSubtitle: 'Boost your financial IQ and earn rewards',
      features: ['Interactive financial literacy quizzes', 'Earn rewards for correct answers', 'Redeem rewards and unlock features'],
      badges: [
        { icon: Trophy, label: 'Rewards' },
        { icon: Play, label: 'Play & Learn' },
        { icon: BookOpen, label: 'Knowledge' }
      ]
    },
    ur: {
      title: 'Learn. Play. Earn.',
      subtitle: 'Financial IQ barhao aur rewards kamao',
      quizCta: 'Abhi quiz lo',
      quizTitle: 'Finance Quiz',
      level: 'Level 1',
      question: 'Compound interest kya hota hai?',
      answers: ['Interest earned on interest', 'Simple interest hi', 'Bank fees', 'Inflation rate'],
      panelSubtitle: 'Financial IQ barhao aur rewards kamao',
      features: ['Interactive financial quizzes', 'Sahi jawab par rewards', 'Rewards redeem karke features unlock'],
      badges: [
        { icon: Trophy, label: 'Rewards' },
        { icon: Play, label: 'Play & Learn' },
        { icon: BookOpen, label: 'Knowledge' }
      ]
    }
  } as const;

  const t = content[currentLanguage];

  return (
    <section className="py-20 nv-gradient-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-3 tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Quiz Preview Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-0 border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#4B3F72] to-[#A786DF] text-white px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">{/* dot */}
                    <span className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <h3 className="text-lg font-semibold">{t.quizTitle}</h3>
                </div>
                <span className="text-xs bg-white/15 px-3 py-1 rounded-full">{t.level}</span>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-[#2D2D2D] font-medium mb-4">{t.question}</p>
                {/* Options (static demo) */}
                <div className="space-y-3">
                  <button className="w-full text-left border rounded-xl px-4 py-3 bg-white hover:bg-green-50 border-green-500 text-green-700 flex items-center justify-between">
                    <span>{t.answers[0]}</span>
                    <span className="text-green-600">✓</span>
                  </button>
                  <button className="w-full text-left border rounded-xl px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100">{t.answers[1]}</button>
                  <button className="w-full text-left border rounded-xl px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100">{t.answers[2]}</button>
                  <button className="w-full text-left border rounded-xl px-4 py-3 bg-gray-50 text-gray-700 hover:bg-gray-100">{t.answers[3]}</button>
                </div>

                {/* Progress */}
                <div className="mt-6">
                  <p className="text-sm text-gray-500 mb-1">Progress:</p>
                  <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-[#A786DF] to-[#60A5FA] rounded-full" style={{ width: '30%' }} />
                  </div>
                  <p className="text-right text-xs text-gray-500 mt-1">3/10</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info Panel + Bullets */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
              {/* Title row with mini icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#A786DF] to-[#60A5FA] flex items-center justify-center text-white">
                  <Clock3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2D2D2D]">{t.title}</h3>
                  <p className="text-sm text-gray-600">{t.panelSubtitle}</p>
                </div>
              </div>

              {/* Three feature badges */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {t.badges.map((b, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
                    <div className="mx-auto w-12 h-12 rounded-2xl bg-[#1E293B] text-white flex items-center justify-center mb-2">
                      <b.icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-gray-700">{b.label}</p>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-3">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#00B8A9] mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6">
                <Button variant="gradient" className="px-6 py-3">
                  {t.quizCta} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};