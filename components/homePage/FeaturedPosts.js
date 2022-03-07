import PostGrid from "../posts/PostGrid";

const FeaturedPosts = ({ posts }) => {
  if (!posts || posts.length < 1) {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container">
          <h2 className="text-center font-semibold text-4xl mb-16">No Posts Available</h2>
        </div>
      </section>
    );
  }
  return (
    <section className="py-20 bg-gray-100">
      <div className="container">
        <h2 className="text-center font-semibold text-4xl mb-16">Featured Posts</h2>
        <PostGrid posts={posts} />
      </div>
    </section>
  );
};

export default FeaturedPosts;
