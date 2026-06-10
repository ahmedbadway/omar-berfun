import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import BgVideo from '../components/BgVideo'
import Badge from '../components/Badge'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../lib/whatsapp'
import { imageChain, fallbackOnError } from '../lib/productImage'

export default function ProductPage() {
  const { id } = useParams()
  const { t } = useTranslation()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <BgVideo />
        <p className="text-lg">{t('product.notFound')}</p>
        <Link to="/shop" className="text-sm underline" style={{ color: 'var(--color-accent)' }}>
          {t('product.back')}
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
    <div className="min-h-screen px-6 py-12">
      <BgVideo />
      <div className="mx-auto w-full max-w-6xl">
        <Link to="/shop" className="mb-8 inline-block text-xs uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>
          ← {t('product.back')}
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
                <Badge variant="sale">{t('product.sale')}</Badge>
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
            <h1 className="text-3xl font-extrabold uppercase" style={{ letterSpacing: '0.12em' }}>
              {product.name}
            </h1>
            {product.size && (
              <span className="mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {product.size}
              </span>
            )}

            {product.scents.length > 0 && (
              <>
                <h2 className="mt-6 text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {t('product.scentNotes')}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.scents.map((scent) => (
                    <span
                      key={scent}
                      className="rounded-full px-3 py-1.5 text-xs"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff' }}
                    >
                      {scent}
                    </span>
                  ))}
                </div>
              </>
            )}

            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>
                {formatPrice(product.price)}
              </span>
              {product.originalPrice != null && (
                <span className="text-lg line-through" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <button
              type="button"
              disabled={!canBuy}
              onClick={() => canBuy && addItem(product)}
              className="mt-8 w-full rounded-full py-4 text-sm font-bold uppercase tracking-wider transition-transform enabled:hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
              style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              {canBuy ? t('product.addToCart') : t('product.outOfStock')}
            </button>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-8 text-xl font-bold uppercase tracking-widest">{t('product.related')}</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
