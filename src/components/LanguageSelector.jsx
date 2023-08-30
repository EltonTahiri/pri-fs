import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa'; // Import the flag icons

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-selector">
      <span className="language-icon">
        <FaLanguage />
      </span>
      <select
        className="language-dropdown"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
