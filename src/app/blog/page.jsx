import PostCard from "@/components/PostCard/PostCard";
import styles from "./blog.module.css";
import Pagination from "@/components/Pagination/Pagination";
import { getPagePost } from "@/lib/action";

export default async function Page({ searchParams }) {
  let page = parseInt(searchParams?.page, 10);
  page = !page || page < 1 ? 1 : page;
  console.log(page);

  const paginationConfig = {
    perPage: 1,
    pageUrl: "/blog?page=",
    offsetNumber: 3,
    page,
  };

  const data = await getPagePost(page, paginationConfig.perPage);

  return (
    <div className={styles.container}>
      <div className={styles.post_container}>
        {data.posts?.map((post) => (
          <div key={post?.id} className={styles.blog_post}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      <Pagination paginationConfig={paginationConfig} />
    </div>
  );
}
