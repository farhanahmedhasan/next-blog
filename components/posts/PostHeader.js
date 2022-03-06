import Image from "next/image";

const PostHeader = ({ title, image }) => {
  return (
    <header className="flex justify-between items-center mb-20">
      <h1 className="text-primary-pink font-semibold text-4xl">{title}</h1>
      <Image src={image} alt={title} objectFit="cover" width={320} height={220} />
    </header>
  );
};

export default PostHeader;
