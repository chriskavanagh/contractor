import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./../styles/drawerbtn.module.css";
//import { PiCursorClickFill } from "react-icons/pi";

export default function DrawerBtn({ click }) {
  <div onClick={click}>
    <GiHamburgerMenu className={styles.burger} />
  </div>;
}
