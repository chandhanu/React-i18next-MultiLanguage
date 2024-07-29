import React from 'react';
import { useTranslation } from 'react-i18next';
import ExampleComponent from './components/ExampleComponent';
import { useLocalize } from './hooks/useLocalize';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { handleLanguageChange } = useLocalize(i18n);

  return (
    <div>
      <h1>{t('pageTitle')}</h1>
      <h1>{t('pageDescription')}</h1>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('fr')}>French</button>
      <button onClick={() => handleLanguageChange('es')}>Spanish</button>
      <ExampleComponent />
    </div>
  );
};

export default App;
