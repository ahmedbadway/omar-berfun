import { motion } from 'motion/react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function BestsellersSection() {
  const perfumes = products.filter((p) => p.category === 'perfumes')

  return (
    <section className="flex min-h-screen flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full"
      >
        <h2 className="mb-10 px-6 text-center font-en text-3xl font-extrabold uppercase tracking-widest md:text-4xl">
          Bestsellers
        </h2>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4">
          {perfumes.map((product) => (
            <div key={product.id} className="w-56 shrink-0 snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
