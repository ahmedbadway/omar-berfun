// Small pill badge. variant: 'sale' (red) | 'out' (amber).
export default function Badge({ variant = 'sale', children, className = '' }) {
  const styles =
    variant === 'sale'
      ? { background: 'var(--color-sale)', color: 'var(--color-surface)' }
      : { background: 'var(--color-out-of-stock)', color: 'var(--color-surface)' }

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider font-en ${className}`}
      style={styles}
    >
      {children}
    </span>
  )
}
