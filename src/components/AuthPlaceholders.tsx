import React from 'react';

export const LoginPlaceholder = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center mb-4 text-3xl">🔒</div>
    <h2 className="text-2xl font-bold mb-2">Login Placeholder</h2>
    <p className="text-gray-500">This is where your login form will go.</p>
  </div>
);

export const SignupPlaceholder = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-16 h-16 rounded-full bg-green-200 flex items-center justify-center mb-4 text-3xl">📝</div>
    <h2 className="text-2xl font-bold mb-2">Signup Placeholder</h2>
    <p className="text-gray-500">This is where your signup form will go.</p>
  </div>
);

export const ForgotPasswordPlaceholder = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-4 text-3xl">❓</div>
    <h2 className="text-2xl font-bold mb-2">Forgot Password Placeholder</h2>
    <p className="text-gray-500">This is where your forgot password form will go.</p>
  </div>
);
