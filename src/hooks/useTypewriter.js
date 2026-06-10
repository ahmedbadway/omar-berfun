import { useEffect, useState } from 'react'

// Types `text` out letter by letter. Honors prefers-reduced-motion by
// rendering the full string immediately (no animation).
export function useTypewriter(text, speed = 80) {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const [displayed, setDisplayed] = useState(prefersReduced ? text : '')

  useEffect(() => {
    if (prefersReduced) {
      setDisplayed(text)
      return
    }
    setDisplayed('')
    let i = 0
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(timer)
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed, prefersReduced])

  return displayed
}
