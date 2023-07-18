import neon from "../img/logos/neon.png";
import cellTraq from "../img/logos/traq.png";
import onset from "../img/logos/onset.svg";
import alpha from "../img/logos/alpha.svg";

// TODO: move alpha to side projects
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
  primary: "[Web3, React, TypeScript, Next.js, Business Analysis]",
  secondary: "[Python, Java, SQL, Node.js, Solidity Learning]",
  extras: "[3D Modeling, 3D Printing, Video Editing, Lottie Animation]",
};

export const workExperience = [
  {
    company: "Alpha Feed",
    description:
      "Using AI to surface the most significant AI related news of the day",
    years: "2023-ongoing",
    url: "https://alphafeed.xyz/",
    color: "#E4ABFF",
    img: alpha,
  },
  {
    company: "Onset Carbon",
    description:
      "Easy, publicly verifiable carbon offsetting. Recipient of Celo's Rrezenti Grants",
    years: "2022-ongoing",
    url: "https://www.onsetcarbon.com/",
    color: "#CB8BFE",
    img: onset,
  },
  {
    company: "Neon Analytics",
    description: "LinkedIn marketing analytics and reporting • TurnLeftMedia",
    years: "2020-2022",
    url: "https://analytics.neonsolutions.co.za",
    color: "#A98BFE",
    img: neon,
  },
  {
    company: "Cell Traq",
    description:
      "Using a thermal camera system to monitor cathode efficiency in electrowinning plants • MasQ Brands",
    years: "2018-2019",
    url: "https://masq.co.za/cell-traq/",
    color: "#8B90FE",
    img: cellTraq,
  },
];

export const sideProjects = [
  {
    name: "Simple Learning Time",
    description:
      "An educational app to teach students how to tell time. 40K+ downloads, used in multiple schools across South Africa and several other countries.",
    url: "https://analytics.neonsolutions.co.za/auth/login?next=/",
    year: "2016",
    img: cellTraq,
  },
  {
    name: "WRO 2016 Senior Open Category",
    description:
      "Team Infinity placed 15th out of 30 teams in the Senior Open Category at the World Robot Olympiad in New Delhi, India. Our project was developing the concept of an autonomous fleet of robots to clean up waste in large bodies of water",
    url: "https://analytics.neonsolutions.co.za/auth/login?next=/",
    year: "2016",
    img: cellTraq,
  },
];

export const nfts = [
  {
    name: "Synthetic Punks",
    description:
      "A unique, fully on-chain CryptoPunk for every Ethereum address",
    url: "https://analytics.neonsolutions.co.za/auth/login?next=/",
    year: "2022",
  },
  {
    name: "Moment NFT",
    description: "A fully on-chain clock NFT",
    url: "https://analytics.neonsolutions.co.za/auth/login?next=/",
    year: "2022",
  },
];
