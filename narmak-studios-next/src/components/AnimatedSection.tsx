'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  customClass?: string;
  id?: string;
  threshold?: number;
}

export default function AnimatedSection({ 
  children, 
  customClass = '', 
  id = '', 
  threshold = 0.1 
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting && !isVisible) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersection,
      { 
        threshold,
        rootMargin: '50px 0px -50px 0px' // Start animation slightly before element comes into view
      }
    );
    
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [handleIntersection, threshold]);

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`transition-all duration-700 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${customClass}`}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        opacity: isVisible ? 1 : 0
      }}
    >
      {children}
    </section>
  );
} 