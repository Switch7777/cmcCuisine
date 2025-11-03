import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBarNew.module.css";
import { User, ExternalLink } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useLang } from "../context/LangContext";

const EXTERNAL_URL = "https://www.cmc-habitat.com/";

const NAV_LABELS = {
  fr: {
    home: "Accueil",
    services: "Nos services",
    servicesKitchen: "Cuisines",
    servicesBathroom: "Salle de bain",
    servicesCloset: "Placard",
    works: "Nos réalisations",
    aboutUs: "Qui sommes-nous",
    cta: "Demandez un rendez-vous",
    outBtn: "CMC Habitat",
    navLabel: "Navigation principale",
    brandAria: "Accueil",
    accountAria: "Mon compte",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },
  en: {
    home: "Home",
    services: "Our Services",
    servicesKitchen: "Kitchens",
    servicesBathroom: "Bathrooms",
    servicesCloset: "Closets",
    works: "Our Kitchens",
    aboutUs: "About Us",
    cta: "Book a Consultation",
    outBtn: "CMC Habitat",
    navLabel: "Main navigation",
    brandAria: "Home",
    accountAria: "My account",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
};

export default function NavBar() {
  const { lang, switchLang } = useLang();
  const L = NAV_LABELS[lang] || NAV_LABELS.fr;

  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [solid, setSolid] = useState(false); // transparent en haut, solid après scroll

  // Passe la nav en "solid" dès qu'on dépasse ~8px (ultra fluide)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = (window.scrollY || 0) > 8;
        setSolid((prev) => (prev === next ? prev : next));
        ticking = false;
      });
    };
    onScroll(); // init au chargement
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile quand on repasse desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Évite le jump quand la nav devient solid */}
      <div
        className={`${styles.spacer} ${
          solid ? styles.spacerOn : styles.spacerOff
        }`}
      />

      <nav
        className={`${styles.nav} ${solid ? styles.solid : styles.transparent}`}
        aria-label={L.navLabel}
      >
        {/* Logo (swap blanc/noir au scroll, ratio conservé) */}
        <div className={styles.brand}>
          <Link href="/" legacyBehavior>
            <a className={styles.brandLink} aria-label={L.brandAria}>
              {/* Blanc (état top) */}
              <span
                className={`${styles.logoWrap} ${styles.logoLight}`}
                aria-hidden={solid ? "true" : "false"}
              >
                <Image
                  src="/logoblancmoins.png"
                  alt="CMC"
                  width={166}
                  height={60}
                  priority
                />
              </span>
              {/* Noir (état scroll) */}
              <span
                className={`${styles.logoWrap} ${styles.logoDark}`}
                aria-hidden={solid ? "false" : "true"}
              >
                <Image
                  src="/logonoirmoins.png" // assure-toi que le fichier existe dans /public
                  alt=""
                  width={166}
                  height={60}
                  priority
                />
              </span>
            </a>
          </Link>
        </div>

        {/* Liens centraux (desktop) */}
        <div className={styles.links}>
          <Link href="/" legacyBehavior>
            <a className={styles.navItem}>{L.home}</a>
          </Link>

          <div className={styles.dropdown}>
            <button
              type="button"
              className={`${styles.servicesLink} ${styles.navItem}`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              {L.services}
              <span className={styles.caret} aria-hidden="true">
                ▾
              </span>
            </button>
            <div className={styles.submenu} role="menu">
              <Link href="/services/cuisines" legacyBehavior>
                <a role="menuitem" className={styles.submenuItem}>
                  {L.servicesKitchen}
                </a>
              </Link>
              <Link href="/services/salle-de-bain" legacyBehavior>
                <a role="menuitem" className={styles.submenuItem}>
                  {L.servicesBathroom}
                </a>
              </Link>
              <Link href="/services/placard" legacyBehavior>
                <a role="menuitem" className={styles.submenuItem}>
                  {L.servicesCloset}
                </a>
              </Link>
            </div>
          </div>

          <Link href="/realisation" legacyBehavior>
            <a className={styles.navItem}>{L.works}</a>
          </Link>
          <Link href="/quiSommesNous" legacyBehavior>
            <a className={styles.navItem}>{L.aboutUs}</a>
          </Link>

          <Link href="/contact" legacyBehavior>
            <a className={styles.cta}>{L.cta}</a>
          </Link>
        </div>

        {/* Droite (desktop) */}
        <div className={styles.rightIcons}>
          <Link href="/login" legacyBehavior>
            <a className={styles.profileLink} aria-label={L.accountAria}>
              <User size={22} strokeWidth={1.6} />
            </a>
          </Link>

          <div className={styles.vDivider} aria-hidden="true" />

          <div className={styles.langSwitch} role="group" aria-label="Lang">
            <button
              onClick={() => switchLang("fr")}
              className={lang === "fr" ? styles.activeLang : ""}
              aria-label="Version française"
              type="button"
            >
              <ReactCountryFlag
                countryCode="FR"
                svg
                style={{ width: 24, height: 16, borderRadius: 3 }}
              />
            </button>
            <button
              onClick={() => switchLang("en")}
              className={lang === "en" ? styles.activeLang : ""}
              aria-label="English version"
              type="button"
            >
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{ width: 24, height: 16, borderRadius: 3 }}
              />
            </button>
          </div>

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

        {/* Burger (mobile only) */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          aria-label={open ? L.menuClose : L.menuOpen}
          onClick={() => {
            setOpen((v) => !v);
            setMobileServicesOpen(false);
          }}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileInner}>
          <Link href="/" legacyBehavior>
            <a onClick={() => setOpen(false)}>{L.home}</a>
          </Link>

          <button
            className={`${styles.mobileServicesBtn} ${
              mobileServicesOpen ? styles.mobileServicesBtnOpen : ""
            }`}
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen ? "true" : "false"}
            aria-controls="mobile-services-submenu"
            type="button"
          >
            {L.services}
            <span className={styles.caret} aria-hidden="true">
              {mobileServicesOpen ? "▴" : "▾"}
            </span>
          </button>

          <div
            id="mobile-services-submenu"
            className={`${styles.mobileSubmenu} ${
              mobileServicesOpen ? styles.mobileSubmenuOpen : ""
            }`}
          >
            <Link href="/services/cuisines" legacyBehavior>
              <a onClick={() => setOpen(false)}>{L.servicesKitchen}</a>
            </Link>
            <Link href="/services/salle-de-bain" legacyBehavior>
              <a onClick={() => setOpen(false)}>{L.servicesBathroom}</a>
            </Link>
            <Link href="/services/placard" legacyBehavior>
              <a onClick={() => setOpen(false)}>{L.servicesCloset}</a>
            </Link>
          </div>

          <Link href="/realisation" legacyBehavior>
            <a onClick={() => setOpen(false)}>{L.works}</a>
          </Link>
          <Link href="/quiSommesNous" legacyBehavior>
            <a onClick={() => setOpen(false)}>{L.aboutUs}</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className={styles.mobileCta} onClick={() => setOpen(false)}>
              {L.cta}
            </a>
          </Link>

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
    </>
  );
}





