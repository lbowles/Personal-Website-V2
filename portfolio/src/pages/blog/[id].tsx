import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData, PostContentData } from "../../util/posts";

interface PostProps {
  postData: PostContentData;
}

export default function Post({ postData }: PostProps) {
  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
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
