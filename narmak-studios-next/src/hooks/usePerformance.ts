'use client';

import { useEffect, useCallback } from 'react';

export function usePerformance() {
  const trackPageLoad = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const metrics = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        
        // Paint timing
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        
        // Resource timing
        totalResources: performance.getEntriesByType('resource').length,
      };
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metrics);
      }
      
      // Send to analytics in production
      if (process.env.NODE_ENV === 'production') {
        // You can send this to Google Analytics, Mixpanel, etc.
        // gtag('event', 'performance', metrics);
      }
    }
  }, []);

  const trackInteraction = useCallback((action: string, value?: any) => {
    if (typeof window !== 'undefined') {
      const event = {
        action,
        value,
        timestamp: Date.now(),
        url: window.location.href,
      };
      
      if (process.env.NODE_ENV === 'development') {
        console.log('User Interaction:', event);
      }
      
      if (process.env.NODE_ENV === 'production') {
        // Send to analytics
        // gtag('event', 'user_interaction', event);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Track initial page load
      if (document.readyState === 'complete') {
        trackPageLoad();
      } else {
        window.addEventListener('load', trackPageLoad);
        return () => window.removeEventListener('load', trackPageLoad);
      }
    }
  }, [trackPageLoad]);

  const getMetrics = useCallback(() => {
    if (typeof window === 'undefined') {
      return {
        fcp: 0,
        lcp: 0,
        fid: 0,
        cls: 0,
        ttfb: 0,
        loadTime: 0
      };
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
    const fid = 0; // Would need to be measured with event listeners
    const cls = 0; // Would need to be measured with LayoutShiftObserver
    const ttfb = navigation?.responseStart - navigation?.requestStart || 0;
    const loadTime = navigation?.loadEventEnd - navigation?.loadEventStart || 0;

    return {
      fcp: Math.round(fcp),
      lcp: Math.round(lcp),
      fid: Math.round(fid),
      cls: Math.round(cls * 1000) / 1000,
      ttfb: Math.round(ttfb),
      loadTime: Math.round(loadTime)
    };
  }, []);

  return { trackInteraction, getMetrics };
} 