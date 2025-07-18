import AnimatedSection from '@/components/AnimatedSection';

export default function GetAQuotePage() {
  return (
    <div className="pt-20">
      <AnimatedSection customClass="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-display mb-4">Let&apos;s Create Together</h1>
          <p className="text-lg text-off-white/70 mb-12">
            Tell us about your project. The more details, the better.
          </p>
        </div>
        <form className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-off-white/80 mb-1">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-[#1a1a1c] border border-off-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-off-white/80 mb-1">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-[#1a1a1c] border border-off-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-accent"
              />
            </div>
          </div>
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-off-white/80 mb-1">
              Industry
            </label>
            <input 
              type="text" 
              id="industry" 
              className="w-full bg-[#1a1a1c] border border-off-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-accent"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="video-type" className="block text-sm font-medium text-off-white/80 mb-1">
                Type of Video
              </label>
              <select 
                id="video-type" 
                className="w-full bg-[#1a1a1c] border border-off-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-accent"
              >
                <option>Explainer Video</option>
                <option>Commercial / Advertisement</option>
                <option>Music Video</option>
                <option>Original Short / Web Series</option>
                <option>Branded Entertainment / Mini-Series</option>
                <option>Social Shorts / Motion Graphics</option>
                <option>Marketing / Graphics</option>
                <option>Event / Stage Visuals</option>
                <option>In-Game Cinematic / Cut-Scene</option>
                <option>AR / VR / Interactive</option>
                <option>Pitch Trailer / Teaser</option>
                <option>Other (describe below)</option>
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-off-white/80 mb-1">
                Budget Range (USD)
              </label>
              <select 
                id="budget" 
                className="w-full bg-[#1a1a1c] border border-off-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-accent"
              >
                <option>Under $5,000</option>
                <option>$5,000 - $15,000</option>
                <option>$15,000 - $30,000</option>
                <option>$30,000 - $50,000</option>
                <option>$50,000 - $75,000</option>
                <option>$75,000 - $100,000</option>
                <option>$100,000 - $150,000</option>
                <option>$150,000+</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-off-white/80 mb-1">
              Project Details
            </label>
            <textarea 
              id="message" 
              rows={5} 
              className="w-full bg-[#1a1a1c] border border-off-white/20 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-accent"
            ></textarea>
          </div>
          <div className="text-right">
            <button 
              type="submit" 
              className="bg-neon-accent text-charcoal font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-accent/30"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </AnimatedSection>
    </div>
  );
} 