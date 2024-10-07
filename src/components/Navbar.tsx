"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"; // Button from ShadCN

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-2xl font-bold text-primary">GemQuest</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="border-transparent text-neutralLight hover:border-secondary hover:text-secondary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/team"
                className="border-transparent text-neutralLight hover:border-secondary hover:text-secondary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Team
              </Link>
              <Link
                href="/plans"
                className="border-transparent text-neutralLight hover:border-secondary hover:text-secondary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Plans
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/auth/login">
              <Button variant="ghost" className="text-neutralLight hover:text-secondary">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="ml-4 bg-secondary text-white hover:bg-primary">Sign Up</Button>
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutralLight hover:text-secondary hover:bg-neutralDark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="bg-primary text-neutralLight block pl-3 pr-4 py-2 border-l-4 border-primary text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/team"
              className="border-transparent text-neutralLight hover:bg-neutralDark hover:border-secondary hover:text-secondary block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Team
            </Link>
            <Link
              href="/plans"
              className="border-transparent text-neutralLight hover:bg-neutralDark hover:border-secondary hover:text-secondary block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Plans
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-neutralDark">
            <div className="mt-3 space-y-1">
              <Link href="/auth/login">
                <Button
                  variant="ghost"
                  className="block px-4 py-2 text-base font-medium text-neutralLight hover:text-secondary hover:bg-neutralDark w-full text-left"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="block px-4 py-2 w-full text-base font-medium bg-secondary text-white hover:bg-primary">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
