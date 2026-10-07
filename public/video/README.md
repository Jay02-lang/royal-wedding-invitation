# Custom Background Video Instructions

To display your own background video:
1. Place your video file named `wedding-bg.mp4` directly into this folder:
   `public/video/wedding-bg.mp4`
2. Or update the video URL / path anytime in `src/config/weddingData.ts`:
   ```ts
   backgroundVideoUrl: '/video/your-video-name.mp4',
   ```
3. When no local file is provided or during initial load, the website automatically displays the high-resolution royal Udaipur palace atmosphere backdrop with zero lag or errors.
