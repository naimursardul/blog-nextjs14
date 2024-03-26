import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/PostUser/PostUser";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post?.slug,
    description: post?.desc,
  };
};

export default async function Page({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image src={post?.img} alt="" fill className={styles.img} />
      </div>
      <div className={styles.text_container}>
        <h1>{post?.title}</h1>
        <div className={styles.detail_container}>
          <PostUser post={post} />
          <div className={styles.detail}>
            <div className={styles.detail_title}>Published</div>
            <div className={styles.detail_value}>
              {post.createdAt.toString().slice(4, 16)}
            </div>
          </div>
        </div>
        <p>{post?.desc}</p>
      </div>
    </div>
  );
}
