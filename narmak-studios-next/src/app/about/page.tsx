import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const teamMembers = [
  { name: 'Narmak', role: 'Founder & Creative Director', img: 'https://placehold.co/500x500/1a1a1c/F5F5F7?text=Narmak' },
  { name: 'Your Partner', role: 'Studio Director', img: 'https://placehold.co/500x500/1a1a1c/F5F5F7?text=Partner' },
  { name: 'Jane Doe', role: 'Lead Animator', img: 'https://placehold.co/500x500/1a1a1c/F5F5F7?text=Jane' },
  { name: 'John Smith', role: 'Art Director', img: 'https://placehold.co/500x500/1a1a1c/F5F5F7?text=John' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AnimatedSection customClass="py-20 md:py-28 bg-charcoal">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-5xl font-display mb-6">The Flywheel of Creativity.</h1>
          <p className="text-lg text-off-white/80 leading-relaxed mb-8">
            Our studio is built on a simple, powerful idea: commerce and art are not enemies; they are partners. The revenue from our agency work provides the financial freedom and stability to pursue our passion projects. In turn, our original content serves as our most authentic advertisement, attracting ambitious clients who want more than just a service—they want our unique voice. Each side fuels the other, creating a perpetual motion machine of innovation and imagination.
          </p>
          <Image 
            src="https://placehold.co/1200x700/1a1a1c/F5F5F7?text=The+Studio" 
            alt="The Studio"
            width={1200}
            height={700}
            className="rounded-lg shadow-xl mb-16" 
          />
          <h2 className="text-4xl font-display mb-10">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.name}>
                <Image 
                  src={member.img} 
                  alt={member.name}
                  width={500}
                  height={500}
                  className="rounded-full aspect-square object-cover mb-4" 
                />
                <h3 className="text-xl font-display">{member.name}</h3>
                <p className="text-off-white/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
} 