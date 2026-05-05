import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="page contact-page">
      <div className="container">
        <h1 className="page__title gradient-text">{t('contact.title')}</h1>
        <p className="page__description">{t('contact.description')}</p>
      </div>
    </div>
  );
};

export default Contact;