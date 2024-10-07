"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import StyledInput from "@/components/StyledInput";
import { updatePassword } from "@/services/authService";
import PublicLayout from "@/app/layouts/PublicLayout";

export default function NewPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Get the reset token from the URL parameters
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing token.");
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPasswordError(null);

    if (!newPassword || !confirmPassword) {
      setPasswordError("Both password fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      // Send request to update password
      await updatePassword(token as string, newPassword);
      setSuccess(true);
      setTimeout(() => {
        router.push("/auth/login"); // Redirect to login page after success
      }, 3000); // Delay before redirecting
    } catch (err: any) {
      setError(err.message || "An error occurred while updating the password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="bg-neutralDark p-8 rounded-lg w-full max-w-md hover:border-primary hover:shadow-lg hover:shadow-primary transition-shadow duration-300">
          <h1 className="text-2xl font-bold mb-6 text-center text-neutralLight">Set New Password</h1>
          {success ? (
            <p className="text-center text-success">
              Password successfully updated! Redirecting to login...
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <StyledInput
                label="New Password"
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                error={passwordError} // Show error if any
                showPasswordToggle={true} // Enable toggle visibility
              />
              <StyledInput
                label="Confirm New Password"
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                error={passwordError} // Show error if any
                showPasswordToggle={true} // Enable toggle visibility
              />
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <Button
                type="submit"
                className="w-full bg-secondary text-white hover:bg-primary"
                disabled={isLoading || !token}
              >
                {isLoading ? "Updating..." : "Update Password"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </PublicLayout>
  );
}
