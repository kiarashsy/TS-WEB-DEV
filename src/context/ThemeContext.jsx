import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  const themeColors = {
    dark: {
      primary: '#0a1929',
      secondary: '#1e3a5f',
      accent: '#2196f3',
      text: '#ffffff',
      textSecondary: '#b0bec5',
      card: '#132f4c',
      border: '#1e4976',
      success: '#4caf50',
      error: '#f44336',
      warning: '#ff9800'
    },
    light: {
      primary: '#e3f2fd',
      secondary: '#bbdefb',
      accent: '#1976d2',
      text: '#0a1929',
      textSecondary: '#546e7a',
      card: '#ffffff',
      border: '#90caf9',
      success: '#388e3c',
      error: '#d32f2f',
      warning: '#f57c00'
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme, 
      theme, 
      colors: themeColors[theme] 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);