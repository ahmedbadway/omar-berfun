import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { whatsappLink } from '../lib/whatsapp'

export default function CtaBanner() {
  const { t } = useTranslation()

  return (
    <section
      className="px-6 py-20"
      style={{
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
        style={{ color: '#ffffff' }}
      >
        <h2 className="text-3xl font-extrabold uppercase tracking-wider md:text-4xl">
          {t('cta.title')}
        </h2>
        <p className="mt-3 text-xl md:text-2xl">{t('cta.sub')}</p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 rounded-full px-9 py-3.5 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105"
          style={{ background: 'transparent', color: '#ffffff', border: '1px solid #ffffff' }}
        >
          {t('cta.btn')}
        </a>
      </motion.div>
    </section>
  )
}
