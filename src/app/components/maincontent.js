import styles from "../styles/maincontent.module.css";
import { AiFillPhone } from "react-icons/ai";

export default function MainContent() {
  return (
    <section className={styles.mainContent}>
      <div>
        <h1 className={styles.title}>Nester Contruction &amp; Remodeling</h1>
        <h2 className={styles.subtitle}>
          Your Go To Source For All Construction/Remodeling Needs, And More!
        </h2>
      </div>
      <div className={styles.decription}>
        <p className={styles.para}>
          Nester Construction is a family owned business which has served the Roanoke Valley, Salem,
          Vinton, Bedford area for over 30 years. We also do work in North Carolina.
        </p>
        <br />
        <p className={styles.para}>
          Old, leaky roof? Your home needs a coat of fresh paint? Nester Construction/Remodelling
          will install your new roof and/or paint your house so it looks indoors or outdoors.
        </p>
        <br />
        <p className={styles.para}>
          Maybe you want a brand new house. Well, Nester builds houses too!
        </p>
        <br />
        <p className={styles.para}>
          Don't wait any longer for your new kitchen or sunroom. Now is the time for a new addition
          to share with family and friends and create memories that will last a lifetime.
        </p>
      </div>
      <div className={styles.construction__experts}>
        <h2 className={styles.experts}>Call the Construction/Remodelling Experts Today</h2>
        <br />
        <span className={styles.phone}>
          <AiFillPhone color="rgb(142, 5, 5)" /> 540-397-8715
        </span>
      </div>
    </section>
  );
}
