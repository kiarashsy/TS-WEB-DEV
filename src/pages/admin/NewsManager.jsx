import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLanguageContext } from '../../context/LanguageContext';
import { useNews } from '../../context/NewsContext';

const NewsManager = () => {
  const { news, addNews, updateNews, deleteNews } = useNews();
  const [title, setTitle] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [content, setContent] = useState('');
  const [contentEn, setContentEn] = useState('');
  const [category, setCategory] = useState('general');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  
  const { colors } = useTheme();
  const { language } = useLanguageContext();

  const resetForm = () => {
    setTitle('');
    setTitleEn('');
    setContent('');
    setContentEn('');
    setCategory('general');
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !content) {
      setMessage(language === 'fa' ? 'عنوان و محتوا الزامی است' : 'Title and content are required');
      setMessageType('error');
      setTimeout(() => setMessage(''), 3000);
      return;
    }

    const newsData = { title, titleEn: titleEn || title, content, contentEn: contentEn || content, category };

    if (editingId) {
      updateNews(editingId, newsData);
      setMessage(language === 'fa' ? 'خبر بروزرسانی شد' : 'News updated');
    } else {
      addNews(newsData);
      setMessage(language === 'fa' ? 'خبر منتشر شد' : 'News published');
    }
    
    setMessageType('success');
    resetForm();
    setTimeout(() => setMessage(''), 3000);
  };

  const handleEdit = (item) => {
    setTitle(item.title);
    setTitleEn(item.titleEn || '');
    setContent(item.content);
    setContentEn(item.contentEn || '');
    setCategory(item.category || 'general');
    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    deleteNews(id);
    setMessage(language === 'fa' ? 'خبر حذف شد' : 'News deleted');
    setMessageType('success');
    setTimeout(() => setMessage(''), 3000);
  };

  const categories = [
    { value: 'general', label: language === 'fa' ? 'عمومی' : 'General', icon: '📋', color: '#2196F3' },
    { value: 'tournament', label: language === 'fa' ? 'تورنمنت' : 'Tournament', icon: '🏆', color: '#FF9800' },
    { value: 'update', label: language === 'fa' ? 'بروزرسانی' : 'Update', icon: '🔄', color: '#4CAF50' },
    { value: 'event', label: language === 'fa' ? 'رویداد' : 'Event', icon: '🎉', color: '#9C27B0' },
    { value: 'team', label: language === 'fa' ? 'تیم' : 'Team', icon: '👥', color: '#E91E63' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: `${colors.card}ee`,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${colors.border}`,
        borderRadius: '20px',
        padding: '30px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.8rem' }}>📰</span>
          <h3 style={{ color: colors.text, margin: 0, fontSize: '1.3rem', fontWeight: 700 }}>
            {language === 'fa' ? 'مدیریت اخبار' : 'News Manager'}
          </h3>
          <span style={{ color: colors.textSecondary, fontSize: '0.85rem' }}>({news.length})</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          onClick={() => { resetForm(); setShowForm(!showForm); }}
          style={{
            padding: '12px 24px',
            background: showForm ? 'rgba(255,68,68,0.15)' : colors.accent,
            border: `1px solid ${showForm ? 'rgba(255,68,68,0.3)' : colors.accent}`,
            borderRadius: '12px', color: showForm ? '#ff4444' : '#fff',
            cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'inherit',
          }}>
          {showForm ? '✕ ' : '➕ '}
          {showForm ? (language === 'fa' ? 'انصراف' : 'Cancel') : (language === 'fa' ? 'خبر جدید' : 'New News')}
        </motion.button>
      </div>

      {message && (
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '12px 16px', borderRadius: '12px',
            background: messageType === 'success' ? 'rgba(76,175,80,0.15)' : 'rgba(255,68,68,0.15)',
            color: messageType === 'success' ? '#4CAF50' : '#ff4444',
            fontSize: '0.9rem', marginBottom: '20px', textAlign: 'center',
          }}>
          {messageType === 'success' ? '✅ ' : '❌ '}{message}
        </motion.p>
      )}

      <AnimatePresence>
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }} onSubmit={handleSubmit}
            style={{
              background: colors.primary, borderRadius: '16px', padding: '25px',
              marginBottom: '25px', border: `1px solid ${colors.border}`, overflow: 'hidden',
            }}>
            <h4 style={{ color: colors.text, marginBottom: '20px' }}>
              {editingId ? '✏️ ' : '📝 '}
              {editingId ? (language === 'fa' ? 'ویرایش خبر' : 'Edit News') : (language === 'fa' ? 'خبر جدید' : 'New News')}
            </h4>

            <div style={{ display: 'grid', gap: '15px', marginBottom: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                  placeholder={language === 'fa' ? 'عنوان فارسی *' : 'Persian Title *'}
                  style={{ padding: '12px 16px', background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '12px', color: colors.text, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit' }} />
                <input type="text" value={titleEn} onChange={(e) => setTitleEn(e.target.value)}
                  placeholder={language === 'fa' ? 'عنوان انگلیسی' : 'English Title'}
                  style={{ padding: '12px 16px', background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '12px', color: colors.text, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}
                  placeholder={language === 'fa' ? 'متن فارسی *' : 'Persian Content *'} rows="3"
                  style={{ padding: '12px 16px', background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '12px', color: colors.text, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }} />
                <textarea value={contentEn} onChange={(e) => setContentEn(e.target.value)}
                  placeholder={language === 'fa' ? 'متن انگلیسی' : 'English Content'} rows="3"
                  style={{ padding: '12px 16px', background: colors.card, border: `1px solid ${colors.border}`, borderRadius: '12px', color: colors.text, fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }} />
              </div>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {categories.map((cat) => (
                  <motion.button key={cat.value} type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    onClick={() => setCategory(cat.value)}
                    style={{
                      padding: '8px 16px',
                      background: category === cat.value ? `${cat.color}20` : colors.card,
                      border: `2px solid ${category === cat.value ? cat.color : colors.border}`,
                      borderRadius: '10px', color: category === cat.value ? cat.color : colors.textSecondary,
                      cursor: 'pointer', fontWeight: 500, fontSize: '0.85rem', fontFamily: 'inherit',
                    }}>
                    {cat.icon} {cat.label}
                  </motion.button>
                ))}
              </div>
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              style={{ padding: '12px 30px', background: colors.accent, border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'inherit' }}>
              {editingId ? '✅ ' : '📤 '}
              {editingId ? (language === 'fa' ? 'بروزرسانی' : 'Update') : (language === 'fa' ? 'انتشار' : 'Publish')}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {news.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: colors.textSecondary }}>
            <span style={{ fontSize: '3rem' }}>📭</span>
            <p>{language === 'fa' ? 'هیچ خبری وجود ندارد' : 'No news found'}</p>
          </div>
        ) : (
          news.map((item) => {
            const cat = categories.find(c => c.value === item.category) || categories[0];
            return (
              <motion.div key={item.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                style={{ background: colors.primary, borderRadius: '14px', padding: '18px', border: `1px solid ${colors.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '15px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{ padding: '4px 10px', background: `${cat.color}20`, color: cat.color, borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600 }}>
                        {cat.icon} {cat.label}
                      </span>
                      <span style={{ color: colors.textSecondary, fontSize: '0.75rem' }}>📅 {item.date}</span>
                    </div>
                    <h4 style={{ color: colors.text, margin: '0 0 5px 0', fontSize: '1rem' }}>{item.title}</h4>
                    <p style={{ color: colors.textSecondary, fontSize: '0.85rem', margin: 0 }}>{item.content?.substring(0, 100)}...</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleEdit(item)}
                      style={{ padding: '8px 14px', background: 'rgba(33,150,243,0.1)', border: '1px solid rgba(33,150,243,0.3)', borderRadius: '10px', color: '#2196F3', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'inherit' }}>✏️</motion.button>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleDelete(item.id)}
                      style={{ padding: '8px 14px', background: 'rgba(255,68,68,0.1)', border: '1px solid rgba(255,68,68,0.3)', borderRadius: '10px', color: '#ff4444', cursor: 'pointer', fontSize: '0.85rem', fontFamily: 'inherit' }}>🗑️</motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};

export default NewsManager;