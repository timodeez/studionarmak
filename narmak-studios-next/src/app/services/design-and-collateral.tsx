export default function DesignAndCollateral() {
  return (
    <div className="pt-20 min-h-screen bg-charcoal text-off-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-charcoal to-blue-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl text-center relative z-10">
        <div className="bg-gradient-to-r from-transparent via-charcoal/40 to-transparent rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-off-white/10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight bg-gradient-to-r from-white via-neon-accent to-white bg-clip-text text-transparent">
            Design & Collateral
          </h1>
          <p className="text-base md:text-lg text-off-white/90 max-w-2xl mx-auto leading-relaxed">
            Key art, design, merch, album covers—the possibilities are endless. <span className="text-neon-accent font-semibold">Extend and own your identity</span>.
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
            Comprehensive design solutions that bring your brand to life across all touchpoints
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Key Art & Posters */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-pink-500/30 rounded-xl p-4 text-center hover:border-pink-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Key Art & Posters
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Eye-catching visual identity pieces, thumbnails, album covers, and promotional artwork that capture attention.
              </p>
            </div>
          </div>

          {/* Print & Packaging */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-orange-500/30 rounded-xl p-4 text-center hover:border-orange-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <rect x="5" y="6" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M9 20H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 16V20" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Print & Packaging Design
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Professional packaging, product labels, business cards, and print materials that make your brand tangible.
              </p>
            </div>
          </div>

          {/* Merchandise Artwork */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-blue-500/30 rounded-xl p-4 text-center hover:border-blue-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.24 12.24C21.3398 13.3398 21.9731 14.7932 22 16.32C22.0069 17.8468 21.3933 19.3071 20.3 20.42C19.1932 21.5067 17.7368 22.1203 16.21 22.11C14.6832 22.0831 13.2298 21.4498 12.13 20.35L11.71 19.93C10.6102 18.8302 9.98694 17.3768 9.96 15.85C9.96926 14.3232 10.6029 12.8629 11.71 11.75L12.13 11.33C13.2298 10.2302 14.6832 9.59685 16.21 9.57C17.7368 9.57926 19.1971 10.2129 20.31 11.32C20.31 11.32 20.24 12.24 20.24 12.24Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Merch Artwork
              </h3>
              <p className="text-blue-300/80 text-sm font-medium mb-2">
                (Tees, stickers, plush, vinyl)
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Custom designs for merchandise that your fans will love and proudly display.
              </p>
            </div>
          </div>

          {/* Pitch Decks & Investor Materials */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-green-500/30 rounded-xl p-4 text-center hover:border-green-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="19" cy="19" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Pitch Deck Design
              </h3>
              <p className="text-green-300/80 text-sm font-medium mb-2">
                + Investor sizzle reels
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Professional presentations that communicate your vision clearly and win over stakeholders.
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
            Perfect applications for our design services across industries and platforms
          </p>
        </div>
        
        {/* Top row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Brand launches */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-pink-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Brand launches needing complete visual identity
                </h3>
                <p className="text-off-white/60 text-sm">
                  Create a cohesive brand presence across all touchpoints
                </p>
              </div>
            </div>
          </div>

          {/* Musicians & artists */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <path d="M12 1V6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 18V23" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Musicians & artists releasing albums or merchandise
                </h3>
                <p className="text-off-white/60 text-sm">
                  Stand out with memorable cover art and merch designs
                </p>
              </div>
            </div>
          </div>

          {/* Startups pitching */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Startups pitching to investors or customers
                </h3>
                <p className="text-off-white/60 text-sm">
                  Professional presentations that communicate your vision clearly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* E-commerce brands */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="21" r="1" fill="currentColor"/>
                  <circle cx="20" cy="21" r="1" fill="currentColor"/>
                  <path d="M1 1H5L7.68 14.39C7.77 14.83 8.17 15 8.62 15H19.4C19.85 15 20.25 14.83 20.34 14.39L22 5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  E-commerce brands needing packaging and product photography
                </h3>
                <p className="text-off-white/60 text-sm">
                  Make your products irresistible on shelf and online
                </p>
              </div>
            </div>
          </div>

          {/* Content creators */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 8L14 10L10 12V8Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Content creators building a merchandise line
                </h3>
                <p className="text-off-white/60 text-sm">
                  Turn your community into revenue with compelling merch designs
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
                Make your brand unforgettable at every touchpoint. We create the visuals and materials you need to connect with your audience and unlock new opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 