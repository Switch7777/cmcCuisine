import styles from "../styles/Topmain.module.css";
import Image from "next/image";
import Link from "next/link";

function Topmain() {
  return (
    <div className={styles.main}>
      <Image src="/background.jpg" alt="Top Main Image" layout="fill" />
      <div className={styles.overlay}>
        <h1 className={styles.title}>Centre Mediterranéen de la Cuisine</h1>
        <p className={styles.subtitle}>
          Écouter, imaginer et mettre en perspective les lieux où les idées
          naissent.
        </p>
        <div className={styles.dmdrdv}>
          <Link href="/about">Demandez un rendez-vous</Link>
        </div>
      </div>
    </div>
  );
}

export default Topmain;
