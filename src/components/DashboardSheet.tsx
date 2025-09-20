import React from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet';
import { LogIn, Settings, TrendingUp, User, Sparkles } from 'lucide-react';
import { useDashboard } from './DashboardContext';

export const DashboardSheet: React.FC = () => {
  const { dashboardOpen, setDashboardOpen, currentLanguage } = useDashboard();

  const t = {
    en: {
      dashboard: 'Dashboard',
      profile: 'Guest User',
      tagline: 'Start your journey',
      balance: 'Coins Balance',
      progress: 'Learning Progress',
      settings: 'Settings',
      login: 'Login / Sign Up',
      tip: 'Complete a quiz to earn coins',
      lessons: 'Lessons',
      achievements: 'Achievements',
      privacy: 'By continuing, you agree to our Terms & Privacy.'
    },
    ur: {
      dashboard: 'Dashboard',
      profile: 'Guest User',
      tagline: 'Apna journey shuru karein',
      balance: 'Coins Balance',
      progress: 'Learning Progress',
      settings: 'Settings',
      login: 'Login / Sign Up',
      tip: 'Quiz complete karke coins kamayein',
      lessons: 'Lessons',
      achievements: 'Achievements',
      privacy: 'Aagay barhne se aap hamari Terms & Privacy se mutafiq hain.'
    }
  } as const;

  const tt = t[currentLanguage];

  return (
    <Sheet open={dashboardOpen} onOpenChange={setDashboardOpen}>
      <SheetContent side="left" className="w-80 bg-gradient-to-br from-[#1a1630] via-[#4B3F72] to-[#1b2b2a] border-[rgba(167,134,223,0.3)] p-0">
        <div className="flex flex-col h-full">
          <SheetHeader>
            <SheetTitle className="text-white text-xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[rgb(var(--nv-accent))]" /> {tt.dashboard}
            </SheetTitle>
            <SheetDescription className="text-purple-200">
              {tt.tagline}
            </SheetDescription>
          </SheetHeader>

          {/* Scrollable content */}
          <div className="flex-1 overflow-auto p-5 space-y-6">
            {/* Guest profile card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[rgb(var(--nv-secondary))] rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{tt.profile}</h3>
                  <p className="text-purple-200 text-sm">{tt.tagline}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-200 text-sm">{tt.balance}</span>
                  <span className="text-[rgb(var(--nv-accent))] font-bold">0 🪙</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2"></div>
                <p className="text-xs text-purple-200 mt-2">{tt.tip}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                  <p className="text-[rgb(var(--nv-accent))] font-bold">0</p>
                  <p className="text-xs text-purple-200">{tt.lessons}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                  <p className="text-[rgb(var(--nv-accent))] font-bold">0</p>
                  <p className="text-xs text-purple-200">{tt.achievements}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
                <TrendingUp className="w-4 h-4 mr-3" />
                View Portfolio
              </Button>
              <Button className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-0">
                <Settings className="w-4 h-4 mr-3" />
                {tt.settings}
              </Button>
            </div>
          </div>

          {/* Sticky bottom auth */}
          <div className="p-4 border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <Button className="nv-glow-btn w-full h-12 rounded-xl">
              <LogIn className="w-4 h-4 mr-2" /> {tt.login}
            </Button>
            <p className="text-[11px] text-purple-200/80 text-center mt-3 leading-snug">{tt.privacy}</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
