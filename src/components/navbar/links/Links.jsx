"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLinks from "./navLinks/NavLinks";
import Image from "next/image";
const Links = () => {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return <NavLinks key={link.title} link={link} />;
        })}
        {session ? (
          <>
            {isAdmin && <NavLinks link={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLinks link={{ title: "Login", path: "/login" }} />
          </>
        )}
      </div>

      <Image
        src="/menu.png"
        onClick={() => setOpen((prev) => !prev)}
        alt=""
        className={styles.menuBtn}
        height={30}
        width={30}
      />

      {open ? (
        <div className={styles.mobileLinks}>
          {links.map((link) => {
            return <NavLinks key={link.title} setOpen={setOpen} link={link} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Links;
