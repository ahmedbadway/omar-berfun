import { AnimatePresence, motion } from 'motion/react'
import CategoryTabs from '../components/CategoryTabs'
import ProductCard from '../components/ProductCard'
import { useFilter } from '../hooks/useFilter'

export default function Shop() {
  const { active, setActive, filtered } = useFilter('perfumes')

  return (
    <div className="min-h-screen px-6 py-12" style={{ background: 'var(--color-bg-light)' }}>
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="mb-8 text-center font-en text-3xl font-extrabold uppercase tracking-widest md:text-4xl">
          Shop
        </h1>

        <div className="mb-10">
          <CategoryTabs active={active} onChange={setActive} />
        </div>

        <motion.div layout className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center font-en text-sm" style={{ color: 'var(--color-text-muted)' }}>
            No products in this collection yet.
          </p>
        )}
      </div>
    </div>
  )
}
