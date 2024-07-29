import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';

// Merge multiple JSON files into one for each language
const loadPath = (lng: string, ns: string) => {
  const namespaces = ['page', 'fields', 'errors'];
  const files = namespaces.map(ns => `/locales/${lng}/${ns}.json`);
  return files;
};

// Custom backend to handle multiple files
const customBackend = {
  read: async (req, language, namespace, callback) => {
    const urls = loadPath(language, namespace);
    try {
      const translations = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
      const mergedTranslations = Object.assign({}, ...translations);
      callback(null, mergedTranslations);
    } catch (error) {
      callback(error, false);
    }
  }
};

i18n
  .use(HttpBackend)
  //.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: customBackend,
    fallbackLng: 'en',
    load: 'languageOnly', // Load without regions (e.g., "en" instead of "en-US")
    ns: ['translation'], // Default namespace
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;