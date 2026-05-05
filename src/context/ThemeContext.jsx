import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeColors = {
    dark: {
      primary: '#0a1929',
      secondary: '#1e3a5f',
      accent: '#2196f3',
      text: '#ffffff',
      textSecondary: '#b0bec5',
      card: '#132f4c',
      border: '#1e4976'
    },
    light: {
      primary: '#e3f2fd',
      secondary: '#bbdefb',
      accent: '#1976d2',
      text: '#0a1929',
      textSecondary: '#546e7a',
      card: '#ffffff',
      border: '#90caf9'
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme, 
      colors: isDarkMode ? themeColors.dark : themeColors.light 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);