import styles from "../styles/MiddleBottomMain.module.css";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../context/LangContext"; // ✅ import du contexte

function MiddleBottomMain() {
  const { lang } = useLang();

  return (
    <section className={styles.main}>
      <div className={styles.banner}>
        <Image
          src="/background3.png"
          alt={lang === "fr" ? "50 ans d'expérience" : "50 years of experience"}
          layout="fill"
          className={styles.bg}
          priority
        />

        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              {lang === "fr" ? "50 Ans d’Expérience" : "50 Years of Experience"}
            </h2>

            <p className={styles.subtitle}>
              {lang === "fr"
                ? "Depuis 50 ans, le Centre Méditerranéen de la Cuisine met son savoir-faire au service des professionnels et des particuliers pour les accompagner dans la conception de cuisines sur mesure."
                : "For 50 years, the Mediterranean Kitchen Center has put its expertise at the service of professionals and individuals, helping them design custom-made kitchens."}
            </p>

            <Link href="/about" legacyBehavior>
              <a className={styles.button}>
                {lang === "fr" ? "Prendre rendez-vous" : "Book an appointment"}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiddleBottomMain;
