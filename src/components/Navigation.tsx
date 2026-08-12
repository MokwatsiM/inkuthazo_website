import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_mark.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /** Kept short so the bar never wraps; the full set lives in the mobile menu. */
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'What We Offer', href: '#pillars' },
    { name: 'Membership', href: '#membership' },
    { name: 'Gatherings', href: '#gatherings' },
    { name: 'FAQs', href: '#faq' },
  ];

  /** Mobile menu shows everything, where vertical space is not a constraint. */
  const mobileNavItems = [
    { name: 'Home', href: '#home' },
    ...navItems.slice(0, 2),
    { name: 'How It Works', href: '#how-it-works' },
    ...navItems.slice(2),
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'border-b border-stone-200 backdrop-blur bg-white/90 shadow-sm'
        : 'border-b border-transparent backdrop-blur bg-white/70'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-2 min-w-0">
          <img
            src={logo}
            alt="Inkuthazo Social Club logo"
            className="h-9 w-9 shrink-0 object-contain"
            width="36"
            height="36"
          />
          <div className="flex flex-col leading-none min-w-0">
            <span className="text-base font-bold tracking-tight text-stone-900 whitespace-nowrap">
              Inkuthazo Social Club
            </span>
            <span className="hidden sm:block text-xs text-stone-500 whitespace-nowrap">
              Community • Connection • Celebration
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm shrink-0">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-stone-600 hover:text-ochre-700 transition-colors whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#join"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-900 focus-visible:ring-offset-2 text-xs sm:text-sm font-semibold tracking-tight text-white shadow-sm hover:shadow-md transition-all py-3 px-4"
          >
            Become a member
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex items-center justify-center p-3 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-stone-200 bg-white/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {mobileNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#join"
              className="block mt-2 text-center px-4 py-3 rounded-full bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-900 focus-visible:ring-offset-2 text-white font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Become a member
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
