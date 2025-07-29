import type { Metadata } from "next";
import AnimatedSection from '@/components/AnimatedSection';
import { processSteps } from '@/data/processSteps';

export const metadata: Metadata = {
  title: "Our Creative Process",
  description: "Learn about Studio Narmak's proven creative process for delivering exceptional animation and creative content.",
  alternates: {
    canonical: '/process',
  },
  openGraph: {
    title: "Our Creative Process – Studio Narmak",
    description: "Learn about Studio Narmak's proven creative process for delivering exceptional animation and creative content.",
    url: "https://studionarmak.com/process",
  },
  twitter: {
    title: "Our Creative Process – Studio Narmak",
    description: "Learn about Studio Narmak's proven creative process for delivering exceptional animation and creative content.",
  }
};

export default function ProcessPage() {
  return (
    <div className="pt-20">
      <AnimatedSection customClass="container mx-auto px-4 py-20 md:py-28">
        <h1 className="text-5xl font-display text-center mb-16">How We Work</h1>
        <div className="max-w-3xl mx-auto space-y-12">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-neon-accent text-charcoal rounded-full flex items-center justify-center font-display text-2xl font-bold">
                  {index + 1}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-0.5 h-24 bg-off-white/20 mt-4"></div>
                )}
              </div>
              <div>
                <h3 className="text-3xl font-display mb-2 text-neon-accent">{step.title}</h3>
                <p className="text-off-white/90 mb-2">{step.description}</p>
                <div className="text-off-white/70 text-sm">
                  <span className="font-semibold text-gradient-end">Deliverable → </span>
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
} 