/* ===== Spacer ===== */
.spacer {
  transition: height 0.2s ease;
}
.spacerOn {
  height: 64px;
}
.spacerOff {
  height: 0;
}
@media (max-width: 900px) {
  .spacer {
    height: 0;
  }
}

/* ===== Nav ===== */
.nav {
  /* === variables locales au composant === */
  --navH: 40px;
  --logoW: 166px; /* ratio interne Next/Image */
  --logoH: 60px;
  --logoMaxW: 130px; /* taille visible du logo (réduit sans casser le ratio) */

  position: fixed;
  inset: 0 0 auto 0;
  height: 64px;
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 clamp(12px, 4vw, 40px);
  transition: background-color 0.18s ease, box-shadow 0.18s ease,
    color 0.18s ease;
  will-change: background-color, box-shadow, color;
}

.transparent {
  background: transparent;
  box-shadow: none;
  color: #fff;
}

.solid {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  color: #1b1b1b;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}
.solid::after {
  content: "";
  position: absolute;
  inset: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  pointer-events: none;
}

/* Fix couleur icônes/liens en solid */
.solid .profileLink svg,
.solid .profileLink,
.solid .externalBtn,
.solid .navItem,
.solid .servicesLink {
  color: #1b1b1b !important;
  stroke: #1b1b1b !important;
  fill: none;
}

/* ===== Logo (swap blanc/noir) ===== */
.brand {
  justify-self: start;
  display: flex;
  align-items: center;
}

.brandLink {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: var(--logoW);
  height: var(--logoH);
}

/* Les deux versions sont superposées et on joue sur l’opacité */
.logoWrap {
  position: absolute;
  inset: 0;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  transition: opacity 0.18s ease;
}

/* Next/Image -> cible le <img> interne */
.logoWrap :global(img) {
  display: block;
  height: auto;
  width: 100%;
  max-width: var(--logoMaxW);
  transition: transform 0.25s ease;
}

/* États */
.logoLight {
  opacity: 1;
}
.logoDark {
  opacity: 0;
}
.solid .logoLight {
  opacity: 0;
}
.solid .logoDark {
  opacity: 1;
}

/* Optionnel: léger shrink au scroll */
.solid .logoWrap :global(img) {
  transform: scale(0.92);
}

@media (max-width: 480px) {
  .brandLink {
    width: 140px;
    height: 50px;
  }
  .logoWrap :global(img) {
    max-width: 110px;
  }
}

/* ===== Liens (desktop) ===== */
.links {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: clamp(12px, 2.2vw, 24px);
}

/* Normalisation a/button pour taille identique */
.navItem,
.servicesLink {
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  background: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-sizing: border-box;
  height: var(--navH);
  padding: 0 clamp(10px, 1.6vw, 14px);
  white-space: nowrap;
  cursor: pointer;

  font: inherit;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: inherit;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.18s ease, transform 0.15s ease, color 0.18s ease;
}
.navItem:hover,
.servicesLink:hover,
.navItem:focus-visible,
.servicesLink:focus-visible {
  border-bottom-color: currentColor;
  transform: translateY(-1px);
}

/* Lisibilité sur fond transparent (haut de page) */
.transparent .navItem,
.transparent .servicesLink,
.transparent .profileLink,
.transparent .externalBtn {
  color: rgba(255, 255, 255, 0.92);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}

/* Caret */
.caret {
  margin-left: 6px;
  font-size: 0.85em;
  opacity: 0.9;
}

/* ===== Dropdown desktop ===== */
.dropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.submenu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  min-width: 210px;
  background: rgba(18, 18, 18, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 8px;
  display: grid;
  gap: 6px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.16s ease, transform 0.16s ease;
  z-index: 200;
}
.dropdown:hover .submenu,
.dropdown:focus-within .submenu {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.submenuItem {
  display: block;
  padding: 10px 12px;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  transition: background 0.2s ease;
}
.submenuItem:hover {
  background: rgba(255, 255, 255, 0.08);
}

/* ===== CTA ===== */
.cta {
  height: var(--navH);
  line-height: var(--navH);
  padding: 0 clamp(14px, 2.2vw, 18px);
  border-radius: 999px;
  background: #f9f5f2;
  color: #1b1b1b !important;
  border: 2px solid transparent;
  text-decoration: none !important;
  transition: transform 0.18s ease, background 0.18s ease,
    border-color 0.18s ease, color 0.18s ease;
  margin-left: clamp(8px, 1vw, 12px);
}
.transparent .cta:hover {
  background: transparent;
  color: #fff !important;
  border-color: #fff;
  transform: translateY(-2px);
}
.solid .cta:hover {
  background: #f0edea;
}

/* ===== Droite (desktop) ===== */
.rightIcons {
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 16px;
}
.profileLink {
  display: inline-flex;
  align-items: center;
}
.vDivider {
  width: 1px;
  height: 22px;
  background: rgba(255, 255, 255, 0.35);
}
.solid .vDivider {
  background: rgba(0, 0, 0, 0.2);
}

/* ===== Bouton externe ===== */
.externalBtn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  height: var(--navH);
  padding: 0 12px;
  border-radius: 999px;
  transition: transform 0.18s ease, background 0.18s ease,
    border-color 0.18s ease;
  white-space: nowrap;
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.45);
}
.externalBtn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
.solid .externalBtn {
  color: #1b1b1b;
  background: #f4f4f4;
  border: 1px solid rgba(0, 0, 0, 0.08);
  text-shadow: none;
}
.solid .externalBtn:hover {
  background: #ececec;
}

