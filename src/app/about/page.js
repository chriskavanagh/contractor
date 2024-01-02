import styles from "./page.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div>
        <h1 className={styles.top__header}>About Us</h1>
      </div>
      <div className={styles.content}>
        <p className={styles.item}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem rerum et nam veniam,
          laborum dicta mollitia, ipsum ipsam, exercitationem provident illum! Et ducimus amet quis
          nemo rem dignissimos quibusdam iusto. Omnis tempore corrupti nobis cum illo velit!
        </p>
      </div>
    </section>
  );
}
