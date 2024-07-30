import { useCallback } from 'react';
import i18n from '../i18n';

export const useLocalize = () => {
  const handleLanguageChange = useCallback((language: string) => {
    i18n.changeLanguage(language);
  }, []);

  return { handleLanguageChange };
};
