// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json'; // Import the translation files
import deTranslation from './locales/de.json';
import itTranslation from './locales/it.json';
import frTranslation from './locales/fr.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
  it: {
    translation: itTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
