"use client";
// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <div className="min-h-screen bg-background">
            <main >{children}</main>
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
