import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-bgPaper">
      <Header />
      
      {/* 
        This main container simulates the "Paper" document.
        Centered, max-width constrained, white background, shadow.
      */}
      <main className="flex-grow w-full max-w-4xl mx-auto bg-surface shadow-paper my-0 md:my-8 min-h-[80vh] relative overflow-hidden">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;