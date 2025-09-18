import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ArrowUp } from 'lucide-react';

interface ContactPageProps {
  currentLanguage: 'en' | 'ur';
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function ContactPage({ currentLanguage }: ContactPageProps) {
  return (
    <>
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
