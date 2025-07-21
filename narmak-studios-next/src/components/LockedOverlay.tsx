'use client';

interface LockedOverlayProps {
  title?: string;
  message?: string;
}

export default function LockedOverlay({ 
  title = "This Section is Currently Locked", 
  message = "We're working on something amazing! This section will be available soon." 
}: LockedOverlayProps) {
  return (
    <div className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center">
      <div className="max-w-md mx-4 text-center">
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 shadow-2xl">
          {/* Lock Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-neon-accent/20 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-neon-accent" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
              />
            </svg>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-white mb-4">
            {title}
          </h2>
          
          {/* Message */}
          <p className="text-white/70 leading-relaxed mb-6">
            {message}
          </p>
          
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="bg-neon-accent text-charcoal font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
} 