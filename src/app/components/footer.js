import styles from "../styles/footer.module.css";
import "../globals.css";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.wrapper}>
        <h4 className={styles.copyright}>&#169;2024&nbsp;</h4>
        <h4 className={styles.business__name}>Nester Construction/Remodelling</h4>
      </div>
    </section>
  );
}
