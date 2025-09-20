import { useDashboard } from '../components/DashboardContext';
import { RefObject } from 'react';
import { HeroSection } from '../components/HeroSection';
import { JourneySection } from '../components/JourneySection';
import { InteractiveGraph } from '../components/InteractiveGraph';
import { InteractiveLearnPlayEarn } from '../components/InteractiveLearnPlayEarn';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { DashboardSheet } from '../components/DashboardSheet';

interface HomePageProps {
  refs: {
    heroRef: RefObject<HTMLDivElement>;
    journeyRef: RefObject<HTMLDivElement>;
    graphRef: RefObject<HTMLDivElement>;
    learnRef: RefObject<HTMLDivElement>;
    ctaRef: RefObject<HTMLDivElement>;
  };
}

export function HomePage({ refs }: HomePageProps) {
  const { dashboardOpen, setDashboardOpen, currentLanguage } = useDashboard();

  return (
    <>
      {/* Dashboard Toggle Icon - Top Left */}
      {!dashboardOpen && (
        <div style={{ position: 'fixed', top: 70, left: 20, zIndex: 1100 }}>
          <button
            onClick={() => setDashboardOpen(true)}
            style={{
              background: 'linear-gradient(135deg, #a18fff 0%, #5fd1ff 100%)',
              border: 'none',
              borderRadius: '12px',
              width: 48,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
            }}
            aria-label="Open Dashboard"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="9" r="4" stroke="#fff" strokeWidth="2" fill="none"/>
              <rect x="5" y="16" width="14" height="4" rx="2" stroke="#fff" strokeWidth="2" fill="none"/>
            </svg>
          </button>
        </div>
      )}
      <DashboardSheet />
      <div ref={refs.heroRef}><HeroSection /></div>
      <div className="bg-white">
        <div ref={refs.journeyRef}><JourneySection /></div>
        <div ref={refs.graphRef}><InteractiveGraph /></div>
        <div ref={refs.learnRef}><InteractiveLearnPlayEarn /></div>
        <div ref={refs.ctaRef}><FinalCTA /></div>
        <Footer />
      </div>
    </>
  );
}
