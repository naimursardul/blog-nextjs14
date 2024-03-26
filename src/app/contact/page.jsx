import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact page",
  description: "This is next 14 blog contact Page",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <form action="" className={styles.form_container}>
        <input type="text" placeholder="Name and Surname" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Phone Number (Optional)" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="message"
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}
