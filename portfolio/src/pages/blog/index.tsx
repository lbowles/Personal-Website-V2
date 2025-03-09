import "../../app/globals.css";

import Link from "next/link";
import { GetStaticProps } from "next";
import { getSortedPostsData, PostData } from "../../util/posts";
import LinkButton from "../../components/LinkButton";
import Footer from "@/components/Footer";

interface BlogProps {
  allPostsData: PostData[];
}

//TODO: fix footer

export default function Blog({ allPostsData }: BlogProps) {
  return (
    <>
      <main className="flex flex-col min-h-[85vh] p-4 mx-auto max-w-[685px]">
        <div className=" my-12">
          <h1 className="text-3xl font-bold text-black  mb-2">
            Luke's thoughts
          </h1>
          <LinkButton href="/">← Back</LinkButton>
        </div>
        <div className="w-full bg-black border-black rounded-md drop-shadow-3xl subpixel-antialiased pb-2">
          <div className="bg-gray-100 border-b border-gray-500 rounded-t-md text-black h-6 flex items-center text-center">
            <div className="flex ml-2 items-center border-red-900 bg-red-500 rounded-full w-3 h-3"></div>
            <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"></div>
            <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"></div>
            <div className="mx-auto pr-16 text-sm">Terminal</div>
          </div>
          <div className="pl-1 pt-1 h-auto text-green-200 font-mono text-xs bg-black rounded-md">
            <div className="font-bold text-stone-100 pb-2">{`> cat blogPosts.txt`}</div>

            {allPostsData.map(({ id, date, title }) => (
              <div key={id} className="">
                <div className="pl-2 pb-1 ">
                  <Link href={`/blog/${id}`}>
                    <p className="font-medium text-stone-100 hover:underline ml-4">
                      {date + " " + title}
                    </p>
                  </Link>
                </div>
                <div className="pl-4 pb-1"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
