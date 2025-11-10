import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "../styles/RealisationsSection.module.css";

// fallback si le backend ne répond pas
const FALLBACK_IMAGES = [
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
  const [images, setImages] = useState(FALLBACK_IMAGES);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const touchActive = useRef(false);

  // récupère les images Cloudinary depuis ton backend
  useEffect(() => {
    const API_BASE = process.env.NEXT_PUBLIC_API_URL;
    fetch(`${API_BASE}/api/realisations`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setImages(
            data.map((img) => ({
              src: img.url,
              alt:
                img?.context?.alt ||
                img?.public_id ||
                "Réalisation CMC Cuisine",
            }))
          );
        }
      })
      .catch((err) => {
        console.warn(
          "Impossible de charger depuis le backend, on garde le fallback",
          err
        );
      });
  }, []);

  const goTo = useCallback(
    (i) => {
      const n = images.length;
      setIndex(((i % n) + n) % n);
    },
    [images.length]
  );

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
          {images.map((img, i) => (
            <figure className={styles.slide} key={img.src ?? i}>
              <div className={styles.imageWrapper}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="fill" // ✅ Next 12
                  objectFit="cover"
                  className={styles.slideImg}
                  priority={i === 0}
                />
              </div>
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
          {images.map((_, i) => (
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
