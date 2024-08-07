import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('theme');
    const [darkMode, setDarkMode] = useState(storedTheme === 'dark');
    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);
    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);