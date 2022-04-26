import React from "react";
import "./logoSection.css";


import {TOP_SECTION,MIDDLE_SECTION} from "../../Module/General";

function LogoSectionAbout() {
  return (
    <div className="LogoSectionAbout">
      <h1>{MIDDLE_SECTION.TITLE}</h1>
      <p>{MIDDLE_SECTION.LONG_DESCRIPTION}</p>
    </div>
  );
}

function Logo() {
  var myLogo;
  if (MIDDLE_SECTION.LOGO_EFFECT) {
    myLogo = (
      <div className="logoS">
        <img className="Logo sym" src={TOP_SECTION.img} alt="error404" />
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
