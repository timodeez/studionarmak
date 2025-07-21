import Link from 'next/link';
import LockedOverlay from '@/components/LockedOverlay';

const featuredPosts = [
  {
    title: 'How We Created the Shrekfest Animation',
    slug: 'shrekfest-animation',
    excerpt: 'A behind-the-scenes look at the creative process for the viral Shrekfest animation.'
  },
  {
    title: 'Studio Narmak: Our Origin Story',
    slug: 'origin-story',
    excerpt: 'Discover how Studio Narmak was founded and what drives our passion for animation.'
  }
];

const faqs = [
  {
    q: 'How can I work with Studio Narmak?',
    a: 'Visit our Careers page for open positions, or email us at careers@narmakstudios.com with your portfolio.'
  },
  {
    q: 'Can I use your animations or GIFs in my project?',
    a: 'Please contact us for licensing and usage permissions.'
  },
  {
    q: 'Where can I find your press kit or logos?',
    a: 'Download our media kit below for logos and brand assets.'
  }
];

export default function ResourcesPage() {
  return (
    <>
      <LockedOverlay 
        title="Resources Coming Soon" 
        message="We're building a comprehensive resource hub with tutorials, press kits, FAQs, and more. Check back soon for amazing content and tools!"
      />
      <main className="container mx-auto px-4 py-20 min-h-[60vh] space-y-16">
      <h1 className="text-4xl font-display mb-8">Resources</h1>
      {/* Journal Highlights */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Journal Posts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredPosts.map(post => (
            <article key={post.slug} className="bg-charcoal/80 rounded-lg p-6 border border-off-white/10">
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/journal/${post.slug}`} className="text-neon-accent hover:underline">{post.title}</Link>
              </h3>
              <p className="text-off-white/80 mb-2">{post.excerpt}</p>
              <Link href={`/journal/${post.slug}`} className="text-neon-accent underline text-sm">Read more</Link>
            </article>
          ))}
        </div>
        <Link href="/journal" className="inline-block mt-4 text-neon-accent underline">View all journal posts</Link>
      </section>

      {/* Careers */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Careers at Studio Narmak</h2>
        <p className="mb-2 text-off-white/80 max-w-2xl">We’re always looking for creative talent! Check out our open positions or send us your portfolio.</p>
        <Link href="/careers" className="inline-block bg-neon-accent text-charcoal font-bold px-6 py-3 rounded-lg shadow hover:bg-gradient-to-r hover:from-neon-accent hover:to-gradient-end transition">See Careers</Link>
      </section>

      {/* Media Kit */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Media Kit & Brand Assets</h2>
        <p className="mb-2 text-off-white/80 max-w-2xl">Download our official logos and press kit for media use. Please credit Studio Narmak when using our assets.</p>
        <a href="/public/LOGO/3GIINDlogo.webp" download className="inline-block text-neon-accent underline">Download Logo</a>
        <span className="mx-2">|</span>
        <a href="#" className="inline-block text-neon-accent underline opacity-50 cursor-not-allowed" tabIndex={-1}>Press Kit (coming soon)</a>
      </section>

      {/* Tutorials */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Animation Tutorials</h2>
        <p className="mb-2 text-off-white/80 max-w-2xl">Learn about our creative process, animation tips, and more. (Full tutorials coming soon!)</p>
        <ul className="list-disc pl-6 text-off-white/80">
          <li>How to storyboard an animation (coming soon)</li>
          <li>Our favorite animation tools (coming soon)</li>
        </ul>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-charcoal/70 rounded-lg p-4 border border-off-white/10">
              <h3 className="font-semibold text-neon-accent mb-1">{faq.q}</h3>
              <p className="text-off-white/80">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Social */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contact & Social</h2>
        <p className="mb-2 text-off-white/80 max-w-2xl">For business inquiries, collaborations, or press, email <a href="mailto:hello@narmakstudios.com" className="underline text-neon-accent">hello@narmakstudios.com</a>.</p>
        <div className="flex gap-4 mt-2">
          <a href="https://twitter.com/narmakyt" target="_blank" rel="noopener" className="text-neon-accent underline">Twitter</a>
          <a href="https://www.youtube.com/@Narmak" target="_blank" rel="noopener" className="text-neon-accent underline">YouTube</a>
          <a href="https://www.instagram.com/narmakyt/" target="_blank" rel="noopener" className="text-neon-accent underline">Instagram</a>
        </div>
      </section>
      </main>
    </>
  );
} 