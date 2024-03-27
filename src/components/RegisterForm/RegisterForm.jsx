"use client";

import { register } from "@/lib/action";
import styles from "./RegisterForm.module.css";
import { useFormState } from "react-dom";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input
        type="password"
        name="passwordRepeat"
        placeholder="password again"
      />
      <small style={{ color: "red" }}>{state?.error}</small>
      <button className={styles.btn}>Register</button>
    </form>
  );
};

export default RegisterForm;
