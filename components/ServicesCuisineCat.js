import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ChefHat, 
  Utensils, 
  Layout, 
  Maximize, 
  Box 
} from "lucide-react";
import styles from "../styles/ServicesCuisineCat.module.css";
import { useLang } from "../context/LangContext";

const COLLECTIONS = [
  {
    slug: "yota",
    title: "COLLECTION YOTA",
    img: "/cuisines/yota.png",
    description: {
      fr: "La cuisine Yota est créée autour des personnes qui l’habitent, chaque détail a été conçu pour accompagner le client dans un voyage émotionnel. Une riche porte de 22 millimètres d’épaisseur confère une importance particulière à la cuisine. Elle est mise en valeur par un vaste choix de matériaux tels que les bois plaqués finement travaillés et les laqués brillants, mats et autres laquages spéciaux.",
      en: "The Yota kitchen is created around the people who live in it; every detail has been designed to accompany the client on an emotional journey. A rich 22mm thick door lends special importance to the kitchen. It is enhanced by a wide choice of materials such as finely crafted wood veneers and glossy, matte, or other special lacquers."
    },
    images: ["/collectionsCuisines/yota/yota1.jpg", "/collectionsCuisines/yota/yota2.jpg", "/collectionsCuisines/yota/yota3.jpg","/collectionsCuisines/yota/yota4.jpg","/collectionsCuisines/yota/yota5.jpg","/collectionsCuisines/yota/yota6.jpg","/collectionsCuisines/yota/yota7.jpg","/collectionsCuisines/yota/yota8.jpg","/collectionsCuisines/yota/yota9.jpg","/collectionsCuisines/yota/yota10.jpg","/collectionsCuisines/yota/yota11.jpg","/collectionsCuisines/yota/yota12.jpg","/collectionsCuisines/yota/yota13.jpg","/collectionsCuisines/yota/yota14.jpg","/collectionsCuisines/yota/yota15.jpg","/collectionsCuisines/yota/yota16.jpg","/collectionsCuisines/yota/yota17.jpg","/collectionsCuisines/yota/yota18.jpg","/collectionsCuisines/yota/yota19.jpg","/collectionsCuisines/yota/yota20.jpg","/collectionsCuisines/yota/yota21.jpg","/collectionsCuisines/yota/yota22.jpg","/collectionsCuisines/yota/yota23.jpg","/collectionsCuisines/yota/yota24.jpg","/collectionsCuisines/yota/yota25.jpg","/collectionsCuisines/yota/yota26.jpg","/collectionsCuisines/yota/yota27.jpg","/collectionsCuisines/yota/yota28.jpg","/collectionsCuisines/yota/yota29.jpg"],
    features: [
      { label: { fr: "Design moderne", en: "Modern design" }, icon: Layout },
      { label: { fr: "Finitions premium", en: "Premium finishes" }, icon: Box },
    ]
  },
  {
    slug: "delta",
    title: "COLLECTION DELTA",
    img: "/collectionsCusines/delta/delta1.jpg",
    description: {
        fr: "Description à venir pour la collection Delta.",
        en: "Description coming soon for the Delta collection."
    }
  },
  {
    slug: "kyoto",
    title: "COLLECTION KYOTO",
    img: "/collectionsCusines/kyoto/kyoto1.jpg",
    description: {
        fr: "Description à venir pour la collection Kyoto.",
        en: "Description coming soon for the Kyoto collection."
    }
  },
  {
    slug: "oslo",
    title: "COLLECTION OSLO",
    img: "/collections/cuisine/collection-4.jpg",
    description: {
        fr: "Description à venir pour la collection Oslo.",
        en: "Description coming soon for the Oslo collection."
    }
  },
  {
    slug: "linea",
    title: "COLLECTION LINEA",
    img: "/collections/cuisine/collection-5.jpg",
    description: {
        fr: "Description à venir pour la collection Linea.",
        en: "Description coming soon for the Linea collection."
    }
  },
  {
    slug: "urban",
    title: "COLLECTION URBAN",
    img: "/collections/cuisine/collection-6.jpg",
    description: {
        fr: "Description à venir pour la collection Urban.",
        en: "Description coming soon for the Urban collection."
    }
  },
  {
    slug: "natura",
    title: "COLLECTION NATURA",
    img: "/collections/cuisine/collection-7.jpg",
    description: {
        fr: "Description à venir pour la collection Natura.",
        en: "Description coming soon for the Natura collection."
    }
  },
  {
    slug: "soho",
    title: "COLLECTION SOHO",
    img: "/collections/cuisine/collection-8.jpg",
    description: {
        fr: "Description à venir pour la collection Soho.",
        en: "Description coming soon for the Soho collection."
    }
  },
  {
    slug: "roma",
    title: "COLLECTION ROMA",
    img: "/collections/cuisine/collection-9.jpg",
    description: {
        fr: "Description à venir pour la collection Roma.",
        en: "Description coming soon for the Roma collection."
    }
  },
];

