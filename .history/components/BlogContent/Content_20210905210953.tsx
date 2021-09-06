import React from "react";
import style from "./style.module.css";
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";

const Content = ({ post }) => {
  const { title, slug, readingTime } = post.fields;
  const { createdAt } = post.sys;
  const date = new Date(createdAt).toDateString();
  const { asPath }: NextRouter = useRouter();
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
