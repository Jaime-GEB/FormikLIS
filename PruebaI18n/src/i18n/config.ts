import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ns1 from './en/ns1.json';
import ns2 from './en/ns2.json';
import ns3 from './es/ns3.json';
import ns4 from './es/ns4.json';

export const defaultNS = 'ns1';

i18next.use(initReactI18next).init({
  lng: 'es', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      ns1,
      ns2,
    },
    es: {
      ns1: ns3,
      ns2: ns4,
    },
  },
  interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  defaultNS,
});