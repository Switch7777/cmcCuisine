import Image from "next/image";
import styles from "../styles/ServicesPlacardCat.module.css";

const COLLECTIONS = [
  {
    slug: "verso",
    title: "COLLECTION VERSO",
    img: "/collections/placard/collection-1.jpg",
  },
  
];

export default function ServicesPlacardCat() {
  return (
    <section className={styles.section}>
      {/* --- Bandeau top --- */}
      <div className={styles.hero}>
        <Image
          src="/banner/cuisine.jpg"
          alt="Bannière collections placards CMC"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Nos collections de placards</h1>
          <p>
            Design, élégance et savoir-faire , découvrez l’univers CMC à travers
            nos collections.
          </p>
        </div>
      </div>

      {/* --- Contenu --- */}
      <div className={styles.inner}>
        <div className={styles.header}>
  
          <h2 className={styles.title}>Découvrez nos collections</h2>
          <p className={styles.subtitle}>
            Des lignes modernes, des matériaux premium et des finitions soignées
            pour chaque projet.
          </p>
        </div>

        <div className={styles.grid}>
          {COLLECTIONS.map((col) => (
            <article key={col.slug} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={col.img}
                  alt={col.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.meta}>
                <h3>{col.title}</h3>
                <span className={styles.arrow} aria-hidden="true">
                  &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
