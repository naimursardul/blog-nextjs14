import Image from "next/image";
import styles from "./PostUser.module.css";
import { getUser } from "@/lib/data";

export default async function PostUser({ post }) {
  const { userId } = post;
  const user = await getUser(userId);

  return (
    <>
      <Image
        src={user?.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.detail}>
        <div className={styles.detail_title}>Author</div>
        <div className={styles.detail_value}>{user?.username}</div>
      </div>
    </>
  );
}
