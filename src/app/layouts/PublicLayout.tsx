// src/app/layouts/PublicLayout.tsx

import Navbar from '@/components/Navbar';
import React from 'react';

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {children} {/* Footer */}
      <footer className="bg-background text-lightGray py-6 mt-12 border-t-4 border-primary">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 GemQuest. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-secondary hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-secondary hover:underline">Terms of Service</a>
            <a href="#" className="hover:text-secondary hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
