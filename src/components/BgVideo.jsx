import { useEffect, useRef } from 'react'

// Fullscreen fixed background video used on every page.
// Ahmed replaces public/videos/bg.mp4 with the real video later.
export default function BgVideo() {
  const videoSrc = `${import.meta.env.BASE_URL}videos/bg.mp4`
  const videoRef = useRef(null)

  // iOS Safari needs a manual play() call after mount (autoplay alone is unreliable).
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <div className="fixed inset-0" style={{ zIndex: -1, background: '#0a0a0a' }} aria-hidden="true">
      <video
        ref={videoRef}
        className="h-full w-full"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        poster={`${import.meta.env.BASE_URL}videos/bg.mp4`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {/* Dark overlay keeps page content readable */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
    </div>
  )
}
