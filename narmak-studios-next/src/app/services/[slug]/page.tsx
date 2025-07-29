import Link from "next/link";
import { Metadata } from "next";
import { servicesCardData } from "@/data/services";
import BrandAndMarketingAnimation from "../brand-and-marketing-animation";
import CreativeStrategyAndConsulting from "../creative-strategy-and-consulting";
import DesignAndCollateral from "../design-and-collateral";
import EntertainmentAndOriginalIP from "../entertainment-and-original-ip";
import GraphicDesignSubscription from "../graphic-design-subscription";
import PreToPostProduction from "../pre-to-post-production-a-la-carte-or-full-stack";

const slugMap = [
  "brand-and-marketing-animation",
  "entertainment-and-original-ip",
  "pre-to-post-production-a-la-carte-or-full-stack",
  "creative-strategy-and-consulting",
  "design-and-collateral",
  "graphic-design-subscription"
];

const serviceMetadata: Record<string, { title: string; description: string }> = {
  "brand-and-marketing-animation": {
    title: "Brand & Marketing Animation Services",
    description: "Explainers, product launches and commercials that convert and stick."
  },
  "entertainment-and-original-ip": {
    title: "Entertainment & Original IP Production", 
    description: "Original IP that builds long‑tail engagement and fandom."
  },
  "pre-to-post-production-a-la-carte-or-full-stack": {
    title: "À‑La‑Carte or Full‑Stack Animation",
    description: "Strategy, design, animation, edit and mix—pick stages or all‑in‑one."
  },
  "creative-strategy-and-consulting": {
    title: "Creative Strategy & Pitch Polish",
    description: "Positioning, story road‑maps and decks that land funding and win audiences."
  },
  "design-and-collateral": {
    title: "Design & Collateral for IP & Brands",
    description: "Key art, merch, decks and album covers that lock in visual identity."
  },
  "graphic-design-subscription": {
    title: "Unlimited Graphic Design Subscription",
    description: "Flat monthly fee, unlimited requests, fast turnaround—design help on tap."
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = serviceMetadata[slug];
  
  if (!meta) {
    return {
      title: "Service Not Found",
      description: "The service you're looking for doesn't exist."
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${meta.title} – Studio Narmak`,
      description: meta.description,
      url: `https://studionarmak.com/services/${slug}`,
    },
    twitter: {
      title: `${meta.title} – Studio Narmak`,
      description: meta.description,
    }
  };
}

export default async function IndividualServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceIndex = slugMap.indexOf(slug);

  if (serviceIndex === -1) {
    return (
      <div className="pt-20 min-h-screen bg-charcoal text-off-white">
        <div className="container mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-5xl font-display mb-6">Service Not Found</h1>
          <p className="text-lg text-off-white/70 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services" className="inline-flex items-center text-neon-accent hover:text-gradient-end transition-colors">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </span>
            <span>Back to Services</span>
          </Link>
        </div>
      </div>
    );
  }

  // Use specific components for each service
  switch (slug) {
    case "brand-and-marketing-animation":
      return <BrandAndMarketingAnimation />;
    case "creative-strategy-and-consulting":
      return <CreativeStrategyAndConsulting />;
    case "design-and-collateral":
      return <DesignAndCollateral />;
    case "entertainment-and-original-ip":
      return <EntertainmentAndOriginalIP />;
    case "graphic-design-subscription":
      return <GraphicDesignSubscription />;
    case "pre-to-post-production-a-la-carte-or-full-stack":
      return <PreToPostProduction />;
    default:
      // Fallback to generic layout for any remaining cases
      const serviceData = servicesCardData[serviceIndex];
      return (
        <div className="pt-20 min-h-screen bg-charcoal text-off-white">
          <div className="container mx-auto px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link href="/services" className="inline-flex items-center text-neon-accent hover:text-gradient-end transition-colors">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                  </span>
                  <span>Back to Services</span>
                </Link>
              </div>
              <div className="text-center mb-16">
                <h1 className="text-5xl font-display text-neon-accent mb-6">{serviceData.title}</h1>
                <p className="text-lg text-off-white/70 max-w-2xl mx-auto">{serviceData.why}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-display text-off-white mb-6">What We Deliver</h2>
                  <ul className="space-y-4">
                    {serviceData.deliver.map((item: string, i: number) => (
                      <li key={i} className="flex items-start bg-white/5 backdrop-blur rounded-lg p-4 hover:bg-white/10 transition-colors">
                        <span className="min-w-[1.5em] text-neon-accent text-xl font-bold mr-3">•</span>
                        <span className="text-off-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {serviceData.useCases.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-display text-off-white mb-6">Ideal Use Cases</h2>
                    <ul className="space-y-4">
                      {serviceData.useCases.map((item: string, i: number) => (
                        <li key={i} className="flex items-start bg-white/5 backdrop-blur rounded-lg p-4 hover:bg-white/10 transition-colors">
                          <span className="min-w-[1.5em] text-gradient-end text-xl font-bold mr-3">•</span>
                          <span className="text-off-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
  }
} 