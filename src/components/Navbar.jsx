import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguageContext } from "../context/LanguageContext";

const Navbar = ({ onOpenNewsModal }) => {
  const { isDarkMode, toggleTheme, colors } = useTheme();
  const { language, toggleLanguage, t } = useLanguageContext();

  const handleNavClick = (item, e) => {
    if (item === 'news') {
      e.preventDefault();
      onOpenNewsModal();
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: `${colors.primary}ee`,
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${colors.border}`,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: colors.text,
        transition: 'all 0.3s ease',
        direction: 'rtl'
      }}
    >
      {/* Logo */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        style={{ fontSize: '1.8rem', fontWeight: 'bold' }}
      >
        <span style={{ color: colors.text }}>Dark</span>
        <span style={{ color: colors.accent }}>Light</span>
      </motion.div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['home', 'features', 'news', 'team'].map((item) => (
          <motion.a 
            key={item}
            href={item === 'news' ? '#' : `#${item === 'home' ? '' : item}`}
            onClick={(e) => handleNavClick(item, e)}
            whileHover={{ y: -2, color: colors.accent }}
            style={{ 
              color: colors.text, 
              textDecoration: 'none', 
              fontWeight: 500,
              transition: 'color 0.3s ease',
              fontSize: '0.95rem',
              cursor: 'pointer'
            }}
          >
            {t(`nav.${item}`)}
          </motion.a>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        {/* Language Toggle */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLanguage}
          style={{ 
            background: colors.accent,
            border: 'none',
            color: '#fff', 
            cursor: 'pointer',
            padding: '8px 18px',
            borderRadius: '10px',
            fontSize: '0.9rem',
            fontWeight: 700,
            transition: 'all 0.3s ease'
          }}
        >
          {language === 'fa' ? '🇬🇧 EN' : '🇮🇷 FA'}
        </motion.button>

        {/* Theme Toggle */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          style={{ 
            background: colors.card,
            border: `1px solid ${colors.border}`,
            color: colors.text, 
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '10px',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;