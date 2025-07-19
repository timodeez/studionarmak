'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  customClass?: string;
  id?: string;
}

export default function AnimatedSection({
  children,
  customClass = '',
  id = '',
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '0px' }
    );

    const currentRef = elementRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={elementRef}
      className={`transition-opacity duration-1000 ease-out transform-gpu ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${customClass}`}
    >
      {children}
    </section>
  );
} 