import React from "react";
import "./team.css";
import { SocialIcon } from 'react-social-icons';
import {Btn} from "../Top-division-components/Top-division-components.jsx";

function JoinTeam({placeholder, formLink, content}) {
  return (
    <div className="joinT">
      <h3>{content} </h3>
      <a href={formLink}>
        <Btn type={placeholder} overlay="Fill the form" link={formLink} />
      </a>
    </div>
  );
}

function Member({info}) {
  const {role,Name,img, linkedin} = info;
  return (
    <div className="member">
      <img src={img} alt="error404"></img>
      <div className="members-link">
        <h3>{Name}</h3>
        <p>{role}</p>
        <a href={linkedin}>
        <SocialIcon url={linkedin} fgColor="#fff" />
        </a>
      </div>
    </div>
  );
}

export {Member, JoinTeam};
