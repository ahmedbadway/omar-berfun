import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{ color: 'var(--color-text-on-dark)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        <h1
          className="text-4xl font-extrabold uppercase md:text-7xl"
          style={{ letterSpacing: '0.18em' }}
        >
          {t('hero.title')}
        </h1>
        <p className="mt-5 text-lg md:text-2xl" style={{ color: 'var(--color-accent)' }}>
          {t('hero.sub')}
        </p>

        <Link
          to="/shop"
          className="mt-10 rounded-full px-9 py-3.5 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105"
          style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
        >
          {t('hero.cta')}
        </Link>
      </motion.div>
    </section>
  )
}
