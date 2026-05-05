import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="page about-page">
      <div className="container">
        <h1 className="page__title gradient-text">{t('about.title')}</h1>
        <p className="page__description">{t('about.description')}</p>
      </div>
    </div>
  );
};

export default About;