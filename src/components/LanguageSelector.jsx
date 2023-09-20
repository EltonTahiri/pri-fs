import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';

// Import flag SVGs
import brFlag from '../../src/assets/gb.svg'; // Replace with the actual file path
import deFlag from '../../src/assets/de.svg'; // Replace with the actual file path
import itFlag from '../../src/assets/it.svg'; // Replace with the actual file path
import frFlag from '../../src/assets/fr.svg'; // Replace with the actual file path

import './LanguageSelector.css'; // Import CSS file for styling

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const languageFlags = {
    en: brFlag, // Replace with the actual import
    de: deFlag, // Replace with the actual import
    it: itFlag, // Replace with the actual import
    fr: frFlag, // Replace with the actual import
  };

  return (
    <div className="language-selector">
      <span className="language-icon">
        <FaLanguage />
      </span>
      <div className="flag-icons">
        {Object.keys(languageFlags).map((language) => (
          <img
            key={language}
            src={languageFlags[language]}
            alt={language}
            className={`flag-icon ${language === i18n.language ? 'active' : ''}`}
            onClick={() => changeLanguage(language)} // Trigger language change on click
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
