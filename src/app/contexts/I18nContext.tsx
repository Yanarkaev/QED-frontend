import { createContext, use, useMemo, useState } from "react";
import { localization } from "../localization/localization";

const LANGUAGES = ["ru", "che"] as const;
type Language = (typeof LANGUAGES)[number];

type I18nContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: readonly Language[];
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "ru";
    const saved = localStorage.getItem("language") as Language | null;
    const browserLang = navigator.language.split("-")[0] as Language;
    return saved || (["ru, che"].includes(browserLang) ? browserLang : "ru");
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const t = (key: string) => localization[language]?.[key] || key;

  const value = useMemo(
    () => ({
      language,
      setLanguage: (lang: Language) => {
        localStorage.setItem("language", lang);
        setLanguage(lang);
      },
      t,
      availableLanguages: LANGUAGES,
    }),
    [language, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = use(I18nContext);
  if (!context) throw new Error("useI18n бла бла че то там");
  return context;
};
