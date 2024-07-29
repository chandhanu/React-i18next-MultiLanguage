import React from 'react';
import { useTranslation } from 'react-i18next';

const ExampleComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('username')}</h2>
      <p>{t('password')}</p>
    </div>
  );
};

export default ExampleComponent;