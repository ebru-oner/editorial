import Link from "next/link";
import Image from "next/image";

import styles from "../styles/general-styles.module.css";

const CoverImage = ({ title, src, slug }) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={1300}
      height={630}
      style={{ width: "100%", marginBottom: "1rem" }}
    />
  );

  return (
    <section className={styles.coverimage}>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </section>
  );
};

export default CoverImage;
