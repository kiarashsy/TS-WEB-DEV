import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguageContext } from '../context/LanguageContext';
import { useNews } from '../context/NewsContext';

const NotificationBar = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBarClosed, setIsBarClosed] = useState(false);
  const { colors } = useTheme();
  const { language } = useLanguageContext();
  const { news } = useNews();
  const isFa = language === 'fa';

  // آخرین خبر از NewsContext
  const latestNews = news.length > 0 ? news[0] : null;

  // با رفرش دوباره نمایش داده بشه
  useEffect(() => {
    const closed = sessionStorage.getItem('notif-bar-closed');
    if (closed === 'true') {
      setIsBarClosed(true);
    }
  }, []);

  const handleCloseBar = () => {
    setIsBarClosed(true);
    sessionStorage.setItem('notif-bar-closed', 'true');
  };

  const handleViewAll = () => {
    setIsOpen(false);
    if (onOpenModal) onOpenModal();
  };

  if (isBarClosed) return null;

  return (
    <div style={{ position: 'fixed', top: 100, right: 30, zIndex: 1000 }}>
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: 55,
          height: 55,
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          background: `linear-gradient(135deg, ${colors.accent}, ${colors.secondary || colors.accent})`,
          color: '#fff',
          fontSize: '1.5rem',
          boxShadow: `0 8px 25px ${colors.accent}40`,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span>🔔</span>
        {latestNews && (
          <span style={{
            position: 'absolute',
            top: -5,
            right: -5,
            background: '#ff4444',
            borderRadius: '50%',
            width: 22,
            height: 22,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            border: '2px solid #fff'
          }}>
            1
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            style={{
              position: 'absolute',
              top: 70,
              right: 0,
              width: 380,
              background: colors.card,
              border: `1px solid ${colors.border}`,
              borderRadius: 20,
              backdropFilter: 'blur(30px)',
              boxShadow: `0 20px 50px rgba(0,0,0,0.3)`,
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '20px 25px',
              borderBottom: `1px solid ${colors.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: `linear-gradient(135deg, ${colors.secondary || colors.accent}, ${colors.card})`
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.5rem' }}>🔔</span>
                <h3 style={{ color: colors.text, margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>
                  {isFa ? 'اعلان‌ها' : 'Notifications'}
                </h3>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <motion.button 
                  onClick={handleCloseBar}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title={isFa ? 'بستن کامل' : 'Close permanently'}
                  style={{
                    background: 'rgba(255,68,68,0.2)',
                    border: '1px solid rgba(255,68,68,0.3)',
                    color: '#ff4444',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  ✕ {isFa ? 'بستن' : 'Close'}
                </motion.button>  
              </div>
            </div>

            {/* Notifications List - از NewsContext */}
            <div style={{ padding: '15px', maxHeight: 400, overflowY: 'auto' }}>
              {latestNews ? (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5, background: colors.secondary || colors.card }}
                  style={{
                    padding: '18px', borderRadius: '15px',
                    background: `${colors.primary}80`, border: `1px solid ${colors.border}`,
                    cursor: 'pointer', transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 45, height: 45, borderRadius: '12px',
                      background: `linear-gradient(135deg, ${colors.accent}40, ${(colors.secondary || colors.accent)}40)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.3rem', flexShrink: 0
                    }}>
                      📰
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: colors.text, margin: '0 0 5px 0', fontSize: '0.95rem', fontWeight: 600 }}>
                        {isFa ? latestNews.title : (latestNews.titleEn || latestNews.title)}
                      </h4>
                      <p style={{ color: colors.textSecondary, margin: '0 0 8px 0', fontSize: '0.85rem', lineHeight: 1.5 }}>
                        {isFa 
                          ? latestNews.content?.substring(0, 80) + '...' 
                          : (latestNews.contentEn || latestNews.content)?.substring(0, 80) + '...'}
                      </p>
                      <span style={{ color: colors.accent, fontSize: '0.75rem', fontWeight: 500 }}>
                        📅 {latestNews.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div style={{ textAlign: 'center', padding: '20px', color: colors.textSecondary }}>
                  {isFa ? 'خبری موجود نیست' : 'No news available'}
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{
              padding: '15px 25px', borderTop: `1px solid ${colors.border}`,
              textAlign: 'center',
              background: `linear-gradient(135deg, ${colors.secondary || colors.accent}, ${colors.card})`
            }}>
              <button 
                onClick={handleViewAll}
                style={{
                  background: 'none', border: 'none', color: colors.accent,
                  cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem'
                }}
              >
                {isFa ? 'مشاهده همه' : 'View All'} →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationBar;