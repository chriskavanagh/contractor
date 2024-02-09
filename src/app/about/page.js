import styles from "./page.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div>
        <h1 className={styles.top__header}>Our Story</h1>
      </div>
      <div className={styles.content}>
        <p className={styles.item}>
          Nester Construction was founded in 1988 by Raymond Nester Sr and his son Darryl Nester. Mr
          (Raymond) Nester Sr sadly passed away in 2012. Darryl quickly took over the reins as
          "President" of the business and kept it running strong.
        </p>
        <p className={styles.item}>
          Darryl, who still resides as the <span className={styles.boss}>BOSS</span>/President of
          the Company, still goes to work every day. Although the Company has been successful for
          many years, Darryl took it to a higher level of success which is ongoing today.
        </p>
        <p className={styles.item}>
          Roofing was the bread and butter of the Company. Hundreds of houses and business have had
          roofs installed in the area thanks to Nester Construction.
        </p>
        <p className={styles.item}>
          However, roofing is just one service the Company provides for customers. From remodelling,
          painting, a new deck, kitchen or bathroom Nester Construction does it and does it well. We
          even build new houses if that's your desire!
        </p>
        <p className={styles.item}>
          A special <span className={styles.thanks}>"Thank You"</span> to all our former, present,
          and future customers. It's because of "you" the customer that Nester Construction is in
          business.
        </p>
      </div>
    </section>
  );
}
