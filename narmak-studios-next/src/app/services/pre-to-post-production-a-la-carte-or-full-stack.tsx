export default function PreToPostProduction() {
  return (
    <div className="pt-20 min-h-screen bg-charcoal text-off-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-charcoal to-blue-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl text-center relative z-10">
        <div className="bg-gradient-to-r from-transparent via-charcoal/40 to-transparent rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-off-white/10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight bg-gradient-to-r from-white via-neon-accent to-white bg-clip-text text-transparent">
            Pre to Post Production
          </h1>
          <div className="text-lg text-neon-accent/80 font-medium mb-3">(à-la-carte or full stack)</div>
          <p className="text-base md:text-lg text-off-white/90 max-w-2xl mx-auto leading-relaxed">
            One studio—concept to finished animation, and everything in between. <span className="text-neon-accent font-semibold">All or some, your choice</span>.
          </p>
        </div>
      </div>

      {/* What We Deliver Section */}
      <div className="container mx-auto px-4 py-4 max-w-7xl relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
            What We Deliver
          </h2>
          <p className="text-off-white/70 text-sm max-w-xl mx-auto">
            Complete animation production services from initial concept to final delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Concept & Script Workshops */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-yellow-500/30 rounded-xl p-4 text-center hover:border-yellow-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.4 2 4.9 2.5 4.9 3.1L4 20C4 20.6 4.4 21 5 21H19C19.6 21 20 20.6 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 9H8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Concept & Script Workshops
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Collaborative development sessions to refine your ideas and craft compelling narratives.
              </p>
            </div>
          </div>

          {/* Storyboards + Animatics */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-blue-500/30 rounded-xl p-4 text-center hover:border-blue-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Storyboards + Animatics
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Visual planning and timing blueprints that bring your story to life before animation begins.
              </p>
            </div>
          </div>

          {/* 2D Animation & Cel Animation */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-pink-500/30 rounded-xl p-4 text-center hover:border-pink-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 8L14 10L10 12V8Z" fill="currentColor"/>
                  <circle cx="12" cy="2" r="1" fill="currentColor"/>
                  <circle cx="12" cy="22" r="1" fill="currentColor"/>
                  <circle cx="2" cy="12" r="1" fill="currentColor"/>
                  <circle cx="22" cy="12" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                2D / Frame-by-Frame Animation
              </h3>
              <p className="text-pink-300/80 text-sm font-medium mb-2">
                + Hybrid & cel animation
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Hand-crafted animation with character and artistry that stands out from the crowd.
              </p>
            </div>
          </div>

          {/* Motion Graphics & Infographics */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-green-500/30 rounded-xl p-4 text-center hover:border-green-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 1V6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 18V23" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4.22 4.22L7.03 7.03" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16.97 16.97L19.78 19.78" stroke="currentColor" strokeWidth="2"/>
                  <path d="M1 12H6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 12H23" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4.22 19.78L7.03 16.97" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16.97 7.03L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Motion Graphics & Overlays
              </h3>
              <p className="text-green-300/80 text-sm font-medium mb-2">
                Infographics & looping GIF assets
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Dynamic graphics that enhance your message and keep audiences engaged.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - Post Production Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* Editing & Sound Design */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-purple-500/30 rounded-xl p-4 text-center hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L13 8L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 15V19C21 19.5 20.5 20 20 20H4C3.5 20 3 19.5 3 19V5C3 4.5 3.5 4 4 4H20C20.5 4 21 4.5 21 5V9" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="16" cy="8" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Editing & Sound Design
              </h3>
              <p className="text-purple-300/80 text-sm font-medium mb-2">
                + VO casting & multi-language recording
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Professional post-production that brings all elements together seamlessly.
              </p>
            </div>
          </div>

          {/* Color Grading & Mastering */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-orange-500/30 rounded-xl p-4 text-center hover:border-orange-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M19.4 15C19.2 15.74 19.5 16.5 20.3 16.9L21.4 17.4C21.7 17.6 21.9 17.9 21.9 18.3S21.7 19 21.4 19.2L20.3 19.7C19.5 20.1 19.2 20.84 19.4 21.6L19.6 22.8C19.7 23.2 19.4 23.6 19 23.7L17.8 23.9C17.1 24.1 16.6 24.7 16.6 25.4V26.6C16.6 27 16.2 27.4 15.8 27.4H14.2C13.8 27.4 13.4 27 13.4 26.6V25.4C13.4 24.7 12.9 24.1 12.2 23.9L11 23.7C10.6 23.6 10.3 23.2 10.4 22.8L10.6 21.6C10.8 20.84 10.5 20.1 9.7 19.7L8.6 19.2C8.3 19 8.1 18.7 8.1 18.3S8.3 17.6 8.6 17.4L9.7 16.9C10.5 16.5 10.8 15.74 10.6 15L10.4 13.8C10.3 13.4 10.6 13 11 12.9L12.2 12.7C12.9 12.5 13.4 11.9 13.4 11.2V10C13.4 9.6 13.8 9.2 14.2 9.2H15.8C16.2 9.2 16.6 9.6 16.6 10V11.2C16.6 11.9 17.1 12.5 17.8 12.7L19 12.9C19.4 13 19.7 13.4 19.6 13.8L19.4 15Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Color Grading & Mastering
              </h3>
              <p className="text-orange-300/80 text-sm font-medium mb-2">
                + Captions & localization
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Final polish and technical optimization for professional delivery.
              </p>
            </div>
          </div>

          {/* Master File Delivery */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-cyan-500/30 rounded-xl p-4 text-center hover:border-cyan-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 7H17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11H17" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="10" cy="14" r="1" fill="currentColor"/>
                  <circle cx="14" cy="14" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Master File Ready
              </h3>
              <p className="text-cyan-300/80 text-sm font-medium mb-2">
                For every screen
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Optimized deliverables formatted for all platforms and distribution channels.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ideal Use Cases Section */}
      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
            Ideal Use Cases
          </h2>
          <p className="text-off-white/70 text-sm max-w-xl mx-auto">
            Perfect scenarios for our comprehensive production services
          </p>
        </div>
        
        {/* Grid of use cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Teams without in-house staff */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M23 21V19C23 17.13 21.87 15.54 20.24 15.13" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16.5 3.29C17.86 3.93 18.77 5.33 18.77 6.96C18.77 8.59 17.86 9.99 16.5 10.63" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Teams without in-house animation staff
                </h3>
                <p className="text-off-white/60 text-sm">
                  Get professional animation without hiring a full team
                </p>
              </div>
            </div>
          </div>

          {/* Campaigns that can't afford delays */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Campaigns that can&apos;t afford hand-off delays
                </h3>
                <p className="text-off-white/60 text-sm">
                  Streamlined process eliminates communication gaps
                </p>
              </div>
            </div>
          </div>

          {/* Brands demanding quality control */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Brands demanding one-voice quality control from first sketch to final export
                </h3>
                <p className="text-off-white/60 text-sm">
                  Consistent vision and execution throughout the entire process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl text-center relative z-10">
        <div className="bg-gradient-to-r from-charcoal/90 to-charcoal/80 rounded-2xl p-6 border border-neon-accent/20 backdrop-blur-sm">
          <div className="flex items-start justify-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-accent/20 to-neon-accent/10 border border-neon-accent/40 flex items-center justify-center flex-shrink-0">
              <span className="text-neon-accent text-xl">★</span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-neon-accent text-lg mb-2">Why this matters for you</h3>
              <p className="text-off-white/90 text-sm leading-relaxed">
                One partner, one pipeline, zero creative drift. By keeping pre‑production, production and finishing under a single roof we lock vision early, catch problems while they&apos;re cheap, and deliver a master file that&apos;s ready for every screen—without the telephone‑game revisions that burn budget and morale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 