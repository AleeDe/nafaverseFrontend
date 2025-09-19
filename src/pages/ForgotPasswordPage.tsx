import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../api/apiService';
import toast from 'react-hot-toast';
import { Mail } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await apiService.requestPasswordReset(email);
      toast.success('Password reset email sent.', { position: 'top-center' });
      
      setEmail('');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (err: any) {
      toast.error('Something went wrong. Please try again.', { position: 'top-center' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E1B4B] via-[#0F0A2E] to-[#312E81] px-4">
      <div className="w-full max-w-md nv-card rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Reset Your Password</h2>
        <p className="text-purple-100 mb-8 text-center">Enter your email and we'll send you a link to get back into your account.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-200 mb-2">Email</label>
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
            className="w-full nv-glow-btn text-lg font-semibold py-3 rounded-xl transition-all duration-300 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;