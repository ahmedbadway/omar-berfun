import { motion } from 'motion/react'
import { categories } from '../data/categories'

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {categories.map((cat) => {
        const isActive = active === cat.id
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange(cat.id)}
            className="relative rounded-full px-4 py-2 font-en text-xs font-semibold uppercase tracking-wider transition-colors"
            style={{
              color: 'var(--color-text-on-dark)',
            }}
          >
            {isActive && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: 'var(--color-primary)' }}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        )
      })}
    </div>
  )
}
