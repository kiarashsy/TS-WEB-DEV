import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
    
    return null;
    });
    const [users, setUsers] = useState([]);

  // لود کاربر از localStorage
  useEffect(() => {
    const saved = localStorage.getItem('dl-current-user');
    if (saved) setCurrentUser(JSON.parse(saved));
  }, []);

  // لود کاربران از API
  useEffect(() => {
    if (currentUser?.role === 'root') {
      api.getUsers().then(setUsers);
    }
  }, [currentUser]);

  const login = async (username, password) => {
    const allUsers = await api.getUsers();
    const user = allUsers.find(u => u.username === username && u.password === password);
    
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('dl-current-user', JSON.stringify(user));
      return { success: true, user };
    }
    return { success: false, message: 'نام کاربری یا رمز عبور اشتباه است' };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('dl-current-user');
  };

  const addUser = async (newUser) => {
    const added = await api.addUser({ ...newUser, role: 'admin' });
    setUsers([...users, added]);
    return { success: true };
  };

  const deleteUser = async (id) => {
    await api.deleteUser(id);
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <AuthContext.Provider value={{ currentUser, users, login, logout, addUser, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};