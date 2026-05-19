import React, { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error('useNews must be used within NewsProvider');
  return context;
};

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  const loadNews = async () => {
    try {
      const res = await fetch('/api/news?_sort=id&_order=desc');
      const data = await res.json();
      if (Array.isArray(data)) setNews(data);
    } catch (e) {
      console.error('Failed to load news:', e);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const addNews = async (newsItem) => {
    const newItem = { ...newsItem, date: new Date().toISOString().split('T')[0], published: true };
    await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    await loadNews();
  };

  const updateNews = async (id, updatedItem) => {
    await fetch(`/api/news/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    });
    await loadNews();
  };

  const deleteNews = async (id) => {
    await fetch(`/api/news/${id}`, { method: 'DELETE' });
    await loadNews();
  };

  return (
    <NewsContext.Provider value={{ news, addNews, updateNews, deleteNews }}>
      {children}
    </NewsContext.Provider>
  );
};