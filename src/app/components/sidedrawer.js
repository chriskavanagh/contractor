"use client";

import "../globals.css";
import Link from "next/link";
import { useContext } from "react";
import { Drawer } from "../context/context";
import { usePathname } from "next/navigation";
import styles from "../styles/sidedrawer.module.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiFillHome, AiFillFormatPainter, AiFillPhone, AiOutlineTeam } from "react-icons/ai";

export default function Sidedrawer() {
  const pathname = usePathname();
  const { drawer, setDrawer } = useContext(Drawer);

  const clickHandler = e => {
    console.log(drawer);
    setDrawer(false);
  };
  return (
    <section className={styles.drawer__wrapper}>
      {drawer == true && (
        <nav className={`${styles.nav} ${drawer === true ? " open" : ""}`}>
          <IoCloseCircleOutline className={styles.close} onClick={clickHandler} />
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
                <AiFillHome className={styles.icon__react} /> Home
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link className={`link ${pathname === "/services" ? "active" : ""}`} href="/services">
                <AiFillFormatPainter className={styles.icon__react} /> Services
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link className={`link ${pathname === "/about" ? "active" : ""}`} href="/about">
                <AiOutlineTeam className={styles.icon__react} /> About
              </Link>
            </li>
            <li className={styles.list__item}>
              <Link className={`link ${pathname === "/contact" ? "active" : ""}`} href="/contact">
                <AiFillPhone className={styles.icon__react} /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </section>
  );
}
