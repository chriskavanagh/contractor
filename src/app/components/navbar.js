"use client";

import React from "react";
//import "../globals.css";
import styles from "../styles/navbar.module.css";
//import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { AiFillHome, AiFillFormatPainter, AiFillPhone, AiOutlineTeam } from "react-icons/ai";

// ---Top Navbar---
export default function Navbar({ children }) {
  const pathname = usePathname();
  return (
    <section className={styles.nav__wrapper}>
      <nav className={styles.primary__nav}>
        <div className={styles.logo}>
          <span className={styles.logo__name}>Nester</span> Construction LLC
        </div>
        {/* <div>
          <span className={styles.free}>Free Quote/Call Us&nbsp;&nbsp;</span>
          <span className={styles.quote}>
            <BsFillTelephoneInboundFill color="#C6011F" /> 540-397-8715
          </span>
        </div> */}
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
