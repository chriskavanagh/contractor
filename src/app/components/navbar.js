"use client";

import React, { useState } from "react";
//import "../globals.css";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHome, AiFillFormatPainter, AiFillPhone, AiOutlineTeam } from "react-icons/ai";

export default function Navbar({ children }) {
  const pathname = usePathname();
  return (
    <section className={styles.nav__wrapper}>
      <nav className={styles.primary__nav}>
        <div className={styles.logo}>
          <span className={styles.logo__name}>Nester</span> Construction LLC
        </div>
        <ul className={styles.navbar__list}>
          <li className={`${styles.nav__item} ${styles.nav__hover}`}>
            <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
              <AiFillHome /> Home
            </Link>
          </li>
          <li className={`${styles.nav__item} ${styles.nav__hover}`}>
            <Link className={`link ${pathname === "/services" ? "active" : ""}`} href="/services">
              <AiFillFormatPainter /> Services
            </Link>
          </li>
          <li className={`${styles.nav__item} ${styles.nav__hover}`}>
            <Link className={`link ${pathname === "/about" ? "active" : ""}`} href="/about">
              <AiOutlineTeam /> About Us
            </Link>
          </li>
          <li className={`${styles.nav__item} ${styles.nav__hover}`}>
            <Link className={`link ${pathname === "/contact" ? "active" : ""}`} href="/contact">
              <AiFillPhone /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
