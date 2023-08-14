import Head from "next/head";

import Container from "../../components/container";
import Layout from "../../components/Layout";
import PostBody from "../../components/postBody";
import PostHeader from "../../components/postHeader";
import { getAllPosts, getPostsBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ post }) {
  return (
    <Layout>
      <Container>
        <article className="mb-32">
          <Head>
            <meta property="og:image" content={post.ogImage.url} />
            <title>{post.title}</title>
          </Head>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
          />
          <div className={utilStyles.quote}>
            {/* <p className={utilStyles.quoteContent}>{post.quote.content}</p>
          <p className={utilStyles.quoteAuthor}>{post.quote.author}</p> */}
          </div>
          <PostBody content={post.content} />
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const posts = getPostsBySlug(params.slug, [
    "id",
    "title",
    "summary",
    "date",
    "quote",
    "slug",
    "coverImage",
    "ogImage",
    "content",
  ]);

  const content = await markdownToHtml(posts.content);
  return {
    props: {
      post: {
        ...posts,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
