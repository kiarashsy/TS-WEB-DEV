import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  // لود کاربر از sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem('dl-current-user');
    if (saved) setCurrentUser(JSON.parse(saved));
  }, []);

  // لود کاربران از API
  const loadUsers = async () => {
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    } catch (e) {
      console.log('Load users failed');
    }
  };

  useEffect(() => {
    if (currentUser?.role === 'root') {
      loadUsers();
    }
  }, [currentUser]);

  const login = async (username, password) => {
    try {
      const res = await fetch('/api/users');
      const allUsers = await res.json();
      const user = allUsers.find(u => u.username.trim() === username.trim() && u.password === password);
      
      if (user) {
        setCurrentUser(user);
        sessionStorage.setItem('dl-current-user', JSON.stringify(user));
        return { success: true, user };
      }
      return { success: false, message: 'نام کاربری یا رمز عبور اشتباه است' };
    } catch (e) {
      return { success: false, message: 'خطا در اتصال به سرور' };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('dl-current-user');
  };

  const addUser = async (newUser) => {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newUser, role: 'admin' }),
    });
    const added = await res.json();
    setUsers(prev => [...prev, added]);
    return { success: true };
  };

  const deleteUser = async (id) => {
    await fetch(`/api/users/${id}`, { method: 'DELETE' });
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <AuthContext.Provider value={{ currentUser, users, login, logout, addUser, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};