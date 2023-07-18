import Image from "next/image";

// Define your data
const aboutMe = `
I'm an aspiring entrepreneur and tech enthusiast with a degree in computer science and business computing. 
My passion lies at the intersection of business and technology, specialising in software development and business analysis. 
I've honed my skills working on diverse projects from robotics, SaaS, web3 and recently the ReFi space. 
Real-world problem-solving and constant learning are at the heart of my work ethos, seeing every project as an opportunity to improve my skill set.`;

const socialLinks = {
  twitter: "https://twitter.com/npm_luko",
  github: "https://github.com/lbowles",
};

const skills = {
  primary: "[Web3, React, TypeScript, Next.js, Business Analysis]",
  secondary: "[Python, Java, SQL, Node.js, Solidity Learning]",
  extras: "[3D Modeling, 3D Printing, Video Editing, Lottie Animation]",
};

const workExperience = [
  {
    company: "Cell Traq",
    description:
      "Using a thermal camera system to monitor cathode efficiency in electrowinning plants • MasQ Brands",
    url: "https://masq.co.za/?s=cell+traq",
    years: "2018-2019",
  },
  {
    company: "Neon Analytics",
    description: "LinkedIn marketing analytics and reporting • TurnLeftMedia",
    url: "https://analytics.neonsolutions.co.za/auth/login?next=/",
    years: "2020-2022",
  },
];

const sideProjects = [
  {
    name: "Simple Learning Time",
    description:
      "An educational app to teach students how to tell time. 40K+ downloads, used in multiple schools across South Africa and several other countries.",
    url: "https://analytics.neonsolutions.co.za/auth/login?next=/",
    year: "2016",
  },
  {
    name: "WRO 2016 Senior Open Category",
    description:
      "Team Infinity placed 15th out of 30 teams in the Senior Open Category at the World Robot Olympiad in New Delhi, India. Our project was developing the concept of an autonomous fleet of robots to clean up waste in large bodies of water",
    url: "https://analytics.neonsolutions.co.za/auth/login?next=/",
    year: "2016",
  },
];

const nfts = [
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

const education = [
  {
    university: "University Of Cape Town",
    degree: "Bsc Computer Science and Business Computing",
    years: "2020-2023",
  },
];

// Your function
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-[600px] p-4 mx-auto">
        <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
          <div
            className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
            id="headerTerminal"
          >
            <div
              className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
              id="closebtn"
            ></div>
            <div
              className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
              id="minbtn"
            ></div>
            <div
              className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
              id="maxbtn"
            ></div>
            <div className="mx-auto pr-16" id="terminaltitle">
              <p className="text-center text-sm">Terminal</p>
            </div>
          </div>
          <div
            className="pl-1 pt-1 h-auto text-green-200 font-mono text-xs bg-black"
            id="console"
          >
            <p className="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
            <p className="pb-1">Laraben:Devprojects laraben$</p>
            <div className="pb-1 font-bold">{`> cat about.txt`}</div>
            <div className="pb-1">{aboutMe}</div>

            <div className="pb-1 pt-2 font-bold">{`> cat skills.txt`}</div>
            {Object.entries(skills).map(([category, skillsList]) => (
              <>
                <div className="pb-1 ml-4">{`${category}:`}</div>
                <div
                  className="pb-1 ml-8"
                  key={category}
                >{`${skillsList}`}</div>
              </>
            ))}
            {/* <div className="pb-1 pt-2">{`-----------------------------------------------------------------------`}</div> */}

            <div className="pb-1 pt-2 font-bold">{`> cat work.txt`}</div>

            {workExperience.map((work) => (
              <div className="pb-2">
                <div
                  className="pl-4 "
                  key={work.company}
                >{`${work.company} [${work.years}]`}</div>
                <div className="pb-1 pl-8">{`- ${work.description}`}</div>
                <a href={work.url} className="pb-1 pl-8 hover:underline">
                  - Link ➔
                </a>
              </div>
            ))}
            <div className="pb-1 font-bold">{`> cat side_projects.txt`}</div>
            {sideProjects.map((project) => (
              <div className="pb-1">
                <div
                  className="pl-4"
                  key={project.name}
                >{`${project.name} [${project.year}]`}</div>
                <div className="pb-1 pl-8">{`- ${project.description}`}</div>
                <div className="pb-1 pl-8">{`- ${project.url}`}</div>
              </div>
            ))}
            {/* <div className="pb-1">{`> cat nfts.txt`}</div>
            {nfts.map((nft) => (
              <>
                <div
                  className="pb-1"
                  key={nft.name}
                >{`> ${nft.name} [${nft.year}]`}</div>
                <div className="pb-1">{`> ${nft.description}`}</div>
                <div className="pb-1">{`> ${nft.url}`}</div>
              </>
            ))} */}
            <div className="pb-1  pt-2 font-bold">{`> cat education.txt`}</div>
            {education.map((edu) => (
              <>
                <div
                  className="pb-1 pl-4"
                  key={edu.university}
                >{`> ${edu.university} `}</div>
                <div className="pb-1 pl-8">{`- ${edu.degree}`}</div>
                <div className="pb-1 pl-8">{`- [${edu.years}]`}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
