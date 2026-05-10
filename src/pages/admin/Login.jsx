import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useLanguageContext } from '../../context/LanguageContext';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { isDarkMode, colors } = useTheme();
  const { t, language } = useLanguageContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const result = login(username, password);
      if (!result.success) {
        setError(result.message);
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* بک‌گراند مثل سایت اصلی */}
      <BackgroundAnimation />

      <div style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        direction: 'rtl',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `${colors.card}ee`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.border}`,
            borderRadius: '24px',
            padding: '40px 35px',
            maxWidth: '420px',
            width: '100%',
            boxShadow: `0 20px 60px ${isDarkMode ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'}`,
          }}
        >
          {/* Icon */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{
              width: '70px',
              height: '70px',
              background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent}cc)`,
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 15px',
            }}>
              🔒
            </div>
            <h2 style={{ color: colors.text, fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
              {language === 'fa' ? 'ورود به پنل مدیریت' : 'Admin Panel Login'}
            </h2>
            <p style={{ color: colors.textSecondary, fontSize: '0.9rem', marginTop: '8px' }}>
              {language === 'fa' ? 'لطفاً اطلاعات کاربری خود را وارد کنید' : 'Please enter your credentials'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                color: colors.text,
                marginBottom: '8px',
                fontSize: '0.9rem',
                fontWeight: 500,
              }}>
                {language === 'fa' ? 'نام کاربری' : 'Username'}
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={language === 'fa' ? 'نام کاربری خود را وارد کنید' : 'Enter username'}
                required
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  background: colors.primary,
                  border: `2px solid ${error ? '#ff4444' : colors.border}`,
                  borderRadius: '14px',
                  color: colors.text,
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
                  direction: 'ltr',
                  textAlign: 'left',
                }}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                color: colors.text,
                marginBottom: '8px',
                fontSize: '0.9rem',
                fontWeight: 500,
              }}>
                {language === 'fa' ? 'رمز عبور' : 'Password'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  background: colors.primary,
                  border: `2px solid ${error ? '#ff4444' : colors.border}`,
                  borderRadius: '14px',
                  color: colors.text,
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  fontFamily: 'inherit',
                  direction: 'ltr',
                  textAlign: 'left',
                }}
              />
            </div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  color: '#ff4444',
                  fontSize: '0.85rem',
                  marginBottom: '15px',
                  textAlign: 'center',
                  background: 'rgba(255,68,68,0.1)',
                  padding: '10px',
                  borderRadius: '10px',
                }}
              >
                ❌ {error}
              </motion.p>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '15px',
                background: `linear-gradient(135deg, ${colors.accent}, ${colors.accent}cc)`,
                border: 'none',
                borderRadius: '14px',
                color: '#fff',
                fontSize: '1.05rem',
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                transition: 'all 0.2s ease',
                fontFamily: 'inherit',
              }}
            >
              {loading ? '⏳' : language === 'fa' ? 'ورود به پنل' : 'Login'}
            </motion.button>
          </form>

          {/* Default Credentials */}
          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: colors.primary,
            borderRadius: '12px',
            border: `1px solid ${colors.border}`,
          }}>
            <p style={{
              color: colors.textSecondary,
              fontSize: '0.75rem',
              textAlign: 'center',
              margin: '0 0 5px 0',
            }}>
              {language === 'fa' ? 'اطلاعات پیش‌فرض:' : 'Default credentials:'}
            </p>
            <p style={{
              color: colors.accent,
              fontSize: '0.8rem',
              textAlign: 'center',
              margin: 0,
              fontFamily: 'monospace',
              direction: 'ltr',
            }}>
              root / darklight2024
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;