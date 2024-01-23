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
          <Image src="/img/services/roofer.jpg" fill /*height={500} width={400}*/ alt="roofer" />
          <div className={styles.txtImg}>
            <h2>Roofing</h2>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            src="/img/services/newKitchen.jpg"
            priority={true}
            fill
            /* height={500}
            width={400} */
            alt="kitchens"
          />
          <div className={styles.txtImg}>
            <h2>Kitchens</h2>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            src="/img/services/bathroom.jpeg"
            fill
            /*height={500} width={400}*/ alt="bathroom"
          />
          <div className={styles.txtImg}>
            <h2>Bathrooms</h2>
          </div>
        </div>
        <div className={styles.item}>
          <Image src="/img/services/deck-1.jpg" fill /*height={500} width={400}*/ alt="services" />
          <div className={styles.txtImg}>
            <h2>Decks</h2>
          </div>
        </div>

        <div className={styles.item}>
          <Image
            src="/img/services/addition.jpg"
            fill
            /*height={500} width={400}*/ alt="addition"
          />
          <div className={styles.txtImg}>
            <h2>Additions</h2>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            src="/img/services/remodeling.jpg"
            fill
            /*height={500} width={400}*/ alt="remodelling"
          />
          <div className={styles.txtImg}>
            <h2>Remodelling</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
