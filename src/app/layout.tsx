// src/app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>

      <Navbar />
        <div className="min-h-screen bg-gray-100">
          {/* Add your navbars, sidebars here */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
