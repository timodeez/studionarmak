'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icons } from './Icons';
import { servicesCardData } from '@/data/services';
import { useRef } from 'react';

interface HeaderProps {
  onHomepage?: boolean;
}

export default function Header({ }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on outside click or esc
  useEffect(() => {
    if (!sidebarOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setSidebarOpen(false);
    }
    function handleClick(e: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [sidebarOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link href="/" className="font-display text-2xl font-bold text-off-white">
          Studio Narmak
        </Link>
        {/* Desktop nav */}
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
        {/* Hamburger for mobile */}
        <button
          className="block md:hidden p-2 text-off-white focus:outline-none"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        {/* Sidebar drawer */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 flex">
            <div ref={sidebarRef} className="w-72 max-w-full bg-charcoal h-full shadow-xl p-6 flex flex-col gap-6 animate-slide-in-left relative">
              <button
                className="absolute top-4 right-4 p-2 text-off-white"
                aria-label="Close menu"
                onClick={() => setSidebarOpen(false)}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <Link href="/" className="font-display text-2xl font-bold text-off-white mb-6" onClick={() => setSidebarOpen(false)}>
                Studio Narmak
              </Link>
              <div className="flex flex-col gap-2">
                <div>
                  <Link href="/work" className="flex items-center gap-2 py-2 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                    Work
                  </Link>
                  <div className="pl-4 flex flex-col">
                    <Link href="/portfolio/creative" className="py-1 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                      Creative
                    </Link>
                    <Link href="/portfolio/originals" className="py-1 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                      Originals
                    </Link>
                  </div>
                </div>
                <div>
                  <Link href="/services" className="flex items-center gap-2 py-2 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                    Services
                  </Link>
                  <div className="pl-4 flex flex-col">
                    {servicesCardData.map(service => (
                      <Link
                        key={service.title}
                        href={`/services/${encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`}
                        className="py-1 px-2 rounded hover:bg-neon-accent/10 text-sm"
                        onClick={() => setSidebarOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <Link href="/resources" className="flex items-center gap-2 py-2 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                    Resources
                  </Link>
                  <div className="pl-4 flex flex-col">
                    <Link href="/journal" className="py-1 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                      Journal
                    </Link>
                    <Link href="/careers" className="py-1 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                      Careers
                    </Link>
                  </div>
                </div>
                <div>
                  <Link href="/about" className="flex items-center gap-2 py-2 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                    Studio
                  </Link>
                  <div className="pl-4 flex flex-col">
                    <Link href="/about" className="py-1 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                      About
                    </Link>
                    <Link href="/process" className="py-1 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                      Process
                    </Link>
                    <Link href="/testimonials" className="py-1 px-2 rounded hover:bg-neon-accent/10" onClick={() => setSidebarOpen(false)}>
                      People Love Us
                    </Link>
                  </div>
                </div>
                <Link href="/get-a-quote" className="bg-neon-accent text-charcoal font-semibold py-2 px-5 rounded-lg mt-4 text-center hover:scale-105 transition-transform duration-300" onClick={() => setSidebarOpen(false)}>
                  Get a Quote
                </Link>
              </div>
            </div>
            {/* Clickable overlay to close */}
            <div className="flex-1" />
          </div>
        )}
      </div>
    </header>
  );
} 