'use client';

import { useRef, useEffect, useState, useCallback, useMemo } from 'react';

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
  preload = 'metadata',
  onLoad
}: ResponsiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  const isMobile = useMemo(() => windowWidth <= 768, [windowWidth]);
  const connectionSpeed = useMemo(() => {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as Navigator & { connection?: { effectiveType: string } }).connection;
      if (connection) {
        const isSlow = connection.effectiveType === 'slow-2g' || 
                      connection.effectiveType === '2g' || 
                      connection.effectiveType === '3g';
        return isSlow ? 'slow' : 'fast';
      }
    }
    return 'fast';
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLoadedData = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  // Choose the best video source
  const getVideoSrc = useCallback(() => {
    // For slow connections, use mobile version if available
    if (connectionSpeed === 'slow' && mobileSrc) {
      return mobileSrc;
    }
    // For mobile devices, use mobile version if available
    if (isMobile && mobileSrc) {
      return mobileSrc;
    }
    return src;
  }, [connectionSpeed, isMobile, mobileSrc, src]);

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
      <source src={getVideoSrc()} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
} 