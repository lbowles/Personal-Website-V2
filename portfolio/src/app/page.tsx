import Image from "next/image";
import open from "../img/open.svg";
import { aboutMe, skills, workExperience, sideProjects } from "../util/data";
// Define your data

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
        <div className="w-full shadow-2xl subpixel-antialiased rounded-xl bg-black border-black mx-auto">
          <div
            className="flex items-center h-6 rounded-t-md bg-gray-100 border-b border-gray-500 text-center text-black"
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
            className="pl-1 pt-1 h-auto text-green-200 font-mono text-xs bg-black rounded-md"
            id="console"
          >
            {/* TODO: use current data */}
            <p className="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
            <p className="pb-1">LBowles:CV lbowles$</p>
            <div className="pb-1 font-bold text-green-300">{`> cat about.txt`}</div>
            <div className="pb-1">{aboutMe}</div>

            <div className="pb-1 pt-2 font-bold text-green-300">{`> cat skills.txt`}</div>
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

            <div className="pb-1 pt-3 font-bold text-green-300">{`> cat work.txt`}</div>
            {workExperience.map((work) => (
              <div className="pb-2 relative" key={work.company}>
                <div className="pl-4 flex items-center">
                  <Image
                    src={work.img}
                    alt="Company logo"
                    width={15}
                    height={15}
                    className="mr-2 rounded-sm"
                  />
                  {`${work.company} [${work.years}]`}
                </div>
                <div className="pb-1 pl-14  mr-6">{`${work.description}`}</div>
                <a href={work.url} className="absolute top-0 right-0 mr-2">
                  <Image src={open} alt="Work URL" width={15} height={15} />
                </a>
              </div>
            ))}
            <div className="pb-1 pt-2 font-bold text-green-300">{`> cat side_projects.txt`}</div>
            {sideProjects.map((project) => (
              <div className="pb-2 relative" key={project.name}>
                <div className="pl-4 flex items-center">
                  <Image
                    src={project.img}
                    alt="Company logo"
                    width={15}
                    height={15}
                    className="mr-2 rounded-sm"
                  />
                  {`${project.name} [${project.year}]`}
                </div>
                <div className="pb-1 pl-14 mr-6">{`${project.description}`}</div>
                <a href={project.url} className="absolute top-0 right-0 mr-2">
                  <Image src={open} alt="Work URL" width={15} height={15} />
                </a>
              </div>
            ))}
            {/* <div className="pb-1 text-green-300">{`> cat nfts.txt`}</div>
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
            <div className="pb-1  pt-2 font-bold text-green-300">{`> cat education.txt`}</div>
            {education.map((edu) => (
              <>
                <div
                  className="pb-1 pl-4"
                  key={edu.university}
                >{`${edu.university} `}</div>
                <div className="pb-1 pl-8">{`${edu.degree} [${edu.years}]`}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
