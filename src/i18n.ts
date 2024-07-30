import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'en',
    debug: true,
    load: 'languageOnly',
    ns: ['pages', 'errors', 'fields'],
    defaultNS: 'pages',
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true
    },
  });

i18n.on('languageChanged', (lng) => {
  console.log(`Language changed to ${lng}`);
});

i18n.on('loaded', (loaded) => {
  console.log('Loaded resources:', loaded);
  i18n.loadNamespaces(['pages', 'errors', 'fields'], () => {
    console.log('Namespaces loaded:', i18n.getResourceBundle('en', 'pages'));
    console.log('Namespaces loaded:', i18n.getResourceBundle('en', 'errors'));
    console.log('Namespaces loaded:', i18n.getResourceBundle('en', 'fields'));
  });
});

export default i18n;
