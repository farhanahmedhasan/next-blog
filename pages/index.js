import Head from "next/head";

import Hero from "../components/homePage/Hero";
import FeaturedPosts from "../components/homePage/FeaturedPosts";

import { getFeaturedPosts } from "../lib/PostUtil";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Featured Blogs</title>
        <meta name="description" content="Best blog site from JS community" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 3600,
  };
}

export default HomePage;
