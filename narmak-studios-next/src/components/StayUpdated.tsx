import EmailSubscription from './EmailSubscription';

export default function StayUpdated() {
  return (
    <section className="bg-gradient-to-r from-charcoal to-[#1a1a1c] border-t border-off-white/10">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-off-white mb-4">
            Stay Updated with Studio Narmak
          </h2>
          <p className="text-lg text-off-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest updates on our projects, industry insights, behind-the-scenes content, 
            and exclusive animation tips delivered straight to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <EmailSubscription 
              placeholder="Enter your email address"
              buttonText="Subscribe for Updates"
              successMessage="Thanks for subscribing! We'll keep you updated with the latest from Studio Narmak."
            />
          </div>
          
          <p className="text-sm text-off-white/60 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
} 