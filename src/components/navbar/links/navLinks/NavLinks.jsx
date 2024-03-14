"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./navLinks.module.css";
const NavLinks = ({ link, setOpen }) => {
  const pathName = usePathname();
  return (
    <>
      <Link
        onClick={() => setOpen(false)}
        href={link.path}
        className={`${styles.container} ${
          pathName === link.path && styles.active
        }`}
      >
        {link.title}
      </Link>
    </>
  );
};

export default NavLinks;
