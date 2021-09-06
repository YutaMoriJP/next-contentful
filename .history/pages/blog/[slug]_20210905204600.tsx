import { createClient, EntryCollection, Entry } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res: EntryCollection<unknown extends {fields: {slug: string}}> = await client.getEntries({
    content_type: "firstBlogPost",
  });
  const paths = res.items.map(content => {
    return {
      params: { slug: content.fields.slug },
    };
  });

  return { paths };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;
};

const BlogPost = (): JSX.Element => {
  return (
    <article>
      <h1>BlogPost</h1>
    </article>
  );
};

export default BlogPost;
