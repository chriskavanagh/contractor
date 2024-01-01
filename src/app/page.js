import Slider from "./components/slider";
import MainContent from "./components/maincontent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider />
      <MainContent />
    </main>
  );
}
