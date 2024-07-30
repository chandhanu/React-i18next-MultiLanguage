import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18n
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    load: 'languageOnly',
    ns: ['pages', 'errors', 'fields'],
    defaultNS: 'pages',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
