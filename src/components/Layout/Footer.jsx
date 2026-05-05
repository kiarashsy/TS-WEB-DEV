import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { FiGithub, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, url: '#' },
    { icon: <FiTwitter />, url: '#' },
    { icon: <FiInstagram />, url: '#' },
    { icon: <FiYoutube />, url: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand Section */}
          <div className="footer__section">
            <div className="footer__brand">
              <div className="footer__logo">
                <span>DL</span>
              </div>
              <h3 className="footer__brand-name">{t('footer.teamName')}</h3>
            </div>
            <p className="footer__description">
              Professional Gaming Team
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/news">{t('nav.news')}</Link></li>
              <li><Link to="/about">{t('nav.about')}</Link></li>
              <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4 className="footer__heading">{t('contact.title')}</h4>
            <ul className="footer__contact">
              <li>contact@darklight.team</li>
              <li>+98 123 456 789</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer__section">
            <h4 className="footer__heading">{t('footer.followUs')}</h4>
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social media link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {t('footer.teamName')}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;