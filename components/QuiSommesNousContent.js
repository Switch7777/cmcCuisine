import Link from "next/link";
import Image from "next/image";
import styles from "../styles/QuiSommesNousContent.module.css";
import { useLang } from "../context/LangContext";
import SavoirFaireSection from "./SavoirFaireSection";

const LABELS = {
  fr: {
    title: "Qui sommes-nous",
    subtitle:
      "Écouter, imaginer et mettre en perspective les lieux où les idées naissent.",
    intro:
      "Depuis plus de 45 ans, CMC Cuisine conçoit, fabrique et installe des cuisines, dressings et aménagements sur mesure. Notre philosophie : créer des espaces de vie qui allient esthétique, fonctionnalité et durabilité. Chaque projet est une rencontre, une écoute et une aventure humaine.",
    cta: "Demandez un rendez-vous",
  },
  en: {
    title: "About Us",
    subtitle: "We listen, imagine and shape the places where ideas are born.",
    intro:
      "For over 45 years, CMC Cuisine has been designing, manufacturing and installing custom kitchens, wardrobes and living spaces. Our philosophy: to create environments that combine aesthetics, functionality and durability. Each project is a story — of listening, creativity, and craftsmanship.",
    cta: "Book a Consultation",
  },
};

export default function QuiSommesNousContent() {
  const { lang } = useLang();
  const L = LABELS[lang] ?? LABELS.fr;

  return (
    <main className={styles.main}>
      {/* SECTION INTRO */}
      <section className={styles.intro}>
        <div className={styles.overlay}>
          <Image
            src="/bureau.png"
            alt="Atelier CMC Cuisine"
            layout="fill"
            className={styles.bg}
            priority
          />
        </div>

        <div className={styles.container}>
          <h1 className={styles.title}>{L.title}</h1>
          <p className={styles.subtitle}>{L.subtitle}</p>
          <p className={styles.introText}>{L.intro}</p>

          <Link href="/contact" legacyBehavior>
            <a className={styles.cta}>{L.cta}</a>
          </Link>
        </div>
      </section>

      {/* SECTION ÉQUIPE / SAVOIR-FAIRE */}
      <SavoirFaireSection />
    </main>
  );
}
