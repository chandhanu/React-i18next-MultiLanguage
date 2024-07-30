import React, { createContext, useContext, ReactNode } from 'react'; // Import necessary React functions
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook from react-i18next

// Define the context type for TypeScript
interface TranslationContextType {
  t: (key: string) => string; // Function type to get translations
}

// Create the translation context with undefined as default value
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Provider component to supply translation context
export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation(); // Get translation function from useTranslation hook
  return (
    <TranslationContext.Provider value={{ t }}>
      {children} {/* Provide the translation function to child components */}
    </TranslationContext.Provider>
  );
};

// Custom hook to access the translation context
export const useTranslationContext = () => {
  const context = useContext(TranslationContext); // Get context value
  if (!context) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
    // Throw an error if the hook is used outside of TranslationProvider
  }
  return context; // Return the context value
};
