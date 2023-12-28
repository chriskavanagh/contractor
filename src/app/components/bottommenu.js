import styles from "../styles/bottommenu.module.css";

export default function BottomMenu({ children }) {
  return (
    <section className={styles.btmmenu__wrapper}>
      <div className={styles.btmmenu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>Roofs</li>
          <li className={styles.menu__item}>Additions</li>
          <li className={styles.menu__item}>Remodeling</li>
          <li className={styles.menu__item}>Kitchen & Baths</li>
          <li className={styles.menu__item}>Decks & Porches</li>
        </ul>
      </div>
    </section>
  );
}
