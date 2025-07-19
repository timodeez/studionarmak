import Link from 'next/link';
import { Icons } from './Icons';
import EmailSubscription from './EmailSubscription';

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-off-white/10">
      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* Top section with logo, email subscription, and social media */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-12">
          {/* Left side - Logo and contact */}
          <div className="text-center lg:text-left">
            <h3 className="font-display text-2xl text-off-white mb-2">Studio Narmak</h3>
            <p className="text-sm text-off-white/70 mb-2">Imagination in Motion.</p>
            <a href="mailto:hello@narmakstudios.com" className="text-neon-accent underline text-sm">hello@narmakstudios.com</a>
          </div>
          
          {/* Center - Email Subscription */}
          <div className="text-center max-w-md mx-auto">
            <h4 className="text-lg font-semibold text-off-white mb-3">Stay Updated</h4>
            <p className="text-sm text-off-white/70 mb-4">Get the latest updates on our projects and insights.</p>
            <EmailSubscription 
              placeholder="Enter your email address"
              buttonText="Subscribe"
              successMessage="Thanks for subscribing! We'll keep you updated."
            />
          </div>
          
          {/* Right side - Social Media Links */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold text-off-white mb-3">Follow Us</h4>
            <div className="flex gap-4 justify-center lg:justify-end">
              <a href="https://www.instagram.com/narmakyt/" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-neon-accent transition-colors">
                {Icons.instagram}
              </a>
              <a href="https://twitter.com/narmakyt" target="_blank" rel="noopener" aria-label="X (Twitter)" className="hover:text-neon-accent transition-colors">
                {Icons.twitter}
              </a>
              <a href="https://www.facebook.com/narmakstudios" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-neon-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Navigation Links - Centered */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-off-white/80 text-sm font-medium mb-8 pb-8 border-b border-off-white/10">
          <Link href="/about" className="hover:text-neon-accent transition">About</Link>
          <Link href="/work" className="hover:text-neon-accent transition">Works</Link>
          <Link href="/journal" className="hover:text-neon-accent transition">Journal</Link>
          <Link href="/careers" className="hover:text-neon-accent transition">Careers</Link>
          <Link href="/resources" className="hover:text-neon-accent transition">Resources</Link>
          <Link href="/get-a-quote" className="hover:text-neon-accent transition">Get a Quote</Link>
        </nav>
        
        {/* Bottom section with copyright */}
        <div className="text-center text-xs text-off-white/40">
          &copy; {new Date().getFullYear()} Studio Narmak. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
} 