"use client";

import React, { useState } from "react";
import "../globals.css";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ children }) {
  return (
    <section className="nav__wrapper">
      <nav className="primary__nav">
        <div className="logo">
          <span>Nester</span> Construction LLC
        </div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
    </section>
  );
}
