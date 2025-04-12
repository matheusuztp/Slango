// src/i18n/locales/en-US.ts
import { Translation } from '../types';

export const enUS: Translation = {
  app: {
    title: 'Slango',
    description: 'Regional Slang Translator',
    subtitle: 'Understand slang from all regions of Brazil'
  },
  translator: {
    inputPlaceholder: 'Type your regional slang or expression here...',
    translateButton: 'Translate',
    suggestedSlangs: 'Suggested Slangs',
  },
  slangs: [
    {
      slang: 'Bah',
      meaning: 'Expression of surprise or admiration',
      region: 'South',
    },
    {
      slang: 'Oxe',
      meaning: 'Expression of astonishment or strangeness',
      region: 'Northeast',
    },
    {
      slang: 'Mano',
      meaning: 'Way of referring to someone, friend',
      region: 'Southeast',
    },
    {
      slang: 'Paia',
      meaning: 'Something bad or boring',
      region: 'Midwest',
    },
  ],
  common: {
    loading: 'Loading...',
    error: 'Oops! Something went wrong',
    tryAgain: 'Try again',
  },
};