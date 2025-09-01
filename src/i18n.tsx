import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,

    saveMissing: true, // <=== إضافة تفعيل حفظ المفاتيح الناقصة

    interpolation: {
      escapeValue: false,
    },

    // اختياري: تقدر تضيف هاندلر لمراقبة المفاتيح الناقصة
    missingKeyHandler: function(lng, ns, key, fallbackValue) {
      console.warn(`Missing translation key: ${key} in language: ${lng}`);
    }
  });

export default i18n;
