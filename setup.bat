@echo off
chcp 65001 >nul
echo ============================================
echo   Dark Light Server - Project Setup
echo ============================================
echo.

:: ایجاد پوشه اصلی پروژه
echo [1/10] Creating main project folder...
mkdir dark-light-server
cd dark-light-server

:: ایجاد پوشه‌های اصلی
echo [2/10] Creating folder structure...
mkdir public
mkdir src
mkdir src\components
mkdir src\context
mkdir src\data
mkdir src\hooks
mkdir src\styles

:: ایجاد فایل package.json
echo [3/10] Creating package.json...
(
echo {
echo   "name": "dark-light-server",
echo   "version": "1.0.0",
echo   "private": true,
echo   "dependencies": {
echo     "react": "^18.2.0",
echo     "react-dom": "^18.2.0",
echo     "react-scripts": "5.0.1",
echo     "framer-motion": "^10.16.4",
echo     "lucide-react": "^0.294.0"
echo   },
echo   "scripts": {
echo     "start": "react-scripts start",
echo     "build": "react-scripts build",
echo     "test": "react-scripts test",
echo     "eject": "react-scripts eject"
echo   },
echo   "eslintConfig": {
echo     "extends": [
echo       "react-app"
echo     ]
echo   },
echo   "browserslist": {
echo     "production": [
echo       ">0.2%",
echo       "not dead",
echo       "not op_mini all"
echo     ],
echo     "development": [
echo       "last 1 chrome version",
echo       "last 1 firefox version",
echo       "last 1 safari version"
echo     ]
echo   }
echo }
) > package.json

:: ایجاد فایل public/index.html
echo [4/10] Creating public/index.html...
(
echo ^<!DOCTYPE html^>
echo ^<html lang="fa"^>
echo   ^<head^>
echo     ^<meta charset="utf-8" /^>
echo     ^<link rel="icon" href="%PUBLIC_URL%/favicon.ico" /^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1" /^>
echo     ^<meta name="theme-color" content="#0a1929" /^>
echo     ^<meta name="description" content="Dark Light Server - Best Gaming Community" /^>
echo     ^<title^>Dark Light Server^</title^>
echo   ^</head^>
echo   ^<body^>
echo     ^<noscript^>You need to enable JavaScript to run this app.^</noscript^>
echo     ^<div id="root"^>^</div^>
echo   ^</body^>
echo ^</html^>
) > public\index.html

