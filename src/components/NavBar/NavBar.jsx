import  './NavBarStyle.css'

import { useState , useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { useTheme } from '../ThemeProvider';



const NavBar = ({ logo ,menu , Dark , Light , title2 , Menunav , esc }) => {
  const [first, setfirst] = useState(false)
  
  const theme = useTheme();
  console.log(theme);
  const { darkMode } = theme || {};
  const { toggleTheme } = theme || {};
  return (
    <nav className= {`  ${darkMode ? 'dark' : 'light'} `}>
      <div className='nav'>
      <h1 className='logo'>{logo}</h1>
      <ul className='ul-nav'> 
            {menu.map((element,index) =>{return(
                <li key={index}  > <NavLink  to={element.path} className={ `${darkMode ? 'dark' : 'light'} , ({ isActive}) =>
                isActive ? "active" : ""
              `}>{element.title}</NavLink></li>
            )})}
        </ul>
        <div className='right' >
          <img src={darkMode ? `${Light}`: `${Dark}`   } alt="" onClick={toggleTheme}/>
          <p>{darkMode ? 'Light Mode' : 'Dark Mode'  }</p>
        </div>
        <button className='menu-icon toggle-button'onClick={()=>{setfirst(!first)}}>
          <img src={Menunav} alt="" />
          
        
        <div className={`sidbar , ${darkMode ? 'dark' : 'light'} `} style={{display: (first)? "block" : "none"}}>
            <img src={esc} alt="" />
            <ul >
            {menu.map((element,index) =>{return(
                <li key={index}><NavLink to={element.path} className={ `${darkMode ? 'dark' : 'light'} , ({ isActive}) =>
                isActive ? "active" : ""
              `}>{element.title}</NavLink></li>
            )})}
            </ul>
            <div className='sid-buttom'>
              
            <p>{darkMode ? 'Light Mode' : 'Dark Mode'  }</p>
            <div className={` ${darkMode ? 'right-sidbar-start' : 'right-sidbar-end'}`}  onClick={toggleTheme}>
              <div className='circle'></div>
        </div>
            </div>
          </div>
          </button>
      </div>
        
    </nav>
  )
}

export default NavBar