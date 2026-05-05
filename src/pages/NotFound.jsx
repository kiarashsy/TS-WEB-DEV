import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import './NotFound.css';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="page not-found-page">
      <div className="not-found__content">
        <h1 className="not-found__code">404</h1>
        <p className="not-found__message">Page Not Found</p>
        <Link to="/" className="not-found__link">
          {t('nav.home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;