:: ایجاد فایل src/styles/globals.css
echo [5/10] Creating globals.css...
(
echo @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900^&family=Inter:wght@300;400;500;700;900^&display=swap');
echo.
echo * {
echo   margin: 0;
echo   padding: 0;
echo   box-sizing: border-box;
echo }
echo.
echo body {
echo   font-family: 'Vazirmatn', 'Inter', sans-serif;
echo   overflow-x: hidden;
echo   -webkit-font-smoothing: antialiased;
echo }
echo.
echo ::-webkit-scrollbar { width: 8px; }
echo ::-webkit-scrollbar-track { background: #0a1929; }
echo ::-webkit-scrollbar-thumb { background: #2196f3; border-radius: 10px; }
echo ::-webkit-scrollbar-thumb:hover { background: #1976d2; }
echo.
echo html { scroll-behavior: smooth; }
echo ::selection { background: #2196f3; color: white; }
echo.
echo .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
echo.
echo .glass-effect {
echo   background: rgba(255, 255, 255, 0.05^);
echo   backdrop-filter: blur(20px^);
echo   border: 1px solid rgba(255, 255, 255, 0.1^);
echo   border-radius: 16px;
echo }
echo.
echo .text-gradient {
echo   background: linear-gradient(135deg, #2196f3, #1976d2^);
echo   -webkit-background-clip: text;
echo   -webkit-text-fill-color: transparent;
echo }
) > src\styles\globals.css

:: ایجاد فایل src/data/translations.js
echo [6/10] Creating translations.js...
(
echo export const translations = {
echo   fa: {
echo     nav: { home: 'خانه', features: 'امکانات', news: 'اخبار و اطلاعیه‌ها', team: 'تیم ما', contact: 'تماس با ما' },
echo     hero: {
echo       title: 'به سرور دارک لایت خوش آمدید',
echo       subtitle: 'جامعه‌ای پر از انرژی و ماجراجویی',
echo       description: 'بهترین تجربه گیمینگ رو با ما داشته باشید',
echo       joinButton: 'عضویت در سرور',
echo       learnMore: 'بیشتر بدانید'
echo     },
echo     features: {
echo       title: 'امکانات ویژه سرور',
echo       voiceChat: 'چت صوتی با کیفیت بالا',
echo       customBots: 'بات‌های اختصاصی',
echo       events: 'ایونت‌های هفتگی',
echo       support: 'پشتیبانی 24/7',
echo       competitions: 'مسابقات جوایز',
echo       customRoles: 'رول‌های اختصاصی'
echo     },
echo     news: { title: 'آخرین اخبار و اطلاعیه‌ها', readMore: 'ادامه مطلب', noNews: 'در حال حاضر خبری موجود نیست' },
echo     team: { title: 'تیم مدیریتی سرور', owner: 'مدیر اصلی', admin: 'ادمین', moderator: 'ناظم', developer: 'توسعه‌دهنده' },
echo     footer: { rights: 'تمامی حقوق محفوظ است', madeBy: 'ساخته شده با ❤️ برای سرور دارک لایت', socialMedia: 'شبکه‌های اجتماعی' }
echo   },
echo   en: {
echo     nav: { home: 'Home', features: 'Features', news: 'News ^& Announcements', team: 'Our Team', contact: 'Contact Us' },
echo     hero: {
echo       title: 'Welcome to Dark Light Server',
echo       subtitle: 'A Community Full of Energy and Adventure',
echo       description: 'Experience the best gaming moments with us',
echo       joinButton: 'Join Server',
echo       learnMore: 'Learn More'
echo     },
echo     features: {
echo       title: 'Special Server Features',
echo       voiceChat: 'High Quality Voice Chat',
echo       customBots: 'Custom Bots',
echo       events: 'Weekly Events',
echo       support: '24/7 Support',
echo       competitions: 'Prize Competitions',
echo       customRoles: 'Custom Roles'
echo     },
echo     news: { title: 'Latest News ^& Announcements', readMore: 'Read More', noNews: 'No news available at the moment' },
echo     team: { title: 'Server Management Team', owner: 'Owner', admin: 'Admin', moderator: 'Moderator', developer: 'Developer' },
echo     footer: { rights: 'All Rights Reserved', madeBy: 'Made with ❤️ for Dark Light Server', socialMedia: 'Social Media' }
echo   }
echo };
) > src\data\translations.js

:: ایجاد فایل src/hooks/useLanguage.js
echo [7/10] Creating hooks...
(
echo import { useState, useCallback } from 'react';
echo import { translations } from '../data/translations';
echo.
echo export const useLanguage = () => {
echo   const [language, setLanguage] = useState('fa');
echo   const switchLanguage = useCallback((lang) => setLanguage(lang), []);
echo   const t = useCallback((path) => {
echo     const keys = path.split('.');
echo     let value = translations[language];
echo     for (const key of keys) {
echo       if (value === undefined) return path;
echo       value = value[key];
echo     }
echo     return value || path;
echo   }, [language]);
echo   return { language, switchLanguage, t };
echo };
) > src\hooks\useLanguage.js

:: ایجاد فایل src/context/ThemeContext.jsx
echo [8/10] Creating context...
(
echo import React, { createContext, useState, useContext } from 'react';
echo.
echo const ThemeContext = createContext();
echo.
echo export const ThemeProvider = ({ children }) => {
echo   const [isDarkMode, setIsDarkMode] = useState(true);
echo   const [theme, setTheme] = useState('dark');
echo.
echo   const toggleTheme = () => {
echo     setIsDarkMode(!isDarkMode);
echo     setTheme(isDarkMode ? 'light' : 'dark');
echo   };
echo.
echo   const themeColors = {
echo     dark: {
echo       primary: '#0a1929', secondary: '#1e3a5f', accent: '#2196f3',
echo       text: '#ffffff', textSecondary: '#b0bec5', card: '#132f4c',
echo       border: '#1e4976', success: '#4caf50', error: '#f44336', warning: '#ff9800'
echo     },
echo     light: {
echo       primary: '#e3f2fd', secondary: '#bbdefb', accent: '#1976d2',
echo       text: '#0a1929', textSecondary: '#546e7a', card: '#ffffff',
echo       border: '#90caf9', success: '#388e3c', error: '#d32f2f', warning: '#f57c00'
echo     }
echo   };
echo.
echo   return (
echo     ^<ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme, colors: themeColors[theme] }}^>
echo       {children}
echo     ^</ThemeContext.Provider^>
echo   );
echo };
echo.
echo export const useTheme = () => useContext(ThemeContext);
) > src\context\ThemeContext.jsx

:: ایجاد components اصلی
echo [9/10] Creating React components...

:: Navbar.jsx
(
echo import React, { useState, useEffect } from 'react';
echo import { motion, AnimatePresence } from 'framer-motion';
echo import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
echo import { useTheme } from '../context/ThemeContext';
echo import { useLanguage } from '../hooks/useLanguage';
echo.
echo const Navbar = (^) => {
echo   const [isScrolled, setIsScrolled] = useState(false);
echo   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
echo   const { isDarkMode, toggleTheme, colors } = useTheme(^);
echo   const { language, switchLanguage, t } = useLanguage(^);
echo.
echo   useEffect((^) => {
echo     const handleScroll = (^) => setIsScrolled(window.scrollY ^> 50);
echo     window.addEventListener('scroll', handleScroll);
echo     return (^) => window.removeEventListener('scroll', handleScroll);
echo   }, []);
echo.
echo   const menuItems = [
echo     { key: 'home', href: '#home' },
echo     { key: 'features', href: '#features' },
echo     { key: 'news', href: '#news' },
echo     { key: 'team', href: '#team' }
echo   ];
echo.
echo   return (
echo     ^<motion.nav
echo       className={`navbar ${isScrolled ? 'scrolled' : ''}`}
echo       initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
echo       style={{
echo         background: isScrolled ? `${colors.primary}ee` : 'transparent',
echo         backdropFilter: isScrolled ? 'blur(20px)' : 'none',
echo         borderBottom: isScrolled ? `1px solid ${colors.border}` : 'none',
echo         position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999
echo       }}
echo     ^>
echo       ^<div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}^>
echo         ^<div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: colors.text }}^>
echo           ^<span^>Dark^</span^>^<span style={{ color: colors.accent }}^>Light^</span^>
echo         ^</div^>
echo.
echo         ^<div style={{ display: 'flex', gap: '2rem' }} className="desktop-menu"^>
echo           {menuItems.map((item) => (
echo             ^<a key={item.key} href={item.href} style={{ color: colors.text, textDecoration: 'none', fontWeight: 500 }}^>
echo               {t(`nav.${item.key}`)}
echo             ^</a^>
echo           ))}
echo         ^</div^>
echo.
echo         ^<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}^>
echo           ^<button onClick={(^) => switchLanguage(language === 'fa' ? 'en' : 'fa')} style={{ background: 'none', border: 'none', color: colors.text, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}^>
echo             ^<Globe size={20} /^> {language === 'fa' ? 'EN' : 'FA'}
echo           ^</button^>
echo           ^<button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: colors.text, cursor: 'pointer' }}^>
echo             {isDarkMode ? ^<Sun size={20} /^> : ^<Moon size={20} /^>}
echo           ^</button^>
echo         ^</div^>
echo       ^</div^>
echo     ^</motion.nav^>
echo   );
echo };
echo.
echo export default Navbar;
) > src\components\Navbar.jsx

