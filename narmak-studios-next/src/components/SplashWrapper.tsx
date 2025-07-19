'use client';

import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';

interface SplashWrapperProps {
  children: React.ReactNode;
}

export default function SplashWrapper({ children }: SplashWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [hasShownSplash, setHasShownSplash] = useState(false);

  useEffect(() => {
    // Check if splash has been shown before (using sessionStorage)
    const hasShown = sessionStorage.getItem('narmak-splash-shown');
    
    if (hasShown) {
      setShowSplash(false);
      setHasShownSplash(true);
    } else {
      // Mark as shown for this session
      sessionStorage.setItem('narmak-splash-shown', 'true');
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHasShownSplash(true);
  };

  // Don't show splash if it's already been shown in this session
  if (hasShownSplash) {
    return <>{children}</>;
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={showSplash ? 'hidden' : ''}>
        {children}
      </div>
    </>
  );
} 