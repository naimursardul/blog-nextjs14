import styles from "./AdminAllPosts.module.css";
import { deletePost, getPagePost } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";
import Pagination from "../Pagination/Pagination";

async function AdminAllPost({ searchParams }) {
  console.log(searchParams);
  let page = parseInt(searchParams?.page, 10);
  page = !page || page < 1 ? 1 : page;
  console.log(page);

  const paginationConfig = {
    perPage: 5,
    pageUrl: "/admin/posts?page=",
    offsetNumber: 3,
    page,
  };

  const data = await getPagePost(page, paginationConfig.perPage);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {data?.posts.map((post) => (
          <div className={styles.post} key={post?._id}>
            <Link href={`/blog/${post?.slug}`} className={styles.details}>
              <Image
                src={post?.img || "/noavatar.png"}
                alt=""
                width={50}
                height={50}
              />
              <b>{post?.title}</b>
            </Link>
            <form action={deletePost} className={styles.formContainer}>
              <input type="hidden" name="id" value={post?._id} />
              <button className={styles.btn}>Delete</button>
            </form>
          </div>
        ))}
      </div>
      <Pagination paginationConfig={paginationConfig} />
    </div>
  );
}

export default AdminAllPost;
