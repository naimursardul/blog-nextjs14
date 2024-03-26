"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { FaBars } from "react-icons/fa6";
import { handleLogout } from "@/lib/action";

const links = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Links({ session }) {
  // console.log(session?.user);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, i) => (
          <NavLink link={link} key={i} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink link={{ name: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout_btn}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink link={{ name: "Login", path: "/login" }} />
        )}
      </div>

      <FaBars className={styles.open_btn} onClick={() => setOpen(!open)} />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, i) => (
            <NavLink key={i} link={link} />
          ))}
          {/*  */}
          <div className={styles.extra_links}>
            {session?.user ? (
              <>
                {session.user?.isAdmin && (
                  <NavLink link={{ name: "Admin", path: "/admin" }} />
                )}
                <form action={handleLogout}>
                  <button className={styles.logout_btn}>Logout</button>
                </form>
              </>
            ) : (
              <NavLink link={{ name: "Login", path: "/login" }} />
            )}
          </div>
          {/*  */}
        </div>
      )}
    </div>
  );
}
