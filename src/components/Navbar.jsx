import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguageContext } from "../context/LanguageContext";

const TeamModal = ({ isOpen, onClose, colors, isDarkMode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
            zIndex: 2000, display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: '20px',
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: colors.primary,
              border: `1px solid ${colors.border}`,
              borderRadius: '24px', padding: '35px',
              maxWidth: '550px', width: '100%',
              textAlign: 'center', direction: 'rtl',
              boxShadow: `0 20px 60px ${isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.2)'}`,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              style={{
                position: 'absolute', top: '15px', right: '20px',
                background: 'transparent', border: 'none',
                color: colors.textSecondary, fontSize: '1.5rem', cursor: 'pointer',
              }}
            >
              ✕
            </motion.button>

            <h2 style={{ color: colors.accent, fontSize: '1.8rem', fontWeight: 800, marginBottom: '30px' }}>
              👥 تیم ما
            </h2>

            {/* Founders */}
            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ color: '#FFD700', marginBottom: '15px', fontSize: '1.1rem' }}>👑 Founders</h3>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{
                  background: `${colors.card}ee`, border: `1px solid ${colors.border}`,
                  borderRadius: '16px', padding: '20px', minWidth: '140px',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>👑</div>
                  <div style={{ color: colors.text, fontWeight: 700, fontSize: '1.1rem' }}>30Bil</div>
                  <div style={{ color: '#FFD700', fontSize: '0.8rem', marginTop: '4px' }}>Founder</div>
                </div>
                <div style={{
                  background: `${colors.card}ee`, border: `1px solid ${colors.border}`,
                  borderRadius: '16px', padding: '20px', minWidth: '140px',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>👑</div>
                  <div style={{ color: colors.text, fontWeight: 700, fontSize: '1.1rem' }}>DANI</div>
                  <div style={{ color: '#FFD700', fontSize: '0.8rem', marginTop: '4px' }}>Founder</div>
                </div>
              </div>
            </div>

            {/* Developers */}
            <div>
              <h3 style={{ color: '#2196F3', marginBottom: '15px', fontSize: '1.1rem' }}>💻 Developers</h3>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{
                  background: `${colors.card}ee`, border: `1px solid ${colors.border}`,
                  borderRadius: '16px', padding: '20px', minWidth: '140px',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>💻</div>
                  <div style={{ color: colors.text, fontWeight: 700, fontSize: '1.1rem' }}>Kiarashsy</div>
                  <div style={{ color: '#2196F3', fontSize: '0.8rem', marginTop: '4px' }}>Web Developer</div>
                </div>
                <div style={{
                  background: `${colors.card}ee`, border: `1px solid ${colors.border}`,
                  borderRadius: '16px', padding: '20px', minWidth: '140px',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🖥️</div>
                  <div style={{ color: colors.text, fontWeight: 700, fontSize: '1.1rem' }}>Biozed</div>
                  <div style={{ color: '#4CAF50', fontSize: '0.8rem', marginTop: '4px' }}>Screen Share Dev</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
{
const handleNavClick = (item, e) => {
    if (item === 'news') {
      e.preventDefault();
      if (onOpenNewsModal) onOpenNewsModal();
      return;
    }
    if (item === 'team') {
      e.preventDefault();
      setIsTeamOpen(true);
      return;
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
          background: `${colors.primary}ee`, backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${colors.border}`,
          padding: '1rem 2rem', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          color: colors.text, transition: 'all 0.3s ease', direction: 'rtl'
        }}
      >
        {/* Logo - کلیک = تغییر تم */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          style={{ fontSize: '1.8rem', fontWeight: 'bold', cursor: 'pointer', userSelect: 'none' }}
          title="Click to change theme"
        >
          <span style={{ color: colors.text }}>Dark</span>
          <span style={{ color: colors.accent }}>Light</span>
        </motion.div>

        {/* Nav Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['home', 'features', 'news', 'team'].map((item) => (
            <motion.a 
              key={item}
              href={item === 'news' || item === 'team' ? '#' : `#${item === 'home' ? '' : item}`}
              onClick={(e) => handleNavClick(item, e)}
              whileHover={{ y: -2, color: colors.accent }}
              style={{ color: colors.text, textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer' }}
            >
              {t(`nav.${item}`)}
            </motion.a>
          ))}
        </div>

        {/* دکمه زبان - پرچم */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleLanguage}
          style={{ 
            background: 'transparent', border: `1px solid ${colors.border}`,
            cursor: 'pointer', padding: '8px 12px', borderRadius: '10px',
            fontSize: '1.4rem', width: '44px', height: '44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {language === 'fa' ? '🇮🇷' : '🇬🇧'}
        </motion.button>
      </motion.nav>

      {/* Team Modal */}
      <TeamModal isOpen={isTeamOpen} onClose={() => setIsTeamOpen(false)} colors={colors} isDarkMode={isDarkMode} />
    </>
  );
};

export default Navbar;