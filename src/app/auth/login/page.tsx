"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"; // Button from ShadCN
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", { email, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-neutralDark p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-neutralLight">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border-b-2 border-neutralLight bg-transparent text-neutralLight focus:outline-none focus:ring-0 focus:border-secondary placeholder-transparent peer"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor="email"
              className="absolute left-3 -top-2.5 bg-neutralDark px-1 text-sm text-neutralLight transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutralLight peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-secondary"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-3 py-2 border-b-2 border-neutralLight bg-transparent text-neutralLight focus:outline-none focus:ring-0 focus:border-secondary placeholder-transparent peer pr-10"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor="password"
              className="absolute left-3 -top-2.5 bg-neutralDark px-1 text-sm text-neutralLight transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutralLight peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-secondary"
            >
              Password
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutralLight hover:text-secondary"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <Link href="/auth/reset-password" className="text-sm text-secondary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Button type="submit" className="w-full bg-secondary text-white hover:bg-primary">
            Log In
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-neutralLight">
          Create an account?{' '}
          <Link href="/signup" className="text-secondary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
