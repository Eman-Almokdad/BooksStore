import React from 'react'
import './Footer.css'
import { useTheme } from '../ThemeProvider';

const Footer = () => {
  const theme = useTheme();
console.log(theme);
const { darkMode } = theme || {};
  return (
    <div className={`Footer , ${darkMode ? 'dark' : 'light'}`}>
        <p>© All copyrights are reserved. B-World 2022. </p>
    </div>
  )
}

export default Footer