/* ===== Burger ===== */
.burger {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.15);
  color: #fff;
}
.solid .burger {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.08);
  color: #1b1b1b;
}
.burger span {
  position: absolute;
  left: 9px;
  right: 9px;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
  transition: 0.3s;
}
.burger span:nth-child(1) {
  top: 12px;
}
.burger span:nth-child(2) {
  top: 19px;
}
.burger span:nth-child(3) {
  top: 26px;
}
.burgerOpen span:nth-child(1) {
  top: 19px;
  transform: rotate(45deg);
}
.burgerOpen span:nth-child(2) {
  opacity: 0;
}
.burgerOpen span:nth-child(3) {
  top: 19px;
  transform: rotate(-45deg);
}

/* ===== Mobile menu ===== */
.mobileMenu {
  position: fixed;
  inset: 0;
  z-index: 90;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.25s ease;
}
.mobileMenuOpen {
  opacity: 1;
  pointer-events: auto;
}
.mobileMenu::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
.mobileInner {
  position: absolute;
  top: 70px;
  left: clamp(12px, 4vw, 24px);
  right: clamp(12px, 4vw, 24px);
  background: rgba(20, 20, 20, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 16px;
  display: grid;
  gap: 10px;
  will-change: transform, opacity;
}
.mobileInner a {
  display: block;
  padding: 12px 14px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-family: "Jost", sans-serif;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid transparent;
  transition: background 0.2s ease, border-color 0.2s ease;
}
.mobileInner a:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
}

