import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { categories } from '../data/categories'

export default function CategoriesSection() {
  const { t } = useTranslation()

  return (
    <section
      className="flex min-h-screen flex-col justify-center px-6 py-20"
      style={{ color: 'var(--color-text-on-dark)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto w-full max-w-7xl"
      >
        <h2 className="mb-10 text-center text-3xl font-extrabold uppercase tracking-widest md:text-4xl">
          {t('categories.title')}
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <motion.div key={cat.id} whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
              <Link
                to="/shop"
                className="flex items-center justify-between rounded-xl p-6"
                style={{ border: '1px solid rgba(248,246,243,0.14)' }}
              >
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider md:text-base">
                    {t(`shop.${cat.id}`)}
                  </h3>
                  <p className="mt-1 text-xs" style={{ color: 'var(--color-accent)' }}>
                    {cat.count} {cat.count === 1 ? t('categoriesMeta.product') : t('categoriesMeta.products')}
                  </p>
                </div>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
