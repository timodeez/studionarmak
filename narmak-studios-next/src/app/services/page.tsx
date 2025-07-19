'use client';

import Link from 'next/link';
import { servicesCardData } from '@/data/services';
import ServiceIcon from '@/components/ServiceIcons';

const tldrSummaries = [
  'Explainers, product launches, commercials, event visuals & branded entertainment that convert and stick.',
  'Original shorts, series & music videos that build fandom and long‑tail engagement.',
  'Strategy, scripting, design, animation, edit, mix—plug in anywhere or let us run the whole thing.',
  'Positioning, story roadmaps, pitch polish. We help ideas grow - over 500 million views didn\'t come from thin air.',
  'Key art, pitch decks, merch, album covers—extend & own your visual identity.',
  'Unlimited requests. Fast turnarounds. Flat monthly fee. Limited seats.'
];

const slugMap = [
  'brand-and-marketing-animation',
  'entertainment-and-original-ip',
  'pre-to-post-production-a-la-carte-or-full-stack',
  'creative-strategy-and-consulting',
  'design-and-collateral',
  'graphic-design-subscription'
];

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen bg-charcoal text-off-white">
      <div className="container mx-auto px-2 sm:px-4 py-12 sm:py-20 md:py-28">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-display bg-gradient-to-r from-neon-accent to-gradient-end text-transparent bg-clip-text drop-shadow-lg font-bold tracking-tight mb-4">
            From idea to animated impact
          </h1>
          <p className="text-off-white/70 text-lg sm:text-xl max-w-3xl mx-auto">
            We partner with visionary brands to move their audience, and we craft original worlds that move our own.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {servicesCardData.map((service, idx) => (
            <Link
              key={service.title}
              href={`/services/${slugMap[idx]}`}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-off-white/10 bg-gradient-to-br from-[#18181b] to-[#1a1a1d] transition-all duration-500 cursor-pointer flex flex-col h-full hover:scale-[1.02] focus:scale-[1.02] hover:shadow-neon-accent/20 z-10 px-6 py-8 sm:px-8 sm:py-10"
              tabIndex={0}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-accent via-purple-500 to-gradient-end opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />
              
              {/* Top accent bar with animation */}
              <div className="h-1 w-full bg-gradient-to-r from-neon-accent to-gradient-end rounded-t-2xl mb-6 group-hover:from-gradient-end group-hover:to-neon-accent transition-all duration-500" />
              
              {/* Custom service icon */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-accent/20 to-purple-500/20 border border-neon-accent/30 flex items-center justify-center mr-4 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-neon-accent/30 group-hover:to-purple-500/30 transition-all duration-300">
                  <ServiceIcon key={service.title} serviceType={service.title} className="text-neon-accent group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <div className="flex flex-col flex-1 relative z-10">
                <h2 className="text-xl xs:text-2xl md:text-3xl font-display font-bold text-neon-accent mb-4 drop-shadow tracking-tight leading-tight group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h2>
                <div className="text-off-white/90 text-base xs:text-lg font-medium leading-relaxed flex-1">
                  {tldrSummaries[idx]}
                </div>
                
                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-neon-accent/70 group-hover:text-neon-accent transition-colors duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 