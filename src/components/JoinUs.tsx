import React from 'react';
import { ExternalLink } from 'lucide-react';

export function JoinUs() {
  return (
    <section id="join" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Inkuthazo Burial Club
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Take the first step towards securing peace of mind for you and your family
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">How to Join</h3>
            <p className="text-gray-600 mb-6">
              Complete our membership application form to begin your journey with Inkuthazo Burial Club.
              Our team will review your application and contact you with the next steps.
            </p>
            <a
              href="https://forms.gle/RjrtbQ34hjFjaJyx8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              Complete Application Form
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}