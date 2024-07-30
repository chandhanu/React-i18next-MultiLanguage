import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

// Define the context type
interface TranslationContextType {
  t: (key: string) => string;
}

// Create the context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Create a provider component
export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Create a custom hook to use the context
export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
};