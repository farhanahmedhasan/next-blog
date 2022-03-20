import Image from "next/image";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostContent from "../posts/PostContent";
import PostHeader from "../posts/PostHeader";

import styles from "./postDetail.module.css";

const PostDetail = ({ post }) => {
  const { title, image, content, slug } = post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const MarkdownComponents = {
    p: (paragraph) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className="w-[1024px] mx-auto h-auto">
            <Image src={`/images/posts/${slug}/${image.properties.src}`} width={1024} height={520} alt={image.alt} />;
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" {...props}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <section className="bg-gradient-primary-radial py-20 -mt-[72px]">
      <div className="container">
        <article className="max-w-6xl mx-auto mt-[72px]">
          <PostHeader title={title} image={imagePath} />
          <div className="bg-primary-pink h-[4px] w-full mb-20"></div>

          <ReactMarkdown components={MarkdownComponents} className={`${styles.content} text-2xl text-primary-pink`}>
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  );
};

export default PostDetail;
