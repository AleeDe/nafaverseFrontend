import { RefObject } from 'react';
import { HeroSection } from '../components/HeroSection';
import { JourneySection } from '../components/JourneySection';
import { InteractiveGraph } from '../components/InteractiveGraph';
import { InteractiveLearnPlayEarn } from '../components/InteractiveLearnPlayEarn';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

interface HomePageProps {
  currentLanguage: 'en' | 'ur';
  refs: {
    heroRef: RefObject<HTMLDivElement>;
    journeyRef: RefObject<HTMLDivElement>;
    graphRef: RefObject<HTMLDivElement>;
    learnRef: RefObject<HTMLDivElement>;
    ctaRef: RefObject<HTMLDivElement>;
  }
}

export function HomePage({ currentLanguage, refs }: HomePageProps) {
  return (
    <>
      <div ref={refs.heroRef}><HeroSection currentLanguage={currentLanguage} /></div>
      <div className="bg-white">
        <div ref={refs.journeyRef}><JourneySection currentLanguage={currentLanguage} /></div>
        <div ref={refs.graphRef}><InteractiveGraph currentLanguage={currentLanguage} /></div>
        <div ref={refs.learnRef}><InteractiveLearnPlayEarn currentLanguage={currentLanguage} /></div>
        <div ref={refs.ctaRef}><FinalCTA currentLanguage={currentLanguage} /></div>
        <Footer />
      </div>
    </>
  );
}
