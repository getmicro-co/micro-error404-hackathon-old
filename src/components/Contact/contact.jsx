import React from 'react'
import Media from '../media/media';
import EmailIcon from '@mui/icons-material/Email'; 
import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import "./contact.css"

export default function Contact(){
  return (
        
      <div class="form">
        <div class="contact-info">
          <h1 class="title" style={{'color':'#f76e92'}}>Let's Get In Touch</h1>
          <p class="text">
            If you have any inquiries, requests, questions or even suggestions for Error404
            Hackathon. Feel free to reach out to us using this Contact form.
          </p>

          <div class="contactInfo">
            {/* <div class="information">
              <img src="https://www.pinclipart.com/picdir/middle/119-1196724_location-icon-svg-png-icon-free-download-map.png" class="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div> */}
            <div class="information">
                <EmailIcon className='icon'/> 
              <h4 >
              {/* <img src= "" class="icon" alt="" /> */}
                <a style={{'color':'#f76e92'}} href="mailto:404error@getmicro.co">404error@getmicro.co</a>
              </h4>
            </div>
            <div class="information">
              <CallIcon className='icon'/>
              {/* <img src= "https://img.icons8.com/color/48/000000/phone.png" */}
                  {/* // {phone}  */}
                  {/* class="icon" alt="" /> */}
              <h4 style={{'color':'#f76e92'}}>+91 8660626844</h4>
            </div>
            <div class="information">
              <LanguageIcon className='icon'/>
              {/* <img 
                  src="https://img.icons8.com/color/48/000000/domain--v1.png"
                  // {web} 
                  class="icon" alt="" /> */}
              <h4><a target="_blank" href="https://getmicro.co/" style={{'color':'#f76e92'}}>Micro</a></h4>
            </div>
          </div>

          <div class="social-media">
            <p style={{'color':'#fff'}}>Connect With Us</p>
                <Media/>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <div class="input-container">
              <input type="text" name="name" class="input" placeholder='Name' />
              
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" placeholder='Email' />
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" placeholder='Phone'/>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" placeholder='Message'></textarea>
            </div>
            {/* <input type="submit" value="Send" class="btn"> */}
            <button type="submit" className="btn">
              <a className='btn-a'  href="mailto:404error@getmicro.co">Send</a>
            </button>
            
          </form>
        </div>
      </div>
        
  )
}
