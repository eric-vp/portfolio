import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle({darkMode, toggleDarkMode}) {
    return (
        <button
            onClick={toggleDarkMode}
            style={{
                position: 'fixed',
                top: '1rem',
                left: '1rem',
                zIndex: 1000,
                backgroundColor: 'transparent',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'all 1s ease'
            }}
        >
            {darkMode ? <FaSun size={36} style={{ color: 'var(--main-color)' }} /> : <FaMoon size={36} style={{ color: 'var(--main-color)' }} />}
        </button>
    );
}