import { useRouter } from "next/router";
import PostDetail from "../../components/postDetailPage/PostDetail";

const PostDetailsPage = () => {
  const DUMMY_POST = {
    slug: "dummy-1",
    title: "Getting Started With NextJS",
    image: "getting-started-nextjs.png",
    excerpt: "dummy 3",
    date: "2022-02-10",
    content: "# This is a first Post",
  };

  return <PostDetail post={DUMMY_POST} />;
};

export default PostDetailsPage;
