import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocalize } from './hooks/useLocalize';

const App: React.FC = () => {
  const { t } = useTranslation(); // No need to specify namespaces here if they are configured in i18n
  const { handleLanguageChange } = useLocalize();

  return (
    <div>
      <h1>{t('pages:welcome_message')}</h1>
      <h1>{t('fields:username')}</h1>
      <h1>{t('errors:required')}</h1>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('es')}>Español</button>
    </div>
  );
};

export default App;
