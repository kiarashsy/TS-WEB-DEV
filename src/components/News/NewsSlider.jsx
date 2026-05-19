import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLanguageContext } from '../../context/LanguageContext';
import { useNews } from '../../context/NewsContext';
import { FiChevronLeft, FiChevronRight, FiClock, FiTag } from 'react-icons/fi';
import './NewsSlider.css';

const NewsSlider = () => {
  const { colors, isDarkMode } = useTheme();
  const { language } = useLanguageContext();
  const { news } = useNews();
  
  const isFa = language === 'fa';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const activeNews = news.length > 0 ? news : [];

  useEffect(() => {
    if (!isAutoPlaying || isPaused || activeNews.length <= 1) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % activeNews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, activeNews.length]);

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % activeNews.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + activeNews.length) % activeNews.length);
  };

  const categoryIcons = {
    general: '📋', tournament: '🏆', update: '🔄', event: '🎉', team: '👥',
  };

  const categoryColors = {
    general: '#2196F3', tournament: '#FF9800', update: '#4CAF50', event: '#9C27B0', team: '#E91E63',
  };

  const categoryLabels = {
    fa: { general: 'عمومی', tournament: 'تورنمنت', update: 'بروزرسانی', event: 'رویداد', team: 'تیم' },
    en: { general: 'General', tournament: 'Tournament', update: 'Update', event: 'Event', team: 'Team' },
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: dir > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      rotateY: dir > 0 ? -15 : 15,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  if (activeNews.length === 0) {
    return (
      <div className="news-slider-wrapper" style={{ direction: isFa ? 'rtl' : 'ltr' }}>
        <div className="container">
          <motion.div
            className="news-slider-empty glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: `${colors.card}ee`,
              border: `1px solid ${colors.border}`,
              borderRadius: '24px',
              padding: '60px 30px',
              textAlign: 'center',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: '4rem', marginBottom: '20px' }}
            >
              📭
            </motion.div>
            <h3 style={{ color: colors.text, fontSize: '1.5rem', marginBottom: '10px' }}>
              {isFa ? 'خبری موجود نیست' : 'No News Available'}
            </h3>
            <p style={{ color: colors.textSecondary }}>
              {isFa ? 'به زودی اخبار جدید منتشر خواهد شد' : 'New news will be published soon'}
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="news-slider-wrapper" 
      style={{ direction: 'ltr' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container" style={{ direction: isFa ? 'rtl' : 'ltr' }}>
        <div className="news-slider-header">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="gradient-text"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '10px' }}
          >
            {isFa ? 'آخرین اخبار و رویدادها' : 'Latest News & Events'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            style={{ color: colors.textSecondary, fontSize: '1.1rem' }}
          >
            {isFa ? 'با جدیدترین اخبار و رویدادهای تیم دارک لایت همراه باشید' : 'Stay tuned with the latest news and events from DarkLight Team'}
          </motion.p>
        </div>

        <div className="news-slider-main">
          <div className="news-slider-viewport">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                className="news-slider-card glass"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  background: `${colors.card}cc`,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '28px',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  minHeight: '380px',
                  boxShadow: `0 20px 60px ${isDarkMode ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'}`,
                }}
              >
                <div style={{
                  background: `linear-gradient(135deg, ${categoryColors[activeNews[currentIndex]?.category] || '#2196F3'}20, ${categoryColors[activeNews[currentIndex]?.category] || '#2196F3'}05)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        x: [0, Math.random() * 40 - 20],
                        y: [0, Math.random() * 40 - 20],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                      style={{
                        position: 'absolute',
                        width: `${Math.random() * 30 + 10}px`,
                        height: `${Math.random() * 30 + 10}px`,
                        borderRadius: '50%',
                        background: categoryColors[activeNews[currentIndex]?.category] || '#2196F3',
                        opacity: 0.2,
                      }}
                    />
                  ))}
                  
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{
                      fontSize: '6rem',
                      filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))',
                      zIndex: 1,
                    }}
                  >
                    {categoryIcons[activeNews[currentIndex]?.category] || '📋'}
                  </motion.div>
                </div>

                <div style={{ padding: '35px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap' }}>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      style={{
                        padding: '6px 14px',
                        background: `${categoryColors[activeNews[currentIndex]?.category] || '#2196F3'}20`,
                        color: categoryColors[activeNews[currentIndex]?.category] || '#2196F3',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <FiTag size={12} />
                      {categoryLabels[language]?.[activeNews[currentIndex]?.category] || activeNews[currentIndex]?.category}
                    </motion.span>
                    
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: colors.textSecondary, fontSize: '0.8rem' }}>
                      <FiClock size={12} />
                      {activeNews[currentIndex]?.date}
                    </span>
                  </div>

                  <motion.h3
                    layout
                    style={{
                      color: colors.text,
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                      fontWeight: 800,
                      marginBottom: '12px',
                      lineHeight: 1.3,
                    }}
                  >
                    {isFa 
                      ? activeNews[currentIndex]?.title 
                      : (activeNews[currentIndex]?.titleEn || activeNews[currentIndex]?.title)}
                  </motion.h3>

                  <motion.p
                    layout
                    style={{
                      color: colors.textSecondary,
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      marginBottom: '20px',
                      flex: 1,
                    }}
                  >
                    {isFa
                      ? activeNews[currentIndex]?.content?.substring(0, 150) + '...'
                      : (activeNews[currentIndex]?.contentEn || activeNews[currentIndex]?.content)?.substring(0, 150) + '...'}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {activeNews.length > 1 && (
            <>
              <motion.button
                className="news-slider-btn news-slider-btn--prev"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goPrev}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: `${colors.card}ee`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  boxShadow: `0 8px 25px rgba(0,0,0,0.15)`,
                }}
              >
                <FiChevronLeft />
              </motion.button>

              <motion.button
                className="news-slider-btn news-slider-btn--next"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goNext}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: `${colors.card}ee`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  boxShadow: `0 8px 25px rgba(0,0,0,0.15)`,
                }}
              >
                <FiChevronRight />
              </motion.button>
            </>
          )}

          {activeNews.length > 1 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '20px',
            }}>
              {activeNews.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goTo(index)}
                  style={{
                    width: index === currentIndex ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    background: index === currentIndex 
                      ? colors.accent 
                      : `${colors.textSecondary}40`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;