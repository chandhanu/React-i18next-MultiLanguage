import React from 'react';
import { useTranslationContext } from './context/TranslationContext';
import { useLocalize } from './hooks/useLocalize';
import ExampleComponent from './components/ExampleComponent';

const App: React.FC = () => {
  const { handleLanguageChange } = useLocalize(); // Hook for changing languages
  const { t } = useTranslationContext(); // Context hook for translation

  return (
    <div>
      {/* Translates and displays a message */}
      <h1>{t('pages:welcome_message')}, Welcome to our application</h1>
      {/* Buttons to switch languages */}
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('es')}>Español</button>
      {/* ExampleComponent displays other translations */}
      <ExampleComponent />
    </div>
  );
};

export default App;
