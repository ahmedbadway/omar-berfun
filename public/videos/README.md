# Background video

Place the site background video here as `bg.mp4`.

It is loaded on every page by `src/components/BgVideo.jsx` via
`import.meta.env.BASE_URL + 'videos/bg.mp4'` and renders fullscreen
(fixed, z-index -1, object-fit: cover / center, autoplay / muted / loop /
playsInline) with a dark `rgba(0,0,0,0.6)` overlay on top.

Recommended: 1080p (or 720p) H.264 MP4, short seamless loop, optimized
file size (a few MB) for fast loading on GitHub Pages.
