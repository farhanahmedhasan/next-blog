import PostItem from "./PostItem";

const PostGrid = ({ posts }) => {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
