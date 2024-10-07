//src/app/auth/register
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import StyledInput from "@/components/StyledInput";
import { registerUser } from "@/services/authService"; // Importez le service d'authentification
import PublicLayout from "@/app/layouts/PublicLayout";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    confirmPassword: null,
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

    if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match." }));
      formIsValid = false;
    } else {
      setErrors((prev) => ({ ...prev, confirmPassword: null }));
    }

    if (!formIsValid) {
      return;
    }

    setIsLoading(true);

    try {
      await registerUser(email, password);
      router.push("/auth/login?registerSuccess=true");
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
          <h1 className="text-2xl font-bold mb-6 text-center text-neutralLight">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <StyledInput
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={errors.email} // Passer l'erreur si elle existe
            />
            <StyledInput
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              error={errors.password} // Passer l'erreur si elle existe
              showPasswordToggle={true} // Enable password toggle
            />
            <StyledInput
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              error={errors.confirmPassword} // Passer l'erreur si elle existe
              showPasswordToggle={true} // Enable password toggle
            />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Button type="submit" className="w-full bg-secondary text-white hover:bg-primary" disabled={isLoading}>
              {isLoading ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-neutralLight">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-secondary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}
