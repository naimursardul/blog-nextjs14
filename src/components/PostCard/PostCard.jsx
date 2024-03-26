import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <div className={styles.img_container}>
          <Image src={post?.img} alt="" fill className={styles.img} />
        </div>
        <p>{post?.createdAt.toString().slice(4, 16)}</p>
      </div>
      <div className={styles.bottom_container}>
        <h2>
          <Link href={`/blog/${post?.slug}`}>{post?.title}</Link>
        </h2>
        <p>{post?.desc}</p>
        <Link href={`/blog/${post?.slug}`} className={styles.link}>
          READ MORE...
        </Link>
      </div>
    </div>
  );
}
