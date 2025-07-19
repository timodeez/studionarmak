'use client';

import { useEffect, useState } from 'react';

interface MobileOptimizerProps {
  children: React.ReactNode;
}

export default function MobileOptimizer({ children }: MobileOptimizerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    // Detect low power mode (iOS)
    const checkLowPowerMode = () => {
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          setIsLowPowerMode(battery.level < 0.2);
        });
      }
    };

    // Check network conditions
    const checkNetwork = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
          // Apply additional optimizations for slow networks
          document.body.classList.add('slow-network');
        }
      }
    };

    checkMobile();
    checkLowPowerMode();
    checkNetwork();

    // Listen for orientation changes
    const handleOrientationChange = () => {
      // Re-optimize for new orientation
      if (window.innerWidth < 768) {
        document.body.classList.add('mobile-portrait');
      } else {
        document.body.classList.remove('mobile-portrait');
      }
    };

    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  // Apply mobile-specific optimizations
  useEffect(() => {
    if (isMobile) {
      // Reduce motion for better performance
      document.body.style.setProperty('--reduced-motion', 'reduce');
      
      // Optimize touch interactions
      document.body.classList.add('mobile-optimized');
      
      // Disable hover effects on mobile
      document.body.classList.add('no-hover');
    } else {
      document.body.classList.remove('mobile-optimized', 'no-hover');
    }
  }, [isMobile]);

  // Apply low power mode optimizations
  useEffect(() => {
    if (isLowPowerMode) {
      // Reduce animations and effects
      document.body.classList.add('low-power-mode');
    } else {
      document.body.classList.remove('low-power-mode');
    }
  }, [isLowPowerMode]);

  return (
    <div className={`mobile-optimizer ${isMobile ? 'mobile' : 'desktop'}`}>
      {children}
    </div>
  );
}

// CSS-in-JS styles for mobile optimizations
const mobileStyles = `
  .mobile-optimizer.mobile {
    /* Mobile-specific optimizations */
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  }

  .mobile-optimizer.mobile * {
    /* Optimize touch targets */
    touch-action: manipulation;
  }

  .mobile-optimizer.mobile button,
  .mobile-optimizer.mobile a {
    /* Ensure minimum touch target size */
    min-height: 44px;
    min-width: 44px;
  }

  .mobile-optimizer.mobile .no-hover *:hover {
    /* Disable hover effects on mobile */
    transform: none !important;
    box-shadow: none !important;
  }

  .mobile-optimizer.mobile .low-power-mode * {
    /* Reduce animations in low power mode */
    animation-duration: 0.1s !important;
    transition-duration: 0.1s !important;
  }

  .mobile-optimizer.mobile .slow-network img,
  .mobile-optimizer.mobile .slow-network video {
    /* Reduce quality for slow networks */
    filter: blur(0.5px);
  }

  /* Optimize for mobile portrait */
  .mobile-portrait .hero-section {
    min-height: 100vh;
  }

  .mobile-portrait .portfolio-grid {
    grid-template-columns: 1fr;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = mobileStyles;
  document.head.appendChild(style);
} 