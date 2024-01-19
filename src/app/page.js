"use client";

import React, { useState, useEffect } from "react";
import Slider from "./components/slider";
import MainContent from "./components/maincontent";
import styles from "./page.module.css";
//import React, { useState, useEffect } from "react";
//import { useRouter } from "next/navigation";
import Overlay from "./components/overlay";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className={styles.main}>
      {/* <h2>scroll position: {scrollPosition}</h2> */}
      {scrollPosition === 0 && <Overlay />}
      {/* {scrollPosition > 0 && <h2>Robbie Sucks Dick</h2>} */}
      <Slider />
      <MainContent />
    </main>
  );
}
