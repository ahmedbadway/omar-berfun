import { Link } from 'react-router-dom'
import { svgForCategory } from '../data/categories'
import { useCart } from '../hooks/useCart'
import { buildOrderLink, formatPrice } from '../lib/whatsapp'

export default function Cart() {
  const { items, total, setQty, removeItem } = useCart()

  return (
    <div className="min-h-screen px-6 py-12" style={{ background: 'var(--color-bg-light)' }}>
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="mb-8 font-en text-3xl font-extrabold uppercase tracking-widest">Cart</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <p className="font-en text-sm" style={{ color: 'var(--color-text-muted)' }}>
              Your cart is empty.
            </p>
            <Link to="/shop" className="rounded-full px-7 py-3 font-en text-sm font-bold uppercase tracking-wider" style={{ background: 'var(--color-primary)', color: 'var(--color-text-on-dark)' }}>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="rounded-xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              {items.map((item, idx) => {
                const img = `${import.meta.env.BASE_URL}assets/placeholders/${svgForCategory(item.category)}.svg`
                return (
                  <div
                    key={item.id}
                    className="flex gap-4 p-5"
                    style={idx > 0 ? { borderTop: '1px solid var(--color-border)' } : undefined}
                  >
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg p-2" style={{ background: 'var(--color-bg-light)' }}>
                      <img src={img} alt={item.name} className="h-full w-auto object-contain" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-en text-sm font-bold uppercase tracking-wider">{item.name}</h3>
                      <span className="mt-1 font-en text-sm font-bold" style={{ color: 'var(--color-accent)' }}>
                        {formatPrice(item.price)}
                      </span>
                      <div className="mt-auto flex items-center gap-4">
                        <div className="flex items-center rounded-full" style={{ border: '1px solid var(--color-border)' }}>
                          <button type="button" onClick={() => setQty(item.id, item.qty - 1)} aria-label="Decrease" className="px-3 py-1.5 hover:opacity-60">−</button>
                          <span className="min-w-6 text-center font-en text-sm">{item.qty}</span>
                          <button type="button" onClick={() => setQty(item.id, item.qty + 1)} aria-label="Increase" className="px-3 py-1.5 hover:opacity-60">+</button>
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

            <div className="mt-8 flex items-center justify-between">
              <span className="font-en text-base font-semibold uppercase tracking-wider">Total</span>
              <span className="font-en text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>
                {total.toFixed(1)} KWD
              </span>
            </div>

            <a
              href={buildOrderLink(items, total)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-full py-4 text-center font-en text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
              style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              Order on WhatsApp
            </a>
          </>
        )}
      </div>
    </div>
  )
}
