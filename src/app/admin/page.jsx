import { auth } from "@/lib/auth";
import styles from "./admin.module.css";
import Link from "next/link";

async function Admin() {
  const session = await auth();
  return (
    <div className={styles.container}>
      <h1>
        Welcome to Admin Pannel, <span>{session?.user.username}</span>
      </h1>
    </div>
  );
}

export default Admin;

{
  /* <div className={styles.row}>
        <div className={styles.col}>
          <h1>All Posts</h1>
          <Suspense fallback={"Loading..."}>
            <AdminAllPost />
          </Suspense>
        </div>
        <div className={styles.col}>
          <h1>Add Post</h1>
          <AdminAddPost userId={session?.user.id} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <h1>All Users</h1>
          <AdminAllUsers searchParams={searchParams} />
        </div>
        <div className={styles.col}>
          <h1>Add User</h1>
          <AdminAddUser />
        </div>
      </div> */
}
