"use client";

import { useFormStatus } from "react-dom";
import styles from "./SubmitBtn.module.css";

export default function SubmitBtn({ title }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className={styles.btn}>
      {pending ? (
        <div className={styles.btn_loader}></div>
      ) : (
        <div className={styles.title}>{title}</div>
      )}
    </button>
  );
}
