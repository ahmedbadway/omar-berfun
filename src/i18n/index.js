import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import ar from './ar'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

// Keep <html> dir/lang and the document font in sync with the active language.
export function applyLanguageSideEffects(lng) {
  const isAr = lng === 'ar'
  document.documentElement.dir = isAr ? 'rtl' : 'ltr'
  document.documentElement.lang = isAr ? 'ar' : 'en'
  document.body.style.fontFamily = isAr ? 'var(--font-ar)' : 'var(--font-en)'
}

applyLanguageSideEffects(i18n.language)
i18n.on('languageChanged', applyLanguageSideEffects)

export default i18n
