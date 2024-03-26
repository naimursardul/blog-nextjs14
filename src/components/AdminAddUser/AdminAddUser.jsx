"use client";

import { getUsers } from "@/lib/data";
import styles from "./AdminAddUser.module.css";
import { addUser } from "@/lib/action";
import { useFormState } from "react-dom";

async function AdminAddUser() {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="img" placeholder="img" />
      <input type="password" name="password" placeholder="password" />
      <select name="isAdmin">
        <option value={false}>Is Admin?</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <small>{state?.error}</small>
      <button className={styles.btn}>Add</button>
    </form>
  );
}

export default AdminAddUser;
