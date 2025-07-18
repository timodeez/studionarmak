'use client';

import { useRef, useEffect, useState } from 'react';

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
  style,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  onLoad
}: ResponsiveVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast'>('fast');

  // Detect mobile and connection speed
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    const checkConnection = () => {
      if ('connection' in navigator) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const connection = (navigator as any).connection;
        const isSlow = connection.effectiveType === 'slow-2g' || 
                      connection.effectiveType === '2g' || 
                      connection.effectiveType === '3g';
        setConnectionSpeed(isSlow ? 'slow' : 'fast');
      }
    };

    checkDevice();
    checkConnection();
    
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Choose the best video source
  const getVideoSrc = () => {
    // For slow connections, use mobile version if available
    if (connectionSpeed === 'slow' && mobileSrc) {
      return mobileSrc;
    }
    // For mobile devices, use mobile version if available
    if (isMobile && mobileSrc) {
      return mobileSrc;
    }
    return src;
  };

  return (
    <video
      ref={videoRef}
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={style}
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