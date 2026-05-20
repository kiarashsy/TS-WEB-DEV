import React, { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();

export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  // Load from API on start
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

  const addNews = async (newsItem) => {
    const newItem = {
      ...newsItem,
      date: new Date().toISOString().split('T')[0],
      published: true,
    };

    // Save to API → db.json
    const res = await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    const savedItem = await res.json();
    
    // Update state
    setNews(prev => [savedItem, ...prev]);
  };

  const updateNews = async (id, updatedItem) => {
    await fetch(`/api/news/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    });
    
    // Reload from API
    const res = await fetch('/api/news?_sort=id&_order=desc');
    const data = await res.json();
    setNews(data);
  };

  const deleteNews = async (id) => {
    await fetch(`/api/news/${id}`, { method: 'DELETE' });
    setNews(prev => prev.filter(item => item.id !== id));
  };

  return (
    <NewsContext.Provider value={{ news, addNews, updateNews, deleteNews }}>
      {children}
    </NewsContext.Provider>
  );
};