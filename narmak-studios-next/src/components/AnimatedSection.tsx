'use client';

import { useRef, useEffect, useState, useCallback } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  customClass?: string;
  id?: string;
}

// Shared intersection observer for better performance
let globalObserver: IntersectionObserver | null = null;
const observedElements = new Map<Element, (isVisible: boolean) => void>();

const getGlobalObserver = () => {
  globalObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const callback = observedElements.get(entry.target);
        callback?.(entry.isIntersecting);
      }
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.1,
    }
  );
  return globalObserver;
};

export default function AnimatedSection({
  children,
  customClass = "",
  id = "",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = useCallback((visible: boolean) => {
    if (visible) {
      setIsVisible(true);
    }
  }, []);

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
        if (observedElements.size === 0 && globalObserver) {
          globalObserver.disconnect();
          globalObserver = null;
        } else {
          observer.unobserve(currentRef);
        }
      }
    };
  }, [handleVisibilityChange]);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-opacity duration-1000 ease-out transform-gpu ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${customClass}`}
    >
      {children}
    </section>
  );
} 