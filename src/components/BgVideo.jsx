// Fullscreen fixed background video used on every page.
// Ahmed replaces public/videos/bg.mp4 with the real video later.
export default function BgVideo() {
  const src = `${import.meta.env.BASE_URL}videos/bg.mp4`

  return (
    <div className="fixed inset-0" style={{ zIndex: -1 }} aria-hidden="true">
      <video
        className="h-full w-full"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay keeps page content readable */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
    </div>
  )
}
