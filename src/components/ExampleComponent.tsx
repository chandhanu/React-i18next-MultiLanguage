import React from 'react';
import { useTranslationContext } from '../context/TranslationContext';

const ExampleComponent: React.FC = () => {
  const { t } = useTranslationContext();

  return (
    <div>
      <h2>{t('fields:username')}</h2>
      <p>{t('fields:password')}</p>
    </div>
  );
};

export default ExampleComponent;
