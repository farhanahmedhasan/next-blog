import AllPost from "../../components/allPostPage/AllPost";

import Head from "next/head";

import { getAllPosts } from "../../lib/PostUtil";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All the porgramming posts that is related to JavaScript" />
      </Head>
      <AllPost posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },

    revalidate: 1800,
  };
}

export default AllPostsPage;