:: BackgroundAnimation.jsx
(
echo import React, { useEffect, useRef } from 'react';
echo import { useTheme } from '../context/ThemeContext';
echo.
echo const BackgroundAnimation = (^) => {
echo   const canvasRef = useRef(null);
echo   const { isDarkMode } = useTheme(^);
echo.
echo   useEffect((^) => {
echo     const canvas = canvasRef.current;
echo     const ctx = canvas.getContext('2d');
echo     let animationFrameId;
echo     canvas.width = window.innerWidth;
echo     canvas.height = window.innerHeight;
echo.
echo     const particles = [];
echo     const colorsArray = isDarkMode ? ['#1e3a5f', '#2196f3', '#4fc3f7', '#81d4fa', '#1565c0'] : ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5'];
echo.
echo     class Particle {
echo       constructor(^) {
echo         this.x = Math.random(^) * canvas.width;
echo         this.y = Math.random(^) * canvas.height;
echo         this.size = Math.random(^) * 3 + 1;
echo         this.speedX = Math.random(^) * 0.5 - 0.25;
echo         this.speedY = Math.random(^) * 0.5 - 0.25;
echo         this.color = colorsArray[Math.floor(Math.random(^) * colorsArray.length)];
echo         this.opacity = Math.random(^) * 0.5 + 0.2;
echo       }
echo       update(^) { this.x += this.speedX; this.y += this.speedY; }
echo       draw(^) {
echo         ctx.beginPath(^);
echo         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
echo         ctx.fillStyle = this.color;
echo         ctx.globalAlpha = this.opacity;
echo         ctx.fill(^);
echo         ctx.globalAlpha = 1;
echo       }
echo     }
echo.
echo     for (let i = 0; i ^< 100; i++) particles.push(new Particle(^));
echo.
echo     function animate(^) {
echo       ctx.clearRect(0, 0, canvas.width, canvas.height);
echo       const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
echo       isDarkMode ? (gradient.addColorStop(0, '#0a1929'), gradient.addColorStop(1, '#1a2332')) : (gradient.addColorStop(0, '#f5f9ff'), gradient.addColorStop(1, '#e3f2fd'));
echo       ctx.fillStyle = gradient;
echo       ctx.fillRect(0, 0, canvas.width, canvas.height);
echo       particles.forEach(p => { p.update(^); p.draw(^); });
echo       animationFrameId = requestAnimationFrame(animate);
echo     }
echo     animate(^);
echo.
echo     window.addEventListener('resize', (^) => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
echo     return (^) => cancelAnimationFrame(animationFrameId);
echo   }, [isDarkMode]);
echo.
echo   return ^<canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} /^>;
echo };
echo.
echo export default BackgroundAnimation;
) > src\components\BackgroundAnimation.jsx

