import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import vi from "../lang/vi.json";
import en from "../lang/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem("LANGUAGE") || "en",
    resources: {
      en: { common: en },
      vi: { common: vi }
    },
    // debug: true,
    react: {
      wait: true
    },
    ns: "common",
    defaultNS: 'common'
  });

export const getCurrentLang = () =>
  i18n.language || window.localStorage.i18nextLng || "en";

export default i18n;
