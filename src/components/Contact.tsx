import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Phone className="h-8 w-8 text-yellow-500" />
            <h3 className="mt-4 text-lg font-medium">Phone</h3>
            <p className="mt-2 text-gray-600">+27 (0) 123 456 789</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <Mail className="h-8 w-8 text-yellow-500" />
            <h3 className="mt-4 text-lg font-medium">Email</h3>
            <p className="mt-2 text-gray-600">info@inkuthazo.co.za</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
            <MapPin className="h-8 w-8 text-yellow-500" />
            <h3 className="mt-4 text-lg font-medium">Office</h3>
            <p className="mt-2 text-gray-600 text-center">
              123 Main Street<br />
              Johannesburg, 2000<br />
              South Africa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}