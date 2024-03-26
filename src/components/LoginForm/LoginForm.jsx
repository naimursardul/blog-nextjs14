"use client";

import { login } from "@/lib/action";
import styles from "./LoginForm.module.css";
import Link from "next/link";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className={styles.credential_form}>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />

      <small>{state?.error}</small>

      <button className={styles.btn}>Login with Credential</button>

      <div className={styles.register_link}>
        <small>
          <span>Don't have an account?</span>
          <Link href={"/register"}>
            <b>Register</b>
          </Link>
        </small>
      </div>
    </form>
  );
};

export default LoginForm;
