import { useTheme } from "../ThemeProvider";
import "./HeroStyle.css";

const Hero = ({img , title1 ,title2 , btn1 , btn2 , path}) => {
  const theme = useTheme();
  const { darkMode } = theme || {};
  return (
    <div id="hero" className= {`  ${darkMode ? 'dark' : 'light'}  `}  >
      <div className= "left">
        <button className="btn1-hero">{btn1}</button>
        <h1 className="h1-hero">{title1}</h1>
        <p>{title2}</p>
        <button className="btn2-hero">{btn2}</button>
      </div>
      <div className="right">
        <img src={img} alt="" className="img-hero"/>
      </div>
        
    </div>
  )
}

export default Hero