import React, { useRef } from 'react';
import './Contact.css';
import walmart from '../assets/walmart.png';
import Adobe from '../assets/adobe.png';
import microsoft from '../assets/microsoft.png';
import facebook from '../assets/facebook.png';
import facebookIcon from '../assets/facebook-icon.png';
import twitterIcon from '../assets/twitter.png';
import youtubeIcon from '../assets/youtube.png';
import instagramIcon from '../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eao8akh', 'template_3iikr6k', form.current, {
      publicKey: 'XJ09A4rx9QhEZLdjE',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        e.target.reset();
        toast.success("Email sent!", { autoClose: 1000 });
      },
      (error) => {
        console.error('FAILED...', error);
        alert("Failed to send email. Please try again later.");
      }
    );
  };

  return (
    <section id='contactPage'>
      <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientsDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum soluta voluptatum similique 
        </p>
        <div className='clientsImgs'>
          <img src={walmart} alt="Walmart" className='clientImg' />
          <img src={Adobe} alt="Adobe" className='clientImg' />
          <img src={microsoft} alt="Microsoft" className='clientImg' />
          <img src={facebook} alt="Facebook" className='clientImg' />
        </div>
      </div>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form action="" className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className='name' placeholder="Your Name" name='your_name' required />
          <input type="email" className='email' placeholder="Your Email" name='your_email' required />
          <textarea name="message" className='msg' rows="5" placeholder='Your Message' required></textarea>
          <button className='submitBtn' type="submit">Submit</button>
          <div className='links'>
            <img src={facebookIcon} className='link' alt="Facebook" />
            <img src={twitterIcon} className='link' alt="Twitter" />
            <img src={youtubeIcon} className='link' alt="Youtube" />
            <img src={instagramIcon} className='link' alt="Instagram" />
          </div>
        </form>   
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
