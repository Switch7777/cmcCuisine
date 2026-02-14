import { useEffect, useRef, useState } from "react";
import styles from "../styles/HeaderHero.module.css";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../context/LangContext";

const NAV_LABELS = {
  fr: {
    heroTitle: "Centre Méditerranéen de la Cuisine",
    heroSubtitle:
      "Écouter, imaginer et mettre en perspective les lieux où les idées naissent",
    heroCta: "Demandez un rendez-vous",
    bgAlt: "Centre Méditerranéen de la Cuisine",
    logoAlt: "Logo CMC",
  },
  en: {
    heroTitle: "Centre Méditerranéen de la Cuisine",
    heroSubtitle: "Listen, imagine and shape the places where ideas are born",
    heroCta: "Book a Consultation",
    bgAlt: "Mediterranean Kitchen Center",
    logoAlt: "CMC Logo",
  },
};

// Images de fond (dans /public)
const BACKGROUNDS = [
  "/background.jpg",
  "/background-2.jpg",
  "/background3.png",
];
const SLIDE_INTERVAL_MS = 4000;
const FADE_MS = 1400;

export default function HeaderHero() {
  const { lang } = useLang();
  const L = NAV_LABELS[lang];

  const [bgIndex, setBgIndex] = useState(0);
  const timerRef = useRef(null);

  
  const [showArrow, setShowArrow] = useState(true);

  // précharge
  useEffect(() => {
    if (typeof window === "undefined") return;
    BACKGROUNDS.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // slideshow
  useEffect(() => {
    const start = () => {
      if (timerRef.current) return;
      timerRef.current = setInterval(() => {
        setBgIndex((i) => (i + 1) % BACKGROUNDS.length);
      }, SLIDE_INTERVAL_MS);
    };
    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    const handleVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);


  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
    
      if (y > 40) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.hero} style={{ "--fade-ms": `${FADE_MS}ms` }}>
      
      {BACKGROUNDS.map((src, i) => (
        <div
          key={src}
          className={`${styles.bgLayer} ${
            i === bgIndex ? styles.bgVisible : ""
          }`}
        >
          <Image
            src={src}
            alt={L.bgAlt}
            layout="fill"
            className={styles.bg}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay + contenu */}
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.contentWrap}>
          <div className={styles.heroLogo}>
            <Image
              src="/logoblancmoins.png"
              alt={L.logoAlt}
              width={390} // anciennement 260 → x1.5
              height={135} // anciennement 90 → x1.5
              priority
            />
          </div>
          <h1 className={styles.title}>{L.heroTitle}</h1>
          <p className={styles.subtitle}>{L.heroSubtitle}</p>
          <Link href="/contact">
            <a className={styles.button}>{L.heroCta}</a>
          </Link>
        </div>
      </div>

      {/* flèche scroll (affichée seulement si showArrow) */}
      <div
        className={`${styles.scrollArrow} ${
          showArrow ? "" : styles.scrollArrowHidden
        }`}
      >
        <span />
      </div>
    </div>
  );
}
