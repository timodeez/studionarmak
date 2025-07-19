# Best quality compression for hero reel
# Run this from the public directory

Write-Host "Compressing hero reel with BEST quality settings..." -ForegroundColor Green

# Web version - ultra high quality
ffmpeg -i "website hreo reel no sound.mp4" -c:v libx264 -crf 18 -preset slow -maxrate 5M -bufsize 10M -vf scale=1280:720 -c:a aac -b:a 192k -movflags +faststart website_reel_1-web-best.mp4

# Mobile version - high quality
ffmpeg -i "website hreo reel no sound.mp4" -c:v libx264 -crf 20 -preset medium -maxrate 2M -bufsize 4M -vf scale=854:480 -c:a aac -b:a 128k -movflags +faststart website_reel_1-mobile-best.mp4

Write-Host "Best quality compression complete!" -ForegroundColor Green
Write-Host "Files created:" -ForegroundColor Yellow
Write-Host "- website_reel_1-web-best.mp4 (ultra high quality web version)" -ForegroundColor Cyan
Write-Host "- website_reel_1-mobile-best.mp4 (high quality mobile version)" -ForegroundColor Cyan
Write-Host "" -ForegroundColor White
Write-Host "Quality settings used:" -ForegroundColor Yellow
Write-Host "- Web: CRF 18 (ultra high), 5Mbps max, slow preset" -ForegroundColor White
Write-Host "- Mobile: CRF 20 (high), 2Mbps max, medium preset" -ForegroundColor White 