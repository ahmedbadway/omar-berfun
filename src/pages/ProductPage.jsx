import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import Badge from '../components/Badge'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../lib/whatsapp'
import { imageChain, fallbackOnError } from '../lib/productImage'

export default function ProductPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-en text-lg">Product not found.</p>
        <Link to="/shop" className="font-en text-sm underline" style={{ color: 'var(--color-accent)' }}>
          Back to shop
        </Link>
      </div>
    )
  }

  const chain = imageChain(product)
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const canBuy = product.inStock && product.price != null

  return (
    <div className="min-h-screen px-6 py-12" style={{ background: 'var(--color-bg-light)' }}>
      <div className="mx-auto w-full max-w-6xl">
        <Link to="/shop" className="mb-8 inline-block font-en text-xs uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
          ← Back to shop
        </Link>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex aspect-square items-center justify-center rounded-2xl p-12"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
          >
            {product.onSale && (
              <div className="absolute left-5 top-5">
                <Badge variant="sale">Sale</Badge>
              </div>
            )}
            <img
              src={chain[0]}
              data-fb="0"
              onError={fallbackOnError(chain)}
              alt={product.name}
              className="h-full w-auto object-contain"
            />
          </motion.div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="font-en text-3xl font-extrabold uppercase" style={{ letterSpacing: '0.12em' }}>
              {product.name}
            </h1>
            {product.size && (
              <span className="mt-1 font-en text-sm" style={{ color: 'var(--color-text-muted)' }}>
                {product.size}
              </span>
            )}

            {product.scents.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {product.scents.map((scent) => (
                  <span
                    key={scent}
                    className="rounded-full px-3 py-1.5 font-en text-xs"
                    style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)' }}
                  >
                    {scent}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-en text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>
                {formatPrice(product.price)}
              </span>
              {product.originalPrice != null && (
                <span className="font-en text-lg line-through" style={{ color: 'var(--color-text-muted)' }}>
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <button
              type="button"
              disabled={!canBuy}
              onClick={() => canBuy && addItem(product)}
              className="mt-8 w-full rounded-full py-4 font-en text-sm font-bold uppercase tracking-wider transition-transform enabled:hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
              style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }}
            >
              {canBuy ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-8 font-en text-xl font-bold uppercase tracking-widest">You may also like</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
