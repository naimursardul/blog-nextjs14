import Link from "next/link";
import styles from "./Navbar.module.css";
import { auth } from "@/lib/auth";
import MobileNav from "../MobileNav/MobileNav";
import NavLink from "./navLink/NavLink";
import { handleLogout } from "@/lib/action";

const links = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default async function Navbar() {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
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
        <div className={styles.mobile_nav}>
          <MobileNav session={session} links={links} />
        </div>
      </div>
    </div>
  );
}
