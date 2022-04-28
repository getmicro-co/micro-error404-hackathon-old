// Importing all sponsors logos from Assets
import taskade from "./Assets/sponsorsLogos/taskade.png";
import Replit from "./Assets/sponsorsLogos/replit.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import ll from "./Assets/sponsorsLogos/ll.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";
import Image404 from "../components/Top-division-components/404.png";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import lyin from "./Assets/teami/lyin.jpg";
import zoha from "./Assets/teami/zoha.png";

import abhay from "./Assets/teami/AbhayKumar.jpg";
import yash from "./Assets/teami/YashKataria.jpeg";
import zak from "./Assets/teami/zakariya.png";
import sid from "./Assets/teami/SiddhantPawar.jpeg";




/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";





const TOP_SECTION = {
  TITLE1: "Error",
  TITLE2:"Hackathon",
  img: Image404,
  Typed_effect: ["72 hours of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on 20th November 2021 with over 300 students from across the nation for 24 hours of creation, innovation, & fun.",
  IMG_SRC: boy,
  HACKERS_REGISTRATION_FORM_LINK: "dumba",
  DISCORD_LINK: "https://discord.com/channels/967360776501329960/967360776501329963",
  MENTOR_FORM_LINK:
    "https://github.com/getmicro-co/micro-error404-hackathon",
  SPONSOR_FORM_LINK:
    "https://github.com/getmicro-co/micro-error404-hackathon"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/",
  discord: "https://discord.com/",
  linkedin: "https://www.linkedin.com/",
  twitter: "https://twitter.com",
  devpost: "https://devpost.com/",
  email: "mailto:hello@abcd",
  mail: "hello@abcd.tech"
};

const MIDDLE_SECTION = {
  TITLE: "About",
  LONG_DESCRIPTION:
    "Error 404 is 24 hour long running hackathon will be held on November 20th & 21th , We calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers . Throughout the weekend hackers at Error 404 will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending.",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://www.google.com/forms/about/"
  },
  JOIN_TEAM: {
    required: true,
    src: "https://www.google.com/forms/about/"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

const Tracks =  [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "Artificial Intelligence",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "Blockchain",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "AR/VR",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Web Development",
      content:
        "You project will qualify for this prize. if you participate alone without a team though."
    },
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: " Mobile Development",
      content: "Your project will qualify for this category if atleast 50% of the project is complete."
    },

  ],
  
];




/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "First Place",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "Second Place",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Place",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Beginer",
      content:
        "You project will qualify for this prize. if you participate alone without a team though."
    },
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: " Education",
      content: "Your project will qualify for this category if atleast 50% of the project is complete."
    },
    {
      icon: <i class=" fifth fa-3x fas fa-book-open"></i>,
      type: "Finance",
      content: "Project with most creative financing ideas will be awarded with this award."
    }
  ],
  [
    //Array 3
    {
      icon: <i class="fas fa-4x sixth fa-male"></i>,
      type: "Healthcare",
      content: "Project with most creative financing ideas will be awarded with this award."
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "Remote World",
      content: "Project with most creative financing ideas will be awarded with this award."
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "Open Innovation",
      content: "Project with most creative financing ideas will be awarded with this award."
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Siddhant Pawar",
      role: "Program Manager",
      linkedin: "https://www.linkedin.com/in/siddhant-pawar-398a05201/?originalSubdomain=in",
      img: sid
    },
    {
      Name: "Zakariya Khan",
      role: "Technical Lead",
      linkedin: "https://www.linkedin.com/in/zakariya-khan-590281137/",
      img: zak
    },
    {
      Name: "Yash Kataria",
      role: "Outreach Lead",
      linkedin: "https://www.linkedin.com/in/kataria-yash/?originalSubdomain=in",
      img: yash
    }
  ],
  [
    //Array 2
    {
      Name: "Abhay Kumar",
      role: "Discord Moderator",
      linkedin: "https://www.linkedin.com/in/abhayku2002/",
      img: abhay
    },
    {
      Name: "Prathima Kadari",
      role: "Organizer",
      linkedin: "https://www.linkedin.com/in/prathima-kadari/",
      img: zoha
    },    
    {
      Name: "Zoheb",
      role: "Organizer",
      linkedin: "",
      img: zoha
    },    
  ] 
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      linkedin: "",
      img: me
    },
    {
      Name: "Moon",
      role: "Organizer",
      linkedin: "",
      img: moon
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      linkedin: "",
      img: zoha
    },    
  ] 
];


/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
  [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
  [{src: egg}, {src: ll}, {src: ACF}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
        'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'      },
      {
        label: "Who can attend?",
        content: "Error 404 is open to all undergraduate, high school students and middle school students from all schools."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content: "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general."
      },
      {
        label: "How team formation works?",
        content: "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content: "All you need is to fill our form above and join Discord, we will guide you through everything there"
      },
      {
        label: "I have more questions?",
        content: "Reach us directly at (rehan@micro.tech or hello@abcd.tech) we would happy to help you."
      }
      ,
      {
        label: "Can i volunteer?",
        content: "Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you."
      }
      ,
      {
        label: "Will there be swags?",
        content: "Yes! Participants will recieveing Error 404 swag!."
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  Tracks,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions
};
