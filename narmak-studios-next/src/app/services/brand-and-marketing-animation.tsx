export default function BrandAndMarketingAnimation() {
  return (
    <div className="pt-20 min-h-screen bg-charcoal text-off-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-charcoal to-blue-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl text-center relative z-10">
        <div className="bg-gradient-to-r from-transparent via-charcoal/40 to-transparent rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-off-white/10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight bg-gradient-to-r from-white via-neon-accent to-white bg-clip-text text-transparent">
            Brand & Marketing Animation
          </h1>
          <p className="text-base md:text-lg text-off-white/90 max-w-2xl mx-auto leading-relaxed">
            Explainers, product launches, commercials, event visuals & branded entertainment that <span className="text-neon-accent font-semibold">convert and stick</span>.
          </p>
        </div>
      </div>

      {/* What We Deliver Section */}
      <div className="container mx-auto px-4 py-4 max-w-8xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            What We Deliver
          </h2>
          <p className="text-off-white/70 text-base max-w-2xl mx-auto">
            Professional animation services designed to elevate your brand and engage your audience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Explainer & Product Videos */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-pink-500/30 rounded-xl p-6 lg:p-8 text-center hover:border-pink-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 8L14 10L10 12V8Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 flex-grow">
                Explainer & Product Videos
              </h3>
              <p className="text-pink-300/80 text-base font-medium mb-3">
                (30-120 seconds)
              </p>
              <p className="text-off-white/70 text-base leading-relaxed">
                Compelling narratives that simplify complex ideas and showcase your products with clarity and impact.
              </p>
            </div>
          </div>

          {/* Commercial Spots */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-orange-500/30 rounded-xl p-6 lg:p-8 text-center hover:border-orange-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 flex-grow">
                Commercial Spots
              </h3>
              <p className="text-orange-300/80 text-base font-medium mb-3">
                (6, 15, 30, 60 seconds)
              </p>
              <p className="text-off-white/70 text-base leading-relaxed">
                High-impact advertisements crafted to capture attention and drive action across all media platforms.
              </p>
            </div>
          </div>

          {/* Social Shorts & Motion Graphics */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-blue-500/30 rounded-xl p-6 lg:p-8 text-center hover:border-blue-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 8L14 10L10 12V8Z" fill="currentColor"/>
                  <path d="M8 2L16 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 22L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 flex-grow">
                Social Shorts & Motion Graphics
              </h3>
              <p className="text-blue-300/80 text-base font-medium mb-3">
                Optimized for social platforms
              </p>
              <p className="text-off-white/70 text-base leading-relaxed">
                Thumb-stopping content designed for maximum engagement across TikTok, Instagram, and YouTube.
              </p>
            </div>
          </div>

          {/* Event & Stage Visuals */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-green-500/30 rounded-xl p-6 lg:p-8 text-center hover:border-green-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M8 21L16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17L12 21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="8" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="16" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 6L12 14" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 flex-grow">
                Event & Stage Visuals
              </h3>
              <p className="text-green-300/80 text-base font-medium mb-3">
                Large-scale productions
              </p>
              <p className="text-off-white/70 text-base leading-relaxed">
                Immersive visual experiences for live events, concerts, and projection mapping installations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ideal Use Cases Section */}
      <div className="container mx-auto px-4 py-8 max-w-8xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            Ideal Use Cases
          </h2>
          <p className="text-off-white/70 text-base max-w-2xl mx-auto">
            Perfect applications for our animation services across industries and platforms
          </p>
        </div>
        
        {/* Top row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6">
          {/* SaaS onboarding */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-6 lg:p-8 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-6 lg:gap-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 1V3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 21V23" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2"/>
                  <path d="M1 12H3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 12H23" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-2">
                  SaaS onboarding, Kickstarter pages, investor decks
                </h3>
                <p className="text-off-white/60 text-base leading-relaxed">
                  Simplify complex processes and build investor confidence
                </p>
              </div>
            </div>
          </div>

          {/* TV, YouTube pre-roll */}
                      <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-6 lg:p-8 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-6 lg:gap-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-2">
                  TV, YouTube pre-roll, paid social
                </h3>
                <p className="text-off-white/60 text-base leading-relaxed">
                  Capture attention in the first few seconds
                </p>
              </div>
            </div>
          </div>

          {/* Reels, TikTok */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-6 lg:p-8 hover:border-pink-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C20.5 8 20 7.5 20 7S20.5 6 21 6V4C21 2.9 20.1 2 19 2H5C3.9 2 3 2.9 3 4V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V18C20.5 18 20 17.5 20 17S20.5 16 21 16Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-2">
                  Reels, TikTok, Snapchat, IG stories
                </h3>
                <p className="text-off-white/60 text-base leading-relaxed">
                  Viral-ready content for maximum reach
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Ongoing audience-building */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-6 lg:p-8 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3L21 12L3 21V3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 12L21 3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 12L21 21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-2">
                  Ongoing audience-building content
                </h3>
                <p className="text-off-white/60 text-base leading-relaxed">
                  Consistent content that grows your community
                </p>
              </div>
            </div>
          </div>

          {/* Trade show loops */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-6 lg:p-8 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="7" y="8" width="10" height="4" rx="1" fill="currentColor"/>
                  <path d="M8 20L16 20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 16L12 20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-2">
                  Trade show loops, concert backdrops, projection-mapped sets
                </h3>
                <p className="text-off-white/60 text-base leading-relaxed">
                  Immersive experiences for live events
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl text-center relative z-10">
        <div className="bg-gradient-to-r from-charcoal/90 to-charcoal/80 rounded-2xl p-6 border border-neon-accent/20 backdrop-blur-sm">
          <div className="flex items-start justify-center gap-6 lg:gap-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-accent/20 to-neon-accent/10 border border-neon-accent/40 flex items-center justify-center flex-shrink-0">
              <span className="text-neon-accent text-xl">★</span>
            </div>
            <div className="text-left">
              <h3 className="font-bold text-neon-accent text-lg mb-2">Why this matters for you</h3>
              <p className="text-off-white/90 text-sm leading-relaxed">
                Because your story deserves to stand out. We help you connect with your audience, build trust, and make your brand unforgettable—whether you&apos;re launching a product, growing a community, or inspiring action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 