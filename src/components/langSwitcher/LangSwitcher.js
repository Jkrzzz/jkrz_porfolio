// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LangSwitcher.css'; 
import enImage from '../../assets/en.jpg'
import jaImage from '../../assets/ja.png'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <img
        src={enImage}
        alt="English"
        onClick={() => changeLanguage('en')}
        className="flag-icon"
      />
      <img
        src={jaImage}
        alt="Japanese"
        onClick={() => changeLanguage('ja')}
        className="flag-icon"
      />
    </div>
  );
};

export default LanguageSwitcher;
