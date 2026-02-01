// src/contexts/ThemeContext.jsx
import React, { useState, useEffect, createContext, useContext } from 'react';
import styles from '../assets/css/ThemeToggle.module.css';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // The state should hold a string, not a CSS module class name
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        // Toggle between the simple 'light' and 'dark' strings
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        // Use the simple string to determine which CSS module class to apply
        document.body.className = theme === 'dark' ? styles['dark-mode'] : styles['light-mode'];
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};  

export const useTheme = () => useContext(ThemeContext);