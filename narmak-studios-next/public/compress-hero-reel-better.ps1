# Better quality compression for hero reel
# Run this from the public directory

Write-Host "Compressing hero reel with better quality settings..." -ForegroundColor Green

# Web version - better quality (CRF 23 instead of 28)
ffmpeg -i website_reel_1.mp4 -c:v libx264 -crf 23 -preset medium -maxrate 3M -bufsize 6M -vf scale=1280:720 -c:a aac -b:a 128k -movflags +faststart website_reel_1-web-better.mp4

# Mobile version - better quality (CRF 25 instead of 30)
ffmpeg -i website_reel_1.mp4 -c:v libx264 -crf 25 -preset medium -maxrate 1.5M -bufsize 3M -vf scale=854:480 -c:a aac -b:a 96k -movflags +faststart website_reel_1-mobile-better.mp4

Write-Host "Better quality compression complete!" -ForegroundColor Green
Write-Host "Files created:" -ForegroundColor Yellow
Write-Host "- website_reel_1-web-better.mp4 (higher quality web version)" -ForegroundColor Cyan
Write-Host "- website_reel_1-mobile-better.mp4 (higher quality mobile version)" -ForegroundColor Cyan 