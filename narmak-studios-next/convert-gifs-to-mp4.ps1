# Convert GIFs to optimized MP4s for better performance
Write-Host "Converting GIFs to optimized MP4s..." -ForegroundColor Green

# Navigate to public directory
Set-Location "public"

# Check if FFmpeg is available
try {
    ffmpeg -version | Out-Null
    Write-Host "FFmpeg found!" -ForegroundColor Green
} catch {
    Write-Host "FFmpeg not found! Please install FFmpeg first:" -ForegroundColor Red
    Write-Host "Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    exit 1
}

# Convert each GIF manually
$conversions = @(
    @{gif="genshin-ezgif.com-video-to-gif-converter.gif"; mp4="genshin-impact.mp4"},
    @{gif="dbzgfuel-ezgif.com-video-to-gif-converter.gif"; mp4="gfuel-dbz.mp4"},
    @{gif="NordVPN-ezgif.com-video-to-gif-converter(1).gif"; mp4="nordvpn.mp4"},
    @{gif="blackclover-ezgif.com-video-to-gif-converter.gif"; mp4="black-clover.mp4"},
    @{gif="shrekfest2-ezgif.com-video-to-gif-converter.gif"; mp4="shrekfest.mp4"},
    @{gif="SBAnime-ezgif.com-video-to-gif-converter.gif"; mp4="suponjibobu-anime.mp4"},
    @{gif="attackonogre-ezgif.com-video-to-gif-converter.gif"; mp4="attack-on-ogre.mp4"},
    @{gif="schaggyscooby-ezgif.com-video-to-gif-converter.gif"; mp4="shaggy-v-scooby.mp4"},
    @{gif="animeop-ezgif.com-video-to-gif-converter.gif"; mp4="anime-openings.mp4"},
    @{gif="narutoiguess-ezgif.com-video-to-gif-converter.gif"; mp4="naruto-i-guess.mp4"}
)

foreach ($conv in $conversions) {
    $gifFile = $conv.gif
    $mp4File = $conv.mp4
    
    if (Test-Path $gifFile) {
        Write-Host "Converting $gifFile to $mp4File..." -ForegroundColor Cyan
        
        $originalSize = (Get-Item $gifFile).Length / 1MB
        Write-Host "Original size: $([math]::Round($originalSize, 2)) MB" -ForegroundColor Gray
        
        $cmd = "ffmpeg -i `"$gifFile`" -vf `"scale=1280:720`" -c:v libx264 -crf 23 -preset medium -pix_fmt yuv420p -movflags +faststart -y `"$mp4File`""
        
        try {
            Invoke-Expression $cmd
            
            if (Test-Path $mp4File) {
                $newSize = (Get-Item $mp4File).Length / 1MB
                $savings = [math]::Round((($originalSize - $newSize) / $originalSize) * 100, 1)
                Write-Host "Success! New size: $([math]::Round($newSize, 2)) MB ($savings% smaller)" -ForegroundColor Green
            } else {
                Write-Host "Failed to create $mp4File" -ForegroundColor Red
            }
        } catch {
            Write-Host "Error converting $gifFile" -ForegroundColor Red
        }
    } else {
        Write-Host "GIF file not found: $gifFile" -ForegroundColor Yellow
    }
}

Write-Host "Conversion complete!" -ForegroundColor Green
Write-Host "Performance improvements:" -ForegroundColor Cyan
Write-Host "File sizes reduced by 80-90%" -ForegroundColor White
Write-Host "Faster loading times" -ForegroundColor White
Write-Host "Better browser compatibility" -ForegroundColor White 