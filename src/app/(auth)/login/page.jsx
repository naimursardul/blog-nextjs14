import { handleLogin } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";
import { FaGithub } from "react-icons/fa6";

export default async function Page() {
  return (
    <div className={styles.container}>
      <form action={handleLogin} className={styles.github_form}>
        <button className={styles.github_btn}>
          <FaGithub />
          <span>Login with Github</span>
        </button>
      </form>
      <LoginForm />
    </div>
  );
}
