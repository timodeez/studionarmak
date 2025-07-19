export default function DesignAndCollateral() {
  return (
    <div className="pt-20 min-h-screen bg-charcoal text-off-white">
      <div className="container mx-auto px-4 py-20 md:py-28 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-neon-accent mb-6 drop-shadow">Design & Collateral</h1>
        <div className="mb-6 text-lg text-off-white/90 italic border-l-4 border-neon-accent pl-4">
          Key art, design, merch, album covers—the possibilities are endless. Extend and own your identity.
        </div>
        <div className="mb-6">
          <h3 className="text-base font-semibold text-neon-accent mb-2">Ideal for:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {/* No use cases listed for this service */}
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-base font-semibold text-neon-accent mb-2">What you get</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><span className="text-neon-accent pt-0.5">•</span>Key art, posters, thumbnails, album covers</li>
            <li className="flex items-start gap-2"><span className="text-neon-accent pt-0.5">•</span>Print & packaging design</li>
            <li className="flex items-start gap-2"><span className="text-neon-accent pt-0.5">•</span>Merch artwork (tees, stickers, plush, vinyl)</li>
            <li className="flex items-start gap-2"><span className="text-neon-accent pt-0.5">•</span>Pitch-deck design + investor sizzle reels</li>
          </ul>
        </div>
        <div className="flex items-start mt-4 bg-charcoal/80 rounded-xl p-4">
          <span className="mr-3 text-neon-accent text-2xl">★</span>
          <span>
            <span className="font-semibold text-neon-accent">Why this matters for you:</span> Make your brand unforgettable at every touchpoint. We create the visuals and materials you need to connect with your audience and unlock new opportunities.
          </span>
        </div>
      </div>
    </div>
  );
} 