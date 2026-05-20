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
      {/* Logo - کلیک = تغییر تم */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        style={{ 
          fontSize: '1.8rem', 
          fontWeight: 'bold',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        title="Click to change theme"
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
        {/* Language Toggle - پرچم کشور */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleLanguage}
          style={{ 
            background: 'transparent',
            border: `1px solid ${colors.border}`,
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '10px',
            fontSize: '1.4rem',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
          }}
          title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
        >
          {language === 'fa' ? '🇮🇷' : '🇬🇧'}
        </motion.button>

        {/* Theme Toggle - آیکون خورشید/ماه */}
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