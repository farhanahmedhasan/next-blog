import { useRouter } from "next/router";
const PostDetailsPage = () => {
  const router = useRouter();
  console.log(router);
  console.log(router.query.slug);
  return <div>Enter</div>;
};

export default PostDetailsPage;
