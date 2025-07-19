'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export function useAnimatedCounter(targetValue: number, isVisible: boolean) {
  const [currentValue, setCurrentValue] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  const step = useCallback((timestamp: number, startTime: number, duration: number) => {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const nextValue = Math.floor(progress * targetValue);
    setCurrentValue(nextValue);
    
    if (progress < 1) {
      animationFrameRef.current = window.requestAnimationFrame((t) => {
        step(t, startTime, duration);
      });
    } else {
      setCurrentValue(targetValue);
    }
  }, [targetValue]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      let startTime: number | null = null;
      
      const startAnimation = (timestamp: number) => {
        startTime ??= timestamp;
        step(timestamp, startTime, duration);
      };
      
      animationFrameRef.current = window.requestAnimationFrame(startAnimation);
    }
    
    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetValue, isVisible, step]);

  return currentValue;
} 