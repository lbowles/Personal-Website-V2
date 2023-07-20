// src/pages/blog.tsx

import Link from "next/link";
import { GetStaticProps } from "next";
import { getSortedPostsData, PostData } from "../util/posts";

interface BlogProps {
  allPostsData: PostData[];
}

export default function Blog({ allPostsData }: BlogProps) {
  return (
    <div>
      <h1>Blog</h1>
      {allPostsData.map(({ id, date, title }) => (
        <div key={id}>
          <Link href={`/blog/${id}`}>
            <h2>{title}</h2>
            <p>{date}</p>
          </Link>
        </div>
      ))}
    </div>
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
