'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleComplete = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 300);
  }, [onComplete]);

  useEffect(() => {
    const timer = setTimeout(handleComplete, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [handleComplete]);

  const containerClassName = useMemo(() => `fixed inset-0 z-50 bg-charcoal flex items-center justify-center transition-opacity duration-500 ${
    isAnimating ? 'opacity-0' : 'opacity-100'
  }`, [isAnimating]);

  if (!isVisible) return null;

  return (
    <div className={containerClassName}>
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <Image
            src="/LOGO/narmaklogo.png"
            alt="Narmak Studios"
            width={200}
            height={200}
            className="mx-auto"
            priority
          />
        </div>
        
        {/* Loading text */}
        <div className="text-off-white/70 text-lg font-display">
          <div className="animate-pulse">Loading...</div>
        </div>
        
        {/* Loading dots */}
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-2 h-2 bg-neon-accent rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-neon-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-neon-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
} 