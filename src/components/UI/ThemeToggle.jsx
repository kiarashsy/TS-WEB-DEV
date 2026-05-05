import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      title={theme === 'dark' ? t('theme.light') : t('theme.dark')}
      aria-label="Toggle theme"
    >
      <div className="theme-toggle__icons">
        <FiSun className={`theme-toggle__icon sun ${theme === 'light' ? 'active' : ''}`} />
        <FiMoon className={`theme-toggle__icon moon ${theme === 'dark' ? 'active' : ''}`} />
      </div>
      <span className="theme-toggle__label">
        {theme === 'dark' ? t('theme.light') : t('theme.dark')}
      </span>
    </button>
  );
};

export default ThemeToggle;