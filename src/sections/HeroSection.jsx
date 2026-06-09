import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const bottle = `${import.meta.env.BASE_URL}assets/placeholders/perfume-bottle.svg`
  const heroVideo = `${import.meta.env.BASE_URL}videos/hero-bg.mp4`

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{ background: 'var(--color-bg-dark)', color: 'var(--color-text-on-dark)' }}
    >
      {/* Fullscreen background video — Ahmed replaces hero-bg.mp4 with the real video later */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      {/* Dark overlay keeps the text readable over the video */}
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(0,0,0,0.5)' }} />

      <motion.div
        style={{ position: 'relative', zIndex: 10 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        {/* Floating bottle */}
        <motion.img
          src={bottle}
          alt="ELO Perfume bottle"
          className="mb-8 h-44 w-auto md:h-56"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
        />

        <h1
          className="font-en text-4xl font-extrabold uppercase md:text-7xl"
          style={{ letterSpacing: '0.18em' }}
        >
          ELO PERFUMES
        </h1>
        <p className="mt-5 font-ar text-lg md:text-2xl" style={{ color: 'var(--color-accent)' }}>
          اكتشف عطرك المميز
        </p>

        <Link
          to="/shop"
          className="mt-10 rounded-full px-9 py-3.5 font-en text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105"
          style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
        >
          Shop Now
        </Link>
      </motion.div>
    </section>
  )
}
