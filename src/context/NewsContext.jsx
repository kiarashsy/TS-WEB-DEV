import React, { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error('useNews must be used within NewsProvider');
  return context;
};

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  // لود از API
  useEffect(() => {
    fetch('/api/news?_sort=id&_order=desc')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setNews(data);
        }
      })
      .catch(() => {});
  }, []);

  const addNews = (newsItem) => {
    const newItem = { ...newsItem, id: Date.now(), date: new Date().toISOString().split('T')[0], published: true };
    
    fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    }).catch(() => {});

    setNews(prev => [newItem, ...prev]);
    return newItem;
  };

  const updateNews = (id, updatedItem) => {
    fetch(`/api/news/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    }).catch(() => {});
    
    setNews(prev => prev.map(item => item.id === id ? { ...item, ...updatedItem } : item));
  };

  const deleteNews = (id) => {
    fetch(`/api/news/${id}`, { method: 'DELETE' }).catch(() => {});
    setNews(prev => prev.filter(item => item.id !== id));
  };

  return (
    <NewsContext.Provider value={{ news, addNews, updateNews, deleteNews }}>
      {children}
    </NewsContext.Provider>
  );
};