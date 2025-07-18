# Video Optimization Script for Studio Narmak
Write-Host "🎬 Starting video optimization..." -ForegroundColor Green

# Check if FFmpeg is installed
try {
    ffmpeg -version | Out-Null
    Write-Host "✅ FFmpeg found" -ForegroundColor Green
} catch {
    Write-Host "❌ FFmpeg not found. Please install FFmpeg first." -ForegroundColor Red
    Write-Host "Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    exit 1
}

# Create optimized directory
$optimizedDir = "public\optimized"
if (!(Test-Path $optimizedDir)) {
    New-Item -ItemType Directory -Path $optimizedDir | Out-Null
}

# Get all video files
$videoFiles = Get-ChildItem "public" -Filter "*.mp4"

foreach ($file in $videoFiles) {
    $inputPath = $file.FullName
    $nameWithoutExt = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    
    Write-Host "Processing: $($file.Name)" -ForegroundColor Cyan
    
    # Create web-optimized version (720p, 2Mbps)
    $webOutput = "$optimizedDir\$nameWithoutExt-web.mp4"
    $webCommand = "ffmpeg -i `"$inputPath`" -c:v libx264 -crf 28 -preset fast -maxrate 2M -bufsize 4M -vf scale=1280:720 -c:a aac -b:a 128k -movflags +faststart `"$webOutput`" -y"
    
    Write-Host "Creating web version..." -ForegroundColor Yellow
    Invoke-Expression $webCommand
    
    # Create mobile-optimized version (480p, 1Mbps)
    $mobileOutput = "$optimizedDir\$nameWithoutExt-mobile.mp4"
    $mobileCommand = "ffmpeg -i `"$inputPath`" -c:v libx264 -crf 30 -preset fast -maxrate 1M -bufsize 2M -vf scale=854:480 -c:a aac -b:a 96k -movflags +faststart `"$mobileOutput`" -y"
    
    Write-Host "Creating mobile version..." -ForegroundColor Yellow
    Invoke-Expression $mobileCommand
    
    # Show file sizes
    $originalSize = [math]::Round($file.Length / 1MB, 2)
    $webSize = [math]::Round((Get-Item $webOutput).Length / 1MB, 2)
    $mobileSize = [math]::Round((Get-Item $mobileOutput).Length / 1MB, 2)

    $webPercent = [math]::Round((1 - $webSize/$originalSize) * 100, 1)
    Write-Host "📊 File sizes:" -ForegroundColor White
    Write-Host "   Original: $originalSize MB" -ForegroundColor Gray
    Write-Host "   Web: $webSize MB ($webPercent`% smaller)" -ForegroundColor Green

    $mobilePercent = [math]::Round((1 - $mobileSize/$originalSize) * 100, 1)
    Write-Host "   Mobile: $mobileSize MB ($mobilePercent`% smaller)" -ForegroundColor Green
    Write-Host ""
}

Write-Host "🎉 Video optimization complete!" -ForegroundColor Green
Write-Host "Optimized videos are in: $optimizedDir" -ForegroundColor Yellow 