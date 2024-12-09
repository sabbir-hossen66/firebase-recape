import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import language files
import en from '../locales/en.json';
import bn from '../locales/bn.json';

i18n
  .use(initReactI18next) // Bind react-i18next to the instance
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
