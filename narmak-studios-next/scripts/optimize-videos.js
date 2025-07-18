const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Video optimization settings
const optimizationSettings = {
  web: {
    codec: 'libx264',
    crf: 28, // Higher CRF = smaller file, lower quality
    preset: 'fast',
    maxrate: '2M',
    bufsize: '4M',
    scale: '1280:720', // 720p for web
    audio: 'aac',
    audioBitrate: '128k'
  },
  mobile: {
    codec: 'libx264',
    crf: 30,
    preset: 'fast',
    maxrate: '1M',
    bufsize: '2M',
    scale: '854:480', // 480p for mobile
    audio: 'aac',
    audioBitrate: '96k'
  }
};

function optimizeVideo(inputPath, outputPath, settings) {
  const { codec, crf, preset, maxrate, bufsize, scale, audio, audioBitrate } = settings;
  
  const command = `ffmpeg -i "${inputPath}" -c:v ${codec} -crf ${crf} -preset ${preset} -maxrate ${maxrate} -bufsize ${bufsize} -vf scale=${scale} -c:a ${audio} -b:a ${audioBitrate} -movflags +faststart "${outputPath}"`;
  
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error optimizing video: ${error}`);
        reject(error);
        return;
      }
      console.log(`✅ Optimized: ${path.basename(inputPath)}`);
      resolve();
    });
  });
}

async function optimizeAllVideos() {
  const videoFiles = fs.readdirSync(inputDir).filter(file => 
    file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.avi')
  );
  
  console.log('🎬 Starting video optimization...');
  
  for (const file of videoFiles) {
    const inputPath = path.join(inputDir, file);
    const nameWithoutExt = path.parse(file).name;
    
    // Create web version
    const webOutput = path.join(outputDir, `${nameWithoutExt}-web.mp4`);
    await optimizeVideo(inputPath, webOutput, optimizationSettings.web);
    
    // Create mobile version
    const mobileOutput = path.join(outputDir, `${nameWithoutExt}-mobile.mp4`);
    await optimizeVideo(inputPath, mobileOutput, optimizationSettings.mobile);
    
    // Get file sizes
    const originalSize = fs.statSync(inputPath).size / (1024 * 1024);
    const webSize = fs.statSync(webOutput).size / (1024 * 1024);
    const mobileSize = fs.statSync(mobileOutput).size / (1024 * 1024);
    
    console.log(`📊 ${file}:`);
    console.log(`   Original: ${originalSize.toFixed(2)} MB`);
    console.log(`   Web: ${webSize.toFixed(2)} MB (${((1 - webSize/originalSize) * 100).toFixed(1)}% smaller)`);
    console.log(`   Mobile: ${mobileSize.toFixed(2)} MB (${((1 - mobileSize/originalSize) * 100).toFixed(1)}% smaller)`);
  }
  
  console.log('🎉 Video optimization complete!');
}

optimizeAllVideos().catch(console.error); 