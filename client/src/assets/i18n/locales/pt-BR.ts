import { Translation } from '../types';

export const ptBR: Translation = {
  app: {
    title: 'Slango',
    description: 'Tradutor de Gírias Regionais',
    subtitle: 'Entenda gírias de todas as regiões do Brasil',
  },
  translator: {
    inputPlaceholder: 'Digite sua gíria ou expressão regional aqui...',
    translateButton: 'Traduzir',
    suggestedSlangs: 'Gírias Sugeridas',
  },
  slangs: [
    {
      slang: 'Bah',
      meaning: 'Expressão de surpresa ou admiração',
      region: 'Sul',
    },
    {
      slang: 'Oxe',
      meaning: 'Expressão de espanto ou estranheza', 
      region: 'Nordeste',
    },
    {
      slang: 'Mano',
      meaning: 'Forma de se referir a alguém, amigo',
      region: 'Sudeste',
    },
    {
      slang: 'Paia',
      meaning: 'Algo ruim ou sem graça',
      region: 'Centro-Oeste',
    },
    {
      slang: 'Véi',
      meaning: 'Forma de se referir a alguém, amigo',
      region: 'Centro-Oeste',
    },
    {
      slang: 'Arriegua',
      meaning: 'Expressão de susto ou espanto',
      region: 'Nordeste',
    },
    {
      slang: 'Capaz',
      meaning: 'Expressão de incredulidade ou discordância',
      region: 'Sul',
    },
    {
      slang: 'Trem',
      meaning: 'Forma de se referir a qualquer coisa',
      region: 'Sudeste',
    },
    {
      slang: 'Massa',
      meaning: 'Algo muito bom ou legal',
      region: 'Nordeste',
    },
    {
      slang: 'Piá',
      meaning: 'Forma de se referir a um menino ou garoto',
      region: 'Sul',
    }
  ],
  common: {
    loading: 'Carregando...',
    error: 'Ops! Algo deu errado',
    tryAgain: 'Tentar novamente',
  },
};