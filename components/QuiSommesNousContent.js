import Image from "next/image";
import { useLang } from "../context/LangContext";
import styles from "../styles/SavoirFaireSection.module.css";

const TEAM = [
  {
    key: "georges",
    img: "/QuiSommesNousContent/staff/georges.png",
    fr: "Georges Martinez, Gérant (Associé)",
    en: "Georges Martinez, Manager (Partner)",
  },
  {
    key: "martine",
    img: "/QuiSommesNousContent/staff/martine.JPG",
    fr: "Martine Jarc, Directrice administrative et financière (Associée)",
    en: "Martine Jarc, Administrative & Financial Director (Partner)",
  },
  {
    key: "thierry",
    img: "/QuiSommesNousContent/staff/thierry.jpg",
    fr: "Thierry Battesti, Directeur technique (Associé)",
    en: "Thierry Battesti, Technical Director (Partner)",
    objectPosition: "center 5%", 
  },

  {
    key: "laurent",
    img: "/QuiSommesNousContent/staff/laurent.png",
    fr: "Laurent Bourgain, Directeur d'agence",
    en: "Laurent Bourgain, Branch Director",
  },{
    key: "aurelie",
    img: "/QuiSommesNousContent/staff/aurelie.jpg",
    fr: "Aurélie Lepaulmier, Responsable de programme (Associée)",
    en: "Aurélie Lepaulmier, Program Director (Partner)",
  },
  {
    key: "laura",
    img: "/QuiSommesNousContent/staff/laura.jpg",
    fr: "Laura Poncelet, Assistante de direction",
    en: "Laura Poncelet, Assistant Director",
  },
  
  {
    key: "caroline",
    img: "/QuiSommesNousContent/staff/caroline.jpg",
    fr: "Caroline Ottou, Concepteur",
    en: "Caroline Ottou, Designer",
  },
  {
    key: "LaurentC",
    img: "/QuiSommesNousContent/staff/laurentc.jpg",
    fr: "Laurent Chiapale, Concepteur",
    en: "Laurent Chiapale, Designer",
  },
];

const INSTALLER_COMMENTS = [
  {
    key: "c1",
    fr: "Nos installateurs sont formés en interne afin de garantir un montage précis et soigné.",
    en: "Our installers are trained in-house to ensure precise and careful assembly.",
  },
  {
    key: "c2",
    fr: "Chaque installation est supervisée par un conducteur de travaux pour un rendu irréprochable.",
    en: "Each installation is supervised by a site manager for flawless results.",
  },
  {
    key: "c3",
    fr: "Nous privilégions la ponctualité, la propreté et le respect du client sur chaque chantier.",
    en: "We prioritize punctuality, cleanliness, and customer respect on every job site.",
  },
];

const HISTORY = [
  {
    key: "h1",
    fr: "Fondée en 1975, l'entreprise CMC Cuisine s'est imposée sur la Côte d'Azur comme un acteur majeur de l'aménagement intérieur, en particulier pour les cuisines, salles de bains, dressings et placards tant pour les particuliers que pour les professionnels et promoteurs. Installée sur le technopôle de la Marina Buro à Villeneuve-Loubet, elle a su allier tradition et innovation : un savoir-faire artisanal couplé à des technologies modernes, pour proposer des espaces à la fois fonctionnels, élégants et adaptés aux modes de vie d'aujourd'hui. Au fil des décennies, CMC Cuisine a développé une approche globale : de la conception personnalisée à la livraison clé en main, incluant le mobilier, l'électroménager, les équipements PMR et la rénovation tous corps d'état. Cette richesse de services lui permet d'accompagner sa clientèle dans des projets variés de la cuisine de rêve à la rénovation complète d'un espace de vie. Fidèle à sa région, l'entreprise valorise les échanges de proximité : un accueil en showroom pour découvrir les styles, un accompagnement sur mesure, et des équipes terrain capables d'intervenir aussi bien chez des particuliers que dans des programmes de promotion immobilière. Ainsi, CMC Cuisine incarne une histoire d'excellence locale, de passion pour l'aménagement d'intérieur et de confiance établie depuis plus de cinquante ans.",
    en: "Founded in 1975, CMC Cuisine has established itself on the French Riviera as a major player in interior design, particularly for kitchens, bathrooms, walk-in closets, and built-in wardrobes catering to private individuals as well as professionals and real estate developers. Located in the Marina Buro technology park in Villeneuve-Loubet, the company has successfully combined tradition and innovation: artisanal craftsmanship paired with modern technologies to offer spaces that are functional, elegant, and suited to today's lifestyles. Over the decades, CMC Cuisine has developed a comprehensive approach: from custom design to turnkey delivery, including furniture, appliances, accessibility equipment (PRM), and full-service general contracting for renovations. This wealth of services enables the company to support its clients through a variety of projects from a dream kitchen to the complete renovation of a living space. Loyal to its region, the company values close, local relationships: welcoming clients in a showroom to explore different styles, providing tailored guidance, and deploying field teams capable of operating in both private homes and real estate development projects. Thus, CMC Cuisine embodies a history of local excellence, a passion for interior design, and a foundation of trust established over nearly fifty years.",
  },
];

