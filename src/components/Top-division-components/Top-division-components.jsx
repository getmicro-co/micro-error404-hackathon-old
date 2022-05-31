import React from "react";
import "./top-division-c.css";
import MytypedComponent from "../typing-effect/typing.js";
import error404 from "./404.png";

import {TOP_SECTION,} from "../../Module/General";

function Btn(props) {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2 className="h2">{TOP_SECTION.TITLE1}</h2>
      <img className="error404" src={error404} alt="" />
      <h2 className="h2">{TOP_SECTION.TITLE2}</h2>
      {/* <p>{TOP_SECTION.host}</p> */}
      <p>Hosted by<a target="_blank" href="https://getmicro.co/" style={{color:'#F1507B'}}> Micro.</a></p>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <p> 
        {/* {TOP_SECTION.SHORT_DESCRIPTION} */}
        Join us on <span style={{color:'#F1507B'}}> 5th August, 2022 </span>
        with over 1000+ students from across the world 
        for 72 hours of creation, innovation & fun.
      </p>
      <div className="join_dis">
        {/* <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <Btn
            ico="fab fa-2x fa-discord"
            class="join_disco"
            type=""
            overlay="Click the link"
          />
        </a> */}
        {/* <Row className="mediaInfo"> */}
            {/* <Col className="" sm={12} lg={12} md={12}> */}
              {/* <Media /> */}
            {/* </Col> */}
        {/* </Row> */}

      {/* This is top division buttons */}
      <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}
      >
        {" "}
        <Btn class="sponsor" type="Register" overlay="Fill the form" />
      </a>
      <a target="_blank" href= {TOP_SECTION.DISCORD_LINK}
      >
        {" "}
        <Btn class="register" type="Join Discord" overlay="Stay updated" />
      </a>

      
      <a href=
        {TOP_SECTION.MENTOR_FORM_LINK}>
        {" "}
        <Btn class="sponsor" type="Call for Mentor's" overlay="Guide the students" />
      </a>

      <a href={TOP_SECTION.SPONSOR_FORM_LINK}>
        {" "}
        <Btn 
          class="register" type="Sponsors" overlay="Sponsor us" />
        {/* top division buttons ends here */}
      </a>
      </div>


    </div>
  );
}

export {Btn, Myinfo};