:: NotificationBar.jsx
(
echo import React, { useState, useEffect } from 'react';
echo import { motion, AnimatePresence } from 'framer-motion';
echo import { useTheme } from '../context/ThemeContext';
echo import { useLanguage } from '../hooks/useLanguage';
echo import { Bell, X } from 'lucide-react';
echo.
echo const NotificationBar = (^) => {
echo   const [notifications, setNotifications] = useState([]);
echo   const [isOpen, setIsOpen] = useState(false);
echo   const { colors } = useTheme(^);
echo   const { t } = useLanguage(^);
echo.
echo   useEffect((^) => {
echo     setNotifications([{ id: 1, type: 'info', title: 'آپدیت جدید', message: 'سرور به نسخه 2.0 آپدیت شد', date: '2024-01-15', isRead: false }, { id: 2, type: 'event', title: 'ایونت ویژه', message: 'این هفته ایونت 2x XP داریم!', date: '2024-01-14', isRead: false }]);
echo   }, []);
echo.
echo   const unreadCount = notifications.filter(n => !n.isRead).length;
echo.
echo   return (
echo     ^<div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}^>
echo       ^<motion.button onClick={(^) => setIsOpen(!isOpen)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={{ padding: 12, border: 'none', borderRadius: '50%', cursor: 'pointer', background: colors.accent, color: '#fff', position: 'relative' }}^>
echo         ^<Bell size={24} /^>
echo         {unreadCount ^> 0 ^&^& ^<span style={{ position: 'absolute', top: -5, right: -5, background: '#f44336', color: '#fff', borderRadius: '50%', padding: '2px 6px', fontSize: 12 }}^>{unreadCount}^</span^>}
echo       ^</motion.button^>
echo.
echo       ^<AnimatePresence^>
echo         {isOpen ^&^& (
echo           ^<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} style={{ position: 'absolute', top: 70, right: 0, width: 380, background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 12, backdropFilter: 'blur(20px)', overflow: 'hidden' }}^>
echo             ^<div style={{ padding: '16px 20px', borderBottom: `1px solid ${colors.border}`, display: 'flex', justifyContent: 'space-between' }}^>
echo               ^<h3 style={{ color: colors.text }}^>{t('news.title')}^</h3^>
echo               ^<button onClick={(^) => setIsOpen(false)} style={{ background: 'none', border: 'none', color: colors.text, cursor: 'pointer' }}^>^<X size={20} /^>^</button^>
echo             ^</div^>
echo             ^<div style={{ padding: 10, maxHeight: 400, overflowY: 'auto' }}^>
echo               {notifications.map(n => (
echo                 ^<div key={n.id} style={{ padding: 12, borderRight: !n.isRead ? `3px solid ${colors.accent}` : 'none', marginBottom: 8, borderRadius: 8, color: colors.text }}^>
echo                   ^<h4^>{n.title}^</h4^>^<p style={{ opacity: 0.8 }}^>{n.message}^</p^>^<small style={{ opacity: 0.5 }}^>{n.date}^</small^>
echo                 ^</div^>
echo               ))}
echo             ^</div^>
echo           ^</motion.div^>
echo         )}
echo       ^</AnimatePresence^>
echo     ^</div^>
echo   );
echo };
echo.
echo export default NotificationBar;
) > src\components\NotificationBar.jsx

