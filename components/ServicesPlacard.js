import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "../context/LangContext";
import { 
  X, 
  ChevronLeft, 
  ChevronRight
} from "lucide-react";
import styles from "../styles/ServicesPlacardCat.module.css";

const COLLECTIONS = [
  { slug: "p1", title: "Placard 1", img: "/collplacard/placard1.webp", images: ["/collplacard/placard1.webp"] },
  { slug: "p2", title: "Placard 2", img: "/collplacard/placard2.webp", images: ["/collplacard/placard2.webp"] },
  { slug: "p3", title: "Placard 3", img: "/collplacard/placard3.webp", images: ["/collplacard/placard3.webp"] },
  { slug: "p4", title: "Placard 4", img: "/collplacard/placard4.webp", images: ["/collplacard/placard4.webp"] },
  { slug: "p5", title: "Placard 5", img: "/collplacard/placard5.webp", images: ["/collplacard/placard5.webp"] },
  { slug: "p6", title: "Placard 6", img: "/collplacard/placard6.webp", images: ["/collplacard/placard6.webp"] },
  { slug: "p7", title: "Placard 7", img: "/collplacard/placard7.webp", images: ["/collplacard/placard7.webp"] },
  { slug: "p8", title: "Placard 8", img: "/collplacard/placard8.webp", images: ["/collplacard/placard8.webp"] },
  { slug: "p9", title: "Placard 9", img: "/collplacard/placard9.webp", images: ["/collplacard/placard9.webp"] },
  { slug: "p10", title: "Placard 10", img: "/collplacard/placard10.webp", images: ["/collplacard/placard10.webp"] },
  { slug: "p11", title: "Placard 11", img: "/collplacard/placard11.webp", images: ["/collplacard/placard11.webp"] },
  { slug: "p12", title: "Placard 12", img: "/collplacard/placard12.webp", images: ["/collplacard/placard12.webp"] },
  { slug: "p13", title: "Placard 13", img: "/collplacard/placard13.webp", images: ["/collplacard/placard13.webp"] },
  { slug: "p14", title: "Placard 14", img: "/collplacard/placard14.webp", images: ["/collplacard/placard14.webp"] },
  { slug: "p15", title: "Placard 15", img: "/collplacard/placard15.webp", images: ["/collplacard/placard15.webp"] },
  { slug: "p16", title: "Placard 16", img: "/collplacard/placard16.webp", images: ["/collplacard/placard16.webp"] },
  { slug: "p17", title: "Placard 17", img: "/collplacard/placard17.webp", images: ["/collplacard/placard17.webp"] },
  { slug: "p18", title: "Placard 18", img: "/collplacard/placard18.webp", images: ["/collplacard/placard18.webp"] },
  { slug: "p19", title: "Placard 19", img: "/collplacard/placard19.webp", images: ["/collplacard/placard19.webp"] },
  { slug: "p20", title: "Placard 20", img: "/collplacard/placard20.webp", images: ["/collplacard/placard20.webp"] },
  { slug: "p21", title: "Placard 21", img: "/collplacard/placard21.webp", images: ["/collplacard/placard21.webp"] },
  { slug: "p22", title: "Placard 22", img: "/collplacard/placard22.webp", images: ["/collplacard/placard22.webp"] },
  { slug: "p23", title: "Placard 23", img: "/collplacard/placard23.webp", images: ["/collplacard/placard23.webp"] },
  { slug: "p24", title: "Placard 24", img: "/collplacard/placard24.webp", images: ["/collplacard/placard24.webp"] },
  { slug: "p25", title: "Placard 25", img: "/collplacard/placard25.webp", images: ["/collplacard/placard25.webp"] },
  { slug: "p26", title: "Placard 26", img: "/collplacard/placard26.webp", images: ["/collplacard/placard26.webp"] },
  { slug: "p27", title: "Placard 27", img: "/collplacard/placard27.webp", images: ["/collplacard/placard27.webp"] },
  { slug: "p28", title: "Placard 28", img: "/collplacard/placard28.webp", images: ["/collplacard/placard28.webp"] },
  { slug: "p29", title: "Placard 29", img: "/collplacard/placard29.webp", images: ["/collplacard/placard29.webp"] },
  { slug: "p30", title: "Placard 30", img: "/collplacard/placard30.webp", images: ["/collplacard/placard30.webp"] },
  { slug: "p31", title: "Placard 31", img: "/collplacard/placard31.webp", images: ["/collplacard/placard31.webp"] },
  { slug: "p32", title: "Placard 32", img: "/collplacard/placard32.webp", images: ["/collplacard/placard32.webp"] },
  { slug: "p33", title: "Placard 33", img: "/collplacard/placard33.webp", images: ["/collplacard/placard33.webp"] },
  { slug: "p34", title: "Placard 34", img: "/collplacard/placard34.webp", images: ["/collplacard/placard34.webp"] },
  { slug: "p35", title: "Placard 35", img: "/collplacard/placard35.webp", images: ["/collplacard/placard35.webp"] },
];

