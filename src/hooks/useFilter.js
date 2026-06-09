import { useMemo, useState } from 'react'
import { products } from '../data/products'

// Filters products by the active category. `all` returns everything.
export function useFilter(initial = 'perfumes') {
  const [active, setActive] = useState(initial)

  const filtered = useMemo(() => {
    if (active === 'all') return products
    return products.filter((p) => p.category === active)
  }, [active])

  return { active, setActive, filtered }
}
