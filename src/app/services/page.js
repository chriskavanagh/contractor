import styles from "./page.module.css";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

export default function Services() {
  return (
    <section className={styles.services}>
      <div>
        <h1 className={styles.title}>What We Do</h1>
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
      <div className={styles.free__quote}>
        <div className={styles.free}>Free Quote/Call Us&nbsp;&nbsp;</div>
        <div className={styles.icon__wrapper}>
          <BsFillTelephoneInboundFill color="#C6011F" /> 540-397-8715
        </div>
        <div className={styles.email__wrapper}>
          <MdEmail color="#C6011F" /> darrylnester@gmail.com
        </div>
      </div>
    </section>
  );
}
