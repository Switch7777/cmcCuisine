import Image from "next/image";
import Link from "next/link";
import styles from "../styles/FooterSection.module.css";
import { useLang } from "../context/LangContext";

export default function FooterSection() {
  const { lang } = useLang();

  const T = {
    fr: {
      baseline: "Conception & Pose de cuisines sur-mesure depuis 1975.",
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
      {/* === Section principale === */}
      <div className={styles.wrap}>
        {/* Col gauche : logo + réseaux */}
        <div className={styles.brandCol}>
          <div className={styles.logoBox}>
            <Image
              src="/logo.png"
              alt={T.showroomAlt}
              layout="responsive"
              width={190}
              height={72}
              priority
            />
          </div>
          <p className={styles.baseline}>{T.baseline}</p>

          <div className={styles.socials}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/cmccuisine/"
              aria-label="Instagram"
              className={styles.socLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/cmccuisines06/?locale=fr_FR"
              aria-label="Facebook"
              className={styles.socLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.8 1.9-1.8H17V2.2C16.3 2.1 15.3 2 14.2 2 11.6 2 10 3.5 10 6.2V10H7v4h3v8h3z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/centre-mediterraneen-de-la-cuisine/?originalSubdomain=fr"
              aria-label="LinkedIn"
              className={styles.socLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.62h.05c.53-.95 1.83-1.95 3.77-1.95 4.04 0 4.78 2.66 4.78 6.11v6.22h-4v-5.5c0-1.31-.02-3-1.83-3-1.84 0-2.12 1.43-2.12 2.9v5.6H9v-12z" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://fr.pinterest.com/cmccuisine/"
              aria-label="Pinterest"
              className={styles.socLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" className={styles.icon}>
                <path d="M12 2a9.9 9.9 0 00-3.5 19.2c-.1-.8-.2-2 .1-2.9.2-.7 1.3-4.5 1.3-4.5s-.3-.7-.3-1.7c0-1.6.9-2.9 2-2.9.9 0 1.3.7 1.3 1.6 0 1-.6 2.6-.9 4-.3 1.2.6 2.1 1.8 2.1 2.1 0 3.7-2.2 3.7-5.3 0-2.8-2-4.8-4.9-4.8-3.3 0-5.2 2.5-5.2 5.1 0 1 .4 2.1 1 2.7.1.1.1.1.1 0 0-.2.1-.8.2-1 .1-.2.1-.2 0-.4a2.2 2.2 0 01-.5-1.4c0-2 1.4-3.9 4.2-3.9 2.3 0 3.9 1.6 3.9 3.8 0 2.4-1.2 4.2-2.9 4.2-.9 0-1.5-.8-1.3-1.7.3-1 .8-2.1.8-2.8 0-.6-.3-1.1-1-1.1-.8 0-1.5.8-1.5 1.9 0 .7.2 1.1.2 1.1s-.8 3.3-1 3.9c-.3 1.1-.1 2.6 0 3.6A10 10 0 1012 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Gouttière */}
        <div className={styles.gutter} aria-hidden="true" />

        {/* Navigation */}
        <nav className={styles.navCol} aria-label={T.navAria}>
          <h3 className={styles.navTitle}>{T.navTitle}</h3>
          <ul className={styles.navList}>
            <li>
              <Link href="/">{T.home}</Link>
            </li>
            <li>
              <Link href="/realisation">{T.works}</Link>
            </li>
            <li>
              <Link href="/quiSommesNous">{T.about}</Link>
            </li>
            <li>
              <Link href="/contact">{T.contact}</Link>
            </li>
          </ul>
        </nav>

        {/* Gouttière */}
        <div className={styles.gutter} aria-hidden="true" />

        {/* Contact */}
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
            <Link href="/mentions-legales">{T.legalMentions}</Link>
          </li>
          <li>
            <Link href="/politique-de-confidentialite">{T.privacy}</Link>
          </li>
          <li>
            <Link href="/cookies">{T.cookies}</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
