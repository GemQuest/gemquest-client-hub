// components/DashboardLayout.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Home, Users, FileText, Settings, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    if (sidebarOpen) setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-neutralDark">
      {/* Responsive sidebar */}
      <aside
        ref={sidebarRef}
        className={`bg-background shadow-md transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-64' : 'w-0 -ml-64'
        } md:w-64 md:ml-0 fixed md:static h-full z-30 `}
      >
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-6 w-6 text-neutralLight" />
          </Button>
        </div>
        <nav className="mt-6">
          <Link href="/dashboard" onClick={handleLinkClick} className="flex items-center px-4 py-2 text-neutralLight hover:bg-neutralDark">
            <Home className="w-5 h-5 mr-2" />
            Home
          </Link>
          <Link href="/dashboard/users" onClick={handleLinkClick} className="flex items-center px-4 py-2 text-neutralLight hover:bg-neutralDark">
            <Users className="w-5 h-5 mr-2" />
            Users
          </Link>
          <Link href="#" onClick={handleLinkClick} className="flex items-center px-4 py-2 text-neutralLight hover:bg-neutralDark">
            <FileText className="w-5 h-5 mr-2" />
            Experiences
          </Link>
          <Link href="#" onClick={handleLinkClick} className="flex items-center px-4 py-2 text-neutralLight hover:bg-neutralDark">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Top bar with menu toggle and logout button */}
        <div className="bg-background shadow-sm">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Button variant="ghost" className="md:hidden text-neutralLight" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
              <Menu className="w-5 h-5 " />
            </Button>
            <div className="flex-grow md:flex-grow-0"></div>
            <Button 
              variant="ghost" 
              className="text-neutralLight hover:text-primary" 
              onClick={() => signOut()}
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Children components */}
        <div className="container mx-auto p-4 space-y-8">
          {children}
        </div>
      </main>
    </div>
  );
}
