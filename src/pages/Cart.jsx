import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import BgVideo from '../components/BgVideo'
import { useCart } from '../hooks/useCart'
import { buildOrderLink, formatPrice } from '../lib/whatsapp'
import { imageChain, fallbackOnError } from '../lib/productImage'

export default function Cart() {
  const { t } = useTranslation()
  const { items, total, setQty, removeItem } = useCart()

  return (
    <div className="min-h-screen px-6 py-12">
      <BgVideo />
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="mb-8 text-3xl font-extrabold uppercase tracking-widest">{t('cart.title')}</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {t('cart.empty')}
            </p>
            <Link to="/shop" className="rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider" style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}>
              {t('cart.continue')}
            </Link>
          </div>
        ) : (
          <>
            <div className="rounded-xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              {items.map((item, idx) => {
                const chain = imageChain(item)
                return (
                  <div
                    key={item.id}
                    className="flex gap-4 p-5"
                    style={idx > 0 ? { borderTop: '1px solid var(--color-border)' } : undefined}
                  >
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg p-2" style={{ background: 'var(--color-bg-light)' }}>
                      <img src={chain[0]} data-fb="0" onError={fallbackOnError(chain)} alt={item.name} className="h-full w-auto object-contain" />
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
                        <button type="button" onClick={() => removeItem(item.id)} className="text-xs underline" style={{ color: 'var(--color-text-muted)' }}>
                          {t('cart.remove')}
                        </button>
                      </div>
                    </div>
                    <span className="font-en text-sm font-semibold">{formatPrice((item.price ?? 0) * item.qty)}</span>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-base font-semibold uppercase tracking-wider">{t('cart.total')}</span>
              <span className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>
                {total.toFixed(1)} {t('cart.currency')}
              </span>
            </div>

            <a
              href={buildOrderLink(items, total)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-full py-4 text-center text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02]"
              style={{ background: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              {t('cart.order')}
            </a>
          </>
        )}
      </div>
    </div>
  )
}
