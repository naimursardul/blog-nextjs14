import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.text}>
        Naimur Creative Thaughts Agency © All rights reserved.
      </div>
    </div>
  );
}
