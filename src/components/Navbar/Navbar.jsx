import Link from "next/link";
import Links from "./links/links";
import styles from "./Navbar.module.css";
import { auth } from "@/lib/auth";

export default async function Navbar() {
  const session = await auth();
  // console.log(session);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}
