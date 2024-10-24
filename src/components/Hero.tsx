import React from 'react';
import { Shield } from 'lucide-react';

const logo = require("../assets/inkuthazo.jpeg");



export function Hero() {
  return (
    <div id="home" className="relative bg-gray-900 pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src=
          // "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80"
          "https://rwrmzntjrhjqurqzudum.supabase.co/storage/v1/object/public/images/bg-image.png?auto=format&fit=crop&q=80"
          // {bgImage}
          alt="Community support"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
           <img src= {  logo} alt="Logo" className="h-20 w-20 text-yellow-500 mx-auto mb-4" />
          {/* <Shield className="h-16 w-16 text-yellow-500 mx-auto mb-4" /> */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Inkuthazo Burial Club
          </h1>
           <i className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">Inhlangano Inamandla</i>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Supporting our community with dignity and respect during times of bereavement.
            Join our trusted network of mutual support and care.
          </p>
         
          <div className="mt-10">
            <a
              href="#join"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-400 transition-colors"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}