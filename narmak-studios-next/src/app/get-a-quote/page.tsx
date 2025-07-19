import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';

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
        
        {/* Use the ContactForm component with file upload and new budget ranges */}
        <ContactForm />
      </AnimatedSection>
    </div>
  );
} 