export interface WorkExperience {
  name: string;
  description: string;
  year: string;
  url: string;
  color: string;
  img: string;
}

export interface SideProject {
  name: string;
  description: string;
  year: string;
  url: string;
  color: string;
  img: string;
}

export const education = [
  {
    university: "University Of Cape Town",
    degree: "Bsc Computer Science and Business Computing",
    years: "2020-2023",
  },
];

export const aboutMe = `
I'm an aspiring entrepreneur and tech enthusiast.
My passion lies at the intersection of business and technology, specializing in software development and business analysis. 
I've honed my skills working on diverse projects from robotics, SaaS, web3 and recently the ReFi space. 
Real-world problem-solving and constant learning are at the heart of my work ethos, seeing every project as an opportunity to improve my skill set.`;

export const socialLinks = {
  twitter: "https://twitter.com/npm_luko",
  github: "https://github.com/lbowles",
};

export const skills = {
  primary: "[React, TypeScript, Next.js, Web3, Business Analysis]",
  secondary: "[Python, Java, SQL, Node.js, Solidity (Learning)]",
  extras: "[3D Modeling, 3D Printing, Video Editing, Lottie Animation]",
};

export const workExperience = [
  {
    name: "Onset Carbon",
    description:
      "Easy, publicly verifiable blockchain-based carbon offsetting. Recipient of Celo's Rrezenti Grants",
    year: "2022-ongoing",
    url: "https://www.onsetcarbon.com/",
    color: "#CB8BFE",
    img: "/img/logos/onset.svg",
  },
  {
    name: "Neon Analytics",
    description: "LinkedIn marketing analytics and reporting • TurnLeftMedia",
    year: "2020-2022",
    url: "https://analytics.neonsolutions.co.za",
    color: "#A98BFE",
    img: "/img/logos/neon.png",
  },
  {
    name: "Cell Traq",
    description:
      "Using a thermal camera system to monitor cathode efficiency in electrowinning plants • MasQ Brands",
    year: "2018-2019",
    url: "https://masq.co.za/cell-traq/",
    color: "#8B90FE",
    img: "/img/logos/traq.png",
  },
];

export const sideProjects = [
  {
    name: "Alpha Feed",
    description:
      "Using AI to surface the most significant AI related news of the day",
    year: "2023",
    url: "https://alphafeed.xyz/",
    color: "#E4ABFF",
    img: "/img/logos/alpha.svg",
  },
  {
    name: "Substance Use Disorder Assessment Tool",
    description:
      "Standardised tool for assessing substance use disorders in the Western Cape (South Africa) - Final year Comp Sci project",
    year: "2022",
    color: "#7BE7A6",
    url: "https://thundering-morning-845.notion.site/WC-SUDAT-User-Manual-fbec5295cae441e1a0e5779a79e536f7",
    img: "/img/logos/westernCape.svg",
  },
  {
    name: "Wallet Usage",
    description: "Simple tool showing ethereum wallet activity",
    year: "2022",
    url: "https://walletusage.luko.co.za/",
    color: "#71DA9A",
    img: "/img/logos/walletUsage.svg",
  },
  {
    name: "Klima Incoom",
    description: "Simple staking rewards calculator for KlimaDAO",
    year: "2021",
    url: "https://klimaincoom.luko.co.za/",
    color: "#8EF0B5",
    img: "/img/logos/klima.png",
  },
  {
    name: "WRO 2017 Advanced Robotics Challenge",
    description:
      "Our team placed 9th out of 380 international tertiary teams in the Advanced Robotics Challenge at the World Robot Olympiad in Costa Rica. The challenge was to build a robot that plays a 3D Tetris-like game",
    year: "2017",
    url: "https://drive.google.com/file/d/1Gt3sx2SJ0AIhwbU1TJDCcwYEnEDOIPP1/view?usp=sharing",
    color: "#C0F89E",
    img: "/img/logos/ARC.png",
  },
  {
    name: "WRO 2016 Senior Open Category",
    description:
      "Team Infinity placed 15th out of 30 teams in the Senior Open Category at the World Robot Olympiad in New Delhi, India. Our project was developing the concept of an autonomous fleet of robots to clean up waste in large bodies of water",
    year: "2016",
    url: "https://docs.google.com/document/d/1lOSYYLLtHfKbfC3GePSzaI4h3GZ6m7QN2lN7buuLsyE/edit?usp=sharing",
    color: "#A5F89E",
    img: "/img/logos/ARC.png",
  },
  {
    name: "Simple Learning Time",
    description:
      "An educational app to teach students how to tell time. It is used in multiple schools across South Africa and several other countries.",
    year: "2016",
    url: "https://apps.apple.com/za/app/simple-learning-time/id1096092596",
    color: "#C6FF99",
    img: "/img/logos/simpleLearningTime.png",
  },
];

export const nfts = [
  {
    name: "Etherplanets",
    description:
      "Fully on-chain, procedurally 3d planets using Three.js rendering",
    year: "2023",
    color: "#FFEDAC",
    url: "https://etherplanets.com/",
    img: "/img/logos/etherplanets.png",
  },
  {
    name: "On-chain Black Holes",
    description:
      "Fully on-chain, procedurally generated pixel art black holes. Blackholes introduced a burning mechanic where they could be merged together to form larger black holes",
    year: "2023",
    color: "#FEE58B",
    url: "https://onchainblackholes.com/",
    img: "/img/logos/blackHoles.svg",
  },
  {
    name: "On-chain Solar Systems",
    description:
      "Fully on-chain, procedurally generated, animated solar systems",
    year: "2022",
    color: "#FEC28B",
    url: "https://onchainsolar.systems/",
    img: "/img/logos/solarSystems.svg",
  },
];

export const link = [
  {
    url: "https://www.linkedin.com/in/luke-bowles-97402019a",
    imgSrc: "/img/links/linked.svg",
    alt: "linkedin",
  },
  {
    url: "https://github.com/lbowles",
    imgSrc: "/img/links/github.svg",
    alt: "github",
  },

  {
    url: "mailto:luke@neonsolutions.co.za",
    imgSrc: "/img/links/mail.svg",
    alt: "mail",
  },
  {
    url: "https://twitter.com/npm_luko",
    imgSrc: "/img/links/twitter.svg",
    alt: "twitter",
  },
];
