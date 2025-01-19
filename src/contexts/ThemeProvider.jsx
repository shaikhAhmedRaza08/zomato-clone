import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Get theme from localStorage or default to 'light'
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme); // Set theme on body
        localStorage.setItem('theme', theme); // Save theme to localStorage
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light')); // Set the theme based on previous value
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


ThemeProvider.prototype = {
    children: PropTypes.node.isRequired
}


export default ThemeProvider;