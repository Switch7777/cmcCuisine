import Image from "next/image";
import styles from "../styles/ServicesCuisineCat.module.css";

const COLLECTIONS = [
  {
    slug: "verso",
    title: "COLLECTION VERSO",
    img: "/collections/collection-1.jpg",
  },
  {
    slug: "delta",
    title: "COLLECTION DELTA",
    img: "/collections/collection-2.jpg",
  },
  {
    slug: "kyoto",
    title: "COLLECTION KYOTO",
    img: "/collections/collection-3.jpg",
  },
  {
    slug: "oslo",
    title: "COLLECTION OSLO",
    img: "/collections/collection-4.jpg",
  },
  {
    slug: "linea",
    title: "COLLECTION LINEA",
    img: "/collections/collection-5.jpg",
  },
  {
    slug: "urban",
    title: "COLLECTION URBAN",
    img: "/collections/collection-6.jpg",
  },
  {
    slug: "natura",
    title: "COLLECTION NATURA",
    img: "/collections/collection-7.jpg",
  },
  {
    slug: "soho",
    title: "COLLECTION SOHO",
    img: "/collections/collection-8.jpg",
  },
  {
    slug: "roma",
    title: "COLLECTION ROMA",
    img: "/collections/collection-9.jpg",
  },
];

export default function ServicesCuisineCat() {
  return (
    <section className={styles.section}>
      {/* --- Bandeau top --- */}
      <div className={styles.hero}>
        <Image
          src="/banner/cuisine.jpg"
          alt="Bannière collections cuisines CMC"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Nos collections de cuisines</h1>
          <p>
            Design, élégance et savoir-faire , découvrez l’univers CMC à travers
            nos collections.
          </p>
        </div>
      </div>

      {/* --- Contenu --- */}
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Nos cuisines</p>
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
