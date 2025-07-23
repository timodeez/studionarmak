'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = image.endsWith('.mp4');
  const isGif = image.endsWith('.gif');

  // No hover handlers needed - videos will autoplay and loop continuously

  const handleImageError = () => {
    console.error('Image failed to load:', image);
    setImageError(true);
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {isVideo ? (
          <video
            ref={videoRef}
            className={`absolute inset-0 object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={image.replace('.mp4', '-poster.jpg')}
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={(e) => {
              console.error('Video failed to load:', image, e);
              setImageError(true);
            }}
          >
            <source src={image} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={image}
            alt={title}
            width={640}
            height={360}
            className="absolute inset-0 object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={handleImageError}
            unoptimized={isGif} // Don't optimize GIFs to preserve animation
          />
        )}
        
        {/* Fallback for failed images */}
        {imageError && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="text-white text-center p-4">
              <div className="text-2xl mb-2">📹</div>
              <div className="text-sm">{title}</div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-display text-white mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">{category}</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">{client}</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white">{year}</span>
          </div>
          <div className="inline-block px-6 py-2 bg-neon-accent text-charcoal font-semibold rounded-lg hover:bg-white transition-colors duration-300">
            View Project
          </div>
        </div>
      </div>
    </div>
  );
} 