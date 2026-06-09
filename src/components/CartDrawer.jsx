import { AnimatePresence, motion } from 'motion/react'
import { svgForCategory } from '../data/categories'
import { useCart } from '../hooks/useCart'
import { buildOrderLink, formatPrice } from '../lib/whatsapp'

export default function CartDrawer() {
  const { items, total, isOpen, closeCart, setQty, removeItem } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(10,10,10,0.45)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Panel */}
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col"
            style={{ background: 'var(--color-surface)' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 36 }}
          >
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <h2 className="font-en text-sm font-bold uppercase tracking-widest">Your Cart</h2>
              <button type="button" onClick={closeCart} aria-label="Close cart" className="text-2xl leading-none hover:opacity-60">
                ×
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 text-center">
                <p className="font-en text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  Your cart is empty.
                </p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.map((item) => {
                  const img = `${import.meta.env.BASE_URL}assets/placeholders/${svgForCategory(item.category)}.svg`
                  return (
                    <div
                      key={item.id}
                      className="flex gap-4 py-4"
                      style={{ borderBottom: '1px solid var(--color-border)' }}
                    >
                      <div
                        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg p-2"
                        style={{ background: 'var(--color-bg-light)' }}
                      >
                        <img src={img} alt={item.name} className="h-full w-auto object-contain" />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-en text-xs font-bold uppercase tracking-wider">{item.name}</h3>
                        <span className="mt-0.5 font-en text-sm font-bold" style={{ color: 'var(--color-accent)' }}>
                          {formatPrice(item.price)}
                        </span>
                        <div className="mt-auto flex items-center gap-3">
                          <div className="flex items-center rounded-full" style={{ border: '1px solid var(--color-border)' }}>
                            <button type="button" onClick={() => setQty(item.id, item.qty - 1)} aria-label="Decrease" className="px-2.5 py-1 hover:opacity-60">−</button>
                            <span className="min-w-6 text-center font-en text-sm">{item.qty}</span>
                            <button type="button" onClick={() => setQty(item.id, item.qty + 1)} aria-label="Increase" className="px-2.5 py-1 hover:opacity-60">+</button>
                          </div>
                          <button type="button" onClick={() => removeItem(item.id)} className="font-en text-xs underline" style={{ color: 'var(--color-text-muted)' }}>
                            Remove
                          </button>
                        </div>
                      </div>
                      <span className="font-en text-sm font-semibold">{formatPrice((item.price ?? 0) * item.qty)}</span>
                    </div>
                  )
                })}
              </div>
            )}

            {items.length > 0 && (
              <div className="px-6 py-5" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-en text-sm font-semibold uppercase tracking-wider">Total</span>
                  <span className="font-en text-lg font-bold" style={{ color: 'var(--color-accent)' }}>
                    {total.toFixed(1)} KWD
                  </span>
                </div>
                <a
                  href={buildOrderLink(items, total)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full py-3.5 text-center font-en text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
                  style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
                >
                  Order on WhatsApp
                </a>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
