'use client';

import { useState, useRef, useEffect, useMemo, Suspense, lazy } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import AnimatedSection from '@/components/AnimatedSection';
import OptimizedImage from '@/components/OptimizedImage';
import LazyLoad from '@/components/LazyLoad';
import VimeoModal from '@/components/VimeoModal';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { creativePortfolio } from '@/data/creativePortfolio';
import { originalsPortfolio } from '@/data/originalsPortfolio';
import { clientLogos } from '@/data/clientLogos';
import { testimonials } from '@/data/testimonials';

// Dynamic imports for better code splitting
const PortfolioItem = lazy(() => import('@/components/PortfolioItem'));

// Lazy load heavy components with loading states
const LazyPortfolioSection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="h-96 bg-charcoal animate-pulse rounded-lg" />}>
    {children}
  </Suspense>
);

const LazyStatsSection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="h-32 bg-[#141416] animate-pulse" />}>
    {children}
  </Suspense>
);

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVimeoModalOpen, setIsVimeoModalOpen] = useState(false);

  const handlePlay = () => {
    setIsVimeoModalOpen(true);
  };

  // Performance optimization: pause video when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause();
      } else if (!document.hidden && videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Handle video initialization and navigation handling
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    
    const playVideo = async () => {
      try {
        // Ensure video is muted for autoplay
        video.muted = true;
        video.volume = 0;
        
        // Set playsInline for mobile compatibility
        video.playsInline = true;
        
        if (video.paused && video.readyState >= 3) {
          await video.play();
          console.log('Video autoplay successful');
        }
      } catch (error) {
        console.log('Video autoplay blocked:', error);
        // Try playing again after a small delay
        setTimeout(() => {
          if (video.paused && video.readyState >= 3) {
            video.play().catch((retryError) => {
              console.log('Video autoplay retry failed:', retryError);
            });
          }
        }, 1000);
      }
    };

    // Try to play when video can play
    const handleCanPlay = () => {
      console.log('Video can play, attempting autoplay');
      setIsVideoLoaded(true);
      video.style.opacity = '1';
      playVideo();
    };

    // Handle loaded data
    const handleLoadedData = () => {
      console.log('Video data loaded');
      setIsVideoLoaded(true);
      video.style.opacity = '1';
      playVideo();
    };

    // Handle loaded metadata
    const handleLoadedMetadata = () => {
      console.log('Video metadata loaded');
      // Don't auto-play on metadata, wait for canplay
    };

    // Handle visibility changes (when returning from another page/tab)
    const handleVisibilityChange = () => {
      if (!document.hidden && video.readyState >= 3 && video.paused) {
        console.log('Page visible, attempting to play video');
        playVideo();
      }
    };

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Force load
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // Only run on mount

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

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const views = useAnimatedCounter(500000000, isStatsVisible);
  const subs = useAnimatedCounter(2500000, isStatsVisible);
  const projects = useAnimatedCounter(130, isStatsVisible);

  const words = useMemo(() => ['animation', 'talent', 'graphic', 'marketing', 'creative', 'dream'], []);
  const [wordState, setWordState] = useState({ text: words[0], animationClass: 'animate-slide-down-in' });
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordState((prev) => ({ ...prev, animationClass: 'animate-slide-down-out' }));
      setTimeout(() => {
        currentIndexRef.current = (currentIndexRef.current + 1) % words.length;
        setWordState({ text: words[currentIndexRef.current], animationClass: 'animate-slide-down-in' });
      }, 400);
    }, 2200);
    return () => {
      clearInterval(intervalId);
    };
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
          style={{ 
            filter: "brightness(0.6)",
            willChange: "transform",
            backfaceVisibility: "hidden",
            perspective: "1000px"
          }}
          onLoadedData={() => {
            if (videoRef.current) {
              videoRef.current.style.opacity = '1';
              setIsVideoLoaded(true);
            }
          }}
          onCanPlay={() => {
            if (videoRef.current && videoRef.current.muted && videoRef.current.paused) {
              videoRef.current.play().catch(console.error);
            }
          }}
          onError={(e) => {
            const videoElement = e.currentTarget;
            const error = videoElement.error;
            console.error('Video error:', {
              error: error,
              errorCode: error?.code || 'unknown',
              errorMessage: error?.message || 'unknown error',
              src: videoElement.currentSrc || videoElement.src,
              readyState: videoElement.readyState,
              networkState: videoElement.networkState
            });
            // Fallback: try to reload the video after a delay
            setTimeout(() => {
              if (videoRef.current && videoRef.current.error) {
                console.log('Attempting to reload video...');
                videoRef.current.load();
              }
            }, 2000);
          }}
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMUExQTFDIi8+Cjwvc3ZnPgo="
        >
          {/* WebM versions for better compression - Desktop first */}
          <source src="/website_reel_1-web.webm" type="video/webm" media="(min-width: 769px)" />
          <source src="/website_reel_1-mobile.webm" type="video/webm" media="(max-width: 768px)" />
          {/* MP4 fallbacks - Desktop first */}
          <source src="/website_reel_1-web.mp4" type="video/mp4" media="(min-width: 769px)" />
          <source src="/website_reel_1-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
          {/* Fallback MP4 without media query */}
          <source src="/website_reel_1-web.mp4" type="video/mp4" />
        </video>

        {/* Vimeo Modal */}
        <VimeoModal 
          isOpen={isVimeoModalOpen} 
          onClose={() => setIsVimeoModalOpen(false)} 
        />
        
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
                href="/portfolio/campaign" 
                className="w-full sm:w-auto text-center bg-off-white text-charcoal font-display font-semibold py-3 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white text-base sm:text-lg"
              >
                Campaign
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
              className="group w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-red-600/20 border-2 border-red-600 flex items-center justify-center text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-110"
            >
              <svg 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-off-white/80">
              Watch Our Reel
            </span>
          </div>
        </div>
      </section>

      <LazyStatsSection>
        <div ref={statsRef} className="bg-[#141416] py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div 
              className="transition-all duration-700" 
              style={{ 
                opacity: isStatsVisible ? 1 : 0, 
                transform: `translateY(${isStatsVisible ? '0' : '20px'})` 
              }}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-neon-accent">
                {views.toLocaleString()}+
              </p>
              <p className="mt-2 text-off-white/70 text-xs sm:text-sm md:text-base">Video Views</p>
            </div>
            <div 
              className="transition-all duration-700 delay-200" 
              style={{ 
                opacity: isStatsVisible ? 1 : 0, 
                transform: `translateY(${isStatsVisible ? '0' : '20px'})` 
              }}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-neon-accent">
                {subs.toLocaleString()}+
              </p>
              <p className="mt-2 text-off-white/70 text-xs sm:text-sm md:text-base">Subscribers</p>
            </div>
            <div 
              className="transition-all duration-700 delay-400" 
              style={{ 
                opacity: isStatsVisible ? 1 : 0, 
                transform: `translateY(${isStatsVisible ? '0' : '20px'})` 
              }}
            >
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-neon-accent">
                {Math.floor(projects)}+
              </p>
              <p className="mt-2 text-off-white/70 text-xs sm:text-sm md:text-base">Projects Delivered</p>
            </div>
          </div>
        </div>
      </LazyStatsSection>

      <AnimatedSection id="fork" customClass="py-16 sm:py-20 md:py-28 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-3 sm:mb-4">Two Engines. One Drive.</h2>
          <p className="text-base sm:text-lg text-off-white/70 max-w-3xl mx-auto mb-8 sm:mb-12">
            A Dual-Engine Creative House: we partner with visionary brands to move their audience, and we craft original worlds to build our own.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <LazyLoad>
              <Link href="/portfolio/campaign" className="group relative block overflow-hidden rounded-lg">
                <div className="aspect-video w-full">
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
                  <h3 className="text-2xl sm:text-3xl font-display text-white">Narmak Campaigns</h3>
                  <p className="text-white/80 mt-1 sm:mt-2 text-sm sm:text-base">Animation for brands.</p>
                </div>
              </Link>
            </LazyLoad>
            <LazyLoad>
              <Link href="/portfolio/originals" className="group relative block overflow-hidden rounded-lg">
                <div className="aspect-video w-full">
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
                        category={item.services[0]}
                        year="2024"
                        image={item.staticImg}
                        id={item.id.toString()}
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
                        category={item.services[0]}
                        year="2024"
                        image={item.staticImg}
                        id={item.id.toString()}
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
                    className="flex items-center justify-center transform hover:scale-105 transition-all duration-300 ease-out"
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
                        client="Narmak Originals"
                        category={item.type}
                        year="2024"
                        image={item.homeImg}
                        id={item.id.toString()}
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
                        client="Narmak Originals"
                        category={item.type}
                        year="2024"
                        image={item.homeImg}
                        id={item.id.toString()}
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
