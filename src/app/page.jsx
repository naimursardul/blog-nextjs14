import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2>Creative Thaught Agency</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          abore accusamus itaque labore accusamus itaque
        </p>
        <div className={styles.btns}>
          <Link href={`/`} className={styles.btn}>
            Learn more
          </Link>
          <Link href={`/contact`} className={styles.btn}>
            Contact
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brands_img} />
        </div>
      </div>
      <div className={styles.img_container}>
        <Image src="/hero.gif" alt="" fill className={styles.hero_img} />
      </div>
    </div>
  );
}
