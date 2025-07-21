'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

interface ResponsiveVideoProps {
  src: string;
  mobileSrc?: string;
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

export default function ResponsiveVideo({
  src,
  mobileSrc,
  poster,
  className = '',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'auto',
  onLoad
}: ResponsiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadedData = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  // Simple autoplay handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      if (autoPlay && muted) {
        video.play().catch(console.error);
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [autoPlay, muted]);

  return (
    <video
      ref={videoRef}
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
      poster={poster}
      onLoadedData={handleLoadedData}
    >
      {/* WebM versions for better compression */}
      {mobileSrc && (
        <source src={mobileSrc.replace('.mp4', '.webm')} media="(max-width: 768px)" type="video/webm" />
      )}
      <source src={src.replace('.mp4', '.webm')} type="video/webm" />
      
      {/* MP4 fallbacks */}
      {mobileSrc && (
        <source src={mobileSrc} media="(max-width: 768px)" type="video/mp4" />
      )}
      <source src={src} type="video/mp4" />
      
      Your browser does not support the video tag.
    </video>
  );
} 