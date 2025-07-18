'use client';

import Link from 'next/link';
import { servicesCardData } from '@/data/services';

const tldrSummaries = [
  'Products, commercials, event visuals, explainers, and branded entertainment.',
  'Original content, shorts, series, and music videos that build fandom and engagement.',
  'One studio—concept to finished animation, and everything in between. All or some, your choice.',
  'Roadmaps, creativity, and building blocks. We help ideas grow—500 million views didn’t come from thin air ;)',
  'Key art, design, merch, album covers—the possibilities are endless. Extend and own your identity.',
  'Unlimited design tasks, one flat monthly fee. Limited spots.'
];

const slugMap = [
  'brand-and-marketing-animation',
  'entertainment-and-original-ip',
  'pre-to-post-production-a-la-carte-or-full-stack',
  'creative-strategy-and-consulting',
  'support-and-collateral',
  'graphic-design-subscription'
];

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen bg-charcoal text-off-white">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <h1 className="text-5xl md:text-6xl font-display text-center mb-10 bg-gradient-to-r from-neon-accent to-gradient-end text-transparent bg-clip-text drop-shadow-lg">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {servicesCardData.map((service, idx) => (
            <Link
              key={service.title}
              href={`/services/${slugMap[idx]}`}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-off-white/10 bg-[#18181b] transition-all duration-300 cursor-pointer flex flex-col h-full hover:scale-105 focus:scale-105 z-10"
              tabIndex={0}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-neon-accent to-gradient-end rounded-t-2xl mb-4" />
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-neon-accent mb-4 drop-shadow">{service.title}</h2>
                <div className="text-off-white/90 text-lg font-semibold mb-6 min-h-[2.5em]">
                  {tldrSummaries[idx]}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 