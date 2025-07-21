'use client';

interface ServiceIconProps {
  serviceType: string;
  className?: string;
}

export default function ServiceIcon({ serviceType, className = "" }: ServiceIconProps) {
  const baseIconClass = `w-6 h-6 transition-all duration-300`;
  
  switch (serviceType) {
    case "Brand & Marketing Animation":
      return (
        <svg className={`${baseIconClass} text-cyan-400`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Desktop monitor with play button - light blue style */}
          <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="8" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12" y1="16" x2="12" y2="18" stroke="currentColor" strokeWidth="2"/>
          {/* Play button triangle */}
          <path d="M10 8L14 10L10 12V8Z" fill="currentColor"/>
        </svg>
      );
      
    case "Entertainment & Original IP":
      return (
        <svg className={`${baseIconClass} text-cyan-400`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Film camera icon */}
          <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="9" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M16 10L20 6L20 18L16 14" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="9" cy="12" r="1" fill="currentColor"/>
        </svg>
      );
      
    case "Pre to Post Production (À‑La‑Carte or Full Stack)":
      return (
        <svg className={`${baseIconClass} text-purple-400`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Light bulb for ideas/strategy - purple style */}
          <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 21V22H14V21" stroke="currentColor" strokeWidth="2"/>
          {/* Filament inside bulb */}
          <path d="M12 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
      
    case "Creative Strategy & Consulting":
      return (
        <svg className={`${baseIconClass} text-yellow-400`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Knight chess piece - yellow style */}
          <path d="M6 20C6 19.45 6.45 19 7 19H17C17.55 19 18 19.45 18 20V21H6V20Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M7 19V17H17V19" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 17V15H16V17" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 15V13H15V15" stroke="currentColor" strokeWidth="2"/>
          <path d="M10 13V11H14V13" stroke="currentColor" strokeWidth="2"/>
          {/* Knight's head */}
          <path d="M10 11V9C10 8.45 10.45 8 11 8H13C13.55 8 14 8.45 14 9V11" stroke="currentColor" strokeWidth="2"/>
          <path d="M11 8V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V8" stroke="currentColor" strokeWidth="2"/>
          {/* Knight's distinctive features */}
          <circle cx="11.5" cy="9" r="0.5" fill="currentColor"/>
          <path d="M12.5 9.5C12.8 9.5 13 9.7 13 10" stroke="currentColor" strokeWidth="1"/>
        </svg>
      );
      
    case "Design & Collateral":
      return (
        <svg className={`${baseIconClass} text-cyan-400`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Chart/graph with trending line - light blue style */}
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          {/* Bar chart */}
          <rect x="6" y="16" width="2" height="2" fill="currentColor"/>
          <rect x="9" y="14" width="2" height="4" fill="currentColor"/>
          <rect x="12" y="12" width="2" height="6" fill="currentColor"/>
          <rect x="15" y="10" width="2" height="8" fill="currentColor"/>
          {/* Trending arrow */}
          <path d="M7 13L11 9L15 11L18 8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M16 8H18V10" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      );
      
    case "Graphic Design Subscription":
      return (
        <svg className={`${baseIconClass} text-green-400`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Document with pen - green style */}
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" fill="none"/>
          {/* Document lines */}
          <path d="M7 13H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          {/* Pen writing */}
          <path d="M13 17L16 14L17 15L14 18L13 17Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M16 14L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
      
    default:
      return (
        <svg className={`${baseIconClass} text-cyan-400`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 6V18" stroke="currentColor" strokeWidth="2"/>
          <path d="6 12H18" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
  }
} 