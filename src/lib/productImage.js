import { svgForCategory } from '../data/categories'

const BASE = import.meta.env.BASE_URL

// Ordered fallback chain for a product image:
// 1. real photo (e.g. images/products/nishan.webp — Ahmed drops these in later)
// 2. per-product named SVG placeholder (images/products/nishan.svg)
// 3. category placeholder SVG (assets/placeholders/perfume-bottle.svg)
export function imageChain(product) {
  return [
    product.image,
    `${BASE}images/products/${product.id}.svg`,
    `${BASE}assets/placeholders/${svgForCategory(product.category)}.svg`,
  ].filter(Boolean)
}

// onError handler that walks the chain to the next available source.
export function fallbackOnError(chain) {
  return (e) => {
    const next = Number(e.currentTarget.dataset.fb || 0) + 1
    if (next < chain.length) {
      e.currentTarget.dataset.fb = String(next)
      e.currentTarget.src = chain[next]
    }
  }
}
