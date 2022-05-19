import React from "react";
import "./sponsors.scss";
import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {SOCIALS} from "../../Module/General";
import micro from "./stint1.png"

function SponsorsHead() {
  return <p className="shead">
        We believe in sharing our dream by adding impact to 
        people's lives and encourage them to come out of their 
        comfort zone while enhancing their skills placed in better
        perspectives. We are looking for sponsors who is interested 
        in investing in our mission and willing to support our event 
        to make it a success story.
  </p>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="error404hacks"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring Us?</h3>
      <a href={SOCIALS.email}>
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Send proposal" />
      </a>{"           "}
    </div>
  );
}

function Micro() {
  return (
    <div className="joinT sponsorUS">
      {/* <h3>Interested in Sponsoring </h3> */}
      <a target="_blank" href={SOCIALS.web}>
        <Btn className="sponsor_btn" type="Visit us" overlay="See our work" />
      </a>{" "}
    </div>
  );
}
function MicroHead() {
  return (
  <div className="micro-container">
    <p className="shead">
        Micro is a platform that allows you to participate 
        in alternative assets on a fractional basis. 
        We're aiming to become one of the finest Fintech 
        sector's fastest growing and most ambitious start-ups 
        by establishing a unique technology platform.
     </p>
     <img className="microimg" src={micro} alt="" />
  </div>
  );
}


export {SponsorsHead, Sponsor, SponsorUS,Micro,MicroHead};
