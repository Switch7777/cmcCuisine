import styles from "../styles/ServicesSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../context/LangContext";

const CARDS = {
  fr: [
    {
      label: "Cuisines",
      href: "/servicesCuisines",
      img: "/services/cuisines.jpg",
      alt: "Cuisine sur-mesure",
    },
    {
      label: "Salle de bains",
      href: "/servicesSdb",
      img: "/services/sdb.jpg",
      alt: "Salle de bains design",
    },
    {
      label: "PlacarD",
      href: "/servicesPlacard",
      img: "/services/placard.jpg",
      alt: "Placard et dressing",
    },
  ],
  en: [
    {
      label: "Kitchens",
      href: "/servicesCuisines",
      img: "/services/cuisines.jpg",
      alt: "Custom kitchen",
    },
    {
      label: "Bathrooms",
      href: "/servicesSdb",
      img: "/services/sdb.jpg",
      alt: "Bathroom design",
    },
    {
      label: "Closets",
      href: "/servicesPlacard",
      img: "/services/placard.jpg",
      alt: "Closet and wardrobe",
    },
  ],
};

export default function ServicesSection() {
  const { lang } = useLang();
  const items = CARDS[lang] || CARDS.fr;

  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.header}>
        <h2 id="services-title" className={styles.kicker}>
          {lang === "fr" ? "Nos activités" : "Our Activities"}
        </h2>
      </div>

      <div className={styles.row}>
        {items.map((it, idx) => (
          <Link href={it.href} key={it.href} legacyBehavior>
            <a className={styles.card} aria-label={it.label}>
              <div className={styles.media}>
                {/* Next 12: responsive = ratio garanti, pas de bug de hauteur */}
                <Image
                  src={it.img}
                  alt={it.alt}
                  layout="responsive"
                  width={16}
                  height={9}
                  objectFit="cover"
                  className={styles.img}
                  priority={idx === 0}
                />
                <span className={styles.overlay} />
              </div>

              <span className={styles.labelWrap}>
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
                <span className={styles.labelText}>
                  {it.label.toUpperCase()}
                </span>
              </span>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
