'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { creativePortfolio } from '@/data/creativePortfolio';

export default function CreativePage() {
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
          const isLastTwo = creativePortfolio.length >= 2 && (
            id === `creative-${creativePortfolio[creativePortfolio.length - 1].id}` ||
            id === `creative-${creativePortfolio[creativePortfolio.length - 2].id}`
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
          <h1 className="text-5xl font-display mb-4">Creative Portfolio</h1>
          <p className="text-lg text-off-white/70 text-center max-w-3xl mx-auto">
            Products become characters. Messages become moments.
          </p>
        </AnimatedSection>
        <div className="space-y-24">
          {creativePortfolio.map((item, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={item.id}
                id={`creative-${item.id}`}
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
                  <p className="text-neon-accent font-semibold">{item.client}</p>
                  <h2 className="text-3xl md:text-4xl font-display my-2">{item.title}</h2>
                  <p className="text-off-white/80 leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.services.map(service => (
                      <span key={service} className="bg-[#2a2a2e] text-off-white/70 text-sm font-medium px-3 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                  {item.caseStudy && (
                    <div className="mt-6 bg-white/5 backdrop-blur rounded-xl shadow-lg px-6 py-6">
                      <h4 className="text-xl font-display text-neon-accent mb-2">{item.caseStudy.title}</h4>
                      <div className="text-off-white/80 mb-1">
                        <span className="font-semibold">Role</span> {item.caseStudy.role}
                      </div>
                      <div className="text-off-white/80 mb-1">
                        <span className="font-semibold">Challenge</span> {item.caseStudy.challenge}
                      </div>
                      <div className="text-off-white/80 mb-1">
                        <span className="font-semibold">Craft</span> {item.caseStudy.craft}
                      </div>
                      <div className="text-off-white/80">
                        <span className="font-semibold">Impact</span> {item.caseStudy.impact}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 