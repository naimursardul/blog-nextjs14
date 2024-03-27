import { handleLogin, register } from "@/lib/action";
import styles from "./register.module.css";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <RegisterForm />
      <p className={styles.or}>or,</p>
      <form action={handleLogin} className={styles.github_form}>
        <button className={styles.github_btn}>
          <FaGithub />
          <span>Register with Github</span>
        </button>
      </form>
      <div className={styles.login_link}>
        <small>
          <span>Have an account?</span>{" "}
          <Link href={"/login"}>
            <b>Login</b>
          </Link>
        </small>
      </div>
    </div>
  );
}
