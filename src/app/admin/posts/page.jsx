import AdminAllPost from "@/components/AdminAllPosts/AdminAllPosts";
import styles from "./posts.module.css";

import { Suspense } from "react";
import AdminAddPost from "@/components/AdminAddPost/AdminAddPost";
import { auth } from "@/lib/auth";

export default async function AdminPosts({ searchParams }) {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>All Posts</h1>
        <AdminAllPost searchParams={searchParams} />
      </div>
      <div className={styles.section}>
        <h1>Add Post</h1>
        <AdminAddPost userId={session?.user.id} />
      </div>
    </div>
  );
}
