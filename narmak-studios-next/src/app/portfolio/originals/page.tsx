'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { originalsPortfolio } from '@/data/originalsPortfolio';
import { useEffect } from 'react';

export default function OriginalsPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const headerOffset = 80;
          const elRect = el.getBoundingClientRect();
          const absoluteElementTop = elRect.top + window.pageYOffset;
          const elHeight = elRect.height;
          const windowHeight = window.innerHeight;
          // Special handling for last two items
          const isLastTwo = originalsPortfolio.length >= 2 && (
            id === `originals-${originalsPortfolio[originalsPortfolio.length - 1].id}` ||
            id === `originals-${originalsPortfolio[originalsPortfolio.length - 2].id}`
          );
          let scrollTo;
          if (elHeight > windowHeight) {
            scrollTo = absoluteElementTop - headerOffset;
          } else if (isLastTwo) {
            // Center perfectly even if not a full row
            scrollTo = absoluteElementTop - ((windowHeight - elHeight) / 2);
          } else {
            scrollTo = absoluteElementTop - (windowHeight / 2) + (elHeight / 2);
          }
          window.scrollTo({ top: scrollTo, behavior: 'smooth' });
        }, 200);
      }
    }
  }, []);

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <AnimatedSection customClass="text-center mb-16">
          <h1 className="text-5xl font-display mb-4">Originals Portfolio</h1>
          <p className="text-lg text-off-white/70 text-center max-w-3xl mx-auto">
            Worlds, characters, and stories born from our own creative spark.
          </p>
        </AnimatedSection>
        <div className="space-y-24">
          {originalsPortfolio.map((item, index) => {
            const isReversed = index % 2 !== 0;
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
                  <Image 
                    src={item.mediaUrl} 
                    alt={item.title} 
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl w-full object-cover" 
                  />
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