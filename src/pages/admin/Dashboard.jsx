import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useLanguageContext } from '../../context/LanguageContext';
import BackgroundAnimation from '../../components/BackgroundAnimation';
import RootPanel from './RootPanel';
import NewsManager from './NewsManager';
import { useNews } from '../../context/NewsContext';
import { api } from '../../services/api';

const Dashboard = ({ onBack }) => {
  const { currentUser, logout } = useAuth();
  const { isDarkMode, colors } = useTheme();
  const { t, language } = useLanguageContext();
  const { news } = useNews();
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    loadUsersCount();
  }, []);

  const loadUsersCount = async () => {
    try {
      const users = await api.getUsers();
      setUsersCount(users.length);
    } catch (error) {
      setUsersCount(0);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <BackgroundAnimation />

      <div style={{
        position: 'relative', zIndex: 1, minHeight: '100vh',
        padding: '100px 20px 40px', direction: 'rtl',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            style={{
              background: `${colors.card}ee`, backdropFilter: 'blur(20px)',
              border: `1px solid ${colors.border}`, borderRadius: '20px',
              padding: '25px 30px', marginBottom: '25px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              flexWrap: 'wrap', gap: '15px',
            }}>
            <div>
              <h2 style={{ color: colors.text, margin: 0, fontSize: '1.3rem' }}>
                👋 {language === 'fa' ? 'خوش آمدید' : 'Welcome'}, {currentUser?.name}
              </h2>
              <p style={{ color: colors.textSecondary, margin: '5px 0 0', fontSize: '0.9rem' }}>
                {currentUser?.role === 'root' ? '🔑 Super Admin' : '🛡️ Admin'}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => { logout(); onBack(); }}
                style={{
                  padding: '12px 25px', background: 'rgba(255,68,68,0.15)',
                  border: '1px solid rgba(255,68,68,0.3)', borderRadius: '12px',
                  color: '#ff4444', cursor: 'pointer', fontWeight: 600,
                  fontSize: '0.9rem', fontFamily: 'inherit',
                }}>
                🚪 {language === 'fa' ? 'خروج' : 'Logout'}
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '15px', marginBottom: '25px',
            }}>
            {[
              { label: language === 'fa' ? 'اخبار' : 'News', value: news.length, icon: '📰', color: '#2196F3' },
              { label: language === 'fa' ? 'کاربران' : 'Users', value: usersCount, icon: '👥', color: '#FF9800' },
              { label: language === 'fa' ? 'سرور' : 'Server', value: '🟢', icon: '🖥️', color: '#4CAF50' },
              { label: language === 'fa' ? 'پینگ' : 'Ping', value: '۲۳ms', icon: '📡', color: '#9C27B0' },
            ].map((stat, i) => (
              <div key={i} style={{
                background: `${colors.card}ee`, backdropFilter: 'blur(20px)',
                borderRadius: '14px', padding: '20px', textAlign: 'center',
                border: `1px solid ${colors.border}`,
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{stat.icon}</div>
                <p style={{ color: colors.textSecondary, fontSize: '0.85rem', marginBottom: '5px' }}>{stat.label}</p>
                <p style={{ color: stat.color, fontSize: '1.8rem', fontWeight: 700, margin: 0 }}>{stat.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Root Panel - فقط برای Super Admin */}
          {currentUser?.role === 'root' && <RootPanel />}
          
          {/* فاصله */}
          {currentUser?.role === 'root' && <div style={{ height: '25px' }} />}

          {/* News Manager - همه ادمین‌ها */}
          <NewsManager />

        </div>
      </div>
    </div>
  );
};

export default Dashboard;