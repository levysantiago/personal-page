import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

type LangType = "en" | "pt";

interface ILanguageContextProps {
  lang: LangType;
  setLang: React.Dispatch<React.SetStateAction<LangType>>;
}

const LanguageContext = createContext<ILanguageContextProps>({
  lang: "pt",
  setLang: () => {},
});

export function LanguageContextProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangType>("pt");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const param = pathname.substring(1, 3);

    if (param && param === "en") {
      setLang("en");
    } else {
      setLang("pt");
    }
  }, [location]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
