import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/Innings_new_logo.png';
import { WHATSAPP_LINK } from '../constants/contact';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'App', href: '#app' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg shadow-green-primary/10 border-b border-dark-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 min-h-[3.5rem]">
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
              <img
                src={logoImg}
                alt="Innings"
                className="h-10 md:h-12 w-auto object-contain rounded-xl border-2 border-green-primary/20 shadow-lg shadow-green-primary/10 transition-all duration-300 hover:border-green-primary/40 hover:shadow-green-primary/20 p-1.5 bg-dark-card/50 backdrop-blur-sm"
              />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-green-primary transition-colors duration-200 text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-5 animate-pulse-green">
              Get Innings ID
            </a>
          </div>

          <button
            className="md:hidden text-white p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-bg/98 backdrop-blur-md border-t border-dark-border max-h-[85vh] overflow-y-auto overscroll-contain">
          <div className="px-4 py-4 space-y-3 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-green-primary py-2 transition-colors border-b border-dark-border/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm">
                Get Innings ID
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
