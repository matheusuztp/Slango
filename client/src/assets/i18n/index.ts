import { Translation } from './types';
import { ptBR } from './locales/pt-BR';
import { enUS } from './locales/en-US';

export const languages = {
  'pt-BR': ptBR,
  'en-US': enUS,
} as const;

export type LanguageKey = keyof typeof languages;

export function getTranslation(lang: LanguageKey): Translation {
  return languages[lang];
}

export function isValidLanguage(lang: string): lang is LanguageKey {
  return lang in languages;
}