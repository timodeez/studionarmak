'use client';

import { useRef, useEffect, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  onLoad?: () => void;
}

export default function OptimizedVideo({
  src,
  poster,
  className = '',
  style,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  onLoad
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (videoRef.current && autoPlay) {
            videoRef.current.play().catch(() => {
              // Auto-play was prevented, which is fine
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = videoRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [autoPlay]);

  const handleLoadedData = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <video
      ref={videoRef}
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={style}
      autoPlay={autoPlay && isInView}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={isInView ? preload : 'none'}
      poster={poster}
      onLoadedData={handleLoadedData}
    >
      {/* WebM format for better compression */}
      <source src={isInView ? src.replace('.mp4', '.webm') : ''} type="video/webm" />
      {/* MP4 fallback */}
      <source src={isInView ? src : ''} type="video/mp4" />
    </video>
  );
} 