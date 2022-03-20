import Link from "next/link";
import Image from "next/image";

const PostItem = ({ post }) => {
  const { date, title, excerpt, image, slug } = post;

  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className="border border-gray-300 bg-white shadow-lg rounded-sm hover:shadow-lg overflow-hidden">
      <Link href={`/posts/${slug}`}>
        <a>
          {/* Image */}
          <div className="flex flex-col ">
            <Image
              className="block align-middle"
              src={`/images/posts/${slug}/${image}`}
              objectFit="cover"
              alt={slug}
              height={280}
              width={420}
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="text-primary-pink text-2xl font-semibold">{title}</h3>
            <time className="text-gray-300 mb-3 inline-block">{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
