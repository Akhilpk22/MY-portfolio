import React, { useState } from 'react'
import './NavBar.css'
import logo from '../assets/logo.jpeg'
import contact from '../assets/contact.png'
import {Link} from 'react-scroll'
import Menu from '../assets/menu.png';



const NavBar = () => {

  const [showMenu,setshowMenu] = useState(false)

  return (
    <nav className='navbar'>
      <img src={logo} alt="" className='logo' />
        <div className='desktopMenu'> 
          <Link activeClass='active' to='landing' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Protfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</Link>

        </div>
        <button className="desktopMenuBtn"  onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'})
        }} >
          <img src={contact} alt="" className='desktopMenuImg' />Contact me
        </button>
        <img src={Menu} alt="Menu" className='mobMenu'  onClick={()=>setshowMenu(!showMenu)} />
        <div className='navMenu' style={{display:showMenu? 'flex':'none'}}> 
          <Link activeClass='active' to='landing' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setshowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setshowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setshowMenu(false)}>Protfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setshowMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>setshowMenu(false)}>contact</Link>

        </div>
    </nav>
  )
}

export default NavBar