import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from './ui/sheet';
import { LoginModal } from './LoginModal';
import { NafaVerseLogo } from './NafaVerseLogo';
import { ForgotPassword } from './ForgotPassword';

interface NavigationProps {
  activeView: 'home' | 'about' | 'contact';
  onNavigate: (view: 'home' | 'about' | 'contact') => void;
  currentLanguage: 'en' | 'ur';
  onLanguageToggle: () => void;
  onScrollToSection?: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeView,
  onNavigate,
  currentLanguage,
  onLanguageToggle,
  onScrollToSection
}) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const content = {
    en: {
      home: 'Home',
      features: 'Features',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      signup: 'Sign Up',
      language: 'اردو',
    },
    // Roman Urdu labels
    ur: {
      home: 'Ghar',
      features: 'Khasoosiyat',
      about: 'Humare Bare Mein',
      contact: 'Raabta',
      login: 'Login',
      signup: 'Sign Up',
      language: 'English',
    }
  } as const;

  const t = content[currentLanguage];

  const openForgotPassword = () => {
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(true);
  };

  const openLogin = () => {
    setIsForgotPasswordOpen(false);
    setIsLoginOpen(true);
  };

  const handleNavClick = (item: string) => {
    if (activeView === 'home') {
      if (item === 'home') {
        onScrollToSection?.('hero');
      } else if (item === 'features') {
        onScrollToSection?.('journey');
      } else {
        onNavigate(item as 'home' | 'about' | 'contact');
      }
    } else {
      if (item === 'home') {
        onNavigate('home');
      } else if (item === 'features') {
        onNavigate('home');
        setTimeout(() => onScrollToSection?.('journey'), 100);
      } else {
        onNavigate(item as 'home' | 'about' | 'contact');
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <NafaVerseLogo className="h-8 w-8" />
              <span className="text-xl font-bold text-white">NafaVerse</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeView === 'home' ? 'text-[#00B8A9]' : 'text-white hover:text-[#00B8A9]'
                }`}
              >
                {t.home}
              </button>
              <button
                onClick={() => handleNavClick('features')}
                className="text-white hover:text-[#00B8A9] text-sm font-medium transition-colors duration-200"
              >
                {t.features}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeView === 'about' ? 'text-[#00B8A9]' : 'text-white hover:text-[#00B8A9]'
                }`}
              >
                {t.about}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeView === 'contact' ? 'text-[#00B8A9]' : 'text-white hover:text-[#00B8A9]'
                }`}
              >
                {t.contact}
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={onLanguageToggle}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10 border border-white/20"
              >
                {t.language}
              </Button>
              <div className="hidden sm:flex items-center space-x-2">
                <Button
                  onClick={() => setIsLoginOpen(true)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                >
                  {t.login}
                </Button>
                <Button
                  onClick={() => setIsLoginOpen(true)}
                  variant="glow"
                  className="text-white"
                >
                  {t.signup}
                </Button>
              </div>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden text-white">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-900 border-slate-700">
                  <SheetHeader>
                    <SheetTitle className="text-white">Menu</SheetTitle>
                    <SheetDescription className="text-slate-300">
                      Navigate through NafaVerse
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-4 mt-8">
                    <button
                      onClick={() => {
                        handleNavClick('home');
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-[#00B8A9] text-left py-2"
                    >
                      {t.home}
                    </button>
                    <button
                      onClick={() => {
                        handleNavClick('features');
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-[#00B8A9] text-left py-2"
                    >
                      {t.features}
                    </button>
                    <button
                      onClick={() => {
                        handleNavClick('about');
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-[#00B8A9] text-left py-2"
                    >
                      {t.about}
                    </button>
                    <button
                      onClick={() => {
                        handleNavClick('contact');
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-white hover:text-[#00B8A9] text-left py-2"
                    >
                      {t.contact}
                    </button>
                    <Button
                      onClick={() => {
                        setIsLoginOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="bg-gradient-to-r from-[#A78BFA] to-[#60A5FA] text-white mt-4"
                    >
                      {t.signup}
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToForgotPassword={openForgotPassword}
        currentLanguage={currentLanguage}
      />
      <ForgotPassword
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        onSwitchToLogin={openLogin}
        currentLanguage={currentLanguage}
      />
    </>
  );
};