export default function SavoirFaireSection() {
  const { lang } = useLang();

  return (
    <section className={styles.section}>
      {/* ===== BANNIÈRE ===== */}
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>
            {lang === "fr" ? "QUI SOMMES-NOUS ?" : "ABOUT US"}
          </h1>
          <p className={styles.subtitle}>
            {lang === "fr"
              ? "Une équipe soudée qui conçoit et réalise vos projets d'aménagement avec exigence."
              : "A united team designing and delivering your interior projects with excellence."}
          </p>
        </div>
      </div>

      {/* ===== NOTRE HISTOIRE ===== */}
      <div className={styles.content}>
        <h2 className={styles.installersTitle}>
          {lang === "fr" ? "NOTRE HISTOIRE" : "OUR HISTORY"}
        </h2>

        <div className={styles.historyWrapper}>
          <div className={styles.collageContainer}>
            <div className={styles.mainPhoto}>
              <Image
                src="/QuiSommesNousContent/staff/staff.png"
                alt="L'équipe CMC Cuisine"
                width={1200}
                height={800}
                layout="responsive"
                priority
              />
            </div>
            
            <div className={styles.secondaryPhoto}>
              <Image
                src="/QuiSommesNousContent/enseignes.png"
                alt="CMC Cuisine Historique"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className={styles.historyTextSide}>
            {HISTORY.map((c) => (
              <p key={c.key}>{lang === "fr" ? c.fr : c.en}</p>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ÉQUIPE ===== */}
      <div className={styles.content}>
        <h2 className={styles.installersTitle}>
          {lang === "fr" ? "NOTRE ÉQUIPE" : "OUR TEAM"}
        </h2>
        <p className={styles.intro}>
          {lang === "fr"
            ? "Découvrez les membres de CMC Cuisine, chacun dédié à faire aboutir votre projet dans les meilleures conditions."
            : "Meet the people behind CMC Cuisine, each one dedicated to bringing your project to life."}
        </p>

        <div className={styles.grid}>
          {TEAM.map((member) => (
            <article key={member.key} className={styles.card}>
              <div className={styles.photoWrapper}>
                <Image
                  src={member.img}
                  alt={lang === "fr" ? member.fr : member.en}
                  layout="fill"
                  objectFit="cover"
                  className={styles.photo}
                  objectPosition={member.objectPosition || "35%"}
                />
                <div className={styles.imageOverlay} />
              </div>
              <p className={styles.name}>
                {lang === "fr" ? member.fr : member.en}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* ===== NOS POSEURS ===== */}
      <div className={styles.content}>
        <h2 className={styles.installersTitle}>
          {lang === "fr" ? "NOS INSTALLATEURS" : "OUR INSTALLERS"}
        </h2>

        <div className={styles.historyWrapperReverse}>
          <div className={styles.historyImageSide}>
            <Image
              src="/QuiSommesNousContent/poseurs.jpg"
              alt={lang === "fr" ? "Équipe de pose" : "Installation team"}
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.imageOverlay} />
          </div>

          <div className={styles.historyTextSide}>
            {INSTALLER_COMMENTS.map((c) => (
              <p key={c.key}>{lang === "fr" ? c.fr : c.en}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
