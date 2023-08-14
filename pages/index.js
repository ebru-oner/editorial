import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";

import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/api";
import { shantell } from "../utils/fonts";

export default function Home({ allPosts }) {
  return (
    <Layout>
      <Head>
        <title>Web developer essentials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <h1 className={classnames(styles.title, shantell.className)}>
          Navigating the Art and Science of Web Development
        </h1>

        <div className={styles.grid}>
          {/* <h3>Design Thinking mindset </h3>
            <h3>React hooks </h3>
            <h3>Language of colors </h3>
            <h3>Wizard of OZ </h3> */}
          {allPosts.map((post, index) => (
            <div key={index} className={styles.card}>
              <Link href={`/posts/${post.id}`} className={styles.cardMedia}>
                <img
                  src={`assets/blog/${post.id}/cover.webp`}
                  alt="Color pencils aligned at the bottom"
                  className={styles.cardImage}
                />

                <h3 className={shantell.className}>
                  {post.title.split(":")[0].trim()}
                </h3>
              </Link>
              <p className={shantell.className}>
                How to unlock your creative potential.
              </p>
              <div className={styles.buttonsContainer}>
                <Link href={`/posts/${post.id}`}>Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "id",
    "title",
    "summary",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
