import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useLanguageContext } from '../../context/LanguageContext';
import BackgroundAnimation from '../../components/BackgroundAnimation';

const RootPanel = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newName, setNewName] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { addUser, deleteUser, users } = useAuth();
  const { isDarkMode, colors } = useTheme();
  const { language } = useLanguageContext();

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUsername || !newPassword || !newName) {
      setMessage(language === 'fa' ? 'لطفاً همه فیلدها را پر کنید' : 'Please fill all fields');
      setMessageType('error');
      setTimeout(() => setMessage(''), 3000);
      return;
    }
    
    addUser({ username: newUsername, password: newPassword, name: newName });
    setMessage(language === 'fa' ? 'کاربر با موفقیت اضافه شد' : 'User added successfully');
    setMessageType('success');
    setNewUsername('');
    setNewPassword('');
    setNewName('');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDeleteUser = (userId) => {
    deleteUser(userId);
    setMessage(language === 'fa' ? 'کاربر حذف شد' : 'User deleted');
    setMessageType('success');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      style={{
        background: `${colors.card}ee`,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${colors.accent}40`,
        borderRadius: '20px',
        padding: '30px',
      }}
    >
      <h3 style={{ color: colors.accent, marginBottom: '20px' }}>
        🔐 {language === 'fa' ? 'پنل مدیریت کاربران (Super Admin)' : 'User Management Panel (Super Admin)'}
      </h3>

      <form onSubmit={handleAddUser} style={{ marginBottom: '30px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          marginBottom: '15px',
        }}>
          <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}
            placeholder={language === 'fa' ? 'نام کاربری جدید' : 'New Username'}
            style={{ padding: '12px 16px', background: colors.primary, border: `1px solid ${colors.border}`, borderRadius: '12px', color: colors.text, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit' }} />
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
            placeholder={language === 'fa' ? 'رمز عبور جدید' : 'New Password'}
            style={{ padding: '12px 16px', background: colors.primary, border: `1px solid ${colors.border}`, borderRadius: '12px', color: colors.text, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit' }} />
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}
            placeholder={language === 'fa' ? 'نام نمایشی' : 'Display Name'}
            style={{ padding: '12px 16px', background: colors.primary, border: `1px solid ${colors.border}`, borderRadius: '12px', color: colors.text, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit' }} />
        </div>
        <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
          style={{ padding: '12px 30px', background: colors.accent, border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'inherit' }}>
          ➕ {language === 'fa' ? 'افزودن کاربر' : 'Add User'}
        </motion.button>
      </form>

      {message && (
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{ padding: '12px 16px', borderRadius: '12px', background: messageType === 'success' ? 'rgba(76,175,80,0.15)' : 'rgba(255,68,68,0.15)', color: messageType === 'success' ? '#4CAF50' : '#ff4444', fontSize: '0.9rem', marginBottom: '20px', textAlign: 'center' }}>
          {messageType === 'success' ? '✅ ' : '❌ '}{message}
        </motion.p>
      )}

      <div>
        <h4 style={{ color: colors.text, marginBottom: '15px' }}>
          👥 {language === 'fa' ? 'لیست کاربران' : 'Users List'} ({users.length})
        </h4>
        {users.length === 0 ? (
          <p style={{ color: colors.textSecondary }}>{language === 'fa' ? 'هیچ کاربری وجود ندارد' : 'No users found'}</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {users.map((user) => (
              <div key={user.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', background: colors.primary, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                <div>
                  <p style={{ color: colors.text, fontWeight: 600, margin: 0, fontSize: '0.95rem' }}>{user.name}</p>
                  <p style={{ color: colors.textSecondary, fontSize: '0.8rem', margin: '3px 0 0', direction: 'ltr', textAlign: 'right' }}>@{user.username}</p>
                </div>
                {user.role !== 'root' && (
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    onClick={() => handleDeleteUser(user.id)}
                    style={{ padding: '8px 16px', background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.3)', borderRadius: '10px', color: '#ff4444', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'inherit' }}>
                    🗑️ {language === 'fa' ? 'حذف' : 'Delete'}
                  </motion.button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RootPanel;