// src/app/services/authService.ts

const API_URL = "http://localhost:3030/auth"; // Remplacez par votre URL d'API

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Login failed. Please try again.");
  }

  const data = await response.json();
  return data.token; // Renvoie le token
};

export const resetPassword = async (email: string) => {
  const response = await fetch(`${API_URL}/request-password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Failed to reset password. Please try again.");
  }

  return await response.json(); // Renvoie des informations supplémentaires si nécessaire
};

export const registerUser = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Registration failed. Please try again.");
  }

  return await response.json(); // Renvoie des informations supplémentaires si nécessaire
};

export const updatePassword = async (token: string, newPassword: string) => {
  const response = await fetch(`${API_URL}/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, newPassword }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Failed to update password. Please try again.");
  }

  return await response.json(); // Return any additional information if needed
};
