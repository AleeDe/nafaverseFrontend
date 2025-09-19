import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Toaster } from 'react-hot-toast';
import ResetPassword from './components/ResetPassword';
import ForgotPasswordPage from './pages/ForgotPasswordPage';


import { useState, useRef } from 'react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'home' | 'about' | 'contact'>('home');
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ur'>('en');
  // Refs for HomePage scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs = {
      hero: heroRef,
      journey: journeyRef,
      graph: graphRef,
      learn: learnRef,
      cta: ctaRef
    };
    const targetRef = refs[section as keyof typeof refs];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-gradient-to-br from-[#1E1B4B] via-[#0F0A2E] to-[#312E81] text-foreground relative">
        {/* Background subtle blobs - Universal */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#8B5CF6] rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#F59E0B] rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#8B5CF6]/50 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        {/* Content Wrapper */}
        <div className="relative z-10">
          <Navigation
            activeView={activeView}
            onNavigate={setActiveView}
            currentLanguage={currentLanguage}
            onLanguageToggle={() => setCurrentLanguage(prev => prev === 'en' ? 'ur' : 'en')}
            onScrollToSection={scrollToSection}
          />
          <main>
            <Routes>
              <Route path="/" element={<HomePage currentLanguage={currentLanguage} refs={{ heroRef, journeyRef, graphRef, learnRef, ctaRef }} />} />
              <Route path="/about" element={<AboutPage currentLanguage={currentLanguage} />} />
              <Route path="/contact" element={<ContactPage currentLanguage={currentLanguage} />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