:: Hero.jsx
(
echo import React from 'react';
echo import { motion } from 'framer-motion';
echo import { useTheme } from '../context/ThemeContext';
echo import { useLanguage } from '../hooks/useLanguage';
echo.
echo const HeroSection = (^) => {
echo   const { colors } = useTheme(^);
echo   const { t, language } = useLanguage(^);
echo.
echo   return (
echo     ^<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', direction: language === 'fa' ? 'rtl' : 'ltr' }}^>
echo       ^<div style={{ textAlign: 'center', padding: '0 20px' }}^>
echo         ^<motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '3.5rem', fontWeight: 900, color: colors.text, marginBottom: 20 }}^>
echo           {t('hero.title')}
echo         ^</motion.h1^>
echo         ^<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ fontSize: '1.5rem', color: colors.textSecondary, marginBottom: 15 }}^>
echo           {t('hero.subtitle')}
echo         ^</motion.p^>
echo         ^<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontSize: '1.2rem', color: colors.textSecondary, marginBottom: 40 }}^>
echo           {t('hero.description')}
echo         ^</motion.p^>
echo         ^<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}^>
echo           ^<motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '15px 30px', background: colors.accent, color: '#fff', textDecoration: 'none', borderRadius: 8, fontWeight: 600, fontSize: '1.1rem' }}^>
echo             {t('hero.joinButton')}
echo           ^</motion.a^>
echo           ^<motion.a href="#features" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ padding: '15px 30px', background: 'transparent', color: colors.text, textDecoration: 'none', borderRadius: 8, border: `2px solid ${colors.accent}`, fontWeight: 600, fontSize: '1.1rem' }}^>
echo             {t('hero.learnMore')}
echo           ^</motion.a^>
echo         ^</motion.div^>
echo       ^</div^>
echo     ^</div^>
echo   );
echo };
echo.
echo export default HeroSection;
) > src\components\Hero.jsx

