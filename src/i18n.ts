import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const loadPath = (lng: string, ns: string) => {
  const namespaces = ['pages', 'errors', 'fields'];
  return namespaces.map(ns => `/locales/${lng}/${ns}.json`);
};

const customBackend = {
  read: async (language: string, namespace: string, callback: (err: any, data?: any) => void) => {
    const urls = loadPath(language, namespace);
    try {
      const translations = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
      const mergedTranslations = Object.assign({}, ...translations);
      callback(null, mergedTranslations);
    } catch (error) {
      console.error(`Failed to load translations:`, error);
      callback(error, false);
    }
  }
};

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      read: customBackend.read
    },
    fallbackLng: 'en',
    debug: true,
    load: 'languageOnly',
    ns: ['pages', 'errors', 'fields'], // List all namespaces
    defaultNS: 'pages',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
