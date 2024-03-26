"use client";

import { addPost } from "@/lib/action";
import styles from "./AdminAddPost.module.css";
import { useFormState } from "react-dom";

function AdminAddPost({ userId }) {
  console.log(userId);
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea name="desc" placeholder="description" rows="10"></textarea>
      <input type="hidden" name="userId" value={userId} />
      <small>{state?.error}</small>
      <button className={styles.btn}>Add</button>
    </form>
  );
}

export default AdminAddPost;
