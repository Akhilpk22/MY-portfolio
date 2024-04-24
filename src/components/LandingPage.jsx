import React from 'react'
import './LandingPage.css'
import bg from '../assets/image.png'
import {Link} from 'react-scroll'
import btnImg from '../assets/hireme.png'

const LandingPage = () => {
  return (
    <section id='landing' className=''>
        <div className='introContent'>
            <span className='hello '>Hello,</span>
            <span className='introtext'> I'm <span className='introName'>Akhil pk</span><br />Mern stack Developer</span>
            <p className="intropara">Lorem ipsum eveniet voluptatum fuga <br/>libero veniam officiis consequatur.</p>
            <Link> <button className='btn'><img  src={btnImg} className='btnImg' alt="" />Here Me</button></Link>
        </div>
        <img src={bg} className='bg' alt="" />
        
    </section>
  )
}

export default LandingPage