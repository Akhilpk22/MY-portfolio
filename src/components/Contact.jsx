import React from 'react'
import './Contact.css';
import walmart from '../assets/walmart.png';
import Adobe from '../assets/adobe.png';
import microsoft from '../assets/microsoft.png';
import facebook from '../assets/facebook.png';
import facebookIcon from '../assets/facebook-icon.png';
import twitterIcon from '../assets/twitter.png';
import youtubeIcon from '../assets/youtube.png';
import instagramIcon from '../assets/instagram.png'


const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientsDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta voluptatum similique 
            </p>
            <div className='clientsImgs'>
                <img src={walmart} alt="walmart" className='clientImg' />
                <img src={Adobe} alt="Adobe" className='clientImg' />
                <img src={microsoft} alt="microsoft" className='clientImg' />
                <img src={facebook} alt="facebook" className='clientImg' />
            </div>
        </div>
        <div id='contact'>
             <h1 className='contactPageTitle'>Contact Me</h1>
             <span className='contactDesc'>Please fill out the form velow discuss any work opportunities</span>
             <form action="" className='contactForm'>
                <input type="text" className='name' placeholder="your Name" />
                <input type="email" className='email' placeholder="your Email" />
                <textarea name="Massage" className='msg' rows="5" placeholder='your Massage'></textarea>
                <button className='submitBtn' type="submit" value="send">Submit</button>
                <div className='links'>
                    <img src={facebookIcon} className='link' alt="" />
                    <img src={twitterIcon} className='link' alt="" />
                    <img src={youtubeIcon} className='link' alt="" />
                    <img src={instagramIcon} className='link' alt="" />


                </div>
             </form>   
        </div>
    </section>
  )
}

export default Contact