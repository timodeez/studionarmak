'use client';

import { useEffect, useState, ReactNode, useCallback } from 'react';

interface MobileOptimizerProps {
  children: ReactNode;
}

// Type definitions for non-standard browser APIs
interface BatteryManager extends EventTarget {
  level: number;
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
}

interface NetworkInformation extends EventTarget {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
  addEventListener: (type: string, listener: EventListener) => void;
  removeEventListener: (type: string, listener: EventListener) => void;
}

interface NavigatorWithBattery extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
}

export default function MobileOptimizer({ children }: MobileOptimizerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);

  const checkMobile = useCallback(() => {
    const userAgent = navigator.userAgent;
    setIsMobile(
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      )
    );
  }, []);

  const checkLowPowerMode = useCallback(async () => {
    if ("getBattery" in navigator) {
      try {
        const battery = await (navigator as NavigatorWithBattery).getBattery?.();
        if (battery) {
          const handleBatteryChange = () => {
            setIsLowPowerMode(battery.level < 0.2 && !battery.charging);
          };
          battery.addEventListener('levelchange', handleBatteryChange);
          battery.addEventListener('chargingchange', handleBatteryChange);
          setIsLowPowerMode(battery.level < 0.2 && !battery.charging);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Could not access battery status:", error.message);
        } else {
          console.error("Could not access battery status:", error);
        }
      }
    }
  }, []);

  const checkNetwork = useCallback(() => {
    const connection = (navigator as NavigatorWithConnection).connection;
    if (connection) {
      const handleNetworkChange = () => {
        setIsSlowNetwork(
          connection.saveData ||
          /2g|slow-2g/.test(connection.effectiveType) ||
          connection.rtt > 800
        );
      };
      connection.addEventListener('change', handleNetworkChange);
      setIsSlowNetwork(
        connection.saveData ||
        /2g|slow-2g/.test(connection.effectiveType) ||
        connection.rtt > 800
      );
    }
  }, []);

  const handleOrientationChange = useCallback(() => {
    if (window.innerWidth < 768) {
      document.body.classList.add("mobile-portrait");
    } else {
      document.body.classList.remove("mobile-portrait");
    }
  }, []);

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return;
    }

    checkMobile();
    void checkLowPowerMode();
    checkNetwork();

    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, [checkMobile, checkLowPowerMode, checkNetwork, handleOrientationChange]);

  useEffect(() => {
    document.body.classList.toggle("mobile-optimized", isMobile);
    document.body.classList.toggle("no-hover", isMobile);
  }, [isMobile]);

  useEffect(() => {
    document.body.classList.toggle("low-power-mode", isLowPowerMode);
  }, [isLowPowerMode]);

  useEffect(() => {
    document.body.classList.toggle("slow-network", isSlowNetwork);
  }, [isSlowNetwork]);

  return (
    <div className={`mobile-optimizer ${isMobile ? "mobile" : "desktop"}`}>
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