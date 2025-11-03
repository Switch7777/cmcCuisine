import Image from "next/image";
import styles from "../styles/ShowroomSection.module.css";
import { useLang } from "../context/LangContext"; // ✅ import du contexte

export default function ShowroomSection() {
  const { lang } = useLang();

  return (
    <section className={styles.section} id="showroom">
      {/* Colonne gauche : titre + texte */}
      <div className={styles.left}>
        <div className={styles.kicker}>
          {lang === "fr" ? "LE SHOWROOM" : "THE SHOWROOM"}
        </div>

        <h2 className={styles.headline}>
          {lang === "fr" ? "DÉCOUVREZ NOTRE SHOWROOM" : "DISCOVER OUR SHOWROOM"}
        </h2>

        <p className={styles.lead}>
          {lang === "fr"
            ? "Entrez dans notre espace d’exposition, un lieu pensé pour l’inspiration et la découverte de nos collections."
            : "Step into our exhibition space — a place designed for inspiration and discovery of our collections."}
        </p>

        <p className={styles.body}>
          {lang === "fr"
            ? "Vous y retrouverez nos modèles emblématiques, nos matériaux nobles ainsi que les dernières tendances en design d’intérieur. Notre équipe vous accueille pour imaginer ensemble la cuisine qui vous ressemble."
            : "You’ll find our signature models, premium materials, and the latest interior design trends. Our team welcomes you to create together the kitchen that truly reflects your style."}
        </p>
      </div>

      {/* Gouttière / séparateur vertical */}
      <div className={styles.gutter} aria-hidden="true" />

      {/* Colonne droite : sous-titre + images */}
      <div className={styles.right}>
        <div className={styles.rightKicker}>
          {lang === "fr"
            ? "VOTRE SHOWROOM À VILLENEUVE-LOUBET : CONCEPTION ET INSPIRATION"
            : "YOUR SHOWROOM IN VILLENEUVE-LOUBET: DESIGN AND INSPIRATION"}
        </div>

        {/* Grande image principale */}
        <figure className={styles.hero}>
          <Image
            src="/bureau.png"
            alt={
              lang === "fr"
                ? "Showroom CMC Cuisine à Villeneuve-Loubet"
                : "CMC Kitchen Showroom in Villeneuve-Loubet"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
            priority
          />
        </figure>

        {/* Vignette qui chevauche */}
        <figure className={styles.thumb}>
          <Image
            src="/bureau2.png"
            alt={lang === "fr" ? "Détail du showroom" : "Showroom detail"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </figure>
      </div>
    </section>
  );
}
