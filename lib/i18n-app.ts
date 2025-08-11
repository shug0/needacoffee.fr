'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const translations = {
  en,
  fr,
};

export type Locale = keyof typeof translations;
export type TranslationKey = string;

export function useTranslation() {
  const router = useRouter();
  const pathname = usePathname();

  // Default to French, can be enhanced with locale detection
  const locale: Locale = useMemo(() => {
    // Simple locale detection from pathname
    if (pathname?.startsWith('/en')) return 'en';
    return 'fr';
  }, [pathname]);

  const t = useCallback(
    (key: TranslationKey): string => {
      const keys = key.split('.');
      let value: unknown = translations[locale] || translations.fr;

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          // Fallback to French if translation not found
          value = translations.fr;
          for (const fallbackKey of keys) {
            if (value && typeof value === 'object' && fallbackKey in value) {
              value = (value as Record<string, unknown>)[fallbackKey];
            } else {
              return key; // Return the key if translation not found
            }
          }
          break;
        }
      }

      return typeof value === 'string' ? value : key;
    },
    [locale]
  );

  const tArray = useCallback(
    (key: TranslationKey): string[] => {
      const keys = key.split('.');
      let value: unknown = translations[locale] || translations.fr;

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          // Fallback to French if translation not found
          value = translations.fr;
          for (const fallbackKey of keys) {
            if (value && typeof value === 'object' && fallbackKey in value) {
              value = (value as Record<string, unknown>)[fallbackKey];
            } else {
              return []; // Return empty array if translation not found
            }
          }
          break;
        }
      }

      return Array.isArray(value) ? (value as string[]) : [];
    },
    [locale]
  );

  const tObject = useCallback(
    (key: TranslationKey): Record<string, unknown> => {
      const keys = key.split('.');
      let value: unknown = translations[locale] || translations.fr;

      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          // Fallback to French if translation not found
          value = translations.fr;
          for (const fallbackKey of keys) {
            if (value && typeof value === 'object' && fallbackKey in value) {
              value = (value as Record<string, unknown>)[fallbackKey];
            } else {
              return {}; // Return empty object if translation not found
            }
          }
          break;
        }
      }

      return typeof value === 'object' && value !== null
        ? (value as Record<string, unknown>)
        : {};
    },
    [locale]
  );

  const changeLocale = useCallback(
    (newLocale: Locale) => {
      // Simple locale switching - can be enhanced
      const newPath = newLocale === 'en' ? '/en' : '/';
      router.push(newPath);
    },
    [router]
  );

  return {
    t,
    tArray,
    tObject,
    locale,
    changeLocale,
    locales: Object.keys(translations) as Locale[],
  };
}
