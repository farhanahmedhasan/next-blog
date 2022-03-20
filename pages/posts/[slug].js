import PostDetail from "../../components/postDetailPage/PostDetail";
import { getPostData } from "../../lib/PostUtil";

const PostDetailsPage = (props) => {
  if (!props.postData) {
    <section className="py-20 bg-gray-100">
      <div className="container">
        <h2 className="text-center font-semibold text-4xl mb-16">Loading....</h2>
      </div>
    </section>;
  }

  return <PostDetail post={props.postData} />;
};

export function getStaticProps(context) {
  const { slug } = context.params;
  const postData = getPostData(slug);

  return {
    props: {
      postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default PostDetailsPage;
