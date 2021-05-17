import React, {useState} from "react";

export const LanguageContext = React.createContext();  //exporting context object

export const languageOptions = {
  en: 'English',
  ko: 'Korean'
};
export function LanguageProvider({ children }) {

  const defaultLanguage = window.localStorage.getItem('lang');

  const [language, setLanguage] = useState(defaultLanguage || 'en');

  const provider = {
    language,
    //dictionary: dictionaryList[userLanguage],
    languageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      setLanguage(newLanguage);
      window.localStorage.setItem('lang', newLanguage);
    }
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );

}

export default LanguageProvider;