import { i18n } from 'i18next';
import { useCallback } from 'react';

export const useLocalize = (i18n: i18n) => {
  const handleLanguageChange = useCallback((language: string) => {
    i18n.changeLanguage(language);
  }, [i18n]);

  return { handleLanguageChange };
};