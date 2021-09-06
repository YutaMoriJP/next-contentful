import { createClient, EntryCollection, Entry } from "contentful";
import { GetStaticPaths, GetStaticProps } from "next";
import Content from "../../components/BlogContent/Content";

export const getStaticPaths = async (): Promise<{
  paths: { params: { slug: string } }[];
  fallback: false;
}> => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "firstBlogPost",
  });
  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async context => {
  const { slug } = context.params;
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const { items } = await client.getEntries({
    content_type: "firstBlogPost",
    "fields.slug": slug,
  });
  const [item] = items;
  return {
    props: { item },
  };
};

const BlogPost = ({ item }): JSX.Element => {
  console.log(item);
  return (
    <article>
      <h1>BlogPost</h1>
      <Content post={item} />
    </article>
  );
};

export default BlogPost;
