import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About page",
  description: "This is next 14 blog about Page",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2>About Agency</h2>
        <h1>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>10 K+</h2>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h2>10 K+</h2>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h2>10 K+</h2>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.img_container}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.about_img}
        />
      </div>
    </div>
  );
}
