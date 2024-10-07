//src/app/auth/reset-password
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import StyledInput from "@/components/StyledInput";
import { resetPassword } from "@/services/authService"
import PublicLayout from "@/app/layouts/PublicLayout";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setEmailError(null);

    if (!email.includes("@")) {
      setEmailError("Invalid email address.");
      return;
    }

    setIsLoading(true);

    try {
      await resetPassword(email); // Service to send reset email
      setSuccess(true);
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
          <h1 className="text-2xl font-bold mb-6 text-center text-neutralLight">Reset Password</h1>
          {success ? (
            <p className="text-center text-green-500">Password reset email sent. Check your inbox.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <StyledInput
                label="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                error={emailError} // Pass the email error message
              />
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <Button type="submit" className="w-full bg-secondary text-white hover:bg-primary" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </PublicLayout>
  );
}
