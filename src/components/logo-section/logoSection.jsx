import React from "react";
import "./logoSection.css";


import {TOP_SECTION,MIDDLE_SECTION} from "../../Module/General";

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <hr className="hr"/>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  var myLogo;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    myLogo = (
      <div className="logoS">
        {/* <img className="Logo sym" src={TOP_SECTION.img} alt="error404" /> */}
        {/* <iframe className="Logo about-logo" src="https://giphy.com/embed/14uQ3cOFteDaU" width="480" height="360" frameBorder="0"  allowFullScreen></iframe> */}
        <iframe className="about-logo" src="https://giphy.com/embed/C21GGDOpKT6Z4VuXyn" width="480" height="480" frameBorder="0" />
      </div>
    );
  } else {
    myLogo = (
      <div className="logoS">
          <img className="Logo sym" src={TOP_SECTION.img} alt="error404" />
      </div>
    );
  }
  return myLogo;
}

export {Logo, LogoSectionAbout};
