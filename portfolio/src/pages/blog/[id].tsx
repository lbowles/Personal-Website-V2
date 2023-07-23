import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData, PostContentData } from "../../util/posts";
import "../../app/globals.css";
import LinkButton from "../../components/LinkButton";
import Footer from "@/components/Footer";

interface PostProps {
  postData: PostContentData;
}

export default function Post({ postData }: PostProps) {
  return (
    <>
      <main className="flex flex-col min-h-[85vh] p-4 mx-auto max-w-[800px]">
        <div className=" mt-12 mb-6">
          <h1 className=" text-3xl font-bold text-black  ">{postData.title}</h1>
          <h1 className="text-gray-400 text-md mt-1 mb-2">{postData.date}</h1>
          <LinkButton href="blog">← Back</LinkButton>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params) {
    const postData = await getPostData(params.id as string);
    return {
      props: {
        postData,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};
