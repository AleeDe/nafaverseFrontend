import { useState, useRef, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LayoutDashboard } from 'lucide-react';
import { Button } from './components/ui/button';
import { DashboardSheet } from './components/DashboardSheet';
import { LoginPlaceholder, SignupPlaceholder, ForgotPasswordPlaceholder } from './components/AuthPlaceholders';
import { Toaster } from 'react-hot-toast';
import { handleGoogleOAuthCallback } from './api/apiService';

type View = 'home' | 'about' | 'contact' | 'login' | 'signup' | 'forgot';

function App() {
  const [activeView, setActiveView] = useState<View>('home');
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ur'>('en');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulated auth state
  const [ready, setReady] = useState(false);

  // Refs for scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);
  const learnRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    if (token) {
      handleGoogleOAuthCallback();
      // Don't render app while redirecting
      return;
    }
    setReady(true);
  }, []);

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

  // Public views
  const renderPublicContent = () => {
    switch (activeView) {
      case 'about':
        return <AboutPage currentLanguage={currentLanguage} />;
      case 'contact':
        return <ContactPage currentLanguage={currentLanguage} />;
      case 'login':
        return <LoginPlaceholder />;
      case 'signup':
        return <SignupPlaceholder />;
      case 'forgot':
        return <ForgotPasswordPlaceholder />;
      case 'home':
      default:
        return <HomePage currentLanguage={currentLanguage} refs={{ heroRef, journeyRef, graphRef, learnRef, ctaRef }} />;
    }
  };

  // Protected views (future)
  const renderProtectedContent = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4 text-3xl">🔐</div>
      <h2 className="text-2xl font-bold mb-2">Protected Content</h2>
      <p className="text-gray-500">This content is only visible to authenticated users.</p>
    </div>
  );

  if (!ready) return null;

  return (
    <>
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
          {activeView === 'home' && (
            <>
              <Button
                aria-label="Open Dashboard"
                variant="soft"
                size="sm"
                onClick={() => setIsDashboardOpen(true)}
                className="fixed left-4 top-24 md:top-20 z-40 bg-white/10 border border-white/20 hover:bg-white/20 text-white"
              >
                <LayoutDashboard className="h-5 w-5" />
              </Button>
              <DashboardSheet
                open={isDashboardOpen}
                onOpenChange={setIsDashboardOpen}
              />
            </>
          )}
          <main>
            {isAuthenticated ? renderProtectedContent() : renderPublicContent()}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;