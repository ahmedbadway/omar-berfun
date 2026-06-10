import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const FEATURED_IDS = ['selene', 'gaia', 'michael-jackson', 'garnet']

export default function FeaturedSection() {
  const { t } = useTranslation()
  const featured = FEATURED_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean)

  return (
    <section className="flex min-h-screen flex-col justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto w-full max-w-7xl"
      >
        <h2 className="mb-10 text-center text-3xl font-extrabold uppercase tracking-widest md:text-4xl">
          {t('featured.title')}
        </h2>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
