import Slider from "./components/slider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>
        Home Sunrooms Decks & Porches Trex Additions Kitchens & Baths Interior
        Design Blog Location About Us
      </h1>
      <Slider />
    </main>
  );
}
