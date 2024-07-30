import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TranslationProvider } from './context/TranslationContext';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <TranslationProvider>

      <App />
    </TranslationProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
