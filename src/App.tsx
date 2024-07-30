import React from 'react';
import {  useTranslationContext } from './context/TranslationContext';
import { useLocalize } from './hooks/useLocalize';
import ExampleComponent from './components/ExampleComponent';

const App: React.FC = () => {
  const { handleLanguageChange } = useLocalize();
  const { t } = useTranslationContext();

  return (
      <div>
        <h1>{t('welcome_message')}, Welcome to our application</h1>
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('es')}>Español</button>
        <ExampleComponent />
      </div>
  );
};

export default App;
