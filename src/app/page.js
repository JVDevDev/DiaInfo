import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        DiaInfo - Informações do dia rápida para suas tarefas
      </main>
    </div>
  );
}