const TRANSLATIONS = {
  fr: {
    heroTitle: "Nos collections de placards",
    heroDesc: "Une esthétique épurée pour un intérieur parfaitement ordonné.",
    altHero: "Bannière collections placards CMC",
    storageKicker: "Rangement intérieur",
    storageMainTitle: "RANGEMENTS INTÉRIEURS",
    storageText1: "Dans notre quête d’une maison à la fois fonctionnelle et esthétique, nos placards et dressings jouent un rôle essentiel. Bien plus que de simples meubles, ils sont le cœur de votre organisation quotidienne, alliant notre savoir-faire à une élégance qui sublime chaque pièce.",
    storageText2: "Qu’il s’agisse d’un dressing spacieux ou d’un placard optimisé, nous concevons des solutions de rangement qui s’adaptent précisément à vos besoins et à votre style de vie. Chaque centimètre est exploité pour transformer votre espace de vie en un lieu parfaitement ordonné.",
    storageText3: "Avec une vaste palette de coloris et une infinité d’agencements, nous vous permettons de créer un espace qui reflète votre personnalité. Allier la praticité au design haut de gamme est désormais à votre portée grâce à notre expertise technique.",
    designTitle: "Nos designs",
   
    storageMainTitle2: "RANGEMENT SUR-MESURE",
    storageText4: "Transformez votre intérieur avec nos placards et dressings sur mesure, conçus pour s’adapter parfaitement à vos besoins et à votre style de vie. Grâce à notre expertise, chaque pièce est personnalisée par nos soins pour optimiser votre rangement tout en embellissant votre décor, qu’il s’agisse d’un dressing élégant ou d’un placard discret.",
    storageText5: "Nous vous offrons une liberté totale : nos accessoires, nos tiroirs et nos caissons peuvent être entièrement ajustés en largeur, en profondeur et en hauteur. Cette flexibilité technique nous permet de créer une organisation millimétrée, vous offrant ainsi un espace de vie dégagé et parfaitement harmonieux.",
    storageText6: "Avec notre savoir-faire, le rangement devient un véritable art. En faisant le choix de l’excellence avec nos solutions, vous redécouvrez votre intérieur sous un nouveau jour. Offrez-vous la qualité que vous méritez et laissez-nous donner vie à vos projets les plus ambitieux.",
  },
  en: {
    heroTitle: "Our closet collections",
    heroDesc: "An uncluttered aesthetic for a perfectly tidy interior.",
    altHero: "CMC closet collections banner",
    storageKicker: "Interior Storage",
    storageMainTitle: "INTERIOR STORAGE",
    storageText1: "In our quest for a home that is both functional and aesthetic, our closets and wardrobes play an essential role. Much more than just furniture, they are the heart of your daily organization, combining our expertise with an elegance that enhances every room.",
    storageText2: "Whether it is a spacious walk-in closet or an optimized cupboard, we design storage solutions that adapt precisely to your needs and lifestyle. Every inch is utilized to transform your living space into a perfectly organized environment.",
    storageText3: "With a wide palette of colors and endless layout possibilities, we enable you to create a space that reflects your personality. Combining practicality with high-end design is now within your reach, thanks to our technical expertise",
    designTitle: "Our Designs",
    
    storageMainTitle2: "",
    storageText4: "Transform your home with our custom-made closets and wardrobes, designed to perfectly fit your needs and lifestyle. Thanks to our expertise, every piece is personalized by us to optimize your storage while enhancing your decor, whether it’s an elegant walk-in closet or a discreet cupboard.",
    storageText5: "We offer you total freedom: our accessories, drawers, and cabinet frames can be fully adjusted in width, depth, and height. This technical flexibility allows us to create pinpoint organization, providing you with a clear and perfectly harmonious living space.",
    storageText6: "With our know-how, storage becomes a true art form. By choosing excellence with our solutions, you will rediscover your interior in a new light. Treat yourself to the quality you deserve and let us bring your most ambitious projects to life.",
  }
};

