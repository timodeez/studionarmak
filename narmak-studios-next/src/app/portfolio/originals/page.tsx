'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { originalsPortfolio as portfolioData } from '@/data/originalsPortfolio';
import { useEffect, useCallback, useMemo } from 'react';

export default function OriginalsPage() {
  const originalsPortfolio = useMemo(() => portfolioData, []);
  
  const handleScrollToHash = useCallback(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const timeoutId = setTimeout(() => {
          const headerOffset = 80;
          const elRect = el.getBoundingClientRect();
          const absoluteElementTop = elRect.top + window.pageYOffset;
          const elHeight = elRect.height;
          const windowHeight = window.innerHeight;
          // Special handling for last two items
          const isLastItem = id === `originals-${originalsPortfolio[originalsPortfolio.length - 1].id}`;
          const isSecondLastItem = originalsPortfolio.length > 1 && id === `originals-${originalsPortfolio[originalsPortfolio.length - 2].id}`;

          let scrollTo;
          if (elHeight > windowHeight) {
            scrollTo = absoluteElementTop - headerOffset;
          } else if (isLastItem || isSecondLastItem) {
            // Center perfectly even if not a full row
            scrollTo = absoluteElementTop - (windowHeight - elHeight) / 2;
          } else {
            scrollTo = absoluteElementTop - windowHeight / 2 + elHeight / 2;
          }
          window.scrollTo({ top: scrollTo, behavior: 'smooth' });
        }, 200);
        return () => {
          clearTimeout(timeoutId);
        };
      }
    }
  }, [originalsPortfolio]);

  useEffect(() => {
    handleScrollToHash();
  }, [handleScrollToHash]);

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <AnimatedSection customClass="text-center mb-16">
          <h1 className="text-5xl font-display mb-4">Originals Portfolio</h1>
          <p className="text-lg text-off-white/70 text-center max-w-3xl mx-auto mb-8">
            Worlds, characters, and stories born from our own creative spark.
          </p>
          
          {/* Navigation button to work page */}
          <div className="flex justify-center mb-8">
            <Link 
              href="/work"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gradient-start to-gradient-end text-white font-bold px-6 py-3 rounded-full hover:from-gradient-end hover:to-gradient-start transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m4-10H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2z" />
              </svg>
              Watch Our Reel
            </Link>
          </div>
        </AnimatedSection>
        
        <div className="space-y-24">
          {originalsPortfolio.map((item, index) => {
            const isReversed = index % 2 !== 0;
            const isVideo = item.mediaUrl.endsWith('.mp4');
            return (
              <div
                key={item.id}
                id={`originals-${item.id}`}
                className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center transition-all duration-1000 opacity-100 translate-y-0 ${
                  isReversed ? 'md:flex-row-reverse' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-full md:w-3/5">
                  {isVideo ? (
                    <video 
                      src={item.mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-lg shadow-2xl w-full object-cover"
                      onError={(e) => {
                        console.error('Video load error:', item.mediaUrl);
                        // Fallback to homeImg if video fails
                        const video = e.currentTarget;
                        if (item.homeImg) {
                          video.style.display = 'none';
                          const img = document.createElement('img');
                          img.src = item.homeImg;
                          img.className = video.className;
                          img.alt = item.title;
                          video.parentNode?.appendChild(img);
                        }
                      }}
                    />
                  ) : (
                    <Image 
                      src={item.mediaUrl} 
                      alt={item.title} 
                      width={800}
                      height={600}
                      className="rounded-lg shadow-2xl w-full object-cover"
                      priority={index < 2}
                    />
                  )}
                </div>
                <div className="w-full md:w-2/5">
                  <p className="text-gradient-end font-semibold">{item.type}</p>
                  <h2 className="text-3xl md:text-4xl font-display my-2">{item.title}</h2>
                  <p className="text-off-white/80 leading-relaxed mb-4">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 