import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

const CoverImage = ({ title, src, slug }) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
      style={{ width: "100%" }}
    />
  );

  const containerStyles = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={containerStyles}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
