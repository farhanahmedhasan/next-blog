import AllPost from "../../components/allPostPage/AllPost";

import { getAllPosts } from "../../lib/PostUtil";

const AllPostsPage = (props) => {
  return <AllPost posts={props.posts} />;
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
