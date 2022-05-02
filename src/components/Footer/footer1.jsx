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
         <h1>Micro.</h1>
         <hr />
         <div className="Desc">
         Making Investments Easy For Everyone. 
         Investors with as little as Rs 1000/- 
         can also invest and reap its benefits.

         </div>
        
        </div>

        <div className="Register_a">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="">Registration</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
              <li><a href="">Call for Mentors</a></li>
              <li><a href="https://workdrive.zohoexternal.com/folder/a807i5b3f66b94b324338934a8ba76c55c84a?layout=list">Resources</a></li>
            </ul>
        </div>

        <div className="Register_a">
            <h2>For Users</h2>
            <ul>
              <li><a href="#tracks">Tracks</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#prizes">Prizes</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
        </div>

        <div className="Register_a">
            <h2>Socialize</h2>
            {/* <ul className="socials-icon"> */}
              {/* {FOOTER.VOLUNTEERING_FORM.required && (
                <a href={FOOTER.VOLUNTEERING_FORM.src}>
                  <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
                </a>
              )} */}
            {/* </ul> */}
              <Media/>
              <div className="tagline">
                <h5>Building a community of Technology Enthusiasts</h5>
              </div>
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
