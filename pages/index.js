import Hero from "../components/homePage/Hero";
import FeaturedPosts from "../components/homePage/FeaturedPosts";

const DUMMY_DATA = [
  {
    slug: "dummy-1",
    title: "dummy 3",
    image: "getting-started-nextjs.png",
    excerpt: "dummy 3",
    date: "2022-02-10",
  },
  {
    slug: "dummy 2",
    title: "dummy 3",
    image: "getting-started-nextjs.png",
    excerpt: "dummy 3",
    date: "2022-02-10",
  },

  {
    slug: "dummy 3",
    title: "dummy 3",
    image: "getting-started-nextjs.png",
    excerpt: "dummy 3",
    date: "2022-02-10",
  },

  {
    slug: "dummy 4",
    title: "dummy 4",
    image: "getting-started-nextjs.png",
    excerpt: "dummy 4",
    date: "2022-02-10",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </>
  );
};

export default HomePage;
