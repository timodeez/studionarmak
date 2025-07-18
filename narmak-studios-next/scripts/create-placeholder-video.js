const fs = require('fs');
const path = require('path');

// Create placeholder video files for testing
const placeholderVideos = [
  'genshin-impact.mp4',
  'gfuel-dbz.mp4',
  'nordvpn.mp4',
  'black-clover.mp4',
  'shrekfest.mp4',
  'suponjibobu-anime.mp4',
  'attack-on-ogre.mp4',
  'shaggy-v-scooby.mp4',
  'anime-openings.mp4',
  'naruto-i-guess.mp4'
];

const videosDir = path.join(__dirname, '../public/videos');

// Ensure videos directory exists
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}

// Create a simple HTML file that explains the video optimization process
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Video Optimization Guide</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
    .step { background: #f5f5f5; padding: 15px; margin: 10px 0; border-radius: 5px; }
    code { background: #e0e0e0; padding: 2px 5px; border-radius: 3px; }
  </style>
</head>
<body>
  <h1>🎬 Video Optimization Guide</h1>
  
  <div class="step">
    <h3>Step 1: Install FFmpeg</h3>
    <p>Download and install FFmpeg from <a href="https://ffmpeg.org/download.html">https://ffmpeg.org/download.html</a></p>
  </div>
  
  <div class="step">
    <h3>Step 2: Run Video Optimization</h3>
    <p>Execute the PowerShell script:</p>
    <code>powershell -ExecutionPolicy Bypass -File optimize-videos.ps1</code>
  </div>
  
  <div class="step">
    <h3>Step 3: Expected Results</h3>
    <p>The script will create optimized versions of your videos:</p>
    <ul>
      <li><strong>Web versions:</strong> 720p, 2Mbps, ~5-10MB each</li>
      <li><strong>Mobile versions:</strong> 480p, 1Mbps, ~2-5MB each</li>
    </ul>
  </div>
  
  <div class="step">
    <h3>Step 4: Update Video URLs</h3>
    <p>Update the <code>gifToMp4Map</code> in <code>src/utils/gifToMp4.ts</code> to point to your optimized videos.</p>
  </div>
  
  <h2>Current Video Files:</h2>
  <ul>
    ${placeholderVideos.map(video => `<li>${video} - <em>Placeholder (needs optimization)</em></li>`).join('')}
  </ul>
  
  <p><strong>Note:</strong> These are placeholder files. Replace them with actual optimized videos for production.</p>
</body>
</html>
`;

fs.writeFileSync(path.join(videosDir, 'optimization-guide.html'), htmlContent);

console.log('✅ Created video optimization guide');
console.log('📁 Videos directory: ' + videosDir);
console.log('📋 Next steps:');
console.log('   1. Install FFmpeg');
console.log('   2. Run: powershell -ExecutionPolicy Bypass -File optimize-videos.ps1');
console.log('   3. Update video URLs in src/utils/gifToMp4.ts'); 