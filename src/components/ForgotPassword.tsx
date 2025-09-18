import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';

interface ForgotPasswordProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
  currentLanguage: 'en' | 'ur';
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ isOpen, onClose, onSwitchToLogin, currentLanguage }) => {
  const [email, setEmail] = useState('');

  const content = {
    en: {
      title: 'Reset Your Password',
      subtitle: "Enter your email and we'll send you a link to get back into your account.",
      email: 'Email',
      sendLink: 'Send Reset Link',
      backToLogin: 'Back to Sign In',
    },
    ur: {
      title: 'Apna Password Reset Karein',
      subtitle: 'Apna email darj karein aur hum aapko account mein wapas anay ke liye ek link bhejenge.',
      email: 'Email',
      sendLink: 'Reset Link Bhejein',
      backToLogin: 'Sign In par Wapas Jayein',
    }
  } as const;

  const t = content[currentLanguage];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    // Here you would typically call an API to send the reset link
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md mx-auto">
        <div className="nv-card rounded-2xl overflow-hidden">
          <div className="nv-gradient-dark">
            <div className="p-6 border-b border-white/10 text-center">
              <h2 className="text-2xl font-bold text-white">{t.title}</h2>
              <p className="text-slate-300 mt-1 text-sm">{t.subtitle}</p>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-slate-300" />
              </button>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    {t.email}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full nv-glow-btn text-lg font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  {t.sendLink}
                </button>
              </form>
              
              <div className="text-center mt-6">
                <button
                  onClick={onSwitchToLogin}
                  className="text-sm text-purple-300 hover:text-purple-200 hover:underline"
                >
                  {t.backToLogin}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
