import Image from "next/image";
import {
  education,
  aboutMe,
  skills,
  workExperience,
  sideProjects,
  nfts,
} from "../util/data";
import RenderItems from "../components/RenderItems";
import Links from "@/components/Links";
import Footer from "@/components/Footer";
// Define your data

export default function Home() {
  // Generate the current date string
  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <main className="flex min-h-screen flex-col justify-between mb-6">
      <div className="max-w-[636px] p-4 mx-auto">
        <div className="flex mb-12 mt-12">
          <Image
            src="/img/profile.jpg"
            width={70}
            height={70}
            className="rounded-md"
            alt="profilePic"
          />
          <div className="font-bold text-black text-3xl ml-4">
            <h1>Luke Bowles</h1>
            <Links />
          </div>
        </div>

        <div className="w-full drop-shadow-3xl subpixel-antialiased rounded-xl bg-black border-black mx-auto">
          <div
            className="flex items-center h-6 rounded-t-md bg-gray-100 border-b border-gray-500 text-center text-black"
            id="headerTerminal"
          >
            <div
              className="flex ml-2 items-center text-center border-red-900 bg-red-500  rounded-full w-3 h-3"
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
            <p className="pb-1">{`Last login: ${currentDate} on wwyk003`}</p>
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
      <Footer />
    </main>
  );
}
