export default function EntertainmentAndOriginalIP() {
  return (
    <div className="pt-20 min-h-screen bg-charcoal text-off-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-charcoal to-blue-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl text-center relative z-10">
        <div className="bg-gradient-to-r from-transparent via-charcoal/40 to-transparent rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-off-white/10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight bg-gradient-to-r from-white via-neon-accent to-white bg-clip-text text-transparent">
            Entertainment & Original IP
          </h1>
          <p className="text-base md:text-lg text-off-white/90 max-w-2xl mx-auto leading-relaxed">
            Original content, shorts, series, and music videos that <span className="text-neon-accent font-semibold">build fandom and engagement</span>.
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
            Original entertainment content and intellectual property development services
          </p>
        </div>
        
        {/* Top row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Original Shorts & Web Series */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-red-500/30 rounded-xl p-4 text-center hover:border-red-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 8L14 10L10 12V8Z" fill="currentColor"/>
                  <path d="M8 2L16 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 22L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Original Shorts & Web Series
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Compelling narrative content designed to build audiences and create lasting connections with viewers.
              </p>
            </div>
          </div>

          {/* Co-production & Service Work */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-blue-500/30 rounded-xl p-4 text-center hover:border-blue-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V3C16 2.4 15.6 2 15 2H9C8.4 2 8 2.4 8 3V21L12 19L16 21Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 7H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Co-production & Service Work
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Partnership projects and production services for studios, creators, and entertainment companies.
              </p>
            </div>
          </div>

          {/* Pitch Bibles & Teaser Trailers */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-green-500/30 rounded-xl p-4 text-center hover:border-green-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M17 17L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Pitch Bibles & Teaser Trailers
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Professional presentation materials to sell your concept to networks, streamers, and investors.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Licensing & Merchandising */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-purple-500/30 rounded-xl p-4 text-center hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                Licensing & Merchandising
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Character development, brand extensions, and merchandise strategies to maximize IP value.
              </p>
            </div>
          </div>

          {/* Music Videos */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-orange-500/30 rounded-xl p-4 text-center hover:border-orange-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6C8 5.4 8.4 5 9 5H15C15.6 5 16 5.4 16 6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 18C8 18.6 8.4 19 9 19H15C15.6 19 16 18.6 16 18" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Music Videos
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Creative visual storytelling for musicians and artists looking to bring their music to life through animation and motion graphics.
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
            Perfect scenarios for our entertainment and original IP development services
          </p>
        </div>
        
        {/* Top row - 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Monetized content */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-red-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 8L14 10L10 12V8Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Monetized on YouTube/Twitch, pitched to streamers
                </h3>
                <p className="text-off-white/60 text-sm">
                  Content designed for platform monetization and streaming partnerships
                </p>
              </div>
            </div>
          </div>

          {/* Industry partnerships */}
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
                  Partner with networks, game studios, record labels
                </h3>
                <p className="text-off-white/60 text-sm">
                  Professional-grade content for industry collaboration and distribution
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle row - 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Festival and funding */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  For buyers, festivals, or crowdfunding
                </h3>
                <p className="text-off-white/60 text-sm">
                  Content crafted to attract buyers, festival selections, and crowdfunding success
                </p>
              </div>
            </div>
          </div>

          {/* Merchandise & licensing */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Character art, NFTs, plushies, apparel
                </h3>
                <p className="text-off-white/60 text-sm">
                  IP development with merchandising and licensing opportunities in mind
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
                Because you want to experience new worlds, stories, and characters that inspire and entertain. Our original content is made for fans like you—by creators who love animation as much as you do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 