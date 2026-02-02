import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <span className="theme-toggle-icon">
                {theme === 'light' ? '🌙' : '☀️'}
            </span>
            <span className="theme-toggle-label">
                {theme === 'light' ? 'Dark' : 'Light'}
            </span>
        </button>
    );
};

export default ThemeToggle;
