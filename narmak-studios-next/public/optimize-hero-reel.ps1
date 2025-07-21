# PowerShell script to optimize hero reel videos
# This script creates highly optimized versions of the hero reel for web use

Write-Host "Hero Reel Video Optimization Script" -ForegroundColor Green
Write-Host "===================================" -ForegroundColor Green

# Check if FFmpeg is installed
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host "FFmpeg is not installed. Please install FFmpeg to continue." -ForegroundColor Red
    exit 1
}

# Original video file (update this with your source file)
$sourceVideo = "website_reel_1.mp4"

if (-not (Test-Path $sourceVideo)) {
    Write-Host "Source video not found: $sourceVideo" -ForegroundColor Red
    Write-Host "Please place your original hero reel video in this directory." -ForegroundColor Yellow
    exit 1
}

Write-Host "`nOptimization Tips for Hero Reel:" -ForegroundColor Cyan
Write-Host "1. Keep hero reel under 30 seconds for optimal load times" -ForegroundColor Yellow
Write-Host "2. Use 720p (1280x720) for mobile, 1080p (1920x1080) for desktop" -ForegroundColor Yellow
Write-Host "3. Target file sizes: Mobile < 5MB, Desktop < 15MB" -ForegroundColor Yellow
Write-Host "4. Consider using WebM format for better compression" -ForegroundColor Yellow
Write-Host "5. Use variable bitrate (VBR) for better quality/size ratio" -ForegroundColor Yellow

Write-Host "`nStarting optimization process..." -ForegroundColor Green

# Mobile MP4 - Aggressive optimization
Write-Host "`nCreating mobile MP4 version..." -ForegroundColor White
ffmpeg -i $sourceVideo `
    -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" `
    -c:v libx264 `
    -preset veryslow `
    -crf 28 `
    -maxrate 800k `
    -bufsize 1600k `
    -movflags +faststart `
    -an `
    -y "website_reel_1-mobile-optimized.mp4"

# Desktop MP4 - Balanced optimization
Write-Host "`nCreating desktop MP4 version..." -ForegroundColor White
ffmpeg -i $sourceVideo `
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" `
    -c:v libx264 `
    -preset veryslow `
    -crf 24 `
    -maxrate 2000k `
    -bufsize 4000k `
    -movflags +faststart `
    -an `
    -y "website_reel_1-web-optimized.mp4"

# Mobile WebM - Best compression
Write-Host "`nCreating mobile WebM version..." -ForegroundColor White
ffmpeg -i $sourceVideo `
    -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" `
    -c:v libvpx-vp9 `
    -crf 40 `
    -b:v 600k `
    -row-mt 1 `
    -an `
    -y "website_reel_1-mobile-optimized.webm"

# Desktop WebM - Best compression
Write-Host "`nCreating desktop WebM version..." -ForegroundColor White
ffmpeg -i $sourceVideo `
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" `
    -c:v libvpx-vp9 `
    -crf 35 `
    -b:v 1500k `
    -row-mt 1 `
    -an `
    -y "website_reel_1-web-optimized.webm"

# Create ultra-light preview version (for instant loading)
Write-Host "`nCreating ultra-light preview version..." -ForegroundColor White
ffmpeg -i $sourceVideo `
    -vf "scale=640:360:force_original_aspect_ratio=decrease,pad=640:360:(ow-iw)/2:(oh-ih)/2" `
    -c:v libx264 `
    -preset veryslow `
    -crf 35 `
    -maxrate 300k `
    -bufsize 600k `
    -movflags +faststart `
    -an `
    -t 5 `
    -y "website_reel_1-preview.mp4"

Write-Host "`nOptimization complete!" -ForegroundColor Green
Write-Host "`nFile sizes:" -ForegroundColor Cyan

Get-ChildItem -Filter "*optimized*" | ForEach-Object {
    $sizeMB = [math]::Round($_.Length / 1MB, 2)
    Write-Host "$($_.Name): $sizeMB MB" -ForegroundColor White
}

Write-Host "`nAdditional optimization tips:" -ForegroundColor Yellow
Write-Host "- Consider trimming unnecessary footage" -ForegroundColor White
Write-Host "- Remove audio track if not needed (already done in this script)" -ForegroundColor White
Write-Host "- Use fade-in/fade-out effects to improve perceived loading" -ForegroundColor White
Write-Host "- Implement lazy loading with Intersection Observer" -ForegroundColor White
Write-Host "- Use a CDN for video delivery" -ForegroundColor White
Write-Host "- Consider creating a poster image for the video" -ForegroundColor White