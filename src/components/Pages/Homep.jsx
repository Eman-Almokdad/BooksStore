import React, { createContext, useContext, useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import Hero from "../Hero/Hero.jsx"
import Books from '../Books/Books.jsx'
import Map from '../Map/Map.jsx'
import Footer from '../Footer/Footer.jsx'

import LogoDark from '../../assets/images/Logo-Dark.svg'
import LogoLight from '../../assets/images/Logo-Light.svg'
import Menunav from '../../assets/images/Menu.svg'
import Esc from '../../assets/images/esc.svg'
import imgHero from '../../assets/images/book.png'
import { ThemeProvider, useTheme } from '../ThemeProvider.jsx'

const Homep = () => {
  const theme = useTheme();
  const { darkMode } = theme || {};
    return (
      <ThemeProvider>
        <div className={`  ${darkMode ? 'dark' : 'light'} `} >
        
        
        <NavBar logo="B-World" menu={[ {title:"Home" , path: '/home'} ,{title:"News" , path: '/News'} ,{title:"Promotion of the mount " , path: '/Promotion of the mount'} ,{title:"Plublishs" , path: '/Plublishs'}, {title:"Subscribe to the newsletter" , path:"/Subscribe to the newsletter"}]} Dark={LogoDark}  Light={LogoLight} title2='Dark mode' Menunav={Menunav} esc={Esc}/>
        <Hero img={imgHero} title1="Eric-Emanuel Schmitt " title2='Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.' btn1='Author of august' btn2='View his boooks' path='Home'/>
        <Books />
        <Map/>
        <Footer/>
        
        
        </div>
        </ThemeProvider>
    )
}

export default Homep