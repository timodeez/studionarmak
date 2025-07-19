'use client';

import Image from 'next/image';

interface PortfolioItemProps {
  title: string;
  image: string;
  category: string;
  client: string;
  year: string;
  id: string;
}

export default function PortfolioItem({
  title,
  image,
  category,
  client,
  year,
  id
}: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-w-16 aspect-h-9">
        <Image
          src={image}
          alt={title}
          width={640}
          height={360}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-display text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">{category}</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">{client}</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">{year}</span>
          </div>
          <a
            href={`/portfolio/${id}`}
            className="inline-block px-6 py-2 bg-neon-accent text-charcoal font-semibold rounded-lg hover:bg-white transition-colors duration-300"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
} 