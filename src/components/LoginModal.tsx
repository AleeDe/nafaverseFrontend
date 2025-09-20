import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { apiService } from '../api/apiService';
import { useDashboard } from './DashboardContext';
import { Toaster, toast } from 'sonner';

export const LoginModal = ({ isOpen, onClose }) => {
    const { currentLanguage } = useDashboard();
    const navigate = useNavigate();

    const [isLoginView, setIsLoginView] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const content = {
        en: {
            loginTitle: 'Welcome back',
            signupTitle: 'Join NafaVerse',
            loginSubtitle: 'Enter your credentials to access your account.',
            signupSubtitle: 'Create an account to get started.',
            emailLabel: 'Email',
            passwordLabel: 'Password',
            loginButton: 'Login',
            signupButton: 'Sign Up',
            forgotPassword: 'Forgot Password?',
            noAccount: "Don't have an account?",
            haveAccount: 'Already have an account?',
            switchToSignup: 'Sign Up',
            switchToLogin: 'Login',
        },
        ur: {
            loginTitle: 'خوش آمدید',
            signupTitle: 'NafaVerse میں شامل ہوں',
            loginSubtitle: 'اپنے اکاؤنٹ تک رسائی کے لیے اپنی اسناد درج کریں۔',
            signupSubtitle: 'شروع کرنے کے لیے ایک اکاؤنٹ بنائیں۔',
            emailLabel: 'ای میل',
            passwordLabel: 'پاس ورڈ',
            loginButton: 'لاگ ان کریں',
            signupButton: 'سائن اپ کریں',
            forgotPassword: 'پاس ورڈ بھول گئے؟',
            noAccount: 'اکاؤنٹ نہیں ہے؟',
            haveAccount: 'پہلے سے اکاؤنٹ ہے؟',
            switchToSignup: 'سائن اپ کریں',
            switchToLogin: 'لاگ ان کریں',
        }
    };

    const t = content[currentLanguage];

    const handleForgotPasswordClick = () => {
        onClose();
        navigate('/forgot-password');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login/signup logic here
        toast.info('Login/Signup functionality not implemented yet.');
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Toaster position="top-center" />
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-md relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-bold text-center mb-2">{isLoginView ? t.loginTitle : t.signupTitle}</h2>
                <p className="text-center text-gray-500 mb-6">{isLoginView ? t.loginSubtitle : t.signupSubtitle}</p>
                
                <form onSubmit={handleSubmit}>
                    {/* Form fields will go here */}
                </form>

                <div className="text-center mt-4">
                    <button onClick={() => setIsLoginView(!isLoginView)} className="text-sm text-indigo-600 hover:underline">
                        {isLoginView ? `${t.noAccount} ${t.switchToSignup}` : `${t.haveAccount} ${t.switchToLogin}`}
                    </button>
                </div>
            </div>
        </div>
    );
};