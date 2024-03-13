import React from "react";
import styles from "./postcard.module.css";
import Image from "next/image";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/blog-2.jpg" alt="post" fill className={styles.img} />
        </div>
        <span className={styles.date}>12.03.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore id
          quis quibusdam rem, quia mollitia sunt aspernatur corporis possimus,
          modi, laudantium laborum ratione accusamus expedita ex ut repellat
          illum eligendi.
        </p>
        <Link href="/blog/post" className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
