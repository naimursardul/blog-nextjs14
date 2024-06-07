"use client";

import { useState } from "react";
import styles from "./MobileNav.module.css";
import { FaBars } from "react-icons/fa6";
import NavLink from "../Navbar/navLink/NavLink";
import { handleLogout } from "@/lib/action";

export default function MobileNav({ session, links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
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
        </div>
      )}
    </>
  );
}
