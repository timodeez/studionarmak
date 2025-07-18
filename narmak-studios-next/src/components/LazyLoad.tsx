'use client';

import { useRef, useEffect, useState, ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function LazyLoad({ 
  children, 
  threshold = 0.1, 
  rootMargin = '50px',
  className = '',
  style
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      const currentRef = ref.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={style}
    >
      {isVisible ? children : <div className="h-full w-full bg-charcoal/20 animate-pulse rounded" />}
    </div>
  );
} 