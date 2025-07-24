export default function CreativeStrategyAndConsulting() {
  return (
    <div className="pt-20 min-h-screen bg-charcoal text-off-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-charcoal to-blue-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl text-center relative z-10">
        <div className="bg-gradient-to-r from-transparent via-charcoal/40 to-transparent rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-off-white/10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight bg-gradient-to-r from-white via-neon-accent to-white bg-clip-text text-transparent">
            Creative Strategy & Consulting
          </h1>
          <p className="text-base md:text-lg text-off-white/90 max-w-2xl mx-auto leading-relaxed">
            Roadmaps, creativity, and building blocks. We help ideas grow—<span className="text-neon-accent font-semibold">500 million views didn't come from thin air</span> ;)
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
            Strategic guidance and creative consulting services to accelerate your success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Brand Storytelling Roadmap */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-blue-500/30 rounded-xl p-4 text-center hover:border-blue-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Brand Storytelling Roadmap
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Strategic narrative frameworks that connect with your audience and drive meaningful engagement.
              </p>
            </div>
          </div>

          {/* Channel Strategy */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-red-500/30 rounded-xl p-4 text-center hover:border-red-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 8L14 10L10 12V8Z" fill="currentColor"/>
                  <path d="M21 7L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                YouTube/TikTok Channel Strategy
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Complete content strategies including cadence, thumbnails, metadata optimization, and audience growth tactics.
              </p>
            </div>
          </div>

          {/* IP Development Coaching */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-purple-500/30 rounded-xl p-4 text-center hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M19.4 15C19.2 15.74 19.5 16.5 20.3 16.9L21.4 17.4C21.7 17.6 21.9 17.9 21.9 18.3S21.7 19 21.4 19.2L20.3 19.7C19.5 20.1 19.2 20.84 19.4 21.6L19.6 22.8C19.7 23.2 19.4 23.6 19 23.7L17.8 23.9C17.1 24.1 16.6 24.7 16.6 25.4V26.6C16.6 27 16.2 27.4 15.8 27.4H14.2C13.8 27.4 13.4 27 13.4 26.6V25.4C13.4 24.7 12.9 24.1 12.2 23.9L11 23.7C10.6 23.6 10.3 23.2 10.4 22.8L10.6 21.6C10.8 20.84 10.5 20.1 9.7 19.7L8.6 19.2C8.3 19 8.1 18.7 8.1 18.3S8.3 17.6 8.6 17.4L9.7 16.9C10.5 16.5 10.8 15.74 10.6 15L10.4 13.8C10.3 13.4 10.6 13 11 12.9L12.2 12.7C12.9 12.5 13.4 11.9 13.4 11.2V10C13.4 9.6 13.8 9.2 14.2 9.2H15.8C16.2 9.2 16.6 9.6 16.6 10V11.2C16.6 11.9 17.1 12.5 17.8 12.7L19 12.9C19.4 13 19.7 13.4 19.6 13.8L19.4 15Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                IP Development Coaching
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Guidance for indie creators looking to develop original intellectual property and build sustainable creative businesses.
              </p>
            </div>
          </div>

          {/* Production Pipeline Audits */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-orange-500/30 rounded-xl p-4 text-center hover:border-orange-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V22" stroke="currentColor" strokeWidth="2"/>
                  <path d="M17 5H19C20.1 5 21 5.9 21 7V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V7C3 5.9 3.9 5 5 5H7" stroke="currentColor" strokeWidth="2"/>
                  <path d="M17 2V6H7V2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9L11 11L15 7" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Production Pipeline Audits
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Workflow optimization and setup to streamline your creative process and improve team efficiency.
              </p>
            </div>
          </div>

          {/* Project Budgeting & Scheduling */}
          <div className="group relative lg:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-green-500/30 rounded-xl p-4 text-center hover:border-green-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 14H16" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 18H16" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Budgeting & Scheduling for Animated Projects
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Detailed project planning, cost estimation, and timeline management to ensure your animated projects stay on track and on budget.
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
            Perfect scenarios where our strategic consulting delivers maximum impact
          </p>
        </div>
        
        {/* Grid of use cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Startup founders */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Startup founders building their first content strategy
                </h3>
                <p className="text-off-white/60 text-sm">
                  Get expert guidance to avoid common pitfalls and accelerate growth
                </p>
              </div>
            </div>
          </div>

          {/* Creative teams */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="12" r="1" fill="currentColor"/>
                  <circle cx="15" cy="12" r="1" fill="currentColor"/>
                  <circle cx="12" cy="12" r="1" fill="currentColor"/>
                  <path d="M20 12C20 16.4 16.4 20 12 20S4 16.4 4 12 7.6 4 12 4 20 7.6 20 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Creative teams scaling their production pipeline
                </h3>
                <p className="text-off-white/60 text-sm">
                  Optimize workflows and eliminate bottlenecks for smoother operations
                </p>
              </div>
            </div>
          </div>

          {/* Content creators */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 8L14 10L10 12V8Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Content creators looking to monetize and grow their audience
                </h3>
                <p className="text-off-white/60 text-sm">
                  Strategic planning for sustainable growth and revenue generation
                </p>
              </div>
            </div>
          </div>

          {/* Indie developers */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9.27L15 14.14L16.18 21.02L12 17.77L7.82 21.02L9 14.14L4 9.27L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Indie developers creating original IP and entertainment properties
                </h3>
                <p className="text-off-white/60 text-sm">
                  Build compelling narratives and develop sustainable creative businesses
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
                Get expert guidance for your creative journey. We help you plan, strategize, and grow—so you can reach your goals faster and with less stress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 