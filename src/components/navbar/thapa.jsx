import React, {useState,} from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import "./styles.scss";






const Navbar = () => {


  const [showMediaIcons, setShowMediaIcons] = useState(false);
  
  
  
  
  return (
    <>
      
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
              <MenuIcon   onClick={() => setShowMediaIcons(!showMediaIcons)}/>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;