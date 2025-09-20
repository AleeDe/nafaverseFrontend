import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ArrowUp } from 'lucide-react';
import { useDashboard } from '../components/DashboardContext';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function ContactPage() {
  const { currentLanguage } = useDashboard();

  const content = {
    en: {
      title: 'Contact Us',
      description: 'Have questions? Reach out to us!'
    },
    ur: {
      title: 'ہم سے رابطہ کریں',
      description: 'کوئی سوال ہے؟ ہم سے رابطہ کریں!'
    }
  };

  const t = content[currentLanguage];

  return (
    <>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg">{t.description}</p>
      </div>
      <Contact currentLanguage={currentLanguage} />
      <Footer />
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
