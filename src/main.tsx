import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.router'; // Use the router App
import './index.css';
import { DashboardProvider } from './components/DashboardContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </React.StrictMode>
);