:: Features.jsx
(
echo import React from 'react';
echo import { motion } from 'framer-motion';
echo import { useTheme } from '../context/ThemeContext';
echo import { useLanguage } from '../hooks/useLanguage';
echo.
echo const Features = (^) => {
echo   const { colors } = useTheme(^);
echo   const { t } = useLanguage(^);
echo.
echo   const features = ['voiceChat', 'customBots', 'events', 'support', 'competitions', 'customRoles'];
echo.
echo   return (
echo     ^<div className="container" style={{ padding: '80px 20px' }}^>
echo       ^<h2 style={{ textAlign: 'center', color: colors.text, fontSize: '2.5rem', marginBottom: 50, fontWeight: 700 }}^>
echo         {t('features.title')}
echo       ^</h2^>
echo       ^<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}^>
echo         {features.map((feature, index) => (
echo           ^<motion.div key={feature} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} style={{ padding: 30, background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 12, color: colors.text, textAlign: 'center' }}^>
echo             ^<h3 style={{ fontSize: '1.3rem' }}^>{t(`features.${feature}`)}^</h3^>
echo           ^</motion.div^>
echo         ))}
echo       ^</div^>
echo     ^</div^>
echo   );
echo };
echo.
echo export default Features;
) > src\components\Features.jsx

:: NewsSection.jsx
(
echo import React from 'react';
echo import { motion } from 'framer-motion';
echo import { useTheme } from '../context/ThemeContext';
echo import { useLanguage } from '../hooks/useLanguage';
echo.
echo const NewsSection = (^) => {
echo   const { colors } = useTheme(^);
echo   const { t } = useLanguage(^);
echo.
echo   const news = [
echo     { title: 'آپدیت بزرگ سرور', desc: 'قابلیت‌های جدید اضافه شد', date: '2024-01-15' },
echo     { title: 'ایونت آخر هفته', desc: 'مسابقه با جوایز ویژه', date: '2024-01-14' }
echo   ];
echo.
echo   return (
echo     ^<div className="container" style={{ padding: '80px 20px' }}^>
echo       ^<h2 style={{ textAlign: 'center', color: colors.text, fontSize: '2.5rem', marginBottom: 50 }}^>{t('news.title')}^</h2^>
echo       ^<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 30 }}^>
echo         {news.map((item, index) => (
echo           ^<motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} style={{ padding: 25, background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 12, color: colors.text }}^>
echo             ^<h3 style={{ marginBottom: 10 }}^>{item.title}^</h3^>
echo             ^<p style={{ opacity: 0.8 }}^>{item.desc}^</p^>
echo             ^<small style={{ opacity: 0.5 }}^>{item.date}^</small^>
echo           ^</motion.div^>
echo         ))}
echo       ^</div^>
echo     ^</div^>
echo   );
echo };
echo.
echo export default NewsSection;
) > src\components\NewsSection.jsx

:: TeamSection.jsx
(
echo import React from 'react';
echo import { motion } from 'framer-motion';
echo import { useTheme } from '../context/ThemeContext';
echo import { useLanguage } from '../hooks/useLanguage';
echo.
echo const TeamSection = (^) => {
echo   const { colors } = useTheme(^);
echo   const { t } = useLanguage(^);
echo.
echo   const team = [
echo     { name: 'Admin 1', role: 'owner' },
echo     { name: 'Moderator 1', role: 'moderator' },
echo     { name: 'Dev 1', role: 'developer' }
echo   ];
echo.
echo   return (
echo     ^<div className="container" style={{ padding: '80px 20px' }}^>
echo       ^<h2 style={{ textAlign: 'center', color: colors.text, fontSize: '2.5rem', marginBottom: 50 }}^>{t('team.title')}^</h2^>
echo       ^<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 30 }}^>
echo         {team.map((member, index) => (
echo           ^<motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} style={{ padding: 25, background: colors.card, border: `1px solid ${colors.border}`, borderRadius: 12, color: colors.text, textAlign: 'center' }}^>
echo             ^<div style={{ width: 80, height: 80, margin: '0 auto 15px', background: colors.secondary, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}^>👤^</div^>
echo             ^<h3^>{member.name}^</h3^>
echo             ^<p style={{ color: colors.accent }}^>{t(`team.${member.role}`)}^</p^>
echo           ^</motion.div^>
echo         ))}
echo       ^</div^>
echo     ^</div^>
echo   );
echo };
echo.
echo export default TeamSection;
) > src\components\TeamSection.jsx

