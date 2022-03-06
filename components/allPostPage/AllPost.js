import PostGrid from "../posts/PostGrid";

const AllPost = ({ posts }) => {
  return (
    <section className="py-20 bg-gradient-primary-radial -mt-[72px]">
      <div className="container">
        <h2 className="text-center font-semibold text-4xl mb-16 mt-[72px]">All Posts</h2>

        <PostGrid posts={posts} />
      </div>
    </section>
  );
};

export default AllPost;
