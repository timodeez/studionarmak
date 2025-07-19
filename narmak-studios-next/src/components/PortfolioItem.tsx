'use client';

import { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import ResponsiveVideo from './ResponsiveVideo';
import { getOptimizedMediaUrl, shouldUseVideo } from '@/utils/gifToMp4';

interface PortfolioItemProps {
  title: string;
  client?: string;
  type?: string;
  mediaUrl: string;
  staticImg: string;
  priority?: boolean;
}

export default function PortfolioItem({
  title,
  client,
  type,
  mediaUrl,
  staticImg,
  priority = false
}: PortfolioItemProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const optimizedMediaUrl = useMemo(() => getOptimizedMediaUrl(mediaUrl), [mediaUrl]);
  const useVideo = useMemo(() => shouldUseVideo(mediaUrl), [mediaUrl]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="group relative overflow-hidden rounded-lg transition-all duration-700 ease-out bg-[#18181b] shadow-lg"
      style={{ height: '240px', minWidth: '0' }}
    >
      {/* Media Content */}
      <div className="relative w-full h-full">
        {useVideo ? (
          <ResponsiveVideo
            src={optimizedMediaUrl}
            poster={staticImg}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ height: '100%', objectFit: 'cover' }}
            preload="metadata"
            onLoad={handleLoad}
          />
        ) : (
          <Image
            src={mediaUrl}
            alt={title}
            width={400}
            height={240}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ height: '100%', objectFit: 'cover' }}
            priority={priority}
            onLoad={handleLoad}
          />
        )}
        
        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-charcoal/20 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-neon-accent border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-left">
        {client && (
          <p className="text-neon-accent font-semibold text-xs sm:text-sm">{client}</p>
        )}
        {type && (
          <p className="text-gradient-end font-semibold text-xs sm:text-sm">{type}</p>
        )}
        <h3 className="text-base sm:text-lg font-display text-white mt-1 leading-tight">{title}</h3>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-xs sm:text-sm opacity-80">Click to view</p>
        </div>
      </div>
    </div>
  );
} 