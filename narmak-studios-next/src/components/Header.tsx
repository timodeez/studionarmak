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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link href="/" className="font-display text-2xl font-bold text-off-white">
          Studio Narmak
        </Link>
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
      </div>
    </header>
  );
} 