:: Footer.jsx
(
echo import React from 'react';
echo import { useTheme } from '../context/ThemeContext';
echo import { useLanguage } from '../hooks/useLanguage';
echo.
echo const Footer = (^) => {
echo   const { colors } = useTheme(^);
echo   const { t } = useLanguage(^);
echo.
echo   return (
echo     ^<footer style={{ padding: '40px 20px', background: colors.primary, borderTop: `1px solid ${colors.border}`, color: colors.text, textAlign: 'center' }}^>
echo       ^<p^>{t('footer.madeBy')}^</p^>
echo       ^<p style={{ opacity: 0.7, marginTop: 10 }}^>^© 2024 Dark Light Server. {t('footer.rights')}.^</p^>
echo     ^</footer^>
echo   );
echo };
echo.
echo export default Footer;
) > src\components\Footer.jsx

:: ایجاد App.jsx
(
echo import React from 'react';
echo import { ThemeProvider, useTheme } from './context/ThemeContext';
echo import { useLanguage } from './hooks/useLanguage';
echo import BackgroundAnimation from './components/BackgroundAnimation';
echo import Navbar from './components/Navbar';
echo import NotificationBar from './components/NotificationBar';
echo import HeroSection from './components/Hero';
echo import Features from './components/Features';
echo import NewsSection from './components/NewsSection';
echo import TeamSection from './components/TeamSection';
echo import Footer from './components/Footer';
echo import './styles/globals.css';
echo.
echo const AppContent = (^) => {
echo   const { colors } = useTheme(^);
echo   const { language, switchLanguage, t } = useLanguage(^);
echo.
echo   return (
echo     ^<div style={{ color: colors.text, direction: language === 'fa' ? 'rtl' : 'ltr', minHeight: '100vh' }}^>
echo       ^<BackgroundAnimation /^>
echo       ^<Navbar /^>
echo       ^<NotificationBar /^>
echo       ^<main^>
echo         ^<section id="home"^>^<HeroSection /^>^</section^>
echo         ^<section id="features"^>^<Features /^>^</section^>
echo         ^<section id="news"^>^<NewsSection /^>^</section^>
echo         ^<section id="team"^>^<TeamSection /^>^</section^>
echo       ^</main^>
echo       ^<Footer /^>
echo     ^</div^>
echo   );
echo };
echo.
echo const App = (^) => {
echo   return (
echo     ^<ThemeProvider^>
echo       ^<AppContent /^>
echo     ^</ThemeProvider^>
echo   );
echo };
echo.
echo export default App;
) > src\App.jsx

:: ایجاد index.js
(
echo import React from 'react';
echo import ReactDOM from 'react-dom/client';
echo import App from './App';
echo.
echo const root = ReactDOM.createRoot(document.getElementById('root'));
echo root.render(
echo   ^<React.StrictMode^>
echo     ^<App /^>
echo   ^</React.StrictMode^>
echo );
) > src\index.js

echo [10/10] Project structure created successfully!
echo.
echo ============================================
echo   Installation Complete!
echo ============================================
echo.
echo Next steps:
echo   cd dark-light-server
echo   npm install
echo   npm start
echo.
echo Your Dark Light Server website will open at http://localhost:3000
echo ============================================
pause