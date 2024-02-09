"use client";

import "../globals.css";
import { useContext } from "react";
import { Drawer } from "../context/context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/sidedrawer.module.css";
import { AiFillHome, AiFillFormatPainter, AiFillPhone, AiOutlineTeam } from "react-icons/ai";

export default function Sidedrawer() {
  const { drawer } = useContext(Drawer);
  const pathname = usePathname();
  <section className={styles.drawer__wrapper}>
    <nav className={`${styles.nav} ${drawer === true ? " open" : ""}`}>
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
  </section>;
}
