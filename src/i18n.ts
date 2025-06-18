import { createI18n } from 'vue-i18n';
import fr from './locales/fr.json';
import en from './locales/en.json';

export const SUPPORTED_LOCALES = ['en', 'fr'];

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  warnHtmlMessage: false,
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
  },
})

export default i18n;