import DiceGame from "@/src/components/DiceGame/DiceGame";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <DiceGame />
    </main>
  );
}
