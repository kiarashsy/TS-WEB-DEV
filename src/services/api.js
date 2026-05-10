const API_URL = 'http://localhost:3001';

export const api = {
  getNews: async () => {
    try {
      const res = await fetch(`${API_URL}/news?_sort=id&_order=desc`);
      if (!res.ok) throw new Error('API not available');
      return await res.json();
    } catch (error) {
      console.log('API not available, using localStorage');
      const saved = localStorage.getItem('dl-news');
      return saved ? JSON.parse(saved) : [];
    }
  },

  addNews: async (news) => {
    try {
      const res = await fetch(`${API_URL}/news`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(news),
      });
      if (!res.ok) throw new Error('API not available');
      return await res.json();
    } catch (error) {
      // Fallback: برگردوندن داده محلی
      return { ...news, id: Date.now() };
    }
  },

  updateNews: async (id, news) => {
    try {
      const res = await fetch(`${API_URL}/news/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(news),
      });
      if (!res.ok) throw new Error('API not available');
      return await res.json();
    } catch (error) {
      return { ...news, id };
    }
  },

  deleteNews: async (id) => {
    try {
      await fetch(`${API_URL}/news/${id}`, { method: 'DELETE' });
      return true;
    } catch (error) {
      return true;
    }
  },

  getUsers: async () => {
    try {
      const res = await fetch(`${API_URL}/users`);
      if (!res.ok) throw new Error('API not available');
      return await res.json();
    } catch (error) {
      const saved = localStorage.getItem('dl-users');
      return saved ? JSON.parse(saved) : [];
    }
  },

  addUser: async (user) => {
    try {
      const res = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (!res.ok) throw new Error('API not available');
      return await res.json();
    } catch (error) {
      return { ...user, id: Date.now() };
    }
  },

  deleteUser: async (id) => {
    try {
      await fetch(`${API_URL}/users/${id}`, { method: 'DELETE' });
      return true;
    } catch (error) {
      return true;
    }
  },
};