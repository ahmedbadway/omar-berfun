// Ahmed will update this number later.
const WHATSAPP_NUMBER = '96500000000'

export const formatPrice = (value) =>
  value == null ? '—' : `${value.toFixed(value % 1 === 0 ? 0 : 1)} KWD`

// Builds the Arabic order message and returns a ready-to-open wa.me link.
export function buildOrderLink(items, total) {
  const lines = items
    .map((i) => `- ${i.name} x${i.qty} — ${(i.price ?? 0).toFixed(1)} KWD`)
    .join('\n')
  const message = `مرحباً، أريد طلب:\n${lines}\nالإجمالي: ${total.toFixed(1)} KWD`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const whatsappLink = (text = '') =>
  `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`
