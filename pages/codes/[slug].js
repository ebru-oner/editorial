import Container from "../../components/container";
import Layout from "../../components/Layout";
import CodeBody from "../../components/codeBody";
import { getAllCodes, getCodeBySlug } from "../../lib/api";
import jsToHtml from "../../lib/jsToHtml";

export default function Post({ code }) {
  console.log(code.content);
  return (
    <Layout>
      <Container>
        <article>
          <CodeBody content={code.content} />
        </article>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const codes = getCodeBySlug(params.slug, ["content"]);
  const content = await jsToHtml(codes.content);
  return {
    props: {
      code: {
        ...codes,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const codes = getAllCodes(["slug"]);
  return {
    paths: codes.map((code) => {
      return {
        params: {
          slug: code.slug,
        },
      };
    }),
    fallback: false,
  };
}
