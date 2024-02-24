import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo_black.png'
import logo_dark from '../../assets/logo_white.png'
import toggle_light from "../../assets/night.png"
import toggle_dark from "../../assets/day.png"
import { NavLink as Link } from 'react-router-dom'

const Navbar = ({theme,setTheme}) => {

const toggle_mode = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
}

  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logo_light : logo_light} alt="" className='logo'/>
        <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/speechToText">Speech to text</Link>
            </li>
            <li>
              <Link to="/IOT">IOT</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
        </ul>

      <img src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'  onClick={()=>{toggle_mode()}}/>
    </div>
  )
}

export default Navbar
