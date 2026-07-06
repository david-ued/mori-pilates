import type { Locale } from '@/lib/i18n';
import type { Dict } from './types';
import zhTW from './zh-TW';
import en from './en';
import ja from './ja';

const dictionaries: Record<Locale, Dict> = {
  'zh-TW': zhTW,
  en,
  ja,
};

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

export type { Dict } from './types';
