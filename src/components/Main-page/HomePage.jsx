import React from "react";
import {Myinfo} from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Contact from "../Contact/contact";
import "./about.css";
import {Logo, LogoSectionAbout} from "../logo-section/logoSection.jsx";
import {FirstPrize, PrizeHeading} from "../prize tracks/prizes.jsx";
import {Prizeinfo,Tracks} from "../../Module/General";
import {Accordion} from "../FAQ/faq.jsx";
import {Sponsor, SponsorsHead, SponsorUS,Micro, MicroHead} from "../Sponsors/sponsors.jsx";
import CountDown from "../count-down/countDown.jsx";
// import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer1.jsx";
import {Member,} from "../team/team.jsx";
import pattern from "./pattern4.png";
import bg1 from "./bg1.jpeg";
import bg2 from "./bg2.jpeg";
import bg3 from "./bg3.jpeg";
import bg4 from "./bg4.jpeg";
import bg5 from "./bg5.jpeg";
import bg6 from "./bg6.jpeg";
import bg7 from "./bg7.jpeg";
import TimelineItem from "../Timeline/Timeline.jsx";

import {
  TOP_SECTION,
  TeamInfo,
  JudgesInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  Timeline,
  FOOTER
} from "../../Module/General";

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          {" "}
          <Sponsor srcx={s.src} />{" "}
        </Col>
      ))}
    </Row>
  );
}

// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}




function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map(s => (
        <Col className="" sm={12} lg={6} md={6}>
        <Accordion panels={ s }/>
        </Col>
      ))}
    </Row>
  );
}



export default function HomePage(props) {
  return (
    <div className="Whole_div" style={{backgroundImage: `url(${bg4})`}}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={6} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img src={TOP_SECTION.IMG_SRC} />
            </Col>
          </Row>

        </Container>
      </div>
      <Container fluid>

          <Row className="mediaInfo" id="countdown">
            <Col className="" sm={12} lg={12} md={12}>
              <CountDown />
            </Col>
          </Row>
          
        
        {/* about section start */}
        {/* <Row className=" logoSection prizesection non-coding" id="about">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row> */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="About" />
          <hr className="hr"/>
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
            <Logo />
          </Col>
        </Row>

        {/* about section end */}

        <Row className="prizesection non-coding" id="tracks">
          <PrizeHeading type="Tracks" />
          <hr className="hr"/>
          {Tracks.map(PrizeGroup)}
        </Row>
       
        <Row className="prizesection non-coding" id="timeline">
          <PrizeHeading type="Timeline" />
          <hr className="hr"/>
         { Timeline.length > 0 && (
        <div className="timeline-container">
            {Timeline.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>)}
    

        </Row>

        {/* ********Prizes here ***** */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prize Categories" />
          <hr className="hr"/>
          {Prizeinfo.map(PrizeGroup)}
        </Row>
        {/* ********Prizes ending here ***** */}

        {/* Micro */}
        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Short Stint To Micro" />
          <hr className="hr"/>
          <Micro />
          <MicroHead />

        </Row>
        {/*Micro end*/}

        {/* ********Sponsors here ***** */}

        {/* <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map(SponsorGroup)}
        </Row> */}

        <Row className="prizesection" id="sponsors">
          <PrizeHeading type="Sponsors" />
          <hr className="hr"/>
          <SponsorUS />
          <SponsorsHead />
        </Row>

        {/* ********Sponsors ending here ***** */}

        

        {/* ********Team here ***** */}
        {/* <section className="slant" id="team">
        <div className="slanted-div">         
          <h1 className="team" id="team">Team</h1>
          <hr  className="hr"/> */}
          {/* {FOOTER.JOIN_TEAM.required && <JoinTeam placeholder="Join our team" formLink={FOOTER.JOIN_TEAM} content="Work with us." />} */}
        {/* </div>
        <div>
          {TeamInfo.map(TeamMembers)}
          
        </div>
        </section> */}
        <Row className="prizesection" id="team">
          <PrizeHeading type="Team" classNamehr />
           <hr className="hr"/>
          <div>
          {TeamInfo.map(TeamMembers)}
          </div>  
        </Row>


        
        {/* ********Team ending here ***** */}

        {/* <Birds top="120vh" left="0vh" type="" /> */}

        {/* ********Judges here ***** */}
        {/* <section className="slant"  id="team">
         <div className="slanted-div">         
           <h1 className="team" id="judges">Judges</h1>
           <hr className="hr"/> */}
           {/* {FOOTER.JOIN_TEAM.required && <JoinTeam placeholder="Join our team" formLink={TOP_SECTION.JUDGES_FORM_LINK} content="Interested in being judge" />} */}
         {/* </div>
           {JudgesInfo.map(TeamMembers)}
         <div>
         </div>
        </section> */}

        <Row className="prizesection" id="judges">
          <PrizeHeading type="Judges" classNamehr />
           <hr className="hr"/>
          <div>
           {JudgesInfo.map(TeamMembers)}
          </div>  
        </Row>


        {/* ********Team ending here ***** */}


         {/* ********Frequently asked Questions here ***** */}
         <Row className="prizesection" id="faq">
          <PrizeHeading type="Frequently Asked Questions" />
          <hr className="hr"/>
          <div className="Myfaqs">
            {frequentlyAskedQuestions.map(FrequentlyAsked)}
          </div>  
        </Row>
        {/* ********Frequently asked Questions ending here ***** */}  
         
         {/* ********Contact form ***** */}
         <Row className="prizesection" id="contact">
          <PrizeHeading type="Contact Us" classNamehr />
           <hr className="hr"/>
          <div className="contact">
            <Contact/>
          </div>  
        </Row>
        {/* ******** ending here ***** */}  



      </Container>
      <Footer />
    </div>
  );
}
