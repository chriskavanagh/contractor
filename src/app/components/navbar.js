"use client";

import React, { useContext } from "react";
import { Drawer } from "../context/context";
import "../globals.css";
import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { usePathname } from "next/navigation";
//import DrawerBtn from "./drawerbtn";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillHome,
  AiFillFormatPainter,
  AiFillPhone,
  AiOutlineTeam,
} from "react-icons/ai";

// ---Top Navbar---
export default function Navbar({ children }) {
  const { drawer, setDrawer } = useContext(Drawer);
  //const [sideDrawer, setsideDrawer] = useState(false);
  const pathname = usePathname();

  const clickHandler = (e) => {
    console.log(drawer);
    setDrawer(!drawer);
  };

  return (
    <section className={styles.nav__wrapper}>
      <GiHamburgerMenu
        size={"1.3em"}
        className={styles.burger}
        onClick={clickHandler}
      />
      <nav className={styles.primary__nav}>
        <div className={styles.logo}>
          <span className={styles.logo__name}>Nester</span> Construction LLC
        </div>

        <ul className={styles.navbar__list}>
          <li className={`${styles.nav__item} ${styles.nav__hover}`}>
            <Link
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              <AiFillHome className={styles.icon__react} /> Home
            </Link>
          </li>
          <li className={`${styles.nav__item} ${styles.nav__hover}`}>
            <Link
              className={`link ${pathname === "/services" ? "active" : ""}`}
              href="/services"
            >
              <AiFillFormatPainter className={styles.icon__react} /> Services
            </Link>
          </li>
          <li className={`${styles.nav__item} ${styles.nav__hover}`}>
            <Link
              className={`link ${pathname === "/about" ? "active" : ""}`}
              href="/about"
            >
              <AiOutlineTeam className={styles.icon__react} /> About
            </Link>
          </li>
          <li className={`${styles.nav__item} ${styles.nav__hover}`}>
            <Link
              className={`link ${pathname === "/contact" ? "active" : ""}`}
              href="/contact"
            >
              <AiFillPhone className={styles.icon__react} /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
