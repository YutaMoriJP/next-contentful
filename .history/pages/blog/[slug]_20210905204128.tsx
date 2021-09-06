import { createClient, EntryCollection, Entry } from "contentful";

const getStaticPath = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res: EntryCollection<unknown> = await client.getEntries({
    content_type: "firstBlogPost",
  });
  const paths = res.items.map(({ fields: { slug } }:fields:{slug: string}) => {
    return {
      params: { slug },
    };
  });
};

const BlogPost = (): JSX.Element => {
  return (
    <article>
      <h1>BlogPost</h1>
    </article>
  );
};

export default BlogPost;
