'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { usePerformance } from '@/hooks/usePerformance';

export default function PerformanceDashboard() {
  const { getMetrics } = usePerformance();
  const metrics = useMemo(() => getMetrics(), [getMetrics]);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getScore = useCallback((value: number, threshold: number) => {
    if (value <= threshold * 0.5) return '🟢 Excellent';
    if (value <= threshold) return '🟡 Good';
    return '🔴 Needs Improvement';
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-charcoal/90 backdrop-blur-lg border border-off-white/20 rounded-lg p-4 shadow-xl z-50 max-w-sm">
      <h3 className="text-sm font-semibold text-off-white mb-3">Performance Metrics</h3>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-off-white/70">First Contentful Paint:</span>
          <span className={metrics.fcp <= 1800 ? 'text-green-400' : 'text-red-400'}>
            {`${metrics.fcp.toFixed(2)}ms`} {getScore(metrics.fcp, 1800)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-off-white/70">Largest Contentful Paint:</span>
          <span className={metrics.lcp <= 2500 ? 'text-green-400' : 'text-red-400'}>
            {`${metrics.lcp.toFixed(2)}ms`} {getScore(metrics.lcp, 2500)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-off-white/70">First Input Delay:</span>
          <span className={metrics.fid <= 100 ? 'text-green-400' : 'text-red-400'}>
            {`${metrics.fid.toFixed(2)}ms`} {getScore(metrics.fid, 100)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-off-white/70">Cumulative Layout Shift:</span>
          <span className={metrics.cls <= 0.1 ? 'text-green-400' : 'text-red-400'}>
            {metrics.cls.toFixed(3)} {getScore(metrics.cls, 0.1)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-off-white/70">Time to First Byte:</span>
          <span className={metrics.ttfb <= 600 ? 'text-green-400' : 'text-red-400'}>
            {`${metrics.ttfb.toFixed(2)}ms`} {getScore(metrics.ttfb, 600)}
          </span>
        </div>
        
        </div>
      
      <button
        onClick={() => {
          setIsVisible(false);
        }}
        className="absolute top-2 right-2 text-off-white/50 hover:text-off-white text-lg"
      >
        ×
      </button>
    </div>
  );
} 