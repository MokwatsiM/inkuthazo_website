import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}