function Modal({ collections, startIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!collections || collections.length === 0) return null;

  const currentPlacard = collections[currentIndex];
  
  const nextPlacard = () => setCurrentIndex((prev) => (prev + 1) % collections.length);
  const prevPlacard = () => setCurrentIndex((prev) => (prev - 1 + collections.length) % collections.length);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={styles.modalBody}>
          <div className={styles.slideshowContainer}>
            <div className={styles.slideImageWrapper}>
              <Image 
                src={currentPlacard.img} 
                alt={currentPlacard.title} 
                layout="fill" 
                objectFit="contain"
                className={styles.slideImage}
              />
            </div>
            
            {collections.length > 1 && (
              <>
                <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={(e) => { e.stopPropagation(); prevPlacard(); }}>
                  <ChevronLeft size={28} />
                </button>
                <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={(e) => { e.stopPropagation(); nextPlacard(); }}>
                  <ChevronRight size={28} />
                </button>
                <div className={styles.dots}>
                  {collections.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ""}`}
                      onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPlacardCat() {
  const { lang } = useLang();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [carouselGap, setCarouselGap] = useState(30);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setItemsPerView(3);
        setCarouselGap(30);
      } else if (window.innerWidth > 600) {
        setItemsPerView(2);
        setCarouselGap(30);
      } else {
        setItemsPerView(1);
        setCarouselGap(20);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesCount = COLLECTIONS.length;
  const maxSlide = Math.max(0, slidesCount - itemsPerView);

  const nextMain = () => setActiveSlide((prev) => Math.min(prev + 1, maxSlide));
  const prevMain = () => setActiveSlide((prev) => Math.max(prev - 1, 0));

  // Recalculate if window resized and activeSlide is out of bounds
  useEffect(() => {
    if (activeSlide > maxSlide) {
      setActiveSlide(maxSlide);
    }
  }, [maxSlide, activeSlide]);

  return (
    <section className={styles.section}>
      {/* --- Bandeau top --- */}
      <div className={styles.hero}>
        <Image
          src="/banner/dressing.webp"
          alt={t.altHero}
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

      {/* --- Contenu Principal --- */}
      <div className={styles.inner}>
        
       

        {/* --- Featured Section (Image + Content) --- */}
        <div className={styles.featuredSection}>
          <div className={styles.featuredImage}>
            <Image
              src="/services/placardpresentation.png" 
              alt="Closet layout"
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.featuredOverlay} />
          </div>
          <div className={styles.featuredContent}>
            
            <h2 className={styles.storageTitle}>{t.storageMainTitle}</h2>
            
            <div className={styles.storageText}>
              <p>{t.storageText1}</p>
              <p>{t.storageText2}</p>
              <p>{t.storageText3}</p>
            </div>

          

          
          </div>
        </div>
        
        <h2 className={styles.carouselTitle}>{t.designTitle}</h2>

        <div className={styles.carouselSection}>
          <div className={styles.carouselContainer}>
            <button className={`${styles.carouselNav} ${styles.prevBtnMain}`} onClick={prevMain} disabled={activeSlide === 0}>
              <ChevronLeft size={40} />
            </button>
            <button className={`${styles.carouselNav} ${styles.nextBtnMain}`} onClick={nextMain} disabled={activeSlide === maxSlide}>
              <ChevronRight size={40} />
            </button>

            <div 
              className={styles.carouselTrack} 
              style={{ transform: `translateX(calc(-${activeSlide * (100 / itemsPerView)}% - ${activeSlide * (carouselGap / itemsPerView)}px))` }}
            >
              {COLLECTIONS.map((col, idx) => (
                <article key={col.slug} className={styles.carouselSlide} onClick={() => setSelectedIndex(idx)}>
                  <div className={styles.imageWrap}>
                    <Image src={col.img} alt={col.title} layout="fill" objectFit="cover" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.carouselDots}>
            {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
              <span 
                key={idx} 
                className={`${styles.carouselDot} ${idx === activeSlide ? styles.activeCarouselDot : ""}`}
                onClick={() => setActiveSlide(idx)}
              />
            ))}
          </div>
        </div>

        <div className={`${styles.featuredSection} ${styles.inverted}`}>
          <div className={styles.featuredImage}>
            <Image
              src="/services/placard2.webp" 
              alt="Closet layout"
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.featuredOverlay} />
          </div>
          <div className={styles.featuredContent}>
            
            <h2 className={styles.storageTitle}>{t.storageMainTitle2}</h2>
            
            <div className={styles.storageText}>
              <p>{t.storageText4}</p>
              <p>{t.storageText5}</p>
              <p>{t.storageText6}</p>
            </div>
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <Modal collections={COLLECTIONS} startIndex={selectedIndex} onClose={() => setSelectedIndex(null)} />
      )}
    </section>
  );
}
