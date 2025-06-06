import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en.json';
import translationJA from './locales/ja.json';

const resources = {
  en: { translation: translationEN },
  ja: { translation: translationJA }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng:'ja',
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
