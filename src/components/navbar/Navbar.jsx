import { logo } from "../../../public";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerImgBox}>
        <Image className={styles.logo} src={logo} alt="logo" />
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
