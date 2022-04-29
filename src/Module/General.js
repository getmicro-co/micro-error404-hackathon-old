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
import aboutImage from "../components/logo-section/cyborg.png";
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

import abhay from "./Assets/teami/AbhayKumar.jpeg";
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
  Img: aboutImage,
  host: "Hosted by Micro.",
  Typed_effect: ["72 hours of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us on 20th November 2021 with over 300 students from across the nation for 24 hours of creation, innovation, & fun.",
  IMG_SRC: boy,
  HACKERS_REGISTRATION_FORM_LINK: "dumba",
  DISCORD_LINK: "https://discord.com/invite/G3SkQfBk",
  MENTOR_FORM_LINK:
    "https://github.com/getmicro-co/micro-error404-hackathon",
  SPONSOR_FORM_LINK:
    "https://github.com/getmicro-co/micro-error404-hackathon"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/",
  discord: "https://discord.com/",
  linkedin: "https://www.linkedin.com/company/get-micro/",
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
        "Search engines, Stock market, cybersecurity or healthcare AI never ceases to amaze us with its capability. Show us what can do if you are an AI enthusiast. "
      },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "Blockchain",
      content:
        "Web 3.0 is the third generation of internet services for websites and applications. Write some solidity contracts to participate into this category."
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "AR/VR",
      content:
        "AR augments surroundings by adding digital elements to a live view. VR replaces a real life environment with a simulated one."
    }
  ],
  [
    //Array 2
    {
      icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Web Development",
      content:
        "Make cool Web app using any technology of your choice that solves any real world problem and your project will qualify for this prize track."
    },
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: " Mobile Development",
      content: "Whether it is Android/ios or Flutter/React native it's your call make a project in this domain and win exciting swags and prizes."
    },

  ],
  
];


// Timeline

const Timeline = [
  {
      text: ' Opening Ceremony',
      date: 'July 15th, 2022 ',
      category: {
    tag: '5.30 PM',
    color: '#FFDB14'
  },
      link: {
          url: 'https://google.com',
          text: 'Meet Link'
      }
  },
  {
      text: 'Hackathon Period Begins',
      date: 'July 15th, 2022',
      category: {
    tag: '7 PM',
    color: '#e17b77'
  },
      link: {
          url: 'https://florin-pop/blog/2019/03/weekly-coding-challenge/',
          text: 'Check it out here'
      }
  },
  {
      text: 'Initial Evaluation Deadline',
      date: 'July 17th, 2022',
      category: {
    tag: '9 AM',
    color: '#1DA1F2'
  },
      link: {
          url: 'https://twitter.com/florinpop1705',
          text: 'Check it out here'
      }
  },
  {
      text:
          'Hackathon Submission Period Ends',
      date: 'July 18th, 2022',
      category: {
    tag: '7 PM',
    color: '#018f69'
  },
      link: {
          url:
              'https://medium.freecodecamp.org/how-to-build-a-double-slider-sign-in-and-sign-up-form-6a5d03612a34',
          text: 'Check it out here'
      }
  },
  {
      text: 'Top 20 Teams will be released',
      date: 'July 20th,, 2022',
      category: {
    tag: ' 4 PM',
    color: 'red'
  },
      link: {
          url: 'https://medium.com/@popflorin1705',
          text: 'Check it out here'
      }
  },
  {
      text: 'Demonstration of Projects to Judges',
      date: 'July 21st, 2022',
      category: {
    tag: ' 4PM',
    color: 'orange'
  },
      link: {
          url: 'https://medium.com/@popflorin1705',
          text: 'Check it out here'
      }
  },
  {
      text: 'Results Declared on Closing Ceremony',
      date: 'July 23rd, 2022',
      category: {
    tag: ' 7 PM',
    color: 'purple'
  },
      link: {
          url: 'https://medium.com/@popflorin1705',
          text: 'Check it out here'
      }
  }
]



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
        "If this is your first ever hackthon and your project solves real worl problem then you will be awarded in this category."
    },
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: " Education",
      content: "Solve a problem in the educational sector and your project will qualify for this category."
    },
    {
      icon: <i class=" fifth fa-3x fas fa-book-open"></i>,
      type: "Finance",
      content: "Project with most creative financing ideas that are converted into codes will be awarded with this award."
    }
  ],
  [
    //Array 3
    {
      icon: <i class="fas fa-4x sixth fa-male"></i>,
      type: "Healthcare",
      content: "The Healthcare track aims to create innovative projects that address various health-related issues."
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "Remote World",
      content: "Remote work enthusiast with project's having most creative idea's that solve real worl issues will be awarded in this category."
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "Open Innovation",
      content: "We encourage you to exercise your ideas and develop technologies that address a problem, without any restrictions."
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
        label: "Do I have to pay to register for the Micro Error404 Hackathon?",
        content:
        'No, this hackathon is completely free for everyone.'
      },
      {
        label: "What is Team Size?",
        content: "Team Size can be 1-3 members."
      },
      {
        label: "I'm a beginner. Am I eligible to participate?",
        content: "Yes, of course if you're a beginner it's the best way to start your hackathon journey and we would be very much pleased to have your participation."
      },
      {
        label: "I just graduated. Can I still join this event?",
        content: "Yes, all the school and college students including the students graduated this year are invited. Even working professionals and people who don't have a formal education are also welcomed.        "
      }
    ],
    [
      {
        label: "Are we allowed to build on past projects/submit old projects?",
        content: "No, you have to build a completely new project from the scratch to develop into a full end prototype."
      },
      {
        label: "Can I start working on my hack before the event?",
        content: "Not at all. The work done during the hackathon period only gets counted."
      }
      ,
      {
        label: "Can I apply for multiple tracks?",
        content: "You can submit only one project but it can include as many tracks as you want."
      }
      ,
      {
        label: "Do you have a query that's not found here?",
        content: "No worries, you can drop us a message through a contact form below."
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
  Timeline,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions
};
