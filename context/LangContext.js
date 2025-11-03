import { createContext, useContext, useState, useEffect } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");

  // Lire la langue enregistrée au démarrage
  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "en" || stored === "fr") {
      setLang(stored);
      if (typeof document !== "undefined")
        document.documentElement.lang = stored;
    }
  }, []);

  // Fonction pour changer la langue
  const switchLang = (code) => {
    setLang(code);
    if (typeof window !== "undefined") localStorage.setItem("lang", code);
    if (typeof document !== "undefined") document.documentElement.lang = code;
  };

  return (
    <LangContext.Provider value={{ lang, switchLang }}>
      {children}
    </LangContext.Provider>
  );
}

// Hook personnalisé pour y accéder facilement
export const useLang = () => useContext(LangContext);
