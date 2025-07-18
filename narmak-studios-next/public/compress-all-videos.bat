@echo off
REM Batch script to compress all main videos and GIFs to MP4 using FFmpeg
REM Place this script in your narmak-studios-next/public directory and run it from there

REM === HERO REEL ===
ffmpeg -i website_reel_1.mp4 -c:v libx264 -crf 28 -preset fast -maxrate 2M -bufsize 4M -vf scale=1280:720 -c:a aac -b:a 128k -movflags +faststart website_reel_1-web.mp4
ffmpeg -i website_reel_1.mp4 -c:v libx264 -crf 30 -preset fast -maxrate 1M -bufsize 2M -vf scale=854:480 -c:a aac -b:a 96k -movflags +faststart website_reel_1-mobile.mp4

REM === GIFs to MP4 (Creative Portfolio) ===
ffmpeg -i genshin-ezgif.com-video-to-gif-converter.gif -movflags faststart -pix_fmt yuv420p -vf "scale=640:-2" genshin-impact.mp4
ffmpeg -i dbzgfuel-ezgif.com-video-to-gif-converter.gif -movflags faststart -pix_fmt yuv420p -vf "scale=640:-2" gfuel-dbz.mp4
ffmpeg -i NordVPN-ezgif.com-video-to-gif-converter(1).gif -movflags faststart -pix_fmt yuv420p -vf "scale=640:-2" nordvpn.mp4
ffmpeg -i blackclover-ezgif.com-video-to-gif-converter.gif -movflags faststart -pix_fmt yuv420p -vf "scale=640:-2" black-clover.mp4
ffmpeg -i shrekfest2-ezgif.com-video-to-gif-converter.gif -movflags faststart -pix_fmt yuv420p -vf "scale=640:-2" shrekfest.mp4

REM === GIFs to MP4 (Originals Portfolio) ===
ffmpeg -i SBAnime-ezgif.com-video-to-gif-converter.gif -movflags faststart -pix_fmt yuv420p -vf "scale=640:-2" suponjibobu-anime.mp4
ffmpeg -i attackonogre-ezgif.com-video-to-gif-converter.gif -movflags faststart -pix_fmt yuv420p -vf "scale=640:-2" attack-on-ogre.mp4
ffmpeg -i schaggyscooby-ezgif.com-video-to-gif-converter.gif -movflags faststart -pix_fmt yuv420p -vf "scale=640:-2" shaggy-v-scooby.mp4
ffmpeg -i animeop-ezgif.com-video-to-gif-converter.gif -movflags faststart -pix_fmt yuv420p -vf "scale=640:-2" anime-openings.mp4
ffmpeg -i narutoiguess-ezgif.com-video-to-gif-converter.gif -movflags faststart -pix_fmt yuv420p -vf "scale=640:-2" naruto-i-guess.mp4

echo All videos processed! Check for new .mp4 files in this folder.
pause 