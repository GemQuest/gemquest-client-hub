'use client'

import { useState } from 'react';
import StyledInput from '@/components/StyledInput';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send login request to backend
  };

  return (
    <div className="flex justify-center items-center h-screen bg-darkGray">
      <form onSubmit={handleResetPassword} className="p-6 bg-neutralDark shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-neutralLight">Reset Password</h2>
        
        <StyledInput
          label="Email"
          type="email"
          id="reset-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <button type="submit" className="w-full bg-secondary text-white py-2 rounded-lg mt-4 hover:bg-primary transition-all">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
