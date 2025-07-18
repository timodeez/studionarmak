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

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      const currentRef = videoRef.current;
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
      <source src={isInView ? src : ''} type="video/mp4" />
    </video>
  );
} 