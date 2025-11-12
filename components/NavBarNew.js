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
    servicesRenovation: "Rénovation",
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
    servicesRenovation: "Renovation",
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
  const [solid, setSolid] = useState(false);

  // scroll → nav solide
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const next = scrollY > 50;
        if (solid !== next) {
          setSolid(next);
        }
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  // resize → on ferme le mobile (iPad inclus à 1024px)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className={`${styles.nav} ${solid ? styles.solid : styles.transparent}`}
        aria-label={L.navLabel}
      >
        {/* Burger (mobile + iPad) - à gauche */}
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

        <div className={styles.brand}>
          <Link href="/" legacyBehavior>
            <a className={styles.brandLink} aria-label={L.brandAria}>
              <span className={styles.logoWrap}>
                <Image
                  src="/logoblancmoins.png"
                  alt="CMC"
                  width={166}
                  height={60}
                  priority
                />
              </span>
            </a>
          </Link>
        </div>

        {/* Liens centraux (desktop uniquement) */}
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
                ▼
              </span>
            </button>
            <div className={styles.submenu} role="menu">
              <Link href="/servicesCuisine" legacyBehavior>
                <a role="menuitem" className={styles.submenuItem}>
                  {L.servicesKitchen}
                </a>
              </Link>
              <Link href="/servicesSdb" legacyBehavior>
                <a role="menuitem" className={styles.submenuItem}>
                  {L.servicesBathroom}
                </a>
              </Link>
              <Link href="/servicesPlacard" legacyBehavior>
                <a role="menuitem" className={styles.submenuItem}>
                  {L.servicesCloset}
                </a>
              </Link>
              <a
                href={EXTERNAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                className={styles.submenuItem}
              >
                {L.servicesRenovation}
              </a>
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

        {/* Droite (desktop uniquement) */}
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
              className={`${styles.langBtn} ${
                lang === "fr" ? styles.activeLang : ""
              }`}
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
              className={`${styles.langBtn} ${
                lang === "en" ? styles.activeLang : ""
              }`}
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
        </div>

        {/* Lang switch mobile + iPad - à droite en dehors du burger */}
        <div className={styles.mobileLangSwitch} role="group" aria-label="Lang">
          <button
            onClick={() => switchLang("fr")}
            className={`${styles.langBtn} ${
              lang === "fr" ? styles.activeLang : ""
            }`}
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
            className={`${styles.langBtn} ${
              lang === "en" ? styles.activeLang : ""
            }`}
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
      </nav>

      {/* Menu mobile + iPad */}
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
              {mobileServicesOpen ? "^" : "v"}
            </span>
          </button>

          {mobileServicesOpen && (
            <div
              id="mobile-services-submenu"
              className={`${styles.mobileSubmenu} ${styles.mobileSubmenuOpen}`}
            >
              <Link href="/servicesCuisine" legacyBehavior>
                <a onClick={() => setOpen(false)}>{L.servicesKitchen}</a>
              </Link>
              <Link href="/servicesSdb" legacyBehavior>
                <a onClick={() => setOpen(false)}>{L.servicesBathroom}</a>
              </Link>
              <Link href="/servicesPlacard" legacyBehavior>
                <a onClick={() => setOpen(false)}>{L.servicesCloset}</a>
              </Link>
              <Link href={EXTERNAL_URL} legacyBehavior>
                <a onClick={() => setOpen(false)}>{L.servicesRenovation}</a>
              </Link>
            </div>
          )}

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

          <Link href="/login" legacyBehavior>
            <a className={styles.mobileProfile} onClick={() => setOpen(false)}>
              <User size={18} strokeWidth={1.5} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
