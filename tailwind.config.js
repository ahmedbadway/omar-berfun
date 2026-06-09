/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        'bg-light': 'var(--color-bg-light)',
        'bg-dark': 'var(--color-bg-dark)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        'text-on-dark': 'var(--color-text-on-dark)',
        border: 'var(--color-border)',
        sale: 'var(--color-sale)',
        'out-of-stock': 'var(--color-out-of-stock)',
      },
      fontFamily: {
        ar: 'var(--font-ar)',
        en: 'var(--font-en)',
      },
    },
  },
  plugins: [],
}
