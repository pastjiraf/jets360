import React from 'react';
import { useTranslation } from 'react-i18next';
import '../utils/i18n'

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const switchLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bg' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={switchLanguage}
      className="w-12 bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition"
    >
      {i18n.language === 'en' ? 'EN' : 'BG'}
    </button>
  );
};

export default LanguageSelector;