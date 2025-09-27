import React from 'react';
import { Umbrella, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Join Us', href: '#join' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+27 (0) 734715116', href: 'tel:+27734715116' },
    { icon: Mail, text: 'inkuthazoburialclub@gmail.com', href: 'mailto:inkuthazoburialclub@gmail.com' },
    { icon: MapPin, text: 'Ratanda, Heidelberg, Gauteng', href: '#contact' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <Umbrella className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Inkuthazo</span>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Supporting our community with dignity and respect. Providing comprehensive
              burial club services to families across Gauteng for over a decade.
            </p>
            <div className="pt-4">
              <p className="text-primary-400 font-semibold text-sm uppercase tracking-wide">
                Trusted by 500+ Families
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-start space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200 group"
                    >
                      <IconComponent className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-secondary-800"></div>

        {/* Copyright and Legal */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Inkuthazo Burial Club. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Regulated Burial Society</span>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>Community Focused</span>
            <div className="w-px h-4 bg-gray-600"></div>
            <span>Established Heritage</span>
          </div>
        </div>

        {/* Call to Action Strip */}
        <div className="border-t border-secondary-800 py-6">
          <div className="text-center space-y-3">
            <p className="text-gray-300">
              Ready to join our community?
            </p>
            <a
              href="#join"
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}