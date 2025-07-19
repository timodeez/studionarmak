'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  customClass?: string;
  id?: string;
  threshold?: number;
}

// Shared intersection observer for better performance
let globalObserver: IntersectionObserver | null = null;
const observedElements = new Map<HTMLElement, (isVisible: boolean) => void>();

const getGlobalObserver = () => {
  if (!globalObserver) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observedElements.get(entry.target as HTMLElement);
          if (callback) {
            callback(entry.isIntersecting);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );
  }
  return globalObserver;
};

export default function AnimatedSection({ 
  children, 
  customClass = '', 
  id = '', 
  threshold = 0.1 
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = useCallback((visible: boolean) => {
    if (visible && !isVisible) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = getGlobalObserver();
    const currentRef = ref.current;
    
    if (currentRef) {
      observedElements.set(currentRef, handleVisibilityChange);
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observedElements.delete(currentRef);
        observer.unobserve(currentRef);
      }
    };
  }, [handleVisibilityChange]);

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