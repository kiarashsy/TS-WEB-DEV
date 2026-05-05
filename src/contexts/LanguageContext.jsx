import React, { createContext, useState, useEffect } from 'react';
import faTranslations from '../translations/fa.json';
import enTranslations from '../translations/en.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('darklight-lang') || 'fa';
  });

  const translations = {
    fa: faTranslations,
    en: enTranslations
  };

  useEffect(() => {
    localStorage.setItem('darklight-lang', language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fa' ? 'en' : 'fa');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};