// src/types/next-auth.d.ts

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      // Add any other fields you need, like roles, etc.
      role?: string;
    };
  }

  interface User {
    id: string;
    role?: string; // Optional, but you can add roles or other fields here too
  }
}
