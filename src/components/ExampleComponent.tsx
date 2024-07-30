import React from 'react'; // Import React
import { useTranslationContext } from '../context/TranslationContext'; // Import custom hook to access translation context

const ExampleComponent: React.FC = () => {
  const { t } = useTranslationContext(); // Get translation function from context

  return (
    <div>
      {/* Use translation function to get translated text */}
      <h2>{t('fields:username')}</h2>
      <p>{t('fields:password')}</p>
    </div>
  );
};

export default ExampleComponent; // Export the ExampleComponent
