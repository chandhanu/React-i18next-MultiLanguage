import React from 'react'; // Import React
import { useTranslationContext } from '../context/TranslationContext'; // Import custom hook to access translation context

const ExampleComponent: React.FC = () => {
  const { t } = useTranslationContext(); // Get translation function from context

  return (
    <div>
      {/* Use translation function to get translated text */}
      <h3>Component example : (fields.json)</h3>
      <h3>UserName/Password:</h3>
      <p>{t('fields:username')}/{t('fields:password')}</p>
      <h3>Component example : (errors.json)</h3>
      <h2>{t('errors:required')}</h2>
      <p>{t('errors:invalidEmail')}</p>
    </div>
  );
};

export default ExampleComponent; // Export the ExampleComponent
