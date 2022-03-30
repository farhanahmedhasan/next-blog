import Head from "next/head";

import PostDetail from "../../components/postDetailPage/PostDetail";
import { getPostData } from "../../lib/PostUtil";

const PostDetailsPage = (props) => {
  console.log(props);
  if (!props.postData) {
    <section className="py-20 bg-gray-100">
      <div className="container">
        <h2 className="text-center font-semibold text-4xl mb-16">Loading....</h2>
      </div>
    </section>;
  }

  console.log(props);
  return (
    <>
      <Head>
        <title>{props.postData.title}</title>
        <meta name="description" content={props.postData.excerpt} />
      </Head>
      <PostDetail post={props.postData} />
    </>
  );
};

export function getServerSideProps(context) {
  const { slug } = context.params;
  const postData = getPostData(slug);

  return {
    props: {
      postData,
    },
  };
}

export default PostDetailsPage;
