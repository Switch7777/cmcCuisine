import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "../styles/RealisationsSection.module.css";

// fallback si le backend ne répond pas
const FALLBACK_IMAGES = [
  {
    src: "/realisations/real-1.webp",
    alt: "Cuisine sur-mesure — réalisation 1",
  },
  {
    src: "/realisations/real-2.webp",
    alt: "Cuisine sur-mesure — réalisation 2",
  },
  {
    src: "/realisations/real-3.webp",
    alt: "Cuisine sur-mesure — réalisation 3",
  },
  {
    src: "/realisations/real-4.webp",
    alt: "Cuisine sur-mesure — réalisation 4",
  },
  
];

export default function RealisationsSection() {
  const [images, setImages] = useState(FALLBACK_IMAGES);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const touchActive = useRef(false);

  // récupère les images Cloudinary 
  useEffect(() => {
    const API_BASE = process.env.NEXT_PUBLIC_API_URL;
    let isMounted = true;

    // Date de début pour garantir un temps d'affichage minimum
    const startTime = Date.now();
    const MIN_LOAD_TIME = 1500; // 1.5s minimum pour voir l'effet

    // Timer de 5 secondes pour le fallback forcé
    const fallbackTimer = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
      }
    }, 5000);

    fetch(`${API_BASE}/api/realisations`)
      .then((res) => res.json())
      .then((data) => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, MIN_LOAD_TIME - elapsedTime);

        setTimeout(() => {
          if (isMounted) {
            clearTimeout(fallbackTimer);
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
            setLoading(false);
          }
        }, remainingTime);
      })
      .catch((err) => {
        if (isMounted) {
          clearTimeout(fallbackTimer);
          setLoading(false);
          console.warn(
            "Impossible de charger depuis le backend, on garde le fallback",
            err
          );
        }
      });

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
    };
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

  const thumbsRef = useRef(null);

  // Scroll automatique des vignettes pour centrer l'active
  useEffect(() => {
    if (thumbsRef.current) {
      const activeThumb = thumbsRef.current.children[index];
      if (activeThumb) {
        const container = thumbsRef.current;
        const scrollLeft =
          activeThumb.offsetLeft -
          container.offsetWidth / 2 +
          activeThumb.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [index]);

  return (
    <section className={styles.section} id="realisations">
      <div className={styles.carousel} aria-roledescription="carousel">
        {loading ? (
          <div className={styles.loaderContainer}>
            <div className={styles.logoLoader}>
              <Image
                src="/NavBarNew/logo1.png"
                alt="Chargement..."
                width={160}
                height={58}
                priority
              />
            </div>
          </div>
        ) : (
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
                    layout="fill"
                    objectFit="contain"
                    className={styles.slideImg}
                    priority={i === 0}
                  />
                </div>
              </figure>
            ))}
          </div>
        )}

        {!loading && (
          <>
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
          </>
        )}
      </div>

      {/* Barre de vignettes */}
      <div
        className={`${styles.thumbnailsOuterContainer} ${
          loading ? styles.hidden : ""
        }`}
      >
        <div className={styles.thumbnailsContainer} ref={thumbsRef}>
          {images.map((img, i) => (
            <div
              key={`thumb-${img.src ?? i}`}
              className={`${styles.thumbnail} ${
                i === index ? styles.thumbnailActive : ""
              }`}
              onClick={() => goTo(i)}
            >
              <Image
                src={img.src}
                alt={`Miniature ${i + 1}`}
                width={100}
                height={75}
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
