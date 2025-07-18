'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icons } from './Icons';
import { servicesCardData } from '@/data/services';

interface HeaderProps {
  onHomepage?: boolean;
}

export default function Header({ }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link href="/" className="font-display text-2xl font-bold text-off-white">
          Studio Narmak
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="group relative">
            <Link href="/work" className="flex items-center gap-1 hover:text-neon-accent transition-colors">
              Work {Icons.chevronDown}
            </Link>
            <div className="dropdown-menu absolute hidden group-hover:block top-full -left-4 bg-[#1a1a1c] rounded-md shadow-xl py-2 w-40 border-t-8 border-transparent">
              <Link href="/portfolio/creative" className="block px-4 py-2 hover:bg-neon-accent/20">
                Creative
              </Link>
              <Link href="/portfolio/originals" className="block px-4 py-2 hover:bg-neon-accent/20">
                Originals
              </Link>
            </div>
          </div>
          <div className="group relative">
            <Link href="/services" className="flex items-center gap-1 hover:text-neon-accent transition-colors">
              Services {Icons.chevronDown}
            </Link>
            <div className="dropdown-menu absolute hidden group-hover:block top-full -left-4 bg-[#1a1a1c] rounded-md shadow-xl py-2 w-64 border-t-8 border-transparent">
              {servicesCardData.map(service => (
                <Link
                  key={service.title}
                  href={`/services/${encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`}
                  className="block px-4 py-2 hover:bg-neon-accent/20 whitespace-normal text-sm"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="group relative">
            <Link href="/resources" className="flex items-center gap-1 hover:text-neon-accent transition-colors">
              Resources {Icons.chevronDown}
            </Link>
            <div className="dropdown-menu absolute hidden group-hover:block top-full -left-4 bg-[#1a1a1c] rounded-md shadow-xl py-2 w-40 border-t-8 border-transparent">
              <Link href="/journal" className="block px-4 py-2 hover:bg-neon-accent/20">
                Journal
              </Link>
              <Link href="/careers" className="block px-4 py-2 hover:bg-neon-accent/20">
                Careers
              </Link>
            </div>
          </div>
          <div className="group relative">
            <Link href="/about" className="flex items-center gap-1 hover:text-neon-accent transition-colors">
              Studio {Icons.chevronDown}
            </Link>
            <div className="dropdown-menu absolute hidden group-hover:block top-full -left-4 bg-[#1a1a1c] rounded-md shadow-xl py-2 w-40 border-t-8 border-transparent">
              <Link href="/about" className="block px-4 py-2 hover:bg-neon-accent/20">
                About
              </Link>
              <Link href="/process" className="block px-4 py-2 hover:bg-neon-accent/20">
                Process
              </Link>
              <Link href="/testimonials" className="block px-4 py-2 hover:bg-neon-accent/20">
                People Love Us
              </Link>
            </div>
          </div>
          <Link href="/get-a-quote" className="bg-neon-accent text-charcoal font-semibold py-2 px-5 rounded-lg transition-transform duration-300 hover:scale-105">
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-60"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-off-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-off-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-off-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMobileMenu}></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`mobile-menu-container fixed top-0 right-0 h-full w-80 bg-charcoal/95 backdrop-blur-lg shadow-xl transform transition-transform duration-300 z-50 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-off-white/10">
            <span className="font-display text-xl font-bold text-off-white">Menu</span>
            <button
              onClick={closeMobileMenu}
              className="w-8 h-8 flex items-center justify-center"
              aria-label="Close mobile menu"
            >
              <span className="block w-6 h-0.5 bg-off-white rotate-45 absolute"></span>
              <span className="block w-6 h-0.5 bg-off-white -rotate-45 absolute"></span>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="space-y-6">
              {/* Work Section */}
              <div>
                <Link href="/work" className="block text-xl font-semibold text-off-white mb-3 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                  Work
                </Link>
                <div className="ml-4 space-y-2">
                  <Link href="/portfolio/creative" className="block text-off-white/80 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                    Creative
                  </Link>
                  <Link href="/portfolio/originals" className="block text-off-white/80 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                    Originals
                  </Link>
                </div>
              </div>

              {/* Services Section */}
              <div>
                <Link href="/services" className="block text-xl font-semibold text-off-white mb-3 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                  Services
                </Link>
                <div className="ml-4 space-y-2">
                  {servicesCardData.map(service => (
                    <Link
                      key={service.title}
                      href={`/services/${encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`}
                      className="block text-off-white/80 hover:text-neon-accent transition-colors text-sm"
                      onClick={closeMobileMenu}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources Section */}
              <div>
                <Link href="/resources" className="block text-xl font-semibold text-off-white mb-3 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                  Resources
                </Link>
                <div className="ml-4 space-y-2">
                  <Link href="/journal" className="block text-off-white/80 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                    Journal
                  </Link>
                  <Link href="/careers" className="block text-off-white/80 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                    Careers
                  </Link>
                </div>
              </div>

              {/* Studio Section */}
              <div>
                <Link href="/about" className="block text-xl font-semibold text-off-white mb-3 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                  Studio
                </Link>
                <div className="ml-4 space-y-2">
                  <Link href="/about" className="block text-off-white/80 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                    About
                  </Link>
                  <Link href="/process" className="block text-off-white/80 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                    Process
                  </Link>
                  <Link href="/testimonials" className="block text-off-white/80 hover:text-neon-accent transition-colors" onClick={closeMobileMenu}>
                    People Love Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t border-off-white/10">
            <Link 
              href="/get-a-quote" 
              className="block w-full bg-neon-accent text-charcoal font-semibold py-3 px-5 rounded-lg text-center transition-transform duration-300 hover:scale-105"
              onClick={closeMobileMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 