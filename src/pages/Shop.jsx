import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import BgVideo from '../components/BgVideo'
import CategoryTabs from '../components/CategoryTabs'
import ProductCard from '../components/ProductCard'
import { useFilter } from '../hooks/useFilter'

export default function Shop() {
  const { t } = useTranslation()
  const { active, setActive, filtered } = useFilter('perfumes')

  return (
    <div className="min-h-screen px-6 py-12">
      <BgVideo />
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="mb-8 text-center text-3xl font-extrabold uppercase tracking-widest md:text-4xl">
          {t('shop.title')}
        </h1>

        <div className="mb-10">
          <CategoryTabs active={active} onChange={setActive} />
        </div>

        <motion.div layout className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {t('shop.emptyCategory')}
          </p>
        )}
      </div>
    </div>
  )
}
