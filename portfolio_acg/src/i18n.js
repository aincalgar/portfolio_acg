import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../public/locales/en/translation.json"
import esTranslations from "../public/locales/es/translation.json";
import vaTranslations from "../public/locales/va/translation.json";
import itTranslations from "../public/locales/it/translation.json";


i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    es: { translation: esTranslations },
    va: { translation: vaTranslations },
    it: { translation: itTranslations }
  },
  lng: "es", 
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
