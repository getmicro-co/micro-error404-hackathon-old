import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./media.css";
import "../Top-division-components/top-division-c.css";
import {SOCIALS} from "../../Module/General";

export default function Media() {
  return (
    <div className="media">
      {/* <p>Our Socials</p> */}
     
      {/* <div className="single ">
        <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
        <SocialIcon url="https://instagram.com" fgColor="#fff" />
        </a>
      </div> */}

      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
          <SocialIcon url="https://www.linkedin.com/company/get-micro/" fgColor="#fff" />
        </a>
      </div>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
        <SocialIcon url="https://discord.com/invite/bsFUEdysfP"  fgColor="#fff"/>
        </a>
      </div>

      {/* <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
        <SocialIcon network="twitter" fgColor="#fff"/>
        </a>
      </div> */}

      {/* <div className="single">
        <a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>
          <i class="dev fab fa-3x fa-dev"></i>
        </a>
      </div> */}
    </div>
  );
}
