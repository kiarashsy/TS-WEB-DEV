import React, { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();
export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  const loadNews = () => {
    fetch('/api/news?_sort=id&_order=desc')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(() => {});
  };

  useEffect(() => { loadNews(); }, []);

  const addNews = async (newsItem) => {
    await fetch('/api/news', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newsItem, date: new Date().toISOString().split('T')[0], published: true }),
    });
    loadNews();
  };

  const updateNews = async (id, updatedItem) => {
    await fetch(`/api/news/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    });
    loadNews();
  };

  const deleteNews = async (id) => {
    await fetch(`/api/news/${id}`, { method: 'DELETE' });
    loadNews();
  };

  return (
    <NewsContext.Provider value={{ news, addNews, updateNews, deleteNews }}>
      {children}
    </NewsContext.Provider>
  );
};