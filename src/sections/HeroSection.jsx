import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTypewriter } from '../hooks/useTypewriter'

export default function HeroSection() {
  const { t } = useTranslation()
  const title = t('hero.title')
  // ~1.5s total for the title (length-aware speed).
  const typed = useTypewriter(title, Math.max(40, Math.round(1500 / title.length)))

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{ color: 'var(--color-text-on-dark)' }}
    >
      <div className="flex flex-col items-center">
        <h1
          className="text-4xl font-extrabold uppercase md:text-7xl"
          style={{ letterSpacing: '0.18em', minHeight: '1.1em' }}
          aria-label={title}
        >
          {typed}
        </h1>

        {/* Subtitle fades in 0.4s after the title finishes typing */}
        <motion.p
          className="mt-5 text-lg md:text-2xl"
          style={{ color: 'var(--color-accent)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.9, ease: 'easeOut' }}
        >
          {t('hero.sub')}
        </motion.p>

        {/* CTA fades up 0.6s after the subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5, ease: 'easeOut' }}
        >
          <Link
            to="/shop"
            className="mt-10 inline-block rounded-full px-9 py-3.5 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105"
            style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
          >
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
