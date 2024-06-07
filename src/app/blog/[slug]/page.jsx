import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/PostUser/PostUser";
import { getPost } from "@/lib/data";
import Link from "next/link";
import { auth } from "@/lib/auth";

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
  const session = await auth();

  console.log(Date(post?.createdAt).toString());

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image src={post?.img} alt="" fill className={styles.img} />
      </div>
      <div className={styles.text_container}>
        <div className={styles.title_section}>
          <h1>{post?.title}</h1>
          {post?.userId === session?.user.id && (
            <Link className={styles.edit_btn} href={`/blog/edit/${post?.slug}`}>
              Edit
            </Link>
          )}
        </div>
        <div className={styles.detail_container}>
          <PostUser post={post} />
          <div className={styles.detail}>
            <div className={styles.detail_title}>Published</div>
            <div className={styles.detail_value}>
              {Date(post?.createdAt).toString().slice(4, 21)}
            </div>
          </div>
        </div>
        <p>{post?.desc}</p>
      </div>
    </div>
  );
}
