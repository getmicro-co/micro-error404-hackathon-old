import React, {useState, useEffect, useRef} from "react";
import HomePage from "../Main-page/HomePage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import hamLogo from "./ham.svg";
import logoClose from "./ham-c.svg";
import {TOP_SECTION,FOOTER} from "../../Module/General";
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

const NAVBAR = ({}) => {
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

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener("mousedown", e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      <nav className="nav_bar" style={{backgroundColor: color}}>
        <Wrapper toggle={toggle}>
          <img className="nav-error404" src={TOP_SECTION.img} alt="" />
          <div className="nav-content" ref={navigation}>
          <ul>
              <li>
                <Link   to={`#home`}>
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
                <Link to={`#resources`}>
                  <span className="links">Resources </span>{" "}
                </Link>
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
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            <toggle/>
            </ul>
          </div>
            {/* {FOOTER.VOLUNTEERING_FORM.required && (
                <a href={FOOTER.VOLUNTEERING_FORM.src}>
                  <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
                </a>
              )} */}

          <div className="ease">
           </div>
        </Wrapper>
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

// function Projects() {
//   return <h2>Projects here</h2>;
// }

// function Contact() {
//   return <h2>contact info</h2>;
// }

// function Links() {
//   return <h2>Home</h2>;
// }

export default NAVBAR;
