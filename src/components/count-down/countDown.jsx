import React from "react";
import "./countDown.css";
import Countdown from "react-countdown";

export default function CountDown() {

  return (
    <div className="counter">
    <h1>Kickoff in</h1>
      <Countdown className="countdown" date={'2022-07-14'} />
      <div className="counterDetails">
        <h2>Days : Hours : Minutes : Seconds</h2>
      </div>
      <div className="rocket">
      <iframe title="error404" src="https://giphy.com/embed/ZF1TL1VDIzCwDSOovY" width="209" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
    </div>
  );
}