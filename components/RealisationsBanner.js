import styles from "../styles/RealisationsBanner.module.css";

import { useLang } from "../context/LangContext";
export default function RealisationsBanner() {
  const { lang } = useLang();
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          {lang === "fr" ? "Nos Realisations" : "Our project"}
        </h1>
        <p className={styles.subtitle}>
          {lang === "fr"
            ? "Une équipe soudée qui conçoit et réalise vos projets d'aménagement avec exigence."
            : "A united team designing and delivering your interior projects with excellence."}
        </p>
      </div>
    </section>
  );
}
