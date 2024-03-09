import React from "react";
import styles from "./links.module.css";
import NavLinks from "./navLinks/NavLinks";
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
  const session = true;
  const isAdmin = true;
  return (
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
  );
};

export default Links;
