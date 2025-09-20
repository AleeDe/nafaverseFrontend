import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DashboardContextType {
  dashboardOpen: boolean;
  setDashboardOpen: (open: boolean) => void;
  currentLanguage: 'en' | 'ur';
  setCurrentLanguage: (lang: 'en' | 'ur') => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ur'>('en');

  const value = { dashboardOpen, setDashboardOpen, currentLanguage, setCurrentLanguage };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};