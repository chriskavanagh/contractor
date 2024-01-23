import styles from "./page.module.css";
import "../globals.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>How to contact us</h1>
        <h3 className={styles.phone}>Phone: 540-397-8715</h3>
      </div>
    </section>
  );
}
