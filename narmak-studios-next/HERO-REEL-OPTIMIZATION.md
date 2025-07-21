# Hero Reel Video Optimization Guide

## Current Status
The hero reel is properly configured and should be working. The video files exist in the public directory:
- Desktop MP4: 29MB (website_reel_1-web.mp4)
- Mobile MP4: 9.7MB (website_reel_1-mobile.mp4)
- Desktop WebM: 12MB (website_reel_1-web.webm)
- Mobile WebM: 7.1MB (website_reel_1-mobile.webm)

## Optimization Recommendations

### 1. **File Size Reduction** (Priority: High)
Your current desktop MP4 is 29MB, which is quite large. Target sizes:
- **Mobile**: < 5MB
- **Desktop**: < 15MB

### 2. **Video Compression Settings**
Use the provided PowerShell script `optimize-hero-reel.ps1` to create optimized versions:
```bash
cd public
./optimize-hero-reel.ps1
```

### 3. **Video Content Optimization**
- **Duration**: Keep under 30 seconds (20-25 seconds is ideal)
- **Resolution**: 
  - Mobile: 1280x720 (720p)
  - Desktop: 1920x1080 (1080p)
- **Frame Rate**: 24-30 fps (don't use 60fps for web)
- **Remove Audio**: Hero reels typically don't need audio

### 4. **Advanced Optimization Techniques**

#### A. Two-Pass Encoding (Better Quality/Size Ratio)
```bash
# First pass
ffmpeg -i input.mp4 -c:v libx264 -preset veryslow -crf 24 -pass 1 -an -f null NUL

# Second pass
ffmpeg -i input.mp4 -c:v libx264 -preset veryslow -crf 24 -pass 2 -an output.mp4
```

#### B. WebM Format (Best Compression)
WebM with VP9 codec offers 30-50% better compression than H.264:
```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 -an output.webm
```

#### C. Variable Bitrate with Constraints
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 24 -maxrate 2M -bufsize 4M -an output.mp4
```

### 5. **Loading Performance Optimization**

#### A. Implement Progressive Loading
```javascript
// Add to your video component
const video = useRef<HTMLVideoElement>(null);

useEffect(() => {
  if (video.current) {
    // Start loading when page is idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        video.current?.load();
      });
    }
  }
}, []);
```

#### B. Use Poster Image
Create a high-quality poster frame:
```bash
ffmpeg -i video.mp4 -ss 00:00:02 -vframes 1 -q:v 2 poster.jpg
```

#### C. Lazy Load with Intersection Observer
```javascript
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && videoRef.current) {
        videoRef.current.load();
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  if (videoRef.current) {
    observer.observe(videoRef.current);
  }

  return () => observer.disconnect();
}, []);
```

### 6. **CDN Delivery**
Consider using a CDN for video delivery:
- **Cloudflare Stream**: Automatic optimization and adaptive bitrate
- **AWS CloudFront**: Global edge locations
- **Bunny CDN**: Cost-effective video delivery

### 7. **Adaptive Bitrate Streaming**
For the best user experience, implement HLS or DASH:
```bash
# Create HLS playlist
ffmpeg -i input.mp4 -c:v h264 -hls_time 10 -hls_list_size 0 -f hls output.m3u8
```

### 8. **Quick Wins**
1. **Trim unnecessary content**: Every second counts
2. **Use fade transitions**: Hide loading delays
3. **Optimize encoding preset**: Use 'veryslow' for better compression
4. **Remove metadata**: Use `-map_metadata -1`
5. **Fast start**: Use `-movflags +faststart` for MP4

### 9. **Testing Performance**
- Use Chrome DevTools Network tab to check load times
- Test on 3G connection simulation
- Monitor Core Web Vitals (LCP, CLS)
- Use WebPageTest.org for detailed analysis

### 10. **Alternative Solutions**
If file size remains an issue:
1. **Use a shorter loop**: 10-15 seconds that loops seamlessly
2. **Lower quality on first load**: Load low-res version first, then upgrade
3. **Canvas animation**: Use After Effects → Lottie for lightweight animations
4. **CSS animations**: For simple motion graphics

## Implementation Checklist
- [ ] Run the optimization script
- [ ] Replace current video files with optimized versions
- [ ] Test on mobile devices
- [ ] Check loading performance
- [ ] Implement poster image
- [ ] Consider CDN integration
- [ ] Monitor user metrics

## Emergency Fallback
If videos still cause performance issues, implement this fallback:
```javascript
// Detect slow connection
if (navigator.connection?.effectiveType === '2g' || navigator.connection?.saveData) {
  // Show static image instead
  return <Image src="/hero-poster.jpg" ... />
}
```

Remember: The goal is to create an impactful first impression without sacrificing performance. A fast-loading site with a slightly lower quality video is better than a slow-loading site with a perfect video.