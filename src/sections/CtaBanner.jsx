import { motion } from 'motion/react'
import { whatsappLink } from '../lib/whatsapp'

export default function CtaBanner() {
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
        <h2 className="font-en text-3xl font-extrabold uppercase tracking-wider md:text-4xl">
          Order via WhatsApp
        </h2>
        <p className="mt-3 font-ar text-xl md:text-2xl">اطلب عبر واتساب</p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 rounded-full px-9 py-3.5 font-en text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105"
          style={{ background: 'transparent', color: '#ffffff', border: '1px solid #ffffff' }}
        >
          Chat Now
        </a>
      </motion.div>
    </section>
  )
}
