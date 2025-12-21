import { createI18n } from 'vue-i18n'
import EN from './en/index.json'
import KH from './kh/index.json'
import { WELCOME_EN, WELCOME_KH } from '@/modules/welcome/locales'

const i18n = createI18n({
  locale: 'kh',
  fallbackLocale: 'en',
  messages: {
    en: {
      ...EN,
      ...WELCOME_EN,
    },
    kh: {
      ...KH,
      ...WELCOME_KH,
    },
  },
})

export default i18n
