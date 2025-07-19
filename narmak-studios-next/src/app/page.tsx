'use client';

import { useState, useRef, useEffect, useMemo, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import AnimatedSection from '@/components/AnimatedSection';
import OptimizedImage from '@/components/OptimizedImage';
import LazyLoad from '@/components/LazyLoad';
import PortfolioItem from '@/components/PortfolioItem';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { creativePortfolio } from '@/data/creativePortfolio';
import { originalsPortfolio } from '@/data/originalsPortfolio';
import { clientLogos } from '@/data/clientLogos';
import { testimonials } from '@/data/testimonials';

// Lazy load heavy components
const LazyPortfolioSection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="h-96 bg-charcoal animate-pulse" />}>
    {children}
  </Suspense>
);

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const handlePlay = () => {
    setIsMuted(prevState => !prevState);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  // Ensure video autoplays on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback: try to play again after a short delay
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.play().catch(console.error);
          }
        }, 100);
      });
    }
  }, []);

  // Optimized intersection observer for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, []);

  const views = useAnimatedCounter(500000000, isStatsVisible);
  const subs = useAnimatedCounter(2500000, isStatsVisible);
  const projects = useAnimatedCounter(130, isStatsVisible);

  const words = useMemo(() => ['animation', 'talent', 'graphic', 'marketing', 'creative', 'dream'], []);
  const [wordState, setWordState] = useState({ text: words[0], animationClass: 'animate-slide-down-in' });
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordState(prev => ({ ...prev, animationClass: 'animate-slide-down-out' }));
      setTimeout(() => {
        currentIndexRef.current = (currentIndexRef.current + 1) % words.length;
        setWordState({ text: words[currentIndexRef.current], animationClass: 'animate-slide-down-in' });
      }, 400);
    }, 2200);
    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <>
      <section className="h-screen w-full relative flex items-center overflow-hidden">
        {/* Lightweight background with fallback */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-charcoal via-[#1a1a1c] to-black z-[-10]"></div>
        
        {/* Autoplay video with performance optimizations */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-10] opacity-0 transition-opacity duration-1000"
          style={{ filter: "brightness(0.6)" }}
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement;
            video.style.opacity = '1';
          }}
          onCanPlayThrough={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play().catch(() => {
              // Fallback: try to play again after a short delay
              setTimeout(() => {
                video.play().catch(console.error);
              }, 100);
            });
          }}
        >
          {/* Mobile version - smaller file, lower resolution */}
          <source src="/website_reel_1-mobile.mp4" media="(max-width: 768px)" />
          {/* Desktop version - higher quality */}
          <source src="/website_reel_1-web.mp4" media="(min-width: 769px)" />
          {/* Fallback */}
          <source src="/website_reel_1-web.mp4" />
        </video>
        
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20 z-[-5]"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="md:w-3/5 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-off-white drop-shadow-lg leading-tight">
              We create animated worlds for brands and our own original stories.
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans mt-4 sm:mt-6 text-off-white/80 flex justify-center md:justify-start items-baseline gap-2 h-8 sm:h-10">
              <span>We are a</span>
              <div className="relative h-8 sm:h-10 overflow-hidden">
                <span className={`text-neon-accent inline-block whitespace-nowrap ${wordState.animationClass}`}>
                  {wordState.text}
                </span>
              </div>
              <span>studio.</span>
            </h2>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <Link 
                href="/portfolio/creative" 
                className="w-full sm:w-auto text-center bg-off-white text-charcoal font-display font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white text-base sm:text-lg"
              >
                Creative
              </Link>
              <Link 
                href="/portfolio/originals" 
                className="w-full sm:w-auto text-center bg-neon-accent/10 border border-neon-accent text-neon-accent font-display font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-neon-accent hover:text-charcoal text-base sm:text-lg"
              >
                Originals
              </Link>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 md:mt-0 flex flex-col items-center gap-3 sm:gap-4">
            <button 
              onClick={handlePlay} 
              className="group w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-neon-accent/20 border-2 border-neon-accent flex items-center justify-center text-neon-accent transition-all duration-300 hover:bg-neon-accent hover:text-charcoal hover:scale-110"
            >
              {isMuted ? Icons.play : Icons.soundOn}
            </button>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-off-white/80">
              Imagination in Motion
            </span>
          </div>
        </div>
      </section>

      <div ref={statsRef} className="bg-[#141416] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div 
            className="transition-all duration-700" 
            style={{ 
              opacity: isStatsVisible ? 1 : 0, 
              transform: `translateY(${isStatsVisible ? '0' : '20px'})` 
            }}
          >
            <p className="text-4xl sm:text-5xl md:text-6xl font-display text-neon-accent">
              {views.toLocaleString()}+
            </p>
            <p className="mt-2 text-off-white/70 text-sm sm:text-base">Video Views</p>
          </div>
          <div 
            className="transition-all duration-700 delay-200" 
            style={{ 
              opacity: isStatsVisible ? 1 : 0, 
              transform: `translateY(${isStatsVisible ? '0' : '20px'})` 
            }}
          >
            <p className="text-4xl sm:text-5xl md:text-6xl font-display text-neon-accent">
              {subs.toLocaleString()}+
            </p>
            <p className="mt-2 text-off-white/70 text-sm sm:text-base">Subscribers</p>
          </div>
          <div 
            className="transition-all duration-700 delay-400" 
            style={{ 
              opacity: isStatsVisible ? 1 : 0, 
              transform: `translateY(${isStatsVisible ? '0' : '20px'})` 
            }}
          >
            <p className="text-4xl sm:text-5xl md:text-6xl font-display text-neon-accent">
              {Math.floor(projects)}+
            </p>
            <p className="mt-2 text-off-white/70 text-sm sm:text-base">Projects Delivered</p>
          </div>
        </div>
      </div>

      <AnimatedSection id="fork" customClass="py-16 sm:py-20 md:py-28 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-3 sm:mb-4">Two Studios, One Vision.</h2>
          <p className="text-base sm:text-lg text-off-white/70 max-w-3xl mx-auto mb-8 sm:mb-12">
            We partner with visionary brands to move their audience, and we craft original worlds that move our own.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <LazyLoad>
              <Link href="/portfolio/creative" className="group relative block overflow-hidden rounded-lg">
                <div className="aspect-[5/3] w-full">
                  <OptimizedImage 
                    src="/LOGO/3GIINDlogo.webp" 
                    alt="Client Work"
                    width={1000}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 text-left">
                  <h3 className="text-2xl sm:text-3xl font-display text-white">Narmak Creative</h3>
                  <p className="text-white/80 mt-1 sm:mt-2 text-sm sm:text-base">Animation for brands.</p>
                </div>
              </Link>
            </LazyLoad>
            <LazyLoad>
              <Link href="/portfolio/originals" className="group relative block overflow-hidden rounded-lg">
                <div className="aspect-[5/3] w-full">
                  <OptimizedImage 
                    src="/LOGO/newmemelandcover_resized.jpg" 
                    alt="Narmak Originals Cover"
                    width={1000}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 text-left">
                  <h3 className="text-2xl sm:text-3xl font-display text-white">Narmak Originals</h3>
                  <p className="text-white/80 mt-1 sm:mt-2 text-sm sm:text-base">Stories from our world.</p>
                </div>
              </Link>
            </LazyLoad>
          </div>
        </div>
      </AnimatedSection>

      <LazyPortfolioSection>
        <AnimatedSection customClass="bg-[#141416] pt-16 sm:pt-20 md:pt-28">
          <div id="creative-work" className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-center mb-3 sm:mb-4">Client Work</h2>
            <p className="text-base sm:text-lg text-off-white/70 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              Products become characters. Messages become moments.
            </p>
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
                {creativePortfolio.slice(0, 3).map((item, index) => (
                  <LazyLoad key={item.id} style={{ transitionDelay: `${index * 150}ms` }}>
                    <Link href={`/portfolio/creative#creative-${item.id}`}>
                      <PortfolioItem
                        title={item.title}
                        client={item.client}
                        description={item.description}
                        mediaUrl={item.mediaUrl}
                        staticImg={item.staticImg}
                        services={item.services}
                        caseStudy={item.caseStudy}
                        href={`/portfolio/creative#creative-${item.id}`}
                        priority={index === 0}
                      />
                    </Link>
                  </LazyLoad>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl justify-center">
                {creativePortfolio.slice(3, 5).map((item, index) => (
                  <LazyLoad key={item.id} style={{ transitionDelay: `${index * 150}ms` }}>
                    <Link href={`/portfolio/creative#creative-${item.id}`}>
                      <PortfolioItem
                        title={item.title}
                        client={item.client}
                        description={item.description}
                        mediaUrl={item.mediaUrl}
                        staticImg={item.staticImg}
                        services={item.services}
                        caseStudy={item.caseStudy}
                        href={`/portfolio/creative#creative-${item.id}`}
                      />
                    </Link>
                  </LazyLoad>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 text-center mt-16 sm:mt-20 md:mt-24">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display text-off-white/70 mb-3 sm:mb-4 font-medium tracking-wide">
                Trusted by visionary partners
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mt-6 sm:mt-8 md:mt-12">
                {clientLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 ease-out transform hover:scale-105"
                    style={{ minHeight: '70px', maxHeight: '90px' }}
                  >
                    <Image
                      src={logo.img}
                      alt={logo.name}
                      width={140}
                      height={70}
                      className={`max-h-[70px] sm:max-h-[90px] max-w-[140px] sm:max-w-[180px] w-auto h-auto object-contain transition-all duration-300 drop-shadow-sm ${
                        ['3GI', 'Genshin Impact', 'Gamer Supps'].includes(logo.name) 
                          ? '' 
                          : 'brightness-0 invert'
                      }`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl mt-16 sm:mt-20 md:mt-24 text-center">
            <p className="text-2xl sm:text-3xl font-display text-off-white leading-snug">
              &quot;{testimonials[0].quote}&quot;
            </p>
            <p className="mt-3 sm:mt-4 text-off-white/70 font-semibold text-sm sm:text-base">
              {testimonials[0].name}, <span className="text-off-white/50 font-normal">{testimonials[0].title}</span>
            </p>
          </div>
        </AnimatedSection>
      </LazyPortfolioSection>

      <LazyPortfolioSection>
        <AnimatedSection id="originals" customClass="bg-charcoal py-16 sm:py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-center mb-8 sm:mb-12">Narmak Originals</h2>
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
                {originalsPortfolio.slice(0, 3).map((item, index) => (
                  <LazyLoad key={item.id} style={{ transitionDelay: `${index * 150}ms` }}>
                    <Link href={`/portfolio/originals#originals-${item.id}`}>
                      <PortfolioItem
                        title={item.title}
                        type={item.type}
                        description={item.description}
                        mediaUrl={item.mediaUrl}
                        staticImg={item.homeImg}
                        href={`/portfolio/originals#originals-${item.id}`}
                        priority={index === 0}
                      />
                    </Link>
                  </LazyLoad>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl justify-center">
                {originalsPortfolio.slice(3, 5).map((item, index) => (
                  <LazyLoad key={item.id} style={{ transitionDelay: `${index * 150}ms` }}>
                    <Link href={`/portfolio/originals#originals-${item.id}`}>
                      <PortfolioItem
                        title={item.title}
                        type={item.type}
                        description={item.description}
                        mediaUrl={item.mediaUrl}
                        staticImg={item.homeImg}
                        href={`/portfolio/originals#originals-${item.id}`}
                      />
                    </Link>
                  </LazyLoad>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </LazyPortfolioSection>

      <AnimatedSection id="about" customClass="py-16 sm:py-20 md:py-28 bg-[#141416]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4 sm:mb-6">The Flywheel of Creativity.</h2>
          <p className="text-base sm:text-lg text-off-white/80 leading-relaxed">
            Our studio is built on a simple, powerful idea: commerce and art are not enemies; they are partners. The revenue from our agency work provides the financial freedom and stability to pursue our passion projects. In turn, our original content serves as our most authentic advertisement, attracting ambitious clients who want more than just a service—they want our unique voice. Each side fuels the other, creating a perpetual motion machine of innovation and imagination.
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
