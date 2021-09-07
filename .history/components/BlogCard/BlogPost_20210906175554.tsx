import style from "./style.module.css";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface Contents {
  value: string;
  id: string;
}

const Post = ({ post }): JSX.Element => {
  const { title, readingTime, thumbnail } = post.fields;
  const { createdAt } = post.sys;
  const date = new Date(createdAt).toDateString();

  console.log("post", post);

  const contents: Contents[] = post.fields.mainPost.content.map(
    ({ value }): Contents => ({
      value,
      id: uuidv4(),
    })
  );
  contents.log(contents);
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
