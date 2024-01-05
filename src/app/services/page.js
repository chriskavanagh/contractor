import styles from "./page.module.css";
import Image from "next/image";

export default function Services() {
  return (
    <section className={styles.services}>
      <div>
        <h1 className={styles.title}>Our Services</h1>
      </div>
      {/* <div>
        <h3 className={`${styles.subtitle} ${styles.center__text}`}>Make Room For Your Memories</h3>
      </div> */}
      <div className={styles.content__wrapper}>
        <div className={styles.item}>
          <h3 className={styles.item__head}>Roofing</h3>
          <Image src="/img/services/roofing.jpg" height={500} width={400} alt="roofer" />
        </div>
        <div className={styles.item}>
          <h3 className={styles.item__head}>Kitchens</h3>
          <Image
            src="/img/newKitchen.jpg"
            priority={true}
            height={500}
            width={400}
            alt="kitchens"
          />
        </div>
        <div className={styles.item}>
          <h3 className={styles.item__head}>Bathrooms</h3>
          <Image src="/img/services/bathroom.jpeg" height={500} width={400} alt="bathroom" />
        </div>
        <div className={styles.item}>
          <h3 className={styles.item__head}>Decks</h3>
          <Image src="/img/services/deck-1.jpg" height={500} width={400} alt="services" />
        </div>
        <div className={styles.item}>
          <h3 className={styles.item__head}>Additions</h3>
          <Image src="/img/services/addition.jpg" height={500} width={400} alt="addition" />
        </div>
        <div className={styles.item}>
          <h3 className={styles.item__head}>Remodelling</h3>
          <Image src="/img/services/remodeling.jpg" height={500} width={400} alt="remodelling" />
        </div>
      </div>
    </section>
  );
}
