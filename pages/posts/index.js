import AllPost from "../../components/allPostPage/AllPost";

const DUMMY_DATA = [
  {
    slug: "dummy 1",
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

  {
    slug: "dummy 5",
    title: "dummy 5",
    image: "getting-started-nextjs.png",
    excerpt: "dummy 5",
    date: "2022-02-10",
  },
];

const AllPostsPage = () => {
  return <AllPost posts={DUMMY_DATA} />;
};

export default AllPostsPage;
