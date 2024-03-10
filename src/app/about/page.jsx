import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>About Agency</h3>
        <h2 className={styles.title}>
          We create digital ideas which are bigger, bolder, braver and better
        </h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illo,
          corporis tempora quisquam libero voluptatum, similique adipisci quas
          eligendi dignissimos dolore eos. Modi reiciendis laudantium odit ea
          cupiditate distinctio fugiat?
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h1>10K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.stat}>
            <h1>10K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.stat}>
            <h1>10K+</h1>
            <p>Year of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.png" fill alt="about" />
      </div>
    </div>
  );
};

export default About;
