import React, { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error('useNews must be used within NewsProvider');
  return context;
};

const DEFAULT_NEWS = [];

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState(DEFAULT_NEWS);

  // لود از API موقع شروع
  useEffect(() => {
    fetch('http://localhost:3001/news?_sort=id&_order=desc')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setNews(data);
          localStorage.setItem('dl-news', JSON.stringify(data));
        } else {
          // از localStorage بخون
          const saved = localStorage.getItem('dl-news');
          if (saved) setNews(JSON.parse(saved));
        }
      })
      .catch(() => {
        // API نیست - localStorage
        const saved = localStorage.getItem('dl-news');
        if (saved) setNews(JSON.parse(saved));
      });
  }, []);

  // ذخیره توی localStorage
  useEffect(() => {
    if (news.length > 0) {
      localStorage.setItem('dl-news', JSON.stringify(news));
    }
  }, [news]);

  const addNews = (newsItem) => {
    const newItem = { ...newsItem, id: Date.now(), date: new Date().toISOString().split('T')[0], published: true };
    
    // ذخیره توی API
    fetch('http://localhost:3001/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    }).catch(() => {});

    setNews(prev => [newItem, ...prev]);
    return newItem;
  };

  const updateNews = (id, updatedItem) => {
    fetch(`http://localhost:3001/news/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    }).catch(() => {});
    
    setNews(prev => prev.map(item => item.id === id ? { ...item, ...updatedItem } : item));
  };

  const deleteNews = (id) => {
    fetch(`http://localhost:3001/news/${id}`, { method: 'DELETE' }).catch(() => {});
    setNews(prev => prev.filter(item => item.id !== id));
  };

  return (
    <NewsContext.Provider value={{ news, addNews, updateNews, deleteNews }}>
      {children}
    </NewsContext.Provider>
  );
};