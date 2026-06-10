import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useCart } from '../hooks/useCart'

export default function Navbar() {
  const { count, openCart } = useCart()
  const { t, i18n } = useTranslation()
  const [hidden, setHidden] = useState(false)

  // Hide on scroll down, reveal on scroll up (ignore tiny scrolls near the top).
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    if (y > prev && y > 80) setHidden(true)
    else if (y < prev) setHidden(false)
  })

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold uppercase tracking-wider transition-opacity hover:opacity-60 ${
      isActive ? 'opacity-100' : 'opacity-70'
    }`

  return (
    <motion.header
      className="sticky top-0 z-40"
      initial={{ y: -60, opacity: 0 }}
      animate={hidden ? { y: -80, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        color: '#ffffff',
      }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link
          to="/"
          className="text-lg font-extrabold uppercase"
          style={{ letterSpacing: '0.2em', color: '#ffffff' }}
        >
          ELO
        </Link>

        <div className="flex items-center gap-7">
          <NavLink to="/" className={linkClass} end>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/shop" className={linkClass}>
            {t('nav.shop')}
          </NavLink>

          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="font-en text-base transition-transform hover:scale-110"
            style={{ color: '#ffffff' }}
          >
            {i18n.language === 'ar' ? '🇰🇼' : '🇬🇧'}
          </button>

          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#ffffff' }}>
              <path d="M6 2 L3 6 v14 a2 2 0 0 0 2 2 h14 a2 2 0 0 0 2 -2 V6 l-3 -4 Z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10 a4 4 0 0 1 -8 0" />
            </svg>
            {count > 0 && (
              <span
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold"
                style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
              >
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
