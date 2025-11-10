import Image from "next/image";
import { useLang } from "../context/LangContext";
import styles from "../styles/SavoirFaireSection.module.css";

const TEAM = [
  {
    key: "georges",
    img: "/georges.png",
    fr: "Georges Martinez, Gérant",
    en: "Georges Martinez, Manager",
  },
  {
    key: "martine",
    img: "/collaborateurs/martine.JPG",
    fr: "Martine Jarc, Directrice administrative et financière (Associée)",
    en: "Martine Jarc, Administrative & Financial Director (Partner)",
  },
  {
    key: "thierry",
    img: "/collaborateurs/thierry.jpg",
    fr: "Thierry Battesti, Directeur technique (Associé)",
    en: "Thierry Battesti, Technical Director (Partner)",
  },
  {
    key: "laurent",
    img: "/collaborateurs/laurent.png",
    fr: "Laurent Bourgain, Directeur d'agence",
    en: "Laurent Bourgain, Branch Director",
  },
  {
    key: "laura",
    img: "/laura.jpg",
    fr: "Laura Poncelet, Assistante administrative",
    en: "Laura Poncelet, Administrative Assistant",
  },
  {
    key: "aurelie",
    img: "/collaborateurs/aurelie.jpg",
    fr: "Aurélie Lepaulmier, Assistante technique",
    en: "Aurélie Lepaulmier, Technical Assistant",
  },
  {
    key: "caroline",
    img: "/collaborateurs/caroline.jpg",
    fr: "Caroline, Conseillère clientèle et Conceptrice",
    en: "Caroline, Customer Advisor and Designer",
  },
  {
    key: "LaurentC",
    img: "/collaborateurs/laurentc.jpg",
    fr: "Laurent Chiapale, Concepteur",
    en: "Laurent Chiapale, Designer",
  },
];

const INSTALLER_COMMENTS = [
  {
    key: "c1",
    fr: "Nos poseurs sont formés en interne afin de garantir un montage précis et soigné.",
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
    fr: "Fondée en 1975, l'entreprise CMC Cuisine s'est imposée sur la Côte d'Azur comme un acteur majeur de l'aménagement intérieur, en particulier pour les cuisines, salles de bain, dressings et placards – tant pour les particuliers que pour les professionnels et promoteurs. Installée sur le technopôle de la Marina Buro à Villeneuve-Loubet, elle a su allier tradition et innovation : un savoir-faire artisanal couplé à des technologies modernes, pour proposer des espaces à la fois fonctionnels, élégants et adaptés aux modes de vie d'aujourd'hui. Au fil des décennies, CMC Cuisine a développé une approche globale : de la conception personnalisée à la livraison clé en main, incluant le mobilier, l'électroménager, les équipements PMR et la rénovation tous corps d'état. Cette richesse de services lui permet d'accompagner sa clientèle dans des projets variés — de la cuisine de rêve à la rénovation complète d'un espace de vie. Fidèle à sa région, l'entreprise valorise les échanges de proximité : un accueil en showroom pour découvrir les styles, un accompagnement sur mesure, et des équipes terrain capables d'intervenir aussi bien chez des particuliers que dans des programmes de promotion immobilière. Ainsi, CMC Cuisine incarne une histoire d'excellence locale, de passion pour l'aménagement d'intérieur et de confiance établie depuis près de cinquante ans.",
    en: "Founded in 1975, CMC Cuisine has established itself on the French Riviera as a leading specialist in interior design — particularly kitchens, bathrooms, wardrobes, and closets — serving both private clients and real estate developers. Based in the Marina Buro technopark in Villeneuve-Loubet, the company has successfully combined tradition and innovation: artisanal expertise paired with modern technologies to create spaces that are functional, elegant, and perfectly suited to contemporary lifestyles. Over the decades, CMC Cuisine has developed a comprehensive approach — from personalized design to turnkey delivery — including furniture, appliances, accessibility equipment, and full renovation services. This broad expertise allows the company to support its clients through a wide range of projects, from dream kitchens to complete home renovations. Deeply rooted in its region, the company values close relationships: a welcoming showroom to explore styles, tailor-made guidance, and field teams capable of working with both private clients and property developers. Thus, CMC Cuisine embodies a story of local excellence, a passion for interior design, and nearly fifty years of established trust.",
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
      <div className={styles.installersBlock}>
        <h2 className={styles.installersTitle}>
          {lang === "fr" ? "NOTRE HISTOIRE" : "OUR HISTORY"}
        </h2>

        <div className={styles.installersImage}>
          <Image
            src="/history.png"
            alt={
              lang === "fr" ? "Histoire de CMC Cuisine" : "CMC Cuisine history"
            }
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className={styles.comments}>
          {HISTORY.map((c) => (
            <p key={c.key}>{lang === "fr" ? c.fr : c.en}</p>
          ))}
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
                />
              </div>
              <p className={styles.name}>
                {lang === "fr" ? member.fr : member.en}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* ===== NOS POSEURS ===== */}
      <div className={styles.installersBlock}>
        <h2 className={styles.installersTitle}>
          {lang === "fr" ? "NOS POSEURS" : "OUR INSTALLERS"}
        </h2>

        <div className={styles.installersImage}>
          <Image
            src="/poseurs.jpg"
            alt={lang === "fr" ? "Équipe de pose" : "Installation team"}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.comments}>
          {INSTALLER_COMMENTS.map((c) => (
            <p key={c.key}>{lang === "fr" ? c.fr : c.en}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
