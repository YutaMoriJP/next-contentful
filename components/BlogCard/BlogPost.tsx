import style from "./style.module.css";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Paragraph from "./Paragraph";
import { PostProps } from "../../pages/blog/[slug]";

interface Contents {
  value: string;
  id: string;
}

const Post = ({ item }: PostProps): JSX.Element => {
  const { title, readingTime, featuredImage } = item.fields;
  const { createdAt } = item.sys;
  const date = new Date(createdAt).toDateString();
  //gets content from post, and adds a unique id so it can be used as the key value
  const contents: Contents[] = item.fields.mainPost.content.map(
    ({ content: [{ value }] }): Contents => ({
      value,
      id: uuidv4(),
    })
  );

  return (
    <article className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <p>Posted at: {date}</p>
      <p className={style.readingTime}>
        Reading Time {readingTime} minute{+readingTime > 1 ? "s" : ""}.
      </p>
      <article className={style.imgContainer}>
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={300}
          height={200}
        />
      </article>
      {contents.map(content => (
        <Paragraph key={content.id}>{content.value}</Paragraph>
      ))}
    </article>
  );
};

export default Post;
