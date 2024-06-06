"use client";

import Link from "next/link";
import styles from "./AdminLinks.module.css";
import { usePathname } from "next/navigation";

export default function AdminLinks() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className={styles.link_section}>
      <Link
        className={pathName === "/admin" ? styles.active_link : styles.link}
        href="/admin"
      >
        Admin Home
      </Link>
      <Link
        className={
          pathName === "/admin/users" ? styles.active_link : styles.link
        }
        href="/admin/users"
      >
        Manage User
      </Link>
      <Link
        className={
          pathName === "/admin/posts" ? styles.active_link : styles.link
        }
        href="/admin/posts"
      >
        Manage Posts
      </Link>
    </div>
  );
}
