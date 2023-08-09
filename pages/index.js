import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Web developer essentials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>
          Navigating the Art and Science of Web Development
        </h1>

        <div className={styles.grid}>
          {/* <h3>Design Thinking mindset </h3>
            <h3>React hooks </h3>
            <h3>Language of colors </h3>
            <h3>Wizard of OZ </h3> */}
          <div className={styles.card}>
            <Link href="/posts/designthinking" className={styles.cardMedia}>
              <img
                src="assets/blog/designthinking/cover.webp"
                alt="Color pencils aligned at the bottom"
                className={styles.cardImage}
              />

              <h3>Design Thinking</h3>
            </Link>
            <p>How to unlock your creative potential.</p>
            <div className={styles.buttonsContainer}>
              <Link href="/posts/first-post">Read more</Link>
            </div>
          </div>

          <div className={styles.card}>
            <Link href="/posts/hooks" className={styles.cardMedia}>
              <img
                src="assets/blog/hooks/cover.webp"
                alt="Lego blocks "
                className={styles.cardImage}
              />

              <h3>React Hooks</h3>
            </Link>
            <p>Helpers to remember, organize and manage things in the code.</p>
            <div className={styles.buttonsContainer}>
              <Link href="/posts/hooks">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
