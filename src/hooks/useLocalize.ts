import { useCallback } from 'react'; // Import useCallback to memoize functions
import i18n from '../i18n'; // Import i18n instance for changing languages

// Custom hook to manage language changes
export const useLocalize = () => {
  // Memoized function to change the language
  const handleLanguageChange = useCallback((language: string) => {
    i18n.changeLanguage(language); // Update the current language in i18next
  }, []);

  return { handleLanguageChange }; // Return the function to change language
};
