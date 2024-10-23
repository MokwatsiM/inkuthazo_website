import React from 'react';
import { Umbrella } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <Umbrella className="h-8 w-8 text-yellow-500" />
          <span className="ml-2 text-xl font-bold text-white">Inkuthazo</span>
        </div>
        <p className="mt-4 text-center text-gray-400">
          Supporting our community with dignity and respect
        </p>
        <p className="mt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Inkuthazo Burial Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}