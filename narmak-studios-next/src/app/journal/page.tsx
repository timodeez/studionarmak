import Link from 'next/link';
import LockedOverlay from '@/components/LockedOverlay';

const journalEntries = [
  {
    title: 'How We Created the Shrekfest Animation',
    date: '2024-06-01',
    excerpt: 'A behind-the-scenes look at the creative process for the viral Shrekfest animation.',
    slug: 'shrekfest-animation',
  },
  {
    title: 'Studio Narmak: Our Origin Story',
    date: '2024-05-15',
    excerpt: 'Discover how Studio Narmak was founded and what drives our passion for animation.',
    slug: 'origin-story',
  },
];

export default function JournalPage() {
  return (
    <>
      <LockedOverlay 
        title="Journal Coming Soon" 
        message="We're crafting amazing stories and insights to share with you. Our journal will feature behind-the-scenes content, creative processes, and industry insights."
      />
      <section className="container mx-auto px-4 py-20 min-h-[60vh]">
      <h1 className="text-4xl font-display mb-8">Journal</h1>
      <p className="text-lg text-off-white/80 mb-12 max-w-2xl">Insights, stories, and behind-the-scenes from the Studio Narmak team.</p>
      <div className="space-y-8">
        {journalEntries.map(entry => (
          <article key={entry.slug} className="bg-charcoal/80 rounded-lg p-6 border border-off-white/10">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/journal/${entry.slug}`} className="hover:underline text-neon-accent">
                {entry.title}
              </Link>
            </h2>
            <time className="block text-sm text-off-white/60 mb-2">{new Date(entry.date).toLocaleDateString()}</time>
            <p className="text-off-white/80 mb-2">{entry.excerpt}</p>
            <Link href={`/journal/${entry.slug}`} className="text-neon-accent underline text-sm">Read more</Link>
          </article>
        ))}
      </div>
      </section>
    </>
  );
} 