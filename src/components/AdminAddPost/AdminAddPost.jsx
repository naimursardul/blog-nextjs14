"use client";

import { addPost } from "@/lib/action";
import styles from "./AdminAddPost.module.css";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

function AdminAddPost({ userId }) {
  const [state, formAction] = useFormState(addPost, undefined);

  if (state?.success) {
    redirect(`/blog/${state?.newPost.slug}`);
  }
  return (
    <form action={formAction} className={styles.container}>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea name="desc" placeholder="description" rows="10"></textarea>
      <input type="hidden" name="userId" value={userId} />
      <small>{state?.error}</small>
      <SubmitBtn title={"Add"} />
    </form>
  );
}

export default AdminAddPost;
