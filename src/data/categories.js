import { products } from './products'

// Category metadata. `svg` maps to the placeholder file used by ProductCard.
const categoryMeta = [
  { id: 'perfumes', label: 'perfumes', svg: 'perfume-bottle' },
  { id: 'allOverSpray', label: 'all over spray', svg: 'spray-bottle' },
  { id: 'vaseDiffusers', label: 'vase diffusers', svg: 'diffuser-vase' },
  { id: 'giftSets', label: 'gift sets', svg: 'gift-box' },
  { id: 'skinCare', label: 'skin care', svg: 'tanning-oil' },
  { id: 'summerOffers', label: 'summer offers', svg: 'gift-box' },
]

// Derive product count per category from the products data.
export const categories = categoryMeta.map((c) => ({
  ...c,
  count: products.filter((p) => p.category === c.id).length,
}))

// Lookup helper: which placeholder SVG to use for a given product category.
export const svgForCategory = (categoryId) =>
  categoryMeta.find((c) => c.id === categoryId)?.svg ?? 'perfume-bottle'
