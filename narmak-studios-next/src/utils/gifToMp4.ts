// Utility for converting GIFs to optimized MP4s
export const gifToMp4Map = {
  // Creative Portfolio
  'genshin-ezgif.com-video-to-gif-converter.gif': '/genshin-impact.mp4',
  'dbzgfuel-ezgif.com-video-to-gif-converter.gif': '/gfuel-dbz.mp4',
  'NordVPN-ezgif.com-video-to-gif-converter(1).gif': '/nordvpn.mp4',
  'blackclover-ezgif.com-video-to-gif-converter.gif': '/black-clover.mp4',
  'shrekfest2-ezgif.com-video-to-gif-converter.gif': '/shrekfest.mp4',
  
  // Originals Portfolio
  'SBAnime-ezgif.com-video-to-gif-converter.gif': '/suponjibobu-anime.mp4',
  'attackonogre-ezgif.com-video-to-gif-converter.gif': '/attack-on-ogre.mp4',
  'schaggyscooby-ezgif.com-video-to-gif-converter.gif': '/shaggy-v-scooby.mp4',
  'animeop-ezgif.com-video-to-gif-converter.gif': '/anime-openings.mp4',
  'narutoiguess-ezgif.com-video-to-gif-converter.gif': '/naruto-i-guess.mp4',
};

export function getOptimizedMediaUrl(originalUrl: string): string {
  const fileName = originalUrl.split('/').pop();
  if (fileName && gifToMp4Map[fileName as keyof typeof gifToMp4Map]) {
    return gifToMp4Map[fileName as keyof typeof gifToMp4Map];
  }
  return originalUrl;
}

export function isGif(url: string): boolean {
  return url.toLowerCase().endsWith('.gif');
}

export function shouldUseVideo(url: string): boolean {
  return isGif(url) && getOptimizedMediaUrl(url) !== url;
} 