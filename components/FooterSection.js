import Image from "next/image";
import styles from "../styles/FooterSection.module.css";
import { useLang } from "../context/LangContext";

export default function FooterSection() {
  const { lang } = useLang();

  const T = {
    fr: {
      baseline: "Conception & pose de cuisines sur-mesure depuis 1975.",
      navAria: "Navigation de pied de page",
      navTitle: "Navigation",
      home: "Accueil",
      works: "Nos réalisations",
      about: "Qui sommes-nous ?",
      contact: "Contact",
      contactTitle: "Nous contacter",
      legalMentions: "Mentions légales",
      privacy: "Politique de confidentialité",
      cookies: "Cookies",
      rights: (y) => `© ${y} CMC Cuisine — Tous droits réservés`,
      showroomAlt: "CMC Cuisine",
    },
    en: {
      baseline: "Custom kitchen design & installation since 1975.",
      navAria: "Footer navigation",
      navTitle: "Navigation",
      home: "Home",
      works: "Our Kitchens",
      about: "About Us",
      contact: "Contact",
      contactTitle: "Contact Us",
      legalMentions: "Legal Notice",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      rights: (y) => `© ${y} CMC Kitchens — All rights reserved`,
      showroomAlt: "CMC Kitchens",
    },
  }[lang];

  return (
    <footer className={styles.footer}>
      {/* Bandeau principal */}
      <div className={styles.wrap}>
        {/* Col gauche : logo + baseline */}
        <div className={styles.brandCol}>
          <div className={styles.logoBox}>
            <Image
              src="/logo.png"
              alt={T.showroomAlt}
              layout="responsive"
              width={220}
              height={72}
              priority
            />
          </div>
          <p className={styles.baseline}>{T.baseline}</p>

          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.socLink}>
              {/* Icône inline */}
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
              </svg>
            </a>
            <a href="#" aria-label="" className={styles.socLink}>
              {/* Icône inline */}
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className={styles.socLink}>
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.3 2.1 15.3 2 14.2 2 11.6 2 10 3.5 10 6.2V10H7v4h3v8h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Pinterest" className={styles.socLink}>
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M12 2a9.9 9.9 0 00-3.5 19.2c-.1-.8-.2-2 .1-2.9.2-.7 1.3-4.5 1.3-4.5s-.3-.7-.3-1.7c0-1.6.9-2.9 2-2.9.9 0 1.3.7 1.3 1.6 0 1-.6 2.6-.9 4-.3 1.2.6 2.1 1.8 2.1 2.1 0 3.7-2.2 3.7-5.3 0-2.8-2-4.8-4.9-4.8-3.3 0-5.2 2.5-5.2 5.1 0 1 .4 2.1 1 2.7.1.1.1.1.1 0 0-.2.1-.8.2-1 .1-.2.1-.2 0-.4a2.2 2.2 0 01-.5-1.4c0-2 1.4-3.9 4.2-3.9 2.3 0 3.9 1.6 3.9 3.8 0 2.4-1.2 4.2-2.9 4.2-.9 0-1.5-.8-1.3-1.7.3-1 .8-2.1.8-2.8 0-.6-.3-1.1-1-1.1-.8 0-1.5.8-1.5 1.9 0 .7.2 1.1.2 1.1s-.8 3.3-1 3.9c-.3 1.1-.1 2.6 0 3.6A10 10 0 1012 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Gouttière séparatrice */}
        <div className={styles.gutter} aria-hidden="true" />

        {/* Col centre : navigation */}
        <nav className={styles.navCol} aria-label={T.navAria}>
          <h3 className={styles.navTitle}>{T.navTitle}</h3>
          <ul className={styles.navList}>
            <li>
              <a href="#showroom">{T.home}</a>
            </li>
            <li>
              <a href="#savoir-faire">{T.works}</a>
            </li>
            <li>
              <a href="#collections">{T.about}</a>
            </li>
            <li>
              <a href="#contact">{T.contact}</a>
            </li>
          </ul>
        </nav>

        {/* Gouttière séparatrice */}
        <div className={styles.gutter} aria-hidden="true" />

        {/* Col droite : contact + mini galerie */}
        <div className={styles.contactCol}>
          <h3 className={styles.navTitle}>{T.contactTitle}</h3>
          <address className={styles.addr}>
            MARINA BURO, 1752 RN 7 Bât A
            <br />
            06270 Villeneuve-Loubet
            <br />
            <br />
            <a href="tel:+33493201918">04 93 20 19 18</a>
            <br />
            <br />
            <a href="mailto:contact@cmc-cuisine.com">contact@cmc-cuisine.com</a>
          </address>
        </div>
      </div>

      {/* Barre légale */}
      <div className={styles.legalBar}>
        <p>{T.rights(new Date().getFullYear())}</p>
        <ul className={styles.legalLinks}>
          <li>
            <a href="#">{T.legalMentions}</a>
          </li>
          <li>
            <a href="#">{T.privacy}</a>
          </li>
          <li>
            <a href="#">{T.cookies}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
