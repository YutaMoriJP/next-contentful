import style from "./style.module.css";
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Post = ({ post }): JSX.Element => {
  const { title, slug, readingTime, thumbnail } = post.fields;
  const { createdAt } = post.sys;
  const date = new Date(createdAt).toDateString();
  const { asPath }: NextRouter = useRouter();
  return (
    <article className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <p>Posted at: {date}</p>
      <p className={style.readingTime}>Reading Time {readingTime} minute.</p>

      <Image
        src={"https:" + thumbnail.fields.file.url}
        width={thumbnail.fields.file.details.image.width / 4}
        height={thumbnail.fields.file.details.image.height / 6}
      />
    </article>
  );
};

export default Post;
