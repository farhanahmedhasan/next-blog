import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "data/posts");

export const getPostData = (postIndentifier) => {
  const postSlug = postIndentifier.replace(/\.md$/, ""); // REmove The File Extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
