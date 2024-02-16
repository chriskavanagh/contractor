"use client";

import "../globals.css";
import Link from "next/link";
import { useContext } from "react";
import { Drawer } from "../context/context";
import { usePathname } from "next/navigation";
import styles from "../styles/sidedrawer.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillHome,
  AiFillFormatPainter,
  AiFillPhone,
  AiOutlineTeam,
} from "react-icons/ai";

export default function Sidedrawer() {
  const pathname = usePathname();
  const { drawer, setDrawer } = useContext(Drawer);

  const clickHandler = (e) => {
    console.log(drawer);
    setDrawer(false);
  };
  return (
    <section className={styles.drawer__wrapper}>
      {drawer == true && (
        <>
          <nav className={`${styles.nav} ${drawer === true ? " open" : ""}`}>
            <GiHamburgerMenu
              size={"2.9em"}
              className={styles.close}
              onClick={clickHandler}
            />
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <Link
                  className={`link ${pathname === "/" ? "active" : ""}`}
                  href="/"
                >
                  <AiFillHome className={styles.icon__react} /> Home
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link
                  className={`link ${pathname === "/services" ? "active" : ""}`}
                  href="/services"
                >
                  <AiFillFormatPainter className={styles.icon__react} />{" "}
                  Services
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link
                  className={`link ${pathname === "/about" ? "active" : ""}`}
                  href="/about"
                >
                  <AiOutlineTeam className={styles.icon__react} /> About
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link
                  className={`link ${pathname === "/contact" ? "active" : ""}`}
                  href="/contact"
                >
                  <AiFillPhone className={styles.icon__react} /> Contact
                </Link>
              </li>
              <hr className={styles.line} />
              <li className={styles.txt}>Nester Construction & Remodelling</li>
            </ul>
          </nav>
        </>
      )}
    </section>
  );
}
