// src/contexts/LanguageContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { LanguageKey, getTranslation, isValidLanguage } from '../assets/i18n';

interface LanguageContextType {
  language: LanguageKey;
  translation: ReturnType<typeof getTranslation>;
  setLanguage: (lang: LanguageKey) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageKey>('pt-BR');

  const handleSetLanguage = (lang: LanguageKey) => {
    if (isValidLanguage(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        translation: getTranslation(language),
        setLanguage: handleSetLanguage 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};