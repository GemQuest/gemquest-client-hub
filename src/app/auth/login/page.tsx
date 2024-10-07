//src/app/auth/login
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import StyledInput from "@/components/StyledInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { loginUser } from "@/services/authService"; // Service to handle login logic
import PublicLayout from "@/app/layouts/PublicLayout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    let formIsValid = true;

    // Validation des champs
    if (!email.includes("@")) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address." }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }

    if (password.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters." }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, password: null }));
    }

    if (!formIsValid) {
      return;
    }

    setIsLoading(true);

    try {
      await loginUser(email, password); // Login service
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="bg-neutralDark p-8 rounded-lg w-full max-w-md hover:border-primary hover:shadow-lg hover:shadow-primary transition-shadow duration-300">
          <h1 className="text-2xl font-bold mb-6 text-center text-neutralLight">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <StyledInput
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={errors.email} // Pass the error message
            />
            <StyledInput
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              error={errors.password} // Pass the error message
              showPasswordToggle={true} // Enable password toggle
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Button type="submit" className="w-full bg-secondary text-white hover:bg-primary" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-neutralLight">
            Forgot your password?{' '}
            <Link href="/auth/reset-password" className="text-secondary hover:underline">
              Reset Password
            </Link>
          </p>
          <p className="mt-4 text-center text-sm text-neutralLight">
            Don’t have an account?{' '}
            <Link href="/auth/register" className="text-secondary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}
