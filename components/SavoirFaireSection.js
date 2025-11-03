import Image from "next/image";
import styles from "../styles/SavoirFaireSection.module.css";
import { useLang } from "../context/LangContext";

export default function SavoirFaireSection() {
  const { lang } = useLang();

  return (
    <section className={styles.section} id="savoir-faire">
      {/* Colonne gauche */}
      <div className={styles.leftCol}>
        <div className={styles.spacer} />

        {/* Photo 1 Georges */}
        <div className={styles.imgFrameWide}>
          <Image
            src="/georges.png"
            alt={
              lang === "fr"
                ? "Georges Martinez, gérant de la SCOP"
                : "Georges Martinez, company manager"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            className={styles.img}
            priority
          />
        </div>
        <p className={styles.signature}>
          {lang === "fr"
            ? "— Georges Martinez, gérant de la SCOP"
            : "— Georges Martinez, Managing Director"}
        </p>

        {/* Photo 2 Martine */}
        <div className={styles.imgFrameWide}>
          <Image
            src="/martine.png"
            alt={
              lang === "fr"
                ? "Martine, directrice financière"
                : "Martine, financial director"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            className={styles.img}
          />
        </div>
        <p className={styles.signature}>
          {lang === "fr"
            ? "— Martine, directrice financière"
            : "— Martine, financial director"}
        </p>

        {/* Photo 3 Aurelie */}
        <div className={styles.imgFrameWide}>
          <Image
            src="/collaborateurs/aurelie.jpg"
            alt={
              lang === "fr"
                ? "Aurelie JEN SAIS RIEN, jEN SAIS RIEN"
                : "Aurelie JEN SAIS RIEN, jEN SAIS RIEN"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            className={styles.img}
          />
        </div>
        <p className={styles.signature}>
          {lang === "fr"
            ? "— Aurelie JEN SAIS RIEN, jEN SAIS RIEN"
            : "— Aurelie JEN SAIS RIEN, jEN SAIS RIEN"}
        </p>

        {/* Photo 4 Laura */}
        <div className={styles.imgFrameWide}>
          <Image
            src="/laura.jpg"
            alt={
              lang === "fr"
                ? "Laura Poncelet, Assistante de direction"
                : "Laura Poncelet, Assistante de direction"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            className={styles.img}
          />
        </div>
        <p className={styles.signature}>
          {lang === "fr"
            ? "— Laura Poncelet, Assistante de direction"
            : "— Laura Poncelet, Assistante de direction"}
        </p>
      </div>

      {/* Gouttière avec texte vertical */}
      <div className={styles.gutter}>
        <span className={styles.verticalLabel}>
          {lang === "fr" ? "NOTRE SAVOIR-FAIRE" : "OUR EXPERTISE"}
        </span>
      </div>

      {/* Colonne droite */}
      <div className={styles.rightCol}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>
            {lang === "fr" ? (
              <>
                DÉCOUVREZ L’ÉQUIPE
                <br />
                DE CMC CUISINE
              </>
            ) : (
              <>
                MEET THE TEAM
                <br />
                AT CMC KITCHENS
              </>
            )}
          </h2>

          <p>
            {lang === "fr"
              ? "Depuis 1975, dans l’univers de l’aménagement de la cuisine, de la salle de bains, de l’agencement de dressings et des installations pour PMR, CMC (Centre Méditerranéen de la Cuisine) fournit à ses clients des solutions personnalisées en analyse, conseil, optimisation des aménagements, suivi de fabrication, maintenance et distribution. Soucieux de la qualité de ses produits, CMC vend et installe du mobilier de fabrication française, allemande ou italienne."
              : "Since 1975, in the world of kitchen design, bathrooms, wardrobe fittings, and accessibility installations, CMC (Mediterranean Kitchen Center) has provided tailored solutions for its clients — including analysis, advice, layout optimization, production follow-up, maintenance, and distribution. Committed to quality, CMC supplies and installs furniture made in France, Germany, and Italy."}
          </p>
        </div>

        {/* Photo 5 Thierry */}
        <div className={styles.imgFrameTall}>
          <Image
            src="/collaborateurs/thierry.jpg"
            alt={
              lang === "fr"
                ? "Thierry JEN SAIS RIEN , Directeur commercial"
                : "Thierry JEN SAIS RIEN , Directeur commercial"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            className={styles.img}
          />
        </div>
        <p className={styles.legend}>
          <span className={styles.signatureInline}>
            {lang === "fr"
              ? "— Thierry JEN SAIS RIEN , Directeur commercial"
              : "— Thierry JEN SAIS RIEN , Directeur commercial"}
          </span>
        </p>

        {/* Photo 6 Caroline */}
        <div className={styles.imgFrameTall}>
          <Image
            src="/collaborateurs/caroline.jpg"
            alt={
              lang === "fr"
                ? "Caroline JEN SAIS RIEN, conseillère clientèle"
                : "Caroline JEN SAIS RIEN, conseillère clientèle"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            className={styles.img}
          />
        </div>
        <p className={styles.legend}>
          <span className={styles.signatureInline}>
            {lang === "fr"
              ? "— Caroline JEN SAIS RIEN, conseillère clientèle"
              : "— Caroline JEN SAIS RIEN, conseillère clientèle"}
          </span>
        </p>

        {/* Photo 7 FRED */}
        <div className={styles.imgFrameTall}>
          <Image
            src="/collaborateurs/fred.jpg"
            alt={
              lang === "fr"
                ? "Fred JEN SAIS RIEN, responsable pose"
                : "Fred JEN SAIS RIEN , installation manager"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            className={styles.img}
          />
        </div>
        <p className={styles.legend}>
          <span className={styles.signatureInline}>
            {lang === "fr"
              ? "— Fred JEN SAIS RIEN, responsable pose"
              : "— Fred JEN SAIS RIEN , installation manager"}
          </span>
        </p>
      </div>
    </section>
  );
}
