import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './es.json'
import en from './en.json'

i18next.use(initReactI18next).init({
  lng: 'es', 
  debug: true,
  resources: {
    es: { translation: es },
    en: { translation: en }
  },
  interpolation: {
      escapeValue: false, 
    },
});
export { i18next as i18n };