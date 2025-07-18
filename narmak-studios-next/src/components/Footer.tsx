import Link from 'next/link';
import { Icons } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-off-white/10">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
          <div>
            <h3 className="font-display text-2xl text-off-white mb-2">Studio Narmak</h3>
            <p className="text-sm text-off-white/70 mb-2">Imagination in Motion.</p>
            <a href="mailto:hello@narmakstudios.com" className="text-neon-accent underline text-sm">hello@narmakstudios.com</a>
          </div>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-off-white/80 text-sm font-medium">
            <Link href="/about" className="hover:text-neon-accent transition">About</Link>
            <Link href="/portfolio/creative" className="hover:text-neon-accent transition">Portfolio</Link>
            <Link href="/journal" className="hover:text-neon-accent transition">Journal</Link>
            <Link href="/careers" className="hover:text-neon-accent transition">Careers</Link>
            <Link href="/resources" className="hover:text-neon-accent transition">Resources</Link>
            <Link href="/get-a-quote" className="hover:text-neon-accent transition">Get a Quote</Link>
          </nav>
          <div>
            <div className="flex gap-4 justify-center md:justify-end mb-2">
              <a href="https://twitter.com/narmakyt" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-neon-accent transition-colors">{Icons.twitter}</a>
              <a href="https://www.instagram.com/narmakyt/" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-neon-accent transition-colors">{Icons.instagram}</a>
              <a href="https://www.linkedin.com/company/narmakstudios/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-neon-accent transition-colors">{Icons.linkedin}</a>
              <a href="https://www.youtube.com/@Narmak" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-neon-accent transition-colors">{Icons.youtube}</a>
            </div>
            <span className="block text-xs text-off-white/50">Follow us</span>
          </div>
        </div>
        <div className="text-center text-xs text-off-white/40 mt-12 border-t border-off-white/10 pt-6">
          &copy; {new Date().getFullYear()} Studio Narmak. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
} 