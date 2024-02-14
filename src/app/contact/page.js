import styles from "./page.module.css";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import "../globals.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>How To Contact Us</h1>
        <div className={styles.content}>
          <h3 className={styles.phone}>
            <span className={styles.phoneIcon}>
              <BsFillTelephoneInboundFill color="#C6011F" />
            </span>
            <span className="phoneNum"> Phone: 540-397-8715</span>
          </h3>
          <h3 className={styles.emailTxt}>
            <span className={styles.emailIcon}>
              <MdEmail color="#C6011F" />
            </span>
            <span className="email">Email: darrylnester@gmail.com</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
