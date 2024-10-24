import React, { useState } from 'react';
import { Menu, X, Umbrella } from 'lucide-react';
// import logo from '../assets/inkuthazo-burial-no-bg.png'; 

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact', href: '#contact' },
  ];

  const logo =  require("../assets/image.png");

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50">
      <div className="max-w-7xl max-h-min px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
            {/* <div className="h-8 w-8 text-yellow-500">
                  {logo}
                </div> */}
            {/* <img src= {  logo} alt="Logo" className="h-16 w-16 text-yellow-500" /> */}
            <Umbrella className="invisible md:visible h-8 w-8 text-yellow-500" />
            <span className="md:hidden text-xl font-bold">Inkuthazo</span>

            <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-5 py-4 rounded-md text-xl font-medium hover:bg-gray-700 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          </div>
          
          {/* <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div> */}
            {/* <Umbrella className="md:visible ml-10 flex items-baseline space-x-4 h-8 w-8 text-yellow-500" /> */}
          
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}