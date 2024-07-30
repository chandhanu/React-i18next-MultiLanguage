import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Initialize i18n
i18n
  .use(HttpBackend) // Uses HTTP backend to fetch translation files
  .use(LanguageDetector) // Detects the user's language automatically
  .use(initReactI18next) // Integrates i18next with React
  .init({
    fallbackLng: 'en', // Default language if the user's language is not available
    debug: true, // Enables logging for debugging
    load: 'languageOnly', // Load only the language code (e.g., 'en' instead of 'en-US')
    ns: ['pages', 'errors', 'fields'], // Namespaces (categories) for translations
    defaultNS: 'pages', // Default namespace to use if no specific namespace is provided
    interpolation: {
      escapeValue: false, // Disable escaping (not needed for React)
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to fetch translation files
    },
  });

export default i18n;
