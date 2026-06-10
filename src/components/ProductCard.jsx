import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Badge from './Badge'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../lib/whatsapp'
import { imageChain, fallbackOnError } from '../lib/productImage'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const { t } = useTranslation()
  const chain = imageChain(product)

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (product.inStock && product.price != null) addItem(product)
  }

  return (
    <motion.div
      initial={false}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col overflow-hidden rounded-xl"
      style={{
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.15)',
      }}
    >
      <Link to={`/product/${product.id}`} className="flex flex-1 flex-col">
        {/* Sale badge */}
        {product.onSale && (
          <div className="absolute left-3 top-3 z-10">
            <Badge variant="sale">{t('product.sale')}</Badge>
          </div>
        )}

        {/* Image */}
        <div className="relative flex aspect-square items-center justify-center p-6">
          <img
            src={chain[0]}
            data-fb="0"
            onError={fallbackOnError(chain)}
            alt={product.name}
            className="h-full w-auto object-contain"
            loading="lazy"
          />

          {/* Out of stock badge — centered over image */}
          {!product.inStock && (
            <div className="absolute inset-x-0 bottom-3 flex justify-center">
              <Badge variant="out">{t('product.outOfStock')}</Badge>
            </div>
          )}

          {/* Add to cart — fades in on hover */}
          {product.inStock && product.price != null && (
            <motion.button
              type="button"
              onClick={handleAdd}
              aria-label={`Add ${product.name} to cart`}
              initial={{ opacity: 0, y: 8 }}
              whileHover={{ scale: 1.08 }}
              className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100"
              style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }}
            >
              +
            </motion.button>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col gap-1.5 p-4">
          <h3
            className="font-en text-sm font-bold uppercase"
            style={{ letterSpacing: '0.15em', color: '#ffffff' }}
          >
            {product.name}
          </h3>
          <p
            className="truncate font-en text-xs"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            {product.scents.length ? product.scents.join(' · ') : ' '}
          </p>
          <div className="mt-auto flex items-baseline gap-2 pt-1">
            <span className="font-en text-base font-bold" style={{ color: 'var(--color-accent)' }}>
              {formatPrice(product.price)}
            </span>
            {product.originalPrice != null && (
              <span
                className="font-en text-sm line-through"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
