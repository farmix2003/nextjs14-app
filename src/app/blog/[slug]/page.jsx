import React from "react";
import styles from "./singlepost.module.css";
import Image from "next/image";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/blog-1.jpg"
          alt="single post"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image
            className={styles.avatar}
            width={50}
            height={50}
            src="/noavatar.png"
            alt=""
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Mason Mount</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>14.03.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor
          praesentium labore quia maiores ullam animi tempora! Aperiam officiis
          non itaque aliquid, totam praesentium distinctio numquam, maxime, illo
          aut facere?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
