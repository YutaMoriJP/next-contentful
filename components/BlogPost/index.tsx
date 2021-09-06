import style from "./style.module.css";
import { useRouter, NextRouter } from "next/router";
import Image from "next/image";

const Post = ({ post }): JSX.Element => {
  const { title, readingTime, thumbnail } = post.fields;
  const { createdAt } = post.sys;
  const date = new Date(createdAt).toDateString();
  return (
    <article className={style.container}>
      <h1 className={style.title}>{title}</h1>
      <p>Posted at: {date}</p>
      <p className={style.readingTime}>Reading Time {readingTime} minute.</p>
      <article className={style.imgContainer}>
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height / 2}
          className={style.img}
        />
      </article>
    </article>
  );
};

export default Post;
