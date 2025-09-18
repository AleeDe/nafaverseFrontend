import React from 'react';
import { BookOpen, TrendingUp, Target } from 'lucide-react';

interface JourneySectionProps {
  currentLanguage: 'en' | 'ur';
}

export const JourneySection: React.FC<JourneySectionProps> = ({ currentLanguage }) => {
  const content = {
    en: {
      title: 'Your Journey to Financial Freedom',
      subtitle: 'Three simple steps to transform your financial future',
      steps: [
        { icon: BookOpen, title: 'Understand', description: 'Learn investment fundamentals through interactive content.' },
        { icon: Target, title: 'Simulate', description: 'Practice with virtual portfolios & see real-time market scenarios.' },
        { icon: TrendingUp, title: 'Grow', description: 'Execute with confidence & track your progress.' }
      ],
      cta: 'Ready to start? Join today →'
    },
    ur: {
      title: 'Aap ka safar financial azaadi ki taraf',
      subtitle: 'Sirf 3 asaan qadam jo future badal dein',
      steps: [
        { icon: BookOpen, title: 'Samjho', description: 'Interactive content se investment ki bunyaadi baatein seekho.' },
        { icon: Target, title: 'Simulate karo', description: 'Virtual portfolio par practice karo aur real-time market scenarios dekho.' },
        { icon: TrendingUp, title: 'Grow karo', description: 'Itiqaad ke saath execute karo aur apni progress track karo.' }
      ],
      cta: 'Start karne ko tayar? Aaj hi join karo →'
    }
  } as const;

  const t = content[currentLanguage];

  return (
    <div className="py-20 nv-gradient-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.steps.map((step, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-full h-2 bg-gradient-to-r from-[#A786DF] to-[#60A5FA] rounded-t-2xl -mx-8 -mt-8 mb-6"></div>
              
              <div className="w-16 h-16 bg-gradient-to-r from-[#A786DF] to-[#60A5FA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4 text-center">
                {step.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-[#A786DF] to-[#60A5FA] hover:from-[#A786DF]/90 hover:to-[#60A5FA]/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {t.cta}
          </button>
        </div>
      </div>
    </div>
  );
};