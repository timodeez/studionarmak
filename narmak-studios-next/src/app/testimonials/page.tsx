import AnimatedSection from '@/components/AnimatedSection';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <AnimatedSection customClass="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-display mb-4">People Love Us</h1>
          <p className="text-lg text-off-white/70 mb-12">
            We&apos;re proud to partner with amazing clients. Here&apos;s what some of them have to say about our work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map(item => (
            <div key={item.name} className="bg-[#1a1a1c] border border-off-white/10 rounded-lg p-8">
              <p className="text-xl text-off-white leading-relaxed">"{item.quote}"</p>
              <p className="mt-6 font-semibold text-off-white">{item.name}</p>
              <p className="text-off-white/50">{item.title}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
} 