import React, {useState, useEffect, useRef} from "react";
import HomePage from "../Main-page/HomePage";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import {TOP_SECTION,Navbar} from "../../Module/General";
import MenuIcon from '@mui/icons-material/Menu';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import "./styles.scss";
import participants from "./participant.png";
import mentor from "./mentor.png";
import sponsor from "./sponsor.jpg";
import MentorGuide from "./Error 404 Mentor's Guide.pdf";
import SponsorGuide from "./Error 404 Sponsor's Guide.pdf";
import ParticipantGuide from "./Error 404 Participant's Guide.pdf";



const Wrapper = styled.div`
  display: flex;
  width:100%; 
  ${'' /* justify-content: space-between; */}
  ${'' /* padding-top: 10px; */}

  .Volunteer{
    margin: -10px 0 0  100px;
    background-color: #db4979;
    width: 15rem;
    height: 5.5rem;
  }

  ${'' /* @media (max-width: 470px) {
    margin: 0;
    display: ${props => (props.toggle ? "none" : "static")};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? "-1000px" : "0px")};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
    }
  } */}
`;

function Popup(props) {
    return (props.trigger) ? 
    (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn">Close</button>
          {props.children}
        </div>
      </div>
    ) : "";

}

const NAVBAR = ({}) => {

  const [toggle, setToggle] = useState(true);

  const [color, setColor] = useState("#121930");

  const navigation = useRef();

  const handleClick=() =>{
    console.log(toggle);
    setToggle(!toggle);
  }

  const listenScrollEvent = e => {
    if (window.scrollY > 750) {
      setColor("#121930");
    } else {
      setColor("#121930");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    console.log(navigation);
  }, []);

  // const handleOutsideClick = (event, ref) => {
  //   if (!ref.current.contains(event.target)) {
  //     setToggle(true);
  //   } else {
  //     setToggle(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", e =>
  //     handleOutsideClick(e, navigation)
  //   );

  //   return () => {
  //     document.removeEventListener("mousedown", e =>
  //       handleOutsideClick(e, navigation)
  //     );
  //   };
  // }, []);

  return (
    <Router>
      
      <nav className="nav_bar" style={{backgroundColor: color}}>
        <Wrapper toggle={toggle}>
          <img href="/" className="nav-error404" src={TOP_SECTION.img} alt="" />
          <div 
                className="nav-content" 
              ref={navigation}>
            <ul  className={toggle? "nav-content" : "nav-menu active"} >
              {Navbar.map((item,index)=>{
                  return (
                    <li id={index}>
                    <a href={item.url}>
                      <span className={item.class}>{item.title}</span>{" "}
                    </a>
                      {item.dropdown && 
                        ( <ul className="nav_submenu">
                            <li className="nav-submenu-item">
                              <img src={participants} className="resource-icons"/>
                              <a href={ParticipantGuide} download="Error 404 Participant's Guide.pdf">Participants</a>
                            </li>
                            <li className="nav-submenu-item">
                              <img src={mentor} className="resource-icons"/>
                              <a href={MentorGuide} download="Error 404 Mentor's Guide.pdf">Mentors</a>
                            </li>
                            <li className="nav-submenu-item">
                              <img src={sponsor} className="resource-icons"/>
                              <a href={SponsorGuide} download="Error 404 Sponsor's Guide.pdf">Sponsors</a>
                            </li>
                          </ul>  
                        )}
                  </li>)

              })}
                         
            </ul>
          </div>
        </Wrapper>

        <div className="toggle-div" onClick={handleClick}>
            
            {toggle? <MenuIcon  className="toggler"/>
             : <CloseIcon className="toggler"/>
            }  
        </div>

      </nav>  
     
     






      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};


export default NAVBAR;

