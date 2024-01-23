import styles from "../styles/bottommenu.module.css";
import { GiKitchenTap } from "react-icons/gi";
import { BsHousesFill } from "react-icons/bs";
import { PiWarehouseFill } from "react-icons/pi";
import { MdRoofing, MdOutlineDeck } from "react-icons/md";
// import Image from "next/image";

export default function BottomMenu({ children }) {
  return (
    <section className={styles.btmmenu__wrapper}>
      <div className={styles.btmmenu}>
        {/* <Image id="arm" src="svg/LOGO.svg" width={40} height={40} alt="me" /> */}
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <span className={styles.icon__space}>
              <MdRoofing color="#FFD700" />
            </span>
            Roofs
          </li>
          <li className={styles.menu__item}>
            <span className={styles.icon__space}>
              <BsHousesFill color="#FFD700" />
            </span>
            Additions
          </li>
          <li className={styles.menu__item}>
            <span className={styles.icon__space}>
              <PiWarehouseFill color="#FFD700" />
            </span>
            Remodel
          </li>
          <li className={styles.menu__item}>
            <span className={styles.icon__space}>
              <GiKitchenTap color="#FFD700" />
            </span>
            Kitchen/Baths
          </li>
          <li className={styles.menu__item}>
            <span className={styles.icon__space}>
              <MdOutlineDeck color="#FFD700" />
            </span>
            Decks/Porches
          </li>
        </ul>
      </div>
    </section>
  );
}