const TRANSLATIONS = {
  fr: {
    heroTitle: "Nos collections de cuisines",
    heroDesc: "Design, élégance et savoir-faire, découvrez l’univers CMC à travers nos collections.",
    title: "Découvrez nos collections",
    subtitle: "Des lignes modernes, des matériaux premium et des finitions soignées pour chaque projet.",
  },
  en: {
    heroTitle: "Our Kitchen Collections",
    heroDesc: "Design, elegance and craftsmanship, discover the CMC universe through our collections.",
    title: "Discover our collections",
    subtitle: "Modern lines, premium materials and neat finishes for every project.",
  }
};

function Modal({ collection, onClose, lang }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!collection) return null;

  const images = collection.images && collection.images.length > 0 
    ? collection.images 
    : [collection.img];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };



  // Helper to get localized text
  const getLoc = (data) => {
    if (!data) return "";
    if (typeof data === "string") return data;
    return data[lang] || data.fr || "";
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.modalBody}>
          {/* SLIDESHOW FULL WIDTH TOP */}
          <div className={styles.slideshowContainer}>
            <div className={styles.slideImageWrapper}>
              <Image 
                src={images[currentSlide]} 
                alt={collection.title} 
                layout="fill" 
                objectFit="cover" /* Cover for full width header feel */
                className={styles.slideImage}
              />
            </div>
            
            {images.length > 1 && (
              <>
                <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide}>
                  <ChevronLeft size={28} />
                </button>
                <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide}>
                  <ChevronRight size={28} />
                </button>
                
                <div className={styles.dots}>
                  {images.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ""}`}
                      onClick={() => setCurrentSlide(idx)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* DETAILS BELOW */}
          <div className={styles.detailsContainer}>
            <h2 className={styles.modalTitle}>{collection.title}</h2>
            
            {collection.description && (
              <p className={styles.modalDesc}>{getLoc(collection.description)}</p>
            )}

            {collection.features && (
              <div className={styles.featuresSection}>
                {collection.features.map((feat, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    {feat.icon && <feat.icon size={20} strokeWidth={2.5} />}
                    <span>{getLoc(feat.label)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesCuisineCat() {
  const { lang } = useLang(); 
  const [selectedCollection, setSelectedCollection] = useState(null);
  
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  const openModal = (col) => setSelectedCollection(col);
  const closeModal = () => setSelectedCollection(null);

  return (
    <section className={styles.section}>
      {/* --- Bandeau top --- */}
      <div className={styles.hero}>
        <Image
          src="/banner/cuisine.jpg"
          alt="Bannière collections cuisines CMC"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroDesc}</p>
        </div>
      </div>

      {/* --- Contenu --- */}
      <div className={styles.inner}>
        <div className={styles.header}>
    
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.subtitle}>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {COLLECTIONS.map((col) => (
            <article 
                key={col.slug} 
                className={styles.card}
                onClick={() => openModal(col)}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={col.img}
                  alt={col.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.meta}>
                <h3>{col.title}</h3>
                <span className={styles.arrow} aria-hidden="true">
                  &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

       {/* MODAL */}
       {selectedCollection && (
        <Modal 
          collection={selectedCollection} 
          onClose={closeModal} 
          lang={lang} 
        />
      )}
    </section>
  );
}
