import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { FiGlobe } from 'react-icons/fi';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      title={t('language.en')}
      aria-label="Toggle language"
    >
      <FiGlobe className="language-toggle__icon" />
      <span className="language-toggle__label">
        {language === 'fa' ? 'EN' : 'FA'}
      </span>
    </button>
  );
};

export default LanguageToggle;