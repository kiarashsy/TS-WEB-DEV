const API_URL = '/api';

export const api = {
  getNews: async () => {
    const res = await fetch(`${API_URL}/news?_sort=id&_order=desc`);
    return await res.json();
  },

  addNews: async (news) => {
    const res = await fetch(`${API_URL}/news`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(news),
    });
    return await res.json();
  },

  updateNews: async (id, news) => {
    const res = await fetch(`${API_URL}/news/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(news),
    });
    return await res.json();
  },

  deleteNews: async (id) => {
    await fetch(`${API_URL}/news/${id}`, { method: 'DELETE' });
  },

  getUsers: async () => {
    const res = await fetch(`${API_URL}/users`);
    return await res.json();
  },

  addUser: async (user) => {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  },

  deleteUser: async (id) => {
    await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
  },
};

export const translateText = async (text, from, to) => {
  if (!text) return '';
  const res = await fetch('https://libretranslate.de/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: text, source: from, target: to, format: 'text' }),
  });
  const data = await res.json();
  return data.translatedText || text;
};