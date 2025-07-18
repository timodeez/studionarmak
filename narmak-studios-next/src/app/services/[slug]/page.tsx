"use client";

import Link from "next/link";
import { servicesCardData } from "@/data/services";
import { Icons } from "@/components/Icons";

const slugMap = [
  "brand-and-marketing-animation",
  "entertainment-and-original-ip",
  "pre-to-post-production-a-la-carte-or-full-stack",
  "creative-strategy-and-consulting",
  "design-and-collateral",
  "graphic-design-subscription"
];

export default function IndividualServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
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
            {serviceData.useCases && serviceData.useCases.length > 0 && (
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
          <div className="text-center">
            <div className="bg-gradient-to-r from-neon-accent to-gradient-end p-8 rounded-2xl">
              <h3 className="text-2xl font-display text-charcoal mb-4">Ready to Get Started?</h3>
              <p className="text-charcoal/80 mb-6">Let&apos;s discuss your project and see how we can bring your vision to life.</p>
              <Link href="/get-a-quote" className="inline-block bg-charcoal text-off-white font-display font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 