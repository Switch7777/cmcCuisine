import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { User, ExternalLink } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useLang } from "../context/LangContext";

const NAV_LABELS = {
  fr: {
    home: "Accueil",
    works: "Nos réalisations",
    aboutUs: "Qui sommes-nous",
    cta: "Demandez un rendez-vous",
    outBtn: "CMC Habitat",
    navAria: "Navigation principale",
    brandAria: "Accueil",
    account: "Mon compte",
    changeLang: "Changer de langue",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    propose: "Nos prestations",
  },
  en: {
    home: "Home",
    works: "Our Kitchens",
    aboutUs: "About Us",
    cta: "Book a Consultation",
    outBtn: "CMC Habitat",
    navAria: "Main navigation",
    brandAria: "Home",
    account: "My account",
    changeLang: "Change language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    propose: "Nos prestations",
  },
};

const EXTERNAL_URL = "https://www.cmc-habitat.com/";

export default function Navbar({ transparent = false }) {
  const [open, setOpen] = useState(false);
  const { lang, switchLang } = useLang();
  const L = NAV_LABELS[lang];

  // Fermer au resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // ESC pour fermer + lock scroll body
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Click overlay pour fermer
  const onOverlayClick = (e) => {
    if (e.target.id === "mobile-menu") setOpen(false);
  };

  return (
    <nav
      className={`${styles.nav} ${
        transparent ? styles.transparent : styles.solid
      }`}
      aria-label={L.navAria}
    >
      {/* Gauche : logo */}
      <div className={styles.brand}>
        <Link href="/" legacyBehavior>
          <a aria-label={L.brandAria} className={styles.brandLink}>
            <Image
              src={transparent ? "/logoblanc.png" : "/logo.png"}
              alt="CMC"
              width={166}
              height={60}
              priority
            />
          </a>
        </Link>
      </div>

      {/* Centre : liens desktop (identiques HeaderHero) */}
      <div className={styles.links}>
        <Link href="/" legacyBehavior>
          <a>{L.home}</a>
        </Link>{" "}
        {/*a modifiez en service 3 sous rubriques en mode catalogue */}
        <Link href="/prestation" legacyBehavior>
          <a>{L.propose}</a>
        </Link>
        <Link href="/realisation" legacyBehavior>
          <a>{L.works}</a>
        </Link>
        <Link href="/quiSommesNous" legacyBehavior>
          <a>{L.aboutUs}</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className={styles.cta}>{L.cta}</a>
        </Link>
      </div>

      {/* Droite : profil / séparateurs / drapeaux / bouton externe */}
      <div className={styles.rightIcons}>
        <Link href="/login" legacyBehavior>
          <a aria-label={L.account} className={styles.profileLink}>
            <User size={22} strokeWidth={1.6} />
          </a>
        </Link>

        {/* Séparateur entre profil et drapeaux */}
        <div className={styles.vDivider} aria-hidden="true" />

        <div
          className={styles.langSwitch}
          role="group"
          aria-label={L.changeLang}
        >
          <button
            type="button"
            onClick={() => switchLang("fr")}
            className={lang === "fr" ? styles.activeLang : ""}
            aria-label="Version française"
          >
            <ReactCountryFlag
              countryCode="FR"
              svg
              style={{ width: 24, height: 16, borderRadius: 3 }}
            />
          </button>
          <button
            type="button"
            onClick={() => switchLang("en")}
            className={lang === "en" ? styles.activeLang : ""}
            aria-label="English version"
          >
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{ width: 24, height: 16, borderRadius: 3 }}
            />
          </button>
        </div>

        {/* Séparateur entre drapeaux et bouton externe */}
        <div className={styles.vDivider} aria-hidden="true" />

        <a
          href={EXTERNAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externalBtn}
        >
          <ExternalLink size={18} strokeWidth={1.8} />
          <span>{L.outBtn}</span>
        </a>
      </div>

      {/* Burger (à droite) */}
      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
        aria-label={open ? L.menuClose : L.menuOpen}
        aria-expanded={open ? "true" : "false"}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      {/* MENU MOBILE — tout dedans */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
        onClick={onOverlayClick}
      >
        <div
          className={styles.mobileInner}
          onClick={(e) => e.stopPropagation()}
        >
          <Link href="/" legacyBehavior>
            <a onClick={() => setOpen(false)}>{L.home}</a>
          </Link>
          <Link href="/realisation" legacyBehavior>
            <a onClick={() => setOpen(false)}>{L.works}</a>
          </Link>
          <Link href="/quiSommesNous" legacyBehavior>
            <a onClick={() => setOpen(false)}>{L.aboutUs}</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={styles.mobileCta} onClick={() => setOpen(false)}>
              {L.cta}
            </a>
          </Link>

          {/* Compte + drapeaux */}
          <div className={styles.mobileActions}>
            <Link href="/login" legacyBehavior>
              <a
                aria-label={L.account}
                onClick={() => setOpen(false)}
                className={styles.profileLink}
              >
                <User size={22} strokeWidth={1.6} />
              </a>
            </Link>

            <div
              className={`${styles.langSwitch} ${styles.langSwitchMobile}`}
              role="group"
              aria-label={L.changeLang}
            >
              <button
                type="button"
                onClick={() => {
                  switchLang("fr");
                  setOpen(false);
                }}
                aria-label="Version française"
              >
                <ReactCountryFlag
                  countryCode="FR"
                  svg
                  style={{ width: 24, height: 16, borderRadius: 3 }}
                />
              </button>
              <button
                type="button"
                onClick={() => {
                  switchLang("en");
                  setOpen(false);
                }}
                aria-label="English version"
              >
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{ width: 24, height: 16, borderRadius: 3 }}
                />
              </button>
            </div>
          </div>

          {/* Bouton externe — centré sous les drapeaux */}
          <a
            href={EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileExternalBtn}
            onClick={() => setOpen(false)}
          >
            <ExternalLink size={16} strokeWidth={1.8} />
            <span>{L.outBtn}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
