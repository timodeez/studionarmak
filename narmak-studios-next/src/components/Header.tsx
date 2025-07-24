'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { Icons } from './Icons';
import { servicesCardData as servicesData } from '@/data/services';
import { useRef } from 'react';

// Add slugMap for correct service slugs
const slugMapData = [
  'brand-and-marketing-animation',
  'entertainment-and-original-ip',
  'pre-to-post-production-a-la-carte-or-full-stack',
  'creative-strategy-and-consulting',
  'design-and-collateral',
  'graphic-design-subscription'
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const servicesCardData = useMemo(() => servicesData, []);
  const slugMap = useMemo(() => slugMapData, []);

  const handleScroll = useCallback(() => {
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  // Close sidebar on outside click or esc
  useEffect(() => {
    if (!sidebarOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
      }
    };
    
    const handleClick = (e: MouseEvent) => {
      if (sidebarRef.current && e.target && !sidebarRef.current.contains(e.target as Node)) {
        setSidebarOpen(false);
      }
    };
    
    // Prevent body scroll when sidebar is open
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClick);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClick);
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(open => !open);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[99999] transition-all duration-300 ${isScrolled ? 'bg-charcoal/95 shadow-lg' : 'bg-transparent'}`} style={{ pointerEvents: 'auto' }}>
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
                <Link href="/portfolio/campaign" className="block px-4 py-2 hover:bg-neon-accent/20">
                  Campaign
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
              <div className="dropdown-menu absolute hidden group-hover:block top-full -left-4 bg-[#1a1a1c] rounded-md shadow-xl py-2 w-64 border-t-8 border-transparent max-h-96 overflow-y-auto text-base md:text-sm">
                {servicesCardData.map((service, idx) => (
                  <Link
                    key={service.title}
                    href={`/services/${slugMap[idx]}`}
                    className="block px-4 py-3 hover:bg-neon-accent/20 whitespace-normal text-base md:text-sm rounded transition-colors"
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
              <Link href="/studio" className="flex items-center gap-1 hover:text-neon-accent transition-colors">
                Studio {Icons.chevronDown}
              </Link>
              <div className="dropdown-menu absolute hidden group-hover:block top-full -left-4 bg-[#1a1a1c] rounded-md shadow-xl py-2 w-40 border-t-8 border-transparent">
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
            className="block md:hidden p-3 text-off-white focus:outline-none z-[100003] relative bg-transparent border-none hover:bg-white/10 rounded-md transition-colors"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            onClick={toggleSidebar}
            type="button"
            style={{ touchAction: 'manipulation' }}
          >
            {sidebarOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar - Full screen overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-sm">
          <div
            ref={sidebarRef}
            className="fixed inset-0 bg-charcoal flex flex-col h-full w-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header area with close button */}
            <div className="flex justify-between items-center p-6 border-b border-off-white/10">
              <Link href="/" className="font-display text-2xl font-bold text-off-white" onClick={closeSidebar}>
                Studio Narmak
              </Link>
              <button
                className="p-3 text-off-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close menu"
                onClick={closeSidebar}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation content */}
            <div className="flex-1 p-6">
                            <nav className="flex flex-col gap-8">
                <div className="border-b border-off-white/10 pb-6 mb-4">
                  <Link href="/work" className="flex items-center gap-2 py-4 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-2xl font-semibold" onClick={closeSidebar}>
                    Work
                  </Link>
                  <div className="pl-6 flex flex-col mt-4 gap-2">
                    <Link href="/portfolio/campaign" className="py-3 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-lg" onClick={closeSidebar}>
                      Campaign
                    </Link>
                    <Link href="/portfolio/originals" className="py-3 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-lg" onClick={closeSidebar}>
                      Originals
                    </Link>
                  </div>
                </div>
              
                              <div className="border-b border-off-white/10 pb-6 mb-4">
                  <Link href="/services" className="flex items-center gap-2 py-4 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-2xl font-semibold" onClick={closeSidebar}>
                    Services
                  </Link>
                  <div className="pl-6 flex flex-col mt-4 gap-2 max-h-64 overflow-y-auto">
                    {servicesCardData.map((service, idx) => (
                      <Link
                        key={service.title}
                        href={`/services/${slugMap[idx]}`}
                        className="py-3 px-4 rounded-lg hover:bg-neon-accent/10 text-base transition-colors"
                        onClick={closeSidebar}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="border-b border-off-white/10 pb-6 mb-4">
                  <Link href="/resources" className="flex items-center gap-2 py-4 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-2xl font-semibold" onClick={closeSidebar}>
                    Resources
                  </Link>
                  <div className="pl-6 flex flex-col mt-4 gap-2">
                    <Link href="/journal" className="py-3 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-lg" onClick={closeSidebar}>
                      Journal
                    </Link>
                    <Link href="/careers" className="py-3 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-lg" onClick={closeSidebar}>
                      Careers
                    </Link>
                  </div>
                </div>
                
                <div className="border-b border-off-white/10 pb-6 mb-4">
                  <Link href="/studio" className="flex items-center gap-2 py-4 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-2xl font-semibold" onClick={closeSidebar}>
                    Studio
                  </Link>
                  <div className="pl-6 flex flex-col mt-4 gap-2">
                    <Link href="/studio" className="py-3 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-lg" onClick={closeSidebar}>
                      Studio
                    </Link>
                    <Link href="/process" className="py-3 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-lg" onClick={closeSidebar}>
                      Process
                    </Link>
                    <Link href="/testimonials" className="py-3 px-4 rounded-lg hover:bg-neon-accent/10 transition-colors text-lg" onClick={closeSidebar}>
                      People Love Us
                    </Link>
                  </div>
                </div>
                
                <Link href="/get-a-quote" className="bg-neon-accent text-charcoal font-semibold py-4 px-6 rounded-lg text-xl text-center hover:scale-105 transition-transform duration-300 block" onClick={closeSidebar}>
                  Get a Quote
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 