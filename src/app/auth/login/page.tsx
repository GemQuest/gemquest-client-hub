'use client'

import { useState } from 'react';
import StyledInput from '@/components/StyledInput';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send login request to backend
  };

  return (
    <div className="flex justify-center items-center h-screen bg-darkGray">
      <form onSubmit={handleLogin} className="p-6 bg-neutralDark shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-neutralLight">Login</h2>
        
        <StyledInput
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <StyledInput
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit" className="w-full bg-secondary text-white py-2 rounded-lg mt-4 hover:bg-primary transition-all">
          Login
        </button>

        <div className="mt-4 text-center">
          <Link href="/auth/reset-password" className="text-neutralLight hover:text-secondary transition-all">
            Forgot your password?
          </Link>
        </div>
      </form>
    </div>
  );
}
