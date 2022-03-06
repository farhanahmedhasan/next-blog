import ReactMarkdown from "react-markdown";

import PostContent from "../posts/PostContent";
import PostHeader from "../posts/PostHeader";

const PostDetail = ({ post }) => {
  const { title, image, content } = post;

  const imagePath = `/images/posts/${image}`;

  return (
    <section className="bg-gradient-primary-radial py-20 -mt-[72px]">
      <div className="container">
        <article className="max-w-6xl mx-auto mt-[72px]">
          <PostHeader title={title} image={imagePath} />
          <div className="bg-primary-pink h-[4px] w-full mb-20"></div>

          <ReactMarkdown className="font-semibold text-3xl text-primary-pink">{content}</ReactMarkdown>
        </article>
      </div>
    </section>
  );
};

export default PostDetail;
