import { useEffect, useRef, useState } from 'react'

// Fullscreen fixed background video used on every page.
// Ahmed replaces public/videos/bg.mp4 with the real video later.
export default function BgVideo() {
  const src = `${import.meta.env.BASE_URL}videos/bg.mp4`
  const videoRef = useRef(null)
  const [failed, setFailed] = useState(false)

  // iOS Safari needs a manual play() call after mount (autoplay alone is unreliable).
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <div className="fixed inset-0" style={{ zIndex: -1, background: '#0a0a0a' }} aria-hidden="true">
      {!failed && (
        <video
          ref={videoRef}
          className="h-full w-full"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          onError={() => setFailed(true)}
        />
      )}
      {/* Dark overlay keeps page content readable */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
    </div>
  )
}
