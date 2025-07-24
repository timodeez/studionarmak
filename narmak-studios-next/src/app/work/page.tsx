'use client';

import { useEffect } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

export default function WorkPage() {
  useEffect(() => {
    // Add Vimeo Player script
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-charcoal">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
              From concept to completion, we bring stories to life through stunning animation, 
              captivating effects, original music, and professional voice acting.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Reel Section */}
      <section className="py-16 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="aspect-video relative">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/1103670314?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=0&amp;loop=0&amp;muted=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                  title="Studio Narmak Reel"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Our Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neon-accent mb-4">Animation</h3>
                <p className="text-gray-300">
                  From 2D to 3D, motion graphics to character animation, we bring your vision to life 
                  with stunning visual storytelling.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neon-accent mb-4">Visual Effects</h3>
                <p className="text-gray-300">
                  Cutting-edge VFX that seamlessly blend with your content, creating immersive and 
                  spectacular visual experiences.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neon-accent mb-4">Original Music</h3>
                <p className="text-gray-300">
                  Custom composed soundtracks and sound design that elevate your project with the 
                  perfect audio atmosphere.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neon-accent mb-4">Voice Acting</h3>
                <p className="text-gray-300">
                  Professional voice talent that brings characters to life with authentic performances 
                  and crystal-clear quality.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neon-accent mb-4">Creative Direction</h3>
                <p className="text-gray-300">
                  Expert storytelling and artistic vision that transforms concepts into compelling 
                  narratives and memorable experiences.
                </p>
              </div>
              <div className="bg-black/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neon-accent mb-4">Full Production</h3>
                <p className="text-gray-300">
                  End-to-end production services that handle every aspect of your project from 
                  pre-production to final delivery.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Navigation Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Explore Our Work
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10 hover:border-neon-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-neon-accent mb-4">Campaigns</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Work we create for brands - bringing their vision to life through stunning animation, 
                  compelling storytelling, and strategic creative direction.
                </p>
                <a 
                  href="/portfolio/campaign" 
                  className="inline-block bg-neon-accent text-charcoal font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  View Campaigns
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10 hover:border-neon-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-neon-accent mb-4">Originals</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Our own stories and creative worlds - original series, characters, and narratives 
                  that showcase our passion for storytelling and animation.
                </p>
                <a 
                  href="/portfolio/originals" 
                  className="inline-block bg-neon-accent text-charcoal font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  View Originals
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
} 