import styles from "./page.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div>
        <h1 className={styles.title}>Our Services</h1>
      </div>
      <div className={styles.content__wrapper}>
        <div className={styles.item}>Roofing</div>
        <div className={styles.item}>Remodelling</div>
        <div className={styles.item}>Additions</div>
        <div className={styles.item}>Decks</div>
        <div className={styles.item}>Porches</div>
        <div className={styles.item}>Kitchens</div>
      </div>
    </section>
  );
}
