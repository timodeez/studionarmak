interface LoadingSkeletonProps {
  type: 'portfolio' | 'text' | 'image' | 'video';
  className?: string;
}

export default function LoadingSkeleton({ type, className = '' }: LoadingSkeletonProps) {
  const baseClasses = 'animate-pulse bg-charcoal/20 rounded';
  
  switch (type) {
    case 'portfolio':
      return (
        <div className={`${baseClasses} ${className}`} style={{ height: '280px' }}>
          <div className="w-full h-full bg-gradient-to-br from-charcoal/30 to-charcoal/10 rounded"></div>
        </div>
      );
    
    case 'text':
      return (
        <div className={`${baseClasses} h-4 ${className}`}>
          <div className="w-3/4 h-full bg-gradient-to-r from-charcoal/30 to-charcoal/10 rounded"></div>
        </div>
      );
    
    case 'image':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="w-full h-full bg-gradient-to-br from-charcoal/30 to-charcoal/10 rounded flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-neon-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      );
    
    case 'video':
      return (
        <div className={`${baseClasses} ${className}`}>
          <div className="w-full h-full bg-gradient-to-br from-charcoal/30 to-charcoal/10 rounded flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-neon-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      );
    
    default:
      return <div className={`${baseClasses} ${className}`}></div>;
  }
} 