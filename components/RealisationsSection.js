import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "../styles/RealisationsSection.module.css";

const IMAGES = [
  {
    src: "/realisations/real-1.jpg",
    alt: "Cuisine sur-mesure — réalisation 1",
  },
  {
    src: "/realisations/real-2.jpg",
    alt: "Cuisine sur-mesure — réalisation 2",
  },
  {
    src: "/realisations/real-3.jpg",
    alt: "Cuisine sur-mesure — réalisation 3",
  },
  {
    src: "/realisations/real-4.jpg",
    alt: "Cuisine sur-mesure — réalisation 4",
  },
  {
    src: "/realisations/real-5.jpg",
    alt: "Cuisine sur-mesure — réalisation 5",
  },
];

export default function RealisationsSection() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const touchActive = useRef(false);

  const goTo = useCallback((i) => {
    const n = IMAGES.length;
    setIndex(((i % n) + n) % n);
  }, []);

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  // Navigation clavier
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Swipe tactile
  const onTouchStart = (e) => {
    touchActive.current = true;
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    if (!touchActive.current) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 60) {
      dx < 0 ? next() : prev();
      touchActive.current = false;
    }
  };
  const onTouchEnd = () => {
    touchActive.current = false;
  };

  return (
    <section className={styles.section} id="realisations">
      <div className={styles.carousel} aria-roledescription="carousel">
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {IMAGES.map((img, i) => (
            <figure className={styles.slide} key={i}>
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className={styles.slideImg}
                priority={i === 0}
              />
              {/* 🔥 figcaption supprimé */}
            </figure>
          ))}
        </div>

        {/* Flèches */}
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={prev}
          aria-label="Précédent"
        >
          ‹
        </button>
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={next}
          aria-label="Suivant"
        >
          ›
        </button>

        {/* Points */}
        <div
          className={styles.dots}
          role="tablist"
          aria-label="Sélecteur de diapos"
        >
          {IMAGES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Aller à la diapo ${i + 1}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
