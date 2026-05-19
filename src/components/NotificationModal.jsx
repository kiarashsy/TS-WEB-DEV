import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguageContext } from '../context/LanguageContext';
import { useNews } from '../context/NewsContext';

const NotificationModal = ({ isOpen, onClose }) => {
  const { colors, isDarkMode } = useTheme();
  const { language } = useLanguageContext();
  const { news } = useNews();
  const isFa = language === 'fa';

  const categoryIcons = {
    general: '📋', tournament: '🏆', update: '🔄', event: '🎉', team: '👥',
  };

  const categoryColors = {
    general: '#2196F3', tournament: '#FF9800', update: '#4CAF50', event: '#9C27B0', team: '#E91E63',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
            zIndex: 2000, display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: '20px',
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: colors.primary,
              border: `1px solid ${colors.border}`,
              borderRadius: '20px', padding: '25px',
              maxWidth: '550px', width: '100%', maxHeight: '80vh',
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
              boxShadow: `0 20px 60px ${isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.2)'}`,
              direction: isFa ? 'rtl' : 'ltr',
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: '20px', paddingBottom: '12px',
              borderBottom: `1px solid ${colors.border}`,
            }}>
              <h2 style={{ color: colors.text, fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>
                🔔 {isFa ? 'اعلان‌ها و اخبار' : 'Notifications & News'}
              </h2>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: `${colors.accent}20` }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                style={{
                  background: 'transparent', border: 'none', color: colors.textSecondary,
                  width: '32px', height: '32px', borderRadius: '8px', cursor: 'pointer',
                  fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                ✕
              </motion.button>
            </div>

            {/* News List */}
            <div style={{ overflowY: 'auto', flex: 1, paddingRight: isFa ? '5px' : '0' }}>
              {news.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px', color: colors.textSecondary }}>
                  <span style={{ fontSize: '3rem' }}>📭</span>
                  <p>{isFa ? 'خبری موجود نیست' : 'No news available'}</p>
                </div>
              ) : (
                news.map((item, index) => {
                  const catColor = categoryColors[item.category] || '#2196F3';
                  const catIcon = categoryIcons[item.category] || '📋';
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                      whileHover={{ scale: 1.01, borderColor: `${catColor}60` }}
                      style={{
                        background: colors.card, border: `1px solid ${colors.border}`,
                        borderRadius: '14px', padding: '16px', marginBottom: '10px',
                        transition: 'all 0.15s ease', cursor: 'default',
                      }}
                    >
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <div style={{
                          background: `${catColor}20`, width: '42px', height: '42px',
                          borderRadius: '12px', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0,
                        }}>
                          {catIcon}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'flex-start', marginBottom: '4px', gap: '10px',
                          }}>
                            <h4 style={{
                              color: colors.text, fontSize: '0.95rem', fontWeight: 600,
                              margin: 0, wordBreak: 'break-word',
                            }}>
                              {isFa ? item.title : (item.titleEn || item.title)}
                            </h4>
                            <span style={{
                              fontSize: '0.7rem', color: colors.textSecondary,
                              whiteSpace: 'nowrap', marginTop: '2px',
                            }}>
                              📅 {item.date}
                            </span>
                          </div>
                          <p style={{
                            color: colors.textSecondary, fontSize: '0.85rem',
                            margin: 0, lineHeight: 1.5, wordBreak: 'break-word',
                          }}>
                            {isFa ? item.content : (item.contentEn || item.content)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
              onClick={onClose}
              style={{
                background: colors.accent, border: 'none', color: '#fff',
                padding: '12px', borderRadius: '12px', cursor: 'pointer',
                fontSize: '0.95rem', fontWeight: 600, marginTop: '18px',
                width: '100%', transition: 'all 0.15s ease',
              }}>
              {isFa ? 'بستن' : 'Close'}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationModal;