'use client';

import { useState, useEffect } from 'react';

export function useAnimatedCounter(targetValue: number, isVisible: boolean) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let startTime: number | null = null;
      const duration = 2000;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCurrentValue(progress * targetValue);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCurrentValue(targetValue);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [targetValue, isVisible]);

  return currentValue;
} 