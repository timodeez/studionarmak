import Link from 'next/link';
import { Icons } from './Icons';
import EmailSubscription from './EmailSubscription';

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-off-white/10">
      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* Logo, Email Subscription, and Social Media - All in one row */}
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
              successMessage="Thanks for subscribing! We&apos;ll keep you updated."
            />
          </div>
          
          {/* Right side - Social Media Links */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold text-off-white mb-3">Follow Us</h4>
            <div className="flex gap-4 justify-center lg:justify-end">
              <a href="https://www.instagram.com/narmak.animations/" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-neon-accent transition-colors">
                {Icons.instagram}
              </a>
              <a href="https://x.com/NARMAK13" target="_blank" rel="noopener" aria-label="X (Twitter)" className="hover:text-neon-accent transition-colors">
                {Icons.twitter}
              </a>
              <a href="https://www.tiktok.com/@narmaky" target="_blank" rel="noopener" aria-label="TikTok" className="hover:text-neon-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 00-1-.08A6.34 6.34 0 003 15.66a6.34 6.34 0 0010.86 4.44l.13-.19v-8.8a8.16 8.16 0 005.69 2.24l.01-3.86a4.85 4.85 0 01-3.9-2.8"/>
                </svg>
              </a>
              <a href="https://youtube.com/@narmak" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-neon-accent transition-colors">
                {Icons.youtube}
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links - Centered */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-off-white/80 text-sm font-medium mb-8 pb-8 border-b border-off-white/10">
          <Link href="/studio" className="hover:text-neon-accent transition">Studio</Link>
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