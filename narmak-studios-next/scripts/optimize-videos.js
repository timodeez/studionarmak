const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../public');

// Video optimization settings
const optimizationSettings = {
  web: {
    mp4: {
      codec: 'libx264',
      crf: 23, // Better quality for hero video
      preset: 'slow', // Better compression
      maxrate: '1.5M',
      bufsize: '3M',
      scale: '1920:1080', // Full HD for web
      audio: null, // No audio for hero video
      movflags: '+faststart'
    },
    webm: {
      codec: 'libvpx-vp9',
      crf: 30,
      preset: 'slow',
      maxrate: '1M',
      bufsize: '2M',
      scale: '1920:1080',
      audio: null,
      deadline: 'good'
    }
  },
  mobile: {
    mp4: {
      codec: 'libx264',
      crf: 26,
      preset: 'slow',
      maxrate: '800k',
      bufsize: '1.6M',
      scale: '1280:720', // 720p for mobile
      audio: null,
      movflags: '+faststart'
    },
    webm: {
      codec: 'libvpx-vp9',
      crf: 33,
      preset: 'slow',
      maxrate: '600k',
      bufsize: '1.2M',
      scale: '1280:720',
      audio: null,
      deadline: 'good'
    }
  }
};

function optimizeVideoMp4(inputPath, outputPath, settings) {
  const { codec, crf, preset, maxrate, bufsize, scale, movflags } = settings;
  
  let command = `ffmpeg -y -i "${inputPath}" -c:v ${codec} -crf ${crf} -preset ${preset} -maxrate ${maxrate} -bufsize ${bufsize} -vf scale=${scale}`;
  
  if (movflags) {
    command += ` -movflags ${movflags}`;
  }
  
  // Remove audio track completely for hero videos
  command += ` -an "${outputPath}"`;
  
  return new Promise((resolve, reject) => {
    console.log(`🎬 Processing MP4: ${path.basename(outputPath)}`);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error optimizing MP4: ${error}`);
        reject(error);
        return;
      }
      console.log(`✅ MP4 Optimized: ${path.basename(outputPath)}`);
      resolve();
    });
  });
}

function optimizeVideoWebM(inputPath, outputPath, settings) {
  const { codec, crf, maxrate, bufsize, scale, deadline } = settings;
  
  let command = `ffmpeg -y -i "${inputPath}" -c:v ${codec} -crf ${crf} -b:v 0 -maxrate ${maxrate} -bufsize ${bufsize}`;
  
  if (deadline) {
    command += ` -deadline ${deadline}`;
  }
  
  command += ` -vf scale=${scale} -an "${outputPath}"`;
  
  return new Promise((resolve, reject) => {
    console.log(`🎬 Processing WebM: ${path.basename(outputPath)}`);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error optimizing WebM: ${error}`);
        reject(error);
        return;
      }
      console.log(`✅ WebM Optimized: ${path.basename(outputPath)}`);
      resolve();
    });
  });
}

async function optimizeHeroVideos() {
  console.log('🎬 Starting hero video optimization...');
  
  // Check for existing hero video files
  const existingFiles = ['website_reel_1-web.mp4', 'website_reel_1-mobile.mp4'];
  
  for (const filename of existingFiles) {
    const inputPath = path.join(inputDir, filename);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`❌ File not found: ${filename}`);
      continue;
    }
    
    console.log(`\n📹 Processing: ${filename}`);
    
    try {
      const baseName = path.parse(filename).name; // e.g., "website_reel_1-web" or "website_reel_1-mobile"
      
      // Only generate WebM files (the MP4 files already exist)
      const webmOutput = path.join(inputDir, `${baseName}.webm`);
      
      // Determine which settings to use based on filename
      const isWeb = filename.includes('-web');
      const settings = isWeb ? optimizationSettings.web.webm : optimizationSettings.mobile.webm;
      
      // Generate WebM version
      await optimizeVideoWebM(inputPath, webmOutput, settings);
      
      // Report file sizes
      const originalSize = fs.statSync(inputPath).size / (1024 * 1024);
      const webmSize = fs.statSync(webmOutput).size / (1024 * 1024);
      
      console.log(`\n📊 ${filename} WebM Generation Results:`);
      console.log(`   Original MP4: ${originalSize.toFixed(2)} MB`);
      console.log(`   New WebM: ${webmSize.toFixed(2)} MB (${((1 - webmSize/originalSize) * 100).toFixed(1)}% smaller)`);
      
    } catch (error) {
      console.error(`Failed to process ${filename}:`, error);
    }
  }
  
  // Also optimize other portfolio videos if they're large
  console.log('\n🎬 Checking other portfolio videos...');
  const allMp4Files = fs.readdirSync(inputDir)
    .filter(file => file.endsWith('.mp4') && !file.includes('website_reel_1'))
    .filter(file => {
      const stats = fs.statSync(path.join(inputDir, file));
      return stats.size > 3 * 1024 * 1024; // > 3MB
    });
  
  for (const file of allMp4Files) {
    try {
      const inputPath = path.join(inputDir, file);
      const baseName = path.parse(file).name;
      const webmOutput = path.join(inputDir, `${baseName}.webm`);
      
      // Skip if WebM already exists
      if (fs.existsSync(webmOutput)) {
        console.log(`⏭️  WebM already exists for ${file}`);
        continue;
      }
      
      console.log(`\n📹 Converting ${file} to WebM...`);
      
      // Use mobile settings for smaller portfolio videos
      await optimizeVideoWebM(inputPath, webmOutput, optimizationSettings.mobile.webm);
      
      const originalSize = fs.statSync(inputPath).size / (1024 * 1024);
      const webmSize = fs.statSync(webmOutput).size / (1024 * 1024);
      
      console.log(`✅ ${file}: ${originalSize.toFixed(2)} MB → ${webmSize.toFixed(2)} MB WebM (${((1 - webmSize/originalSize) * 100).toFixed(1)}% smaller)`);
      
    } catch (error) {
      console.error(`Failed to convert ${file}:`, error);
    }
  }
}

// Run the optimization
optimizeHeroVideos().then(() => {
  console.log('🎉 Video optimization complete!');
}).catch(console.error); 