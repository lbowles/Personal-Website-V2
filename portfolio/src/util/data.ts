export interface Experience {
  name: string;
  description: string;
  year: string;
  url?: string;
  img: string;
}

export const education: Experience[] = [
  {
    name: "University Of Cape Town",
    description: "Bsc Computer Science and Business Computing",
    year: "2020-2023",
    img: "/img/logos/uct.webp",
  },
];

export const aboutMe = `
Specialising in web3 with a passion for product and system design. I've helped build and scale Bitcoin's largest lending protocol at Liquidium, and thrive in startup environments where I can contribute across the development lifecycle. Currently focused on blockchain technologies that deliver real-world utility.`;

export const socialLinks = {
  twitter: "https://twitter.com/npm_luko",
  github: "https://github.com/lbowles",
};

export const skills = {
  primary: "[Product architecture, System design, Technical strategy]",
  secondary: "[Next.js, TypeScript, Tailwind, Web3]",
  soft: "[0-to-1 builds, Scope definition, Project management, Shipping fast]",
  hobbies: "[Boxing, Running, Drumming]",
};

export const workExperience: Experience[] = [
  {
    name: "Liquidium",
    description:
      "Head of product architecture at Bitcoin's largest DeFi lending protocol. Contributed to its growth from ₿1 -> ₿3000+ in volume. Recently led the V0.3 redesign",
    year: "2023-ongoing",
    url: "https://liquidium.fi/",
    img: "/img/logos/liquidium.svg",
  },
  {
    name: "Onset Carbon",
    description:
      "Easy, publicly verifiable blockchain-based carbon offsetting. Recipient of Celo's Prezenti Grants",
    year: "2022-2023",
    url: "https://drive.google.com/file/d/1RpEclojkTPli1JG8dc0DJ1QqivdwkS7f/view?usp=sharing",
    img: "/img/logos/onset.svg",
  },
  {
    name: "Neon Analytics",
    description: "LinkedIn marketing analytics and reporting • TurnLeftMedia",
    year: "2020-2022",
    url: "https://analytics.neonsolutions.co.za",
    img: "/img/logos/neon.png",
  },
  {
    name: "Cell Traq",
    description:
      "Using a thermal camera system to monitor cathode efficiency in electrowinning plants • MasQ Brands",
    year: "2018-2019",
    url: "https://masq.co.za/cell-traq/",
    img: "/img/logos/traq.png",
  },
];

export const sideProjects: Experience[] = [
  {
    name: "Alpha Feed",
    description:
      "Using AI to surface the most significant AI related news of the day",
    year: "2023",
    url: "https://alphafeed.luko.co.za/",
    img: "/img/logos/alpha.svg",
  },
  {
    name: "Substance Use Disorder Assessment Tool",
    description:
      "Standardised tool for assessing substance use disorders in the Western Cape (South Africa) - Final year Comp Sci project",
    year: "2022",
    url: "https://thundering-morning-845.notion.site/WC-SUDAT-User-Manual-fbec5295cae441e1a0e5779a79e536f7",
    img: "/img/logos/westernCape.svg",
  },
  {
    name: "Wallet Usage",
    description: "Simple tool showing ethereum wallet activity",
    year: "2022",
    url: "https://walletusage.luko.co.za/",
    img: "/img/logos/walletUsage.svg",
  },
  {
    name: "Klima Incoom",
    description: "Simple staking rewards calculator for KlimaDAO",
    year: "2021",
    url: "https://klimaincoom.luko.co.za/",
    img: "/img/logos/klima.png",
  },
  {
    name: "WRO 2017 Advanced Robotics Challenge",
    description:
      "Placed 9th (380 teams) at WRO internationals. Built a autonomous robot to play 3D Tetris-like game",
    year: "2017",
    url: "https://drive.google.com/file/d/1Gt3sx2SJ0AIhwbU1TJDCcwYEnEDOIPP1/view?usp=sharing",
    img: "/img/logos/ARC.png",
  },
  {
    name: "WRO 2016 Senior Open Category",
    description:
      "Placed 15th globally at WRO internationals. Designed autonomous robot fleet for water waste cleanup",
    year: "2016",
    url: "https://docs.google.com/document/d/1lOSYYLLtHfKbfC3GePSzaI4h3GZ6m7QN2lN7buuLsyE/edit?usp=sharing",
    img: "/img/logos/ARC.png",
  },
  {
    name: "Simple Learning Time",
    description:
      "Educational app for teaching time-telling adopted by schools across South Africa and internationally. 100k+ downloads",
    year: "2016",
    url: "https://apps.apple.com/za/app/simple-learning-time/id1096092596",
    img: "/img/logos/simpleLearningTime.png",
  },
];

export const nfts: Experience[] = [
  {
    name: "Etherplanets",
    description:
      "Fully on-chain, procedurally 3d planets using Three.js rendering",
    year: "2023",
    url: "https://etherplanets.stephancill.co.za/",
    img: "/img/logos/etherplanets.png",
  },
  {
    name: "On-chain Black Holes",
    description:
      "Fully on-chain, procedurally generated art with innovative merging mechanic. 5k+ sold",
    year: "2023",
    url: "https://blackholes.stephancill.co.za/",
    img: "/img/logos/blackHoles.svg",
  },
  {
    name: "On-chain Kaleidoscopes",
    description:
      "Fully on-chain, procedurally generated, animated kaleidoscopes",
    year: "2023",
    url: "https://kaleidoscopes.stephancill.co.za",
    img: "/img/logos/kaleidoscopes.svg",
  },
  {
    name: "On-chain Solar Systems",
    description:
      "Fully on-chain, procedurally generated, animated solar systems. 100 ETH volume",
    year: "2022",
    url: "https://solarsystems.stephancill.co.za",
    img: "/img/logos/solarSystems.svg",
  },
];

export const link = [
  {
    url: "https://www.linkedin.com/in/luke-bowles-sa/",
    imgSrc: "/img/links/linked.svg",
    alt: "linkedin",
  },
  {
    url: "https://github.com/lbowles",
    imgSrc: "/img/links/github.svg",
    alt: "github",
  },

  {
    url: "mailto:lpbowles@proton.me",
    imgSrc: "/img/links/mail.svg",
    alt: "mail",
  },
  {
    url: "https://twitter.com/npm_luko",
    imgSrc: "/img/links/twitter.svg",
    alt: "twitter",
  },
];
