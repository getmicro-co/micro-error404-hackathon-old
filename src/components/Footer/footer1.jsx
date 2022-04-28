import React  from "react";
import "./footer1.scss";
// import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {TOP_SECTION, FOOTER} from "../../Module/General";
import Media from "../media/media";



export default function Footer() {
  var year = new Date().getFullYear();

  return (
    
      <div className="footer">
      <div className="footer-container">

        
        <div className="about">
        <img src={TOP_SECTION.img} className="img" alt="" />
         <h1>Micro</h1>
         <hr />
         <div className="Desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Modi quos consequuntur maiores officiis deserunt ullam aperiam 
            culpa veritatis molestias, iure magni hic nisi. Ad libero soluta 
            deleniti nulla sunt nemo.

         </div>
        
        </div>

        <div className="Register_a">
            <h2>Navigate</h2>
            <ul>
              <li><a href="">Sponsors</a></li>
              <li><a href="">Resources</a></li>
              <li><a href="">Team</a></li>
              <li><a href="">Judge</a></li>
            </ul>
        </div>

        <div className="Register_a">
            <h2>For Users</h2>
            <ul>
              <li><a href="">Tracks</a></li>
              <li><a href="">Timeline</a></li>
              <li><a href="">Prizes</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
        </div>

        <div className="Register_a">
            <h2>Socials</h2>
            <ul className="socials-icon">
              <Media/>
              {/* {FOOTER.VOLUNTEERING_FORM.required && (
                <a href={FOOTER.VOLUNTEERING_FORM.src}>
                  <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
                </a>
              )} */}
            </ul>
        </div>
    
      </div>



        <div className="footer_info">
        <p>Copyright &#169;
              <em>{" "}{ year} {" "} </em>
              <a href="https://getmicro.co/">Micro </a>
              All Rights Reserved. 
          </p>

          
        </div>
        
      
      </div>
  );
}
