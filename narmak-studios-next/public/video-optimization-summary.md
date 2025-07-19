# Video Optimization Strategy

## Hero Reel Optimization

### File Structure
```
public/
├── website_reel_1-web.mp4 (30.3MB - Desktop/Tablet)
├── website_reel_1-mobile.mp4 (10.1MB - Mobile)
└── [other optimized videos...]
```

### Desktop Version (`website_reel_1-web.mp4`)
- **Resolution**: 1280x720 (HD)
- **Size**: 30.3MB
- **Quality**: CRF 18 (Ultra High)
- **Bitrate**: ~2.3Mbps
- **Use Case**: Desktop, tablet, high-bandwidth connections

### Mobile Version (`website_reel_1-mobile.mp4`)
- **Resolution**: 854x480 (SD)
- **Size**: 10.1MB
- **Quality**: CRF 26 (Good)
- **Bitrate**: ~820kbps
- **Use Case**: Mobile devices, slower connections

## Responsive Loading Strategy

### HTML5 Video with Media Queries
```html
<video autoPlay loop muted playsInline>
  <!-- Mobile version - smaller file, lower resolution -->
  <source src="/website_reel_1-mobile.mp4" media="(max-width: 768px)" />
  <!-- Desktop version - higher quality -->
  <source src="/website_reel_1-web.mp4" media="(min-width: 769px)" />
  <!-- Fallback -->
  <source src="/website_reel_1-web.mp4" />
</video>
```

### Performance Benefits
- ✅ **Automatic device detection** - Browser chooses appropriate file
- ✅ **Bandwidth optimization** - Mobile gets smaller file
- ✅ **Smooth playback** - Optimized for each device type
- ✅ **Fast loading** - Reduced file sizes
- ✅ **Better UX** - No buffering on mobile

## Compression Settings

### Desktop (High Quality)
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 18 -preset slow -maxrate 5M -bufsize 10M -vf scale=1280:720 -c:a aac -b:a 192k -movflags +faststart output.mp4
```

### Mobile (Optimized)
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 24 -preset fast -maxrate 1M -bufsize 2M -vf scale=854:480 -c:a aac -b:a 96k -movflags +faststart output.mp4
```

## Quality vs Performance Balance

| Device | Resolution | File Size | Quality | Performance |
|--------|------------|-----------|---------|-------------|
| Desktop | 1280x720 | 30.3MB | Ultra High | Excellent |
| Mobile | 854x480 | 10.1MB | Good | Excellent |
| Old Mobile | 854x480 | 10.1MB | Good | Excellent |

## Browser Support
- ✅ **Chrome/Edge**: Full support for media queries
- ✅ **Safari**: Full support for media queries
- ✅ **Firefox**: Full support for media queries
- ✅ **Mobile browsers**: Optimized loading

## Loading Strategy
1. **Preload metadata** - Fast initial load
2. **Progressive loading** - Start playing before full download
3. **Fallback support** - Always works even if media queries fail
4. **Optimized compression** - Best quality-to-size ratio

## Expected Performance
- **Desktop**: 30.3MB file loads in ~3-5 seconds on fast connections
- **Mobile**: 10.1MB file loads in ~1-2 seconds on 4G
- **Smooth playback**: No buffering issues
- **Battery friendly**: Optimized for mobile devices 