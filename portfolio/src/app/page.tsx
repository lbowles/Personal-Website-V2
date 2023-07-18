import Image from "next/image";
import open from "../img/open.svg";
import {
  aboutMe,
  skills,
  workExperience,
  sideProjects,
  nfts,
} from "../util/data";
import RenderItems from "../components/RenderItems";
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
            <div className="pb-1 pl-4">{aboutMe}</div>
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
            <div className="pb-1  pt-3 font-bold text-green-300">{`> cat education.txt`}</div>
            {education.map((edu) => (
              <>
                <div
                  className="pb-1 pl-4"
                  key={edu.university}
                >{`${edu.university} `}</div>
                <div className="pb-1 pl-8">{`${edu.degree} [${edu.years}]`}</div>
              </>
            ))}
            <div className="pb-1 pt-3 font-bold text-green-300">{`> cat work.txt`}</div>
            <RenderItems items={workExperience} imgAlt="Company logo" />
            <div className="pb-1 pt-2 font-bold text-green-300">{`> cat side_projects.txt`}</div>
            <RenderItems items={sideProjects} imgAlt="Project logo" />
            <div className="pb-1 pt-2 font-bold text-green-300">{`> cat nfts.txt`}</div>
            <RenderItems items={nfts} imgAlt="NFT logo" />
          </div>
        </div>
      </div>
    </main>
  );
}
