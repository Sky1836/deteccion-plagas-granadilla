import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

i18n
    .use(LanguageDetector) // Detecta idioma del navegador o localStorage
    .use(initReactI18next) // Enlaza con React
    .init({
        resources: {
            es: { translation: translationES },
            en: { translation: translationEN },
        },
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;
