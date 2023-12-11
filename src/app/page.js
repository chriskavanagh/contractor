import Image from "next/image";
import Slider from "./components/slider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>test</h1>
      <Slider />
    </main>
  );
}
