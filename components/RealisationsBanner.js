import styles from "../styles/RealisationsBanner.module.css";

export default function RealisationsBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Nos réalisations</h1>
        <p className={styles.subtitle}>
          Un aperçu de nos cuisines, salles de bain et rangements sur mesure.
        </p>
      </div>
    </section>
  );
}