.mobileServicesBtn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.95);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid transparent;
  font-family: "Jost", sans-serif;
  font-weight: 500;
  cursor: pointer;
}
.mobileServicesBtn:hover {
  background: rgba(255, 255, 255, 0.06);
}
.mobileServicesBtnOpen {
  border-color: rgba(255, 255, 255, 0.12);
}

.mobileSubmenu {
  display: grid;
  gap: 8px;
  padding: 6px 4px 0 8px;
  margin-left: 6px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.22s ease;
}
.mobileSubmenu a {
  padding: 10px 12px;
}
.mobileSubmenuOpen {
  max-height: 300px;
}

.mobileCta {
  text-align: center;
  background: #f9f5f2 !important;
  color: #1b1b1b !important;
  border-radius: 999px;
  margin-top: 6px;
}
.mobileCta:hover {
  background: transparent !important;
  color: #fff !important;
  border: 1px solid #fff;
}

.mobileExternalBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 12px;
  text-decoration: none;
  color: #1b1b1b;
  background: #f9f5f2;
  border: 2px solid transparent;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  justify-self: center;
  width: fit-content;
}
.mobileExternalBtn:hover {
  background: transparent;
  color: #fff;
  border-color: #fff;
}

/* ===== Mobile only ===== */
@media (max-width: 900px) {
  .brand,
  .links,
  .rightIcons,
  .vDivider {
    display: none !important;
  }
  .burger {
    display: inline-block !important;
    grid-column: 3;
    justify-self: end;
  }
}

/* ===== Reduced motion ===== */
@media (prefers-reduced-motion: reduce) {
  .spacer,
  .nav,
  .submenu,
  .mobileMenu,
  .mobileInner,
  .mobileSubmenu,
  .navItem,
  .servicesLink,
  .cta,
  .externalBtn,
  .langSwitch button,
  .logoWrap :global(img) {
    transition: none !important;
  }
}
