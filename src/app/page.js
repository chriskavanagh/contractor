import Slider from "./components/slider";
import MainContent from "./components/maincontent";
import styles from "./page.module.css";
//import React, { useState, useEffect } from "react";
//import { useRouter } from "next/navigation";
//import Overlay from "./components/overlay";

export default function Home() {
  //console.log(setClientWindowHeight);
  return (
    <main className={styles.main}>
      <Slider />
      <MainContent />
    </main>
  );
}
