'use client';

interface ServiceIconProps {
  serviceType: string;
  className?: string;
}

export default function ServiceIcon({ serviceType, className = "" }: ServiceIconProps) {
  const iconClass = `w-6 h-6 transition-all duration-300 ${className}`;
  
  switch (serviceType) {
    case "Brand & Marketing Animation":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Desktop monitor with play button - light blue style */}
          <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M7 17L9 19L17 19" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="5" y="7" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          {/* Play button triangle */}
          <path d="M10 10L14 12L10 14V10Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      );
      
    case "Entertainment & Original IP":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Film reel with creative elements */}
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 4V8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 16V20" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20 12H16" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 12H4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16.5 7.5L14.5 9.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9.5 14.5L7.5 16.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16.5 16.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9.5 9.5L7.5 7.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
      
    case "Pre to Post Production (À‑La‑Carte or Full Stack)":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Light bulb for ideas/strategy - purple style */}
          <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M9 20C9 21.1 10.34 22 12 22C13.66 22 15 21.1 15 20" stroke="currentColor" strokeWidth="1.5"/>
          {/* Filament inside bulb */}
          <path d="M12 6V10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 8H14" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
      
    case "Creative Strategy & Consulting":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Knight chess piece - yellow style */}
          <path d="M8 20L10 22H14L16 20V18H8V20Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M8 18V16H16V18" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 16V14H15V16" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 14V12H14V14" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M11 12V10H13V12" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 10V8H12V6" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 6H14" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 4H15" stroke="currentColor" strokeWidth="1.5"/>
          {/* Knight's distinctive head shape */}
          <path d="M10 8C10 7.45 10.45 7 11 7H13C13.55 7 14 7.45 14 8V10H10V8Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      );
      
    case "Design & Collateral":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Picture frame/landscape - light blue style */}
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          {/* Mountain range */}
          <path d="M6 14L8 12L10 13L12 11L14 12L16 10L18 12V16H6V14Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          {/* Sun/moon in corner */}
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M17 5L19 7" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
          <path d="M19 5L17 7" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
        </svg>
      );
      
    case "Graphic Design Subscription":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Document with lines and pen - light green style */}
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          {/* Document lines */}
          <path d="M8 7H16" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 10H16" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 13H14" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 16H12" stroke="currentColor" strokeWidth="1.5"/>
          {/* Pen/stylus resting on document */}
          <path d="M16 8L19 5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M19 5L21 7L18 10L16 8Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M21 7L22 6" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
      
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 12H18" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      );
  }
} 