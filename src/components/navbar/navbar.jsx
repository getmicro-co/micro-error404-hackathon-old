import React, {useState, useEffect, useRef} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink as Link } from 'react-router-hash-link';
import {TOP_SECTION,} from "../../Module/General";
// import {Btn} from "../Top-division-components/Top-division-components";
import styled from "styled-components";
// import toggler from "../toggle-button/toggle";

import "./styles.scss";

const Wrapper = styled.div`
  display: flex;
  width:100%;
  ${'' /* justify-content: space-between; */}
  margin-top: 20px;

  .Volunteer{
    margin: -10px 0 0  100px;
    background-color: #db4979;
    width: 15rem;
    height: 5.5rem;
  }

  @media (max-width: 470px) {
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
  }
`;




const Navbar = () => {


  const [showMediaIcons, setShowMediaIcons] = useState(false);
  
  
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("#121930");

  const navigation = useRef();

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

  const handleOutsideClick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", e =>
      handleOutsideClick(e, navigation)
    );

    return () => {
      document.removeEventListener("mousedown", e =>
        handleOutsideClick(e, navigation)
      );
    };
  }, []);
  
  
  return (
    <>
       <nav className="nav_bar" style={{backgroundColor: color}}>
        <Wrapper toggle={toggle}>
          <img className="nav-error404" src={TOP_SECTION.img} alt="" />
          <div 
                className="nav-content"
               ref={navigation}>
            <ul>
              <li>
                <Link to={`#home`}>
                  <span className="links">Home </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#about`}>
                  <span className="links">About</span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#tracks`}>
                  <span className="links">Tracks</span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#timeline`}>
                  <span className="links">Timeline</span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#prizes`}>
                  <span className="links">Prizes </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`}>
                  <span className="links">Sponsors </span>{" "}
                </Link>
              </li>
              <li>
                <a href="https://workdrive.zoho.com/folder/a807i5b3f66b94b324338934a8ba76c55c84a">

                  <span className="links">Resources </span>{" "}
                </a>
          
              </li>
              <li>
                <Link to={`#team`}>
                  <span className="links">Team </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#faq`}>
                  <span className="links">FAQ </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#contact`}>
                  <span className="links">Contact </span>{" "}
                </Link>
              </li>
             
           
            </ul>
          </div>
        </Wrapper>

      </nav>  


    </>
  );
};

export default Navbar;




{/* {FOOTER.VOLUNTEERING_FORM.required && (
    <a href={FOOTER.VOLUNTEERING_FORM.src}>
    <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
    </a>
)} */}


{/* <img
className="s-open"
onClick={() => setToggle(false)}
src={hamLogo}
/> */}

        // <div className="hamburger-menu">            
        //       <MenuIcon onClick={() => setShowMediaIcons(!showMediaIcons)} />
        // </div>