import React from "react";
import style from "./style.module.css";

const Content = () => {
  return (
    <article className={style.card}>
      <h1 className={style.title}>{title}</h1>
      <p>Posted at: {date}</p>
      <p className={style.readingTime}>Reading Time {readingTime} minute.</p>
      <Link href={`${asPath}/${slug}`}>
        <a className={style.link}>Read Post</a>
      </Link>
    </article>
  );
};

export default Content;
