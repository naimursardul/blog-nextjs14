"use client";

import Link from "next/link";
import styles from "./NavLink.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.container} ${
        pathName === link?.path ||
        (pathName.includes("admin") &&
          pathName.includes(link?.path) &&
          link?.path !== "/")
          ? styles.active
          : {}
      }`}
      href={link?.path}
    >
      {link?.name}
    </Link>
  );
}
