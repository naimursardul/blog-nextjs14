import { handleLogin } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default async function Page() {
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <LoginForm />
      <p className={styles.or}>or,</p>
      <form action={handleLogin} className={styles.github_form}>
        <button className={styles.github_btn}>
          <FaGithub />
          <span>Login with Github</span>
        </button>
      </form>
      <div className={styles.register_link}>
        <small>
          <span>{"Don't have an account?"}</span>
          <Link href={"/register"}>
            <b>Register</b>
          </Link>
        </small>
      </div>
    </div>
  );
}
