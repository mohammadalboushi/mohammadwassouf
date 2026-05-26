import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Sidebar />
      <main className="lg:mr-72 min-h-screen">
        {children}
      </main>
    </div>
  );
}