'use client';

import { useTranslation } from '../../lib/i18n-app';
import { memo } from 'react';

const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { locale, changeLocale } = useTranslation();

  const toggleLanguage = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    changeLocale(newLocale);
  };

  const displayLanguage = locale === 'fr' ? 'EN' : 'FR';

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 text-sm font-medium text-foreground bg-surface border border-border rounded-md hover:bg-foreground hover:text-background transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`Switch to ${displayLanguage}`}
      type="button"
    >
      {displayLanguage}
    </button>
  );
});

export default LanguageSwitcher;
