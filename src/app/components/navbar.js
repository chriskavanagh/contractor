"use client";

import React, { useState } from "react";
import "../globals.css";
import styles from "../styles"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ children }) {
  const pathname = usePathname();
  return (
    <section className={styles.nav__wrapper}>
    <nav className={styles.primary__nav}>
        <div className="logo">
          <span>Nester</span> Construction LLC
        </div>
        <ul className="navbar__list">
          <li className="nav__item">
            <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={`link ${pathname === "/services" ? "active" : ""}`} href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className={`link ${pathname === "/about" ? "active" : ""}`} href="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className={`link ${pathname === "/contact" ? "active" : ""}`} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
