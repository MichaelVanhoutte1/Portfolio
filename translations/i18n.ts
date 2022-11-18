import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { dutchTranslations } from "./nl/translations";
import { englishTranslations } from "./en/translations";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            EN: {
                translation: englishTranslations,
            },
            NL: {
                translation: dutchTranslations,
            },
        },
    });

if (typeof window !== "undefined") {
    if (window.localStorage.getItem("i18nextLng") === 'EN' || window.localStorage.getItem("i18nextLng") === 'NL') {
        i18n.changeLanguage(window.localStorage.getItem("i18nextLng")!);
    } else {
        i18n.changeLanguage("EN");
    }
} 
    i18n.changeLanguage("EN");

