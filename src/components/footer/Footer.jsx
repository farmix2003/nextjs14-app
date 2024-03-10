import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { logo } from "../../../public";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image className={styles.img} src={logo} alt="footer-logo" />
      </div>
      <div className={styles.text}>
        Farmix Creative Thoughts agency © All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
