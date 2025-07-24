export default function GraphicDesignSubscription() {
  return (
    <div className="pt-20 min-h-screen bg-charcoal text-off-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-charcoal to-blue-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent pointer-events-none" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl text-center relative z-10">
        <div className="bg-gradient-to-r from-transparent via-charcoal/40 to-transparent rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-off-white/10">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-3 leading-tight bg-gradient-to-r from-white via-neon-accent to-white bg-clip-text text-transparent">
            Graphic Design Subscription
          </h1>
          <p className="text-base md:text-lg text-off-white/90 max-w-2xl mx-auto leading-relaxed">
            Unlimited design tasks, one flat monthly fee. <span className="text-neon-accent font-semibold">Limited spots</span>.
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
            Comprehensive design services on subscription - unlimited requests, predictable pricing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Graphic Design & Ads */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-blue-500/30 rounded-xl p-4 text-center hover:border-blue-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Graphic Design & Ads
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Social posts, digital ads, print collateral, and all your visual marketing needs.
              </p>
            </div>
          </div>

          {/* Illustrations & Icons */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-purple-500/30 rounded-xl p-4 text-center hover:border-purple-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Hand-drawn Illustrations
              </h3>
              <p className="text-purple-300/80 text-sm font-medium mb-2">
                + Custom iconography
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Original artwork and custom icon sets that make your brand unique.
              </p>
            </div>
          </div>

          {/* Branding & Logos */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-orange-500/30 rounded-xl p-4 text-center hover:border-orange-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Logos & Branding
              </h3>
              <p className="text-orange-300/80 text-sm font-medium mb-2">
                + Comprehensive guides
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Complete brand identity systems with detailed usage guidelines.
              </p>
            </div>
          </div>

          {/* Presentation Design */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-green-500/30 rounded-xl p-4 text-center hover:border-green-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M7 8H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Presentation Design
              </h3>
              <p className="text-green-300/80 text-sm font-medium mb-2">
                Pitch decks, reports, data-viz
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Professional presentations that communicate your ideas clearly and persuasively.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* Content & Copywriting */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-pink-500/30 rounded-xl p-4 text-center hover:border-pink-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.4 2 4.9 2.5 4.9 3.1L4 20C4 20.6 4.4 21 5 21H19C19.6 21 20 20.6 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 9H8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Copywriting & Content
              </h3>
              <p className="text-off-white/70 text-sm leading-tight">
                Content creation and copy polishing to make your message shine.
              </p>
            </div>
          </div>

          {/* Video & Motion */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-cyan-500/30 rounded-xl p-4 text-center hover:border-cyan-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M10 8L14 10L10 12V8Z" fill="currentColor"/>
                  <path d="M8 2L16 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M8 22L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Video & Motion Graphics
              </h3>
              <p className="text-cyan-300/80 text-sm font-medium mb-2">
                Social cuts, promos, title sequences
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Video editing and motion graphics to bring your content to life.
              </p>
            </div>
          </div>

          {/* Web & Development */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-yellow-500/30 rounded-xl p-4 text-center hover:border-yellow-500/60 transition-all duration-300 backdrop-blur-sm h-full flex flex-col">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 7H17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11H17" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex-grow">
                Web Design & Dev
              </h3>
              <p className="text-yellow-300/80 text-sm font-medium mb-2">
                Landing pages, email templates
              </p>
              <p className="text-off-white/70 text-sm leading-tight">
                Web design and development to extend your brand online.
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
            Perfect scenarios where unlimited design on subscription delivers maximum value
          </p>
        </div>
        
        {/* Top row - 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Marketing teams */}
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
                  Marketing teams needing steady creative throughput without adding headcount
                </h3>
                <p className="text-off-white/60 text-sm">
                  Scale your creative output without hiring additional designers
                </p>
              </div>
            </div>
          </div>

          {/* Agencies */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Agencies smoothing workload spikes with a single all-in-one partner
                </h3>
                <p className="text-off-white/60 text-sm">
                  Handle overflow work and unexpected demands seamlessly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row - 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Product launches */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Product launches or campaign sprints that demand fresh assets every week
                </h3>
                <p className="text-off-white/60 text-sm">
                  Keep up with fast-paced launches and campaign requirements
                </p>
              </div>
            </div>
          </div>

          {/* Founders */}
          <div className="bg-gradient-to-br from-charcoal/80 to-charcoal/60 border border-off-white/20 rounded-xl p-4 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/40 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9.27L15 14.14L16.18 21.02L12 17.77L7.82 21.02L9 14.14L4 9.27L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white leading-tight mb-1">
                  Founders who prefer design, dev, and content under one roof
                </h3>
                <p className="text-off-white/60 text-sm">
                  Simplify vendor management with a comprehensive creative partner
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
                You get creative support on your terms. Our subscription keeps your projects moving, your brand consistent, and your life easier—no more juggling multiple vendors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 