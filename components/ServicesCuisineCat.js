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
    slug: "amelie-susann",
    title: "AMELIE | SUSANN",
    img: "/collectionsCuisines/amelie_susann/amelie_susann_1.webp",
    description: {
      fr: "Confort jusque dans les moindres détails. Tablettes escamotables et rambardes judicieuses – ce sont ces bonnes idées qui font la différence.",
      en: "Comfort down to the smallest detail. Retractable shelves and clever railings – these are the good ideas that make the difference."
    },
    images: [
      "/collectionsCuisines/amelie_susann/amelie_susann_1.webp",
      "/collectionsCuisines/amelie_susann/amelie_susann_2.webp",
      "/collectionsCuisines/amelie_susann/amelie_susann_3.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Kito acier", en: "Steel Kito" }, icon: Layout },
      { label: { fr: "Blanc polaire brillant", en: "High gloss polar white" }, icon: Box },
    ]
  },
  {
    slug: "celine-jette",
    title: "CELINE | JETTE",
    img: "/collectionsCuisines/celine_jette/celine_jette_1.webp",
    description: {
      fr: "L'alliance brute du béton et l'élégance du noir mat pour une cuisine au caractère affirmé. Un style industriel chic pour un intérieur moderne.",
      en: "The raw combination of concrete and the elegance of matte black for a kitchen with a strong character. A chic industrial style for a modern interior."
    },
    images: [
      "/collectionsCuisines/celine_jette/celine_jette_1.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Concrete Grey", en: "Concrete Grey" }, icon: Layout },
      { label: { fr: "Noir mat soyeux", en: "Silky matte Black" }, icon: Box },
    ]
  },
  {
    slug: "cindy-2",
    title: "CINDY",
    img: "/collectionsCuisines/cindy_2/cindy_2_1.webp",
    description: {
      fr: "Une palette de couleurs froides et apaisantes pour une cuisine moderne et sereine. La finition mat soyeux offre un toucher agréable et un look sophistiqué.",
      en: "A cool and soothing color palette for a modern and serene kitchen. The silky matte finish offers a pleasant touch and a sophisticated look."
    },
    images: [
      "/collectionsCuisines/cindy_2/cindy_2_1.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Stormgrey mat soyeux", en: "Silky matte Stormgrey" }, icon: Layout },
      { label: { fr: "Almost Blue mat soyeux", en: "Silky matte Almost Blue" }, icon: Box },
    ]
  },
  {
    slug: "lara",
    title: "LARA",
    img: "/collectionsCuisines/lara/lara_1.webp",
    description: {
      fr: "Perspectives lumineuses. Utiliser la lumière pour mettre en valeur les objets décoratifs. Elle confère aux meubles en verre une incroyable sensation d’espace. Toujours parfaitement organisée, notre main courante de crédence Easy met de l’ordre en un tournemain.",
      en: "Luminous perspectives. Use light to highlight decorative objects. It gives glass furniture an incredible feeling of space. Always perfectly organized, our Easy splashback railing brings order instantly."
    },
    images: [
      "/collectionsCuisines/lara/lara_1.webp",
      "/collectionsCuisines/lara/lara_2.webp",
      "/collectionsCuisines/lara/lara_3.webp",
      "/collectionsCuisines/lara/lara_4.webp",
      "/collectionsCuisines/lara/lara_5.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Perspectives lumineuses", en: "Luminous perspectives" }, icon: Layout },
      { label: { fr: "Organisation parfaite", en: "Perfect organization" }, icon: Box },
    ]
  },
  {
    slug: "cindy-leni",
    title: "CINDY | LENI",
    img: "/collectionsCuisines/cindy_leni/cindy_leni_1.webp",
    description: {
      fr: "Une combinaison audacieuse de vert sombre et de rainures douces pour un style unique et contemporain. L'élégance à l'état pur.",
      en: "A bold combination of dark green and soft grooves for a unique and contemporary style. Pure elegance."
    },
    images: [
      "/collectionsCuisines/cindy_leni/cindy_leni_1.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Black Green mat soyeux", en: "Silky matte Black Green" }, icon: Layout },
      { label: { fr: "Soft Groove", en: "Soft Groove" }, icon: Box },
    ]
  },
  {
    slug: "cora-cindy-2",
    title: "CORA | CINDY",
    img: "/collectionsCuisines/cora_cindy_2/cora_cindy_1.webp",
    description: {
      fr: "L'alliance du bois sombre et du mat soyeux pour une cuisine élégante et chaleureuse. Des finitions haut de gamme pour un intérieur d'exception.",
      en: "The combination of dark wood and silky matte for an elegant and warm kitchen. High-end finishes for an exceptional interior."
    },
    images: [
      "/collectionsCuisines/cora_cindy_2/cora_cindy_1.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Chêne café", en: "Coffee Oak" }, icon: Layout },
      { label: { fr: "Marshmallow mat", en: "Matte marshmallow" }, icon: Box },
    ]
  },
  {
    slug: "cindy",
    title: "CINDY GREIGE",
    img: "/collectionsCuisines/cindy/cindy_1.webp",
    description: {
      fr: "Greige. Une teinte douce et naturelle pour une ambiance chaleureuse et apaisante. Le greige, mariage subtil du gris et du beige, apporte une élégance intemporelle à votre cuisine.",
      en: "Greige. A soft and natural shade for a warm and soothing atmosphere. Greige, a subtle blend of grey and beige, brings timeless elegance to your kitchen."
    },
    images: [
      "/collectionsCuisines/cindy/cindy_1.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Teinte Greige", en: "Greige shade" }, icon: Layout },
      { label: { fr: "Ambiance naturelle", en: "Natural atmosphere" }, icon: Box },
    ]
  },
  {
    slug: "jette",
    title: "JETTE",
    img: "/collectionsCuisines/jette/jette_1.webp",
    description: {
      fr: "Blanc polaire mat soyeux. Beauté intemporelle. Les nuances subliment les équipements et les sources lumineuses les mettent subtilement en scène. Attire toujours l’attention : le verre fumé pour une touche moderne.",
      en: "Silky matte polar white. Timeless beauty. Nuances enhance the equipment and light sources subtly stage them. Always catches the eye: smoked glass for a modern touch."
    },
    images: [
      "/collectionsCuisines/jette/jette_1.webp",
      "/collectionsCuisines/jette/jette_2.webp",
      "/collectionsCuisines/jette/jette_3.webp",
      "/collectionsCuisines/jette/jette_4.webp",
      "/collectionsCuisines/jette/jette_5.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Blanc polaire mat", en: "Matte polar white" }, icon: Layout },
      { label: { fr: "Verre fumé", en: "Smoked glass" }, icon: Box },
    ]
  },
  {
    slug: "mara",
    title: "MARA",
    img: "/collectionsCuisines/mara/mara_1.webp",
    description: {
      fr: "Un souffle de fraîcheur. Blanc, verre et touches lumineuses pour plus de légèreté. Le meuble d’angle Space Corner astucieux multiplie les options de rangement. Au nouvel art d’habiter !",
      en: "A breath of fresh air. White, glass and luminous touches for more lightness. The ingenious Space Corner corner unit multiplies storage options. A new art of living!"
    },
    images: [
      "/collectionsCuisines/mara/mara_1.webp",
      "/collectionsCuisines/mara/mara_2.webp",
      "/collectionsCuisines/mara/mara_3.webp",
      "/collectionsCuisines/mara/mara_4.webp",
      "/collectionsCuisines/mara/mara_5.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Blanc et verre", en: "White and glass" }, icon: Layout },
      { label: { fr: "Rangement astucieux", en: "Smart storage" }, icon: Box },
    ]
  },
  {
    slug: "sophie-jette",
    title: "SOPHIE | JETTE",
    img: "/collectionsCuisines/sophie_jette/sophie_jette_1.webp",
    description: {
      fr: "Gris brume mat soyeux | Noir mat soyeux. L'accord parfait entre le gris brume et le noir mat pour une cuisine élégante et intemporelle.",
      en: "Silky matte mist grey | Silky matte black. The perfect match between mist grey and matte black for an elegant and timeless kitchen."
    },
    images: [
      "/collectionsCuisines/sophie_jette/sophie_jette_1.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Gris brume mat soyeux", en: "Silky matte mist grey" }, icon: Layout },
      { label: { fr: "Noir mat soyeux", en: "Silky matte black" }, icon: Box },
    ]
  },
  {
    slug: "sophie",
    title: "SOPHIE",
    img: "/collectionsCuisines/sophie/sophie_1.webp",
    description: {
      fr: "Ton sur ton : la façade à cadre laqué mat soyeux séduit par une finition artisanale méticuleuse en teinte grège discrète. Les poignées champêtres, les vitrines et les côtés visibles, façon panneaux, soulignent l’élégance du style Cottage.",
      en: "Tone on tone: the silky matte lacquered frame front captivates with a meticulous artisanal finish in a discreet greige shade. The country-style handles, glass cabinets, and panel-style visible sides highlight the elegance of the Cottage style."
    },
    images: [
      "/collectionsCuisines/sophie/sophie_1.webp",
      "/collectionsCuisines/sophie/sophie_2.webp",
      "/collectionsCuisines/sophie/sophie_3.webp",
      "/collectionsCuisines/sophie/sophie_4.webp",
      "/collectionsCuisines/sophie/sophie_5.webp",
      "/collectionsCuisines/sophie/sophie_6.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Style Cottage", en: "Cottage Style" }, icon: Layout },
      { label: { fr: "Finition artisanale", en: "Artisanal finish" }, icon: Box },
    ]
  },
  {
    slug: "jette-amelie",
    title: "JETTE | AMELIE",
    img: "/collectionsCuisines/jette_amelie/jette_amelie_1.webp",
    description: {
      fr: "Greige mat soyeux | Mocca. Une harmonie parfaite de couleurs pour un intérieur moderne et apaisant.",
      en: "Silky matt greige | Mocca. A perfect harmony of colors for a modern and soothing interior."
    },
    images: [
      "/collectionsCuisines/jette_amelie/jette_amelie_1.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Greige mat soyeux", en: "Silky matt greige" }, icon: Layout },
      { label: { fr: "Mocca", en: "Mocca" }, icon: Box },
    ]
  },
  {
    slug: "amelie-1",
    title: "AMELIE | SAND",
    img: "/collectionsCuisines/amelie_1/amelie_1_1.webp",
    description: {
      fr: "Tout est parfaitement bien rangé. Nous réinventons l’espace de rangement – par exemple, avec nos portes-assiettes amovibles dans les coulissants géants ou avec les paniers étroits pour les produits d’entretien dans le sous-évier.",
      en: "Everything is perfectly organized. We are reinventing storage space – for example, with our removable plate holders in giant pull-outs or with narrow baskets for cleaning products in the sink unit."
    },
    images: [
      "/collectionsCuisines/amelie_1/amelie_1_1.webp",
      "/collectionsCuisines/amelie_1/amelie_1_2.webp",
      "/collectionsCuisines/amelie_1/amelie_1_3.webp",
      "/collectionsCuisines/amelie_1/amelie_1_4.webp",
      "/collectionsCuisines/amelie_1/amelie_1_5.webp",
      "/collectionsCuisines/amelie_1/amelie_1_6.webp",
      "/collectionsCuisines/amelie_1/amelie_1_7.webp",
      "/collectionsCuisines/amelie_1/amelie_1_8.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Tout rangé", en: "Everything organized" }, icon: Layout },
      { label: { fr: "Rangement réinventé", en: "Reinvented storage" }, icon: Box },
    ]
  },
  {
    slug: "amelie",
    title: "AMELIE",
    img: "/collectionsCuisines/amelie/amelie_1.webp",
    description: {
      fr: "L’ART DE LA CUISINE : Le plan de travail et la crédence semblent avoir été fabriqués d’un seul tenant. Les zones fonctionnelles, intégrées à fleur, pour l’évier et la table de cuisson subliment cet aménagement généreux. Ergonomie à tous les niveaux : Un lave-vaisselle surélevé et les range-assiettes mobiles sont des accessoires ergonomiques.",
      en: "THE ART OF COOKING: The worktop and splashback seem to have been made in one piece. The flush-integrated functional areas for the sink and hob enhance this generous layout. Ergonomics at all levels: A raised dishwasher and mobile plate holders are ergonomic accessories."
    },
    images: [
      "/collectionsCuisines/amelie/amelie_1.webp",
      "/collectionsCuisines/amelie/amelie_2.webp",
      "/collectionsCuisines/amelie/amelie_3.webp",
      "/collectionsCuisines/amelie/amelie_4.webp",
      "/collectionsCuisines/amelie/amelie_5.webp",
      "/collectionsCuisines/amelie/amelie_6.webp",
      "/collectionsCuisines/amelie/amelie_7.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Art de la cuisine", en: "Art of cooking" }, icon: Layout },
      { label: { fr: "Ergonomie", en: "Ergonomics" }, icon: Box },
    ]
  },
  {
    slug: "cora-susann",
    title: "CORA | SUSANN",
    img: "/collectionsCuisines/cora_susann/cora_susann_1.webp",
    description: {
      fr: "Tout sous les yeux. Avoir une vue globale sur tout ce qui est dans nos coulissants à sortie totale en série : les équipements intérieurs au choix, faciles d’entretien, mettent de l’ordre afin d’avoir rapidement tout sous la main. Les solutions en bois véritable sont élégantes et durables.",
      en: "Everything in sight. Have a global view of everything in our standard full-extension pull-outs: the optional interior equipment, easy to maintain, brings order so that everything is quickly at hand. The real wood solutions are elegant and durable."
    },
    images: [
      "/collectionsCuisines/cora_susann/cora_susann_1.webp",
      "/collectionsCuisines/cora_susann/cora_susann_2.webp",
      "/collectionsCuisines/cora_susann/cora_susann_3.webp",
      "/collectionsCuisines/cora_susann/cora_susann_4.webp",
      "/collectionsCuisines/cora_susann/cora_susann_5.webp",
      "/collectionsCuisines/cora_susann/cora_susann_6.webp",
      "/collectionsCuisines/cora_susann/cora_susann_7.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Vue globale", en: "Global view" }, icon: Layout },
      { label: { fr: "Bois véritable", en: "Real wood" }, icon: Box },
    ]
  },
  {
    slug: "cora-cindy",
    title: "CORA | CINDY",
    img: "/collectionsCuisines/cora_cindy/cora_cindy_1.webp",
    description: {
      fr: "De nos jours, la cuisine n’est plus seulement destinée à préparer les repas, elle est aussi le lieu de rencontre par excellence pour des moments inoubliables. C’est un endroit où l’on aime s’attarder, assis confortablement au comptoir intégré qui prolonge également le plan de travail.",
      en: "Nowadays, the kitchen is not just for preparing meals, it is also the quintessential meeting place for unforgettable moments. It is a place where one loves to linger, sitting comfortably at the integrated counter that also extends the worktop."
    },
    images: [
      "/collectionsCuisines/cora_cindy/cora_cindy_1.webp",
      "/collectionsCuisines/cora_cindy/cora_cindy_2.webp",
      "/collectionsCuisines/cora_cindy/cora_cindy_3.webp",
      "/collectionsCuisines/cora_cindy/cora_cindy_4.webp",
      "/collectionsCuisines/cora_cindy/cora_cindy_5.webp",
      "/collectionsCuisines/cora_cindy/cora_cindy_6.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Lieu de rencontre", en: "Meeting place" }, icon: Layout },
      { label: { fr: "Comptoir intégré", en: "Integrated counter" }, icon: Box },
    ]
  },
  {
    slug: "susann",
    title: "SUSANN",
    img: "/collectionsCuisines/susann/susann_1.webp",
    description: {
      fr: "Susann - BEIGE SABLE BRILLANT. Attire tous les regards. ÉLÉGANCE DE A À Z. Les meubles à abattants, équipés de portes en verre fumé, subliment l’aménagement. Munie de prises femelles pratiques, la plaque antiprojection Connect derrière la table de cuisson reprend le design de la cave à vin.",
      en: "Susann - HIGH GLOSS SAND BEIGE. IMPRESSIVE EYE-CATCHER. ELEGANCE ALL ALONG THE LINE. Flap wall units with smoked glass doors provide a crowning finish. The Connect splashback at the hob picks up on the design and features practical sockets."
    },
    images: [
      "/collectionsCuisines/susann/susann_1.webp",
      "/collectionsCuisines/susann/susann_2.webp",
      "/collectionsCuisines/susann/susann_3.webp",
      "/collectionsCuisines/susann/susann_4.webp",
      "/collectionsCuisines/susann/susann_5.webp",
      "/collectionsCuisines/susann/susann_6.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Beige sable brillant", en: "High gloss sand beige" }, icon: Layout },
      { label: { fr: "Verre fumé", en: "Smoked glass" }, icon: Box },
    ]
  },
  {
    slug: "leni-amelie",
    title: "LENI | AMELIE",
    img: "/collectionsCuisines/leni_amelie/leni_amelie_1.webp",
    description: {
      fr: "Les rainures sont très tendance : alignées, elles créent un superbe effet de profondeur. Le look rainuré de notre façade Leni mélaminée de qualité supérieure est le summum de l’élégance. Les deux décors permettent des conceptions contemporaines.",
      en: "Grooves are very trendy: aligned, they create a superb depth effect. The grooved look of our high-quality melamine Leni front is the height of elegance. The two decors allow for contemporary designs."
    },
    images: [
      "/collectionsCuisines/leni_amelie/leni_amelie_1.webp",
      "/collectionsCuisines/leni_amelie/leni_amelie_2.webp",
      "/collectionsCuisines/leni_amelie/leni_amelie_3.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Look rainuré", en: "Grooved look" }, icon: Layout },
      { label: { fr: "Effet de profondeur", en: "Depth effect" }, icon: Box },
    ]
  },
  {
    slug: "leni-paula",
    title: "LENI | PAULA",
    img: "/collectionsCuisines/leni_paula/leni_paula_1.webp",
    description: {
      fr: "Une icône du style : la structure rainurée de notre façade Leni est au goût du jour. Rien d’étonnant puisqu’elle s’harmonise merveilleusement bien avec l’éclairage et les éléments contrastants. Élégance rime avec fonctionnalité ! Notre façade Paula en stratifié, résistante et robuste, se distingue par son fini noir mat soyeux.",
      en: "A style icon: the grooved structure of our Leni front is on trend. No wonder, as it harmonizes wonderfully with lighting and contrasting elements. Elegance meets functionality! Our laminate front Paula, resistant and robust, is distinguished by its silky matte black finish."
    },
    images: [
      "/collectionsCuisines/leni_paula/leni_paula_1.webp",
      "/collectionsCuisines/leni_paula/leni_paula_2.webp",
      "/collectionsCuisines/leni_paula/leni_paula_3.webp",
      "/collectionsCuisines/leni_paula/leni_paula_4.webp",
      "/collectionsCuisines/leni_paula/leni_paula_5.webp",
      "/collectionsCuisines/leni_paula/leni_paula_6.webp"
    ],
    brand: "burger",
    features: [
      { label: { fr: "Structure rainurée", en: "Grooved structure" }, icon: Layout },
      { label: { fr: "Noir mat soyeux", en: "Silky matte black" }, icon: Box },
    ]
  },
  //ARMONY
  {
    slug: "etro",
    title: "ETRO",
    img: "/collectionsCuisines/etro/PORTRAIT 20_ETRO(1).jpg",
    description: {
      fr: "Le style traditionnel qui caractérise la porte à châssis est réinventé et enrichi par des coupes géométriques bien définies et par une versatilité exprimée par une vaste modularité. Une composition qui réinterprète en style contemporain certains des éléments plus traditionnels de la cuisine.",
      en: "The traditional style characterizing the framed door is reinvented and enriched by well-defined geometric cuts and versatility expressed through vast modularity. A composition that reinterprets some of the more traditional kitchen elements in a contemporary style."
    },
    images: [
      "/collectionsCuisines/etro/PORTRAIT 20_ETRO(1).jpg",
      "/collectionsCuisines/etro/PORTRAIT 20_ETRO(2).jpg",
      "/collectionsCuisines/etro/PORTRAIT 20_ETRO(3).jpg",
      "/collectionsCuisines/etro/PORTRAIT 20_ETRO(4).jpg",
      "/collectionsCuisines/etro/PORTRAIT 20_ETRO(5).jpg"
    ],
    brand: "armony",
    features: [
      { label: { fr: "Style traditionnel réinventé", en: "Reinvented traditional style" }, icon: Layout },
      { label: { fr: "Coupes géométriques", en: "Geometric cuts" }, icon: Box },
    ]
  },
  
  {
    slug: "ligna",
    title: "LIGNA",
    img: "/collectionsCuisines/ligna/PORTRAIT 19_LIGNA(1).jpg",
    description: {
      fr: "Les matériaux valorisent la beauté des contrastes, résultat de choix attentifs de bois tranché et massif mais également le fruit d’une technologie de haut niveau qui en assure la stabilité dans le temps.",
      en: "Materials enhance the beauty of contrasts, the result of careful choices of sliced and solid wood but also the fruit of high-level technology that ensures stability over time."
    },
    images: [
      "/collectionsCuisines/ligna/PORTRAIT 19_LIGNA(1).jpg",
      "/collectionsCuisines/ligna/PORTRAIT 19_LIGNA(2).jpg",
      "/collectionsCuisines/ligna/PORTRAIT 19_LIGNA(3).jpg",
      "/collectionsCuisines/ligna/PORTRAIT 19_LIGNA(4).jpg",
      "/collectionsCuisines/ligna/PORTRAIT 19_LIGNA(5).jpg"
    ],
    brand: "armony",
    features: [
      { label: { fr: "Bois massif", en: "Solid wood" }, icon: Layout },
      { label: { fr: "Technologie de haut niveau", en: "High-level technology" }, icon: Box },
    ]
  },
  {
    slug: "riga",
    title: "RIGA",
    img: "/collectionsCuisines/riga/PORTRAIT 14_RIGA(1).jpg",
    description: {
      fr: "La porte Riga est le résultat d’un traitement articulé de l’épaisse couche superficielle de bois plaqué, pour obtenir une porte nervurée peinte aux couleurs de la collection Armony. Une cuisine qui donne de la lumière grâce aux portes laquées mates, dotées de la surface cannetée 3D caractéristique.",
      en: "The Riga door is the result of an articulated treatment of the thick surface layer of veneered wood, to obtain a ribbed door painted in the colors of the Armony collection. A kitchen that gives light thanks to matt lacquered doors, featuring the characteristic 3D ribbed surface."
    },
    images: [
      "/collectionsCuisines/riga/PORTRAIT 14_RIGA(1).jpg",
      "/collectionsCuisines/riga/PORTRAIT 14_RIGA(2).jpg",
      "/collectionsCuisines/riga/PORTRAIT 14_RIGA(3).jpg",
      "/collectionsCuisines/riga/PORTRAIT 14_RIGA(4).jpg",
      "/collectionsCuisines/riga/PORTRAIT 14_RIGA(5).jpg",
      "/collectionsCuisines/riga/PORTRAIT 14_RIGA(6).jpg",
      "/collectionsCuisines/riga/PORTRAIT 17_RIGA(1).jpg",
      "/collectionsCuisines/riga/PORTRAIT 17_RIGA(2).jpg",
      "/collectionsCuisines/riga/PORTRAIT 17_RIGA(3).jpg",
      "/collectionsCuisines/riga/PORTRAIT 17_RIGA(4).jpg",
      "/collectionsCuisines/riga/PORTRAIT 17_RIGA(5).jpg",
      "/collectionsCuisines/riga/PORTRAIT 17_RIGA(6).jpg",
      "/collectionsCuisines/riga/PORTRAIT 7_RIGA(1).jpg",
      "/collectionsCuisines/riga/PORTRAIT 7_RIGA(2).jpg",
      "/collectionsCuisines/riga/PORTRAIT 7_RIGA(3).jpg"
    ],
    brand: "armony",
    features: [
      { label: { fr: "Porte nervurée", en: "Ribbed door" }, icon: Layout },
      { label: { fr: "Surface cannetée 3D", en: "3D ribbed surface" }, icon: Box },
    ]
  },
  {
    slug: "kappa",
    title: "KAPPA",
    img: "/collectionsCuisines/kappa/PORTRAIT 6_KAPPA(1).jpg",
    description: {
      fr: "Les traits forts et énergiques de la cuisine Kappa dessinent des espaces modernes et raffinés où se mesurer avec la nourriture et l’hospitalité, interprétant le besoin d’espaces de plus en plus articulés et représentatifs adaptés aux nouveaux styles de vie contemporains.",
      en: "The strong and energetic traits of the Kappa kitchen draw modern and refined spaces where one can measure oneself with food and hospitality, interpreting the need for increasingly articulated and representative spaces adapted to new contemporary lifestyles."
    },
    images: [
      "/collectionsCuisines/kappa/PORTRAIT 6_KAPPA(1).jpg",
      "/collectionsCuisines/kappa/PORTRAIT 6_KAPPA(2).jpg",
      "/collectionsCuisines/kappa/PORTRAIT 6_KAPPA(3).jpg",
      "/collectionsCuisines/kappa/PORTRAIT 6_KAPPA(4).jpg",
      "/collectionsCuisines/kappa/PORTRAIT 8_KAPPA(1).jpg",
      "/collectionsCuisines/kappa/PORTRAIT 8_KAPPA(2).jpg",
      "/collectionsCuisines/kappa/PORTRAIT 8_KAPPA(3).jpg",
      "/collectionsCuisines/kappa/PORTRAIT 8_KAPPA(4).jpg",
      "/collectionsCuisines/kappa/PORTRAIT 8_KAPPA(5).jpg"
    ],
    brand: "armony",
    features: [
      { label: { fr: "Traits énergiques", en: "Energetic traits" }, icon: Layout },
      { label: { fr: "Espaces modernes", en: "Modern spaces" }, icon: Box },
    ]
  },
  {
    slug: "ypsilon",
    title: "YPSILON",
    img: "/collectionsCuisines/ypsilon/PORTRAIT 7_YPSILON(1).jpg",
    description: {
      fr: "Des formes essentielles, des géométries limpides, des architectures intégrées au living. Un idéal de synthèses qui renvoie à l’aspect pratique en interprétant avec un goût contemporain le plaisir de l’intimité familiale.",
      en: "Essential forms, clear geometries, architectures integrated into the living area. An ideal of synthesis that refers to practicality by interpreting with a contemporary taste the pleasure of family intimacy."
    },
    images: [
      "/collectionsCuisines/ypsilon/PORTRAIT 7_YPSILON(1).jpg",
      "/collectionsCuisines/ypsilon/PORTRAIT 7_YPSILON(2).jpg",
      "/collectionsCuisines/ypsilon/PORTRAIT 7_YPSILON(3).jpg"
    ],
    brand: "armony",
    features: [
      { label: { fr: "Formes essentielles", en: "Essential forms" }, icon: Layout },
      { label: { fr: "Géométries limpides", en: "Clear geometries" }, icon: Box },
    ]
  },
  {
    slug: "tau",
    title: "TAU",
    img: "/collectionsCuisines/tau/PORTRAIT 12_TAU(1).jpg",
    description: {
      fr: "Des lignes sobres dessinent des surfaces épurées qui fusionnent harmonieusement style, prestige et fonctionnalité, trouvant un terrain d’entente entre l’innovation des matériaux et la qualité artisanale du Made in Italy.",
      en: "Sober lines draw refined surfaces that harmoniously merge style, prestige and functionality, finding common ground between material innovation and Made in Italy craftsmanship."
    },
    images: [
      "/collectionsCuisines/tau/PORTRAIT 12_TAU(1).jpg",
      "/collectionsCuisines/tau/PORTRAIT 12_TAU(2).jpg",
      "/collectionsCuisines/tau/PORTRAIT 12_TAU(3).jpg",
      "/collectionsCuisines/tau/PORTRAIT 12_TAU(4).jpg",
      "/collectionsCuisines/tau/PORTRAIT 12_TAU(5).jpg"
    ],
    brand: "armony",
    features: [
      { label: { fr: "Lignes sobres", en: "Sober lines" }, icon: Layout },
      { label: { fr: "Qualité artisanale", en: "Craftsmanship quality" }, icon: Box },
    ]
  },
  {
    slug: "diamond",
    title: "DIAMOND",
    img: "/collectionsCuisines/diamond/PORTRAIT 13_DIAMOND(1).jpg",
    description: {
      fr: "Diamond, une porte avec poignée intégrée, un concept essentiel, unique et intemporel. Produite avec les machines à contrôle numérique les plus modernes, elle confère à la cuisine un aspect minimaliste et raffiné.",
      en: "Diamond, a door with integrated handle, an essential, unique and timeless concept. Produced with the most modern digital control machines, it gives the kitchen a minimalist and refined look."
    },
    images: [
      "/collectionsCuisines/diamond/PORTRAIT 13_DIAMOND(1).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 13_DIAMOND(2).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 13_DIAMOND(3).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 13_DIAMOND(4).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 13_DIAMOND(5).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 13_DIAMOND(6).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 13_DIAMOND(7).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 14_DIAMOND(1).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 14_DIAMOND(2).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 14_DIAMOND(3).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 14_DIAMOND(4).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 14_DIAMOND(5).jpg",
      "/collectionsCuisines/diamond/PORTRAIT 14_DIAMOND(6).jpg"
    ],
    brand: "armony",
    features: [
      { label: { fr: "Minimalisme et raffinement", en: "Minimalism and refinement" }, icon: Box },
      { label: { fr: "Concept unique", en: "Unique concept" }, icon: Layout },
    ]
  },
  {
    slug: "rho",
    title: "RHO",
    img: "/collectionsCuisines/rho/PORTRAIT 1_RHO(1).jpg",
    description: {
      fr: "L’utilisation de matériaux innovants permet d’inventer de nouvelles formes et de nouveaux concepts pour aboutir à une alchimie parfaite entre innovation et tradition. La porte solide, de 22 mm d’épaisseur, donne vie à un espace harmonieux au sein duquel se développent des structures fortes et compactes, qui renferment des fonctions, des rangements et des espaces parfaitement agencés.",
      en: "The use of innovative materials allows inventing new forms and new concepts to achieve a perfect alchemy between innovation and tradition. The solid 22mm thick door gives life to a harmonious space within which strong and compact structures develop, enclosing perfectly arranged functions, storage and spaces."
    },
    images: [
      "/collectionsCuisines/rho/PORTRAIT 1_RHO(1).jpg",
      "/collectionsCuisines/rho/PORTRAIT 1_RHO(2).jpg",
      "/collectionsCuisines/rho/PORTRAIT 1_RHO(3).jpg",
      "/collectionsCuisines/rho/PORTRAIT 1_RHO(4).jpg",
      "/collectionsCuisines/rho/PORTRAIT 1_RHO(5).jpg",
      "/collectionsCuisines/rho/PORTRAIT 1_RHO(6).jpg",
      "/collectionsCuisines/rho/PORTRAIT 1_RHO(7).jpg",
      "/collectionsCuisines/rho/PORTRAIT 1_RHO(8).jpg",
      "/collectionsCuisines/rho/PORTRAIT 2_RHO(1).jpg",
      "/collectionsCuisines/rho/PORTRAIT 2_RHO(2).jpg",
      "/collectionsCuisines/rho/PORTRAIT 2_RHO(3).jpg",
      "/collectionsCuisines/rho/PORTRAIT 2_RHO(4).jpg",
      "/collectionsCuisines/rho/PORTRAIT 2_RHO(5).jpg",
      "/collectionsCuisines/rho/PORTRAIT 3_RHO(1).jpg",
      "/collectionsCuisines/rho/PORTRAIT 3_RHO(2).jpg",
      "/collectionsCuisines/rho/PORTRAIT 3_RHO(3).jpg",
      "/collectionsCuisines/rho/PORTRAIT 3_RHO(4).jpg",
      "/collectionsCuisines/rho/PORTRAIT 3_RHO(5).jpg",
      "/collectionsCuisines/rho/PORTRAIT 4_RHO (1).jpg",
      "/collectionsCuisines/rho/PORTRAIT 4_RHO (2).jpg",
      "/collectionsCuisines/rho/PORTRAIT 4_RHO (3).jpg",
      "/collectionsCuisines/rho/PORTRAIT 4_RHO (4).jpg",
      "/collectionsCuisines/rho/PORTRAIT 5_RHO(2).jpg",
      "/collectionsCuisines/rho/PORTRAIT 5_RHO(3).jpg",
      "/collectionsCuisines/rho/PORTRAIT 5_RHO(4).jpg",
      "/collectionsCuisines/rho/PORTRAIT 5_RHO(5).jpg",
      "/collectionsCuisines/rho/PORTRAIT 18_RHO(1).jpg",
      "/collectionsCuisines/rho/PORTRAIT 18_RHO(2).jpg",
      "/collectionsCuisines/rho/PORTRAIT 18_RHO(3).jpg"
    ],
    brand: "armony",
    features: [
      { label: { fr: "Innovation et tradition", en: "Innovation and tradition" }, icon: Box },
      { label: { fr: "Structures fortes", en: "Strong structures" }, icon: Layout },
    ]
  },
  {
    slug: "skyline",
    title: "SKYLINE",
    img: "/collectionsCuisines/skyline/skyline01.jpg",
    description: {
      fr: "Une cuisine qui interprète la modernité, en alliant l’élégance de matériaux innovants à la technologie de la porte avec cadre en aluminium. La porte en aluminium anodisé noir Skyline, unique en son genre, combine en un seul corps différents matériaux et offre des choix raffinés de revêtement frontal: le verre trempé brillant, mat et métallisé, le Corian et le Gres dans différentes variantes de couleur.",
      en: "A kitchen that interprets modernity, combining the elegance of innovative materials with the technology of the aluminum frame door. The Skyline black anodized aluminum door, one of a kind, combines different materials in a single body and offers refined choices of frontal cladding: glossy, matte and metallic tempered glass, Corian and Gres in different color variations."
    },
    images: ["/collectionsCuisines/skyline/skyline01.jpg","/collectionsCuisines/skyline/skyline02.jpg","/collectionsCuisines/skyline/skyline03.jpg","/collectionsCuisines/skyline/skyline04.jpg","/collectionsCuisines/skyline/skyline05.jpg","/collectionsCuisines/skyline/skyline06.jpg","/collectionsCuisines/skyline/skyline07.jpg","/collectionsCuisines/skyline/skyline08.jpg","/collectionsCuisines/skyline/skyline09.jpg","/collectionsCuisines/skyline/skyline10.jpg","/collectionsCuisines/skyline/skyline11.jpg"],
    brand: "armony",
    features: [
      { label: { fr: "Matériaux innovants", en: "Innovative materials" }, icon: Box },
      { label: { fr: "Design éclectique", en: "Eclectic design" }, icon: Layout },
    ]
  },
  {
    slug: "omicron",
    title: "OMICRON",
    img: "/collectionsCuisines/omicron/omicron01.jpg",
    description: {
      fr: "Un modèle innovant qui propose des associations modernes entre lignes droites, matériaux inédits et configurations suggestives de l’espace. Des solutions caractérisées par une attention particulière aux détails qu’on retrouve notamment dans le profil de la porte de 22 mm d’épaisseur façonné à 33°.",
      en: "An innovative model offering modern combinations of straight lines, new materials and suggestive space configurations. Solutions characterized by special attention to detail, particularly in the 22mm thick door profile shaped at 33°."
    },
    images: ["/collectionsCuisines/omicron/omicron01.jpg","/collectionsCuisines/omicron/omicron02.jpg","/collectionsCuisines/omicron/omicron03.jpg","/collectionsCuisines/omicron/omicron04.jpg","/collectionsCuisines/omicron/omicron05.jpg","/collectionsCuisines/omicron/omicron06.jpg","/collectionsCuisines/omicron/omicron07.jpg","/collectionsCuisines/omicron/omicron08.jpg","/collectionsCuisines/omicron/omicron09.jpg","/collectionsCuisines/omicron/omicron10.jpg","/collectionsCuisines/omicron/omicron11.jpg","/collectionsCuisines/omicron/omicron12.jpg","/collectionsCuisines/omicron/omicron13.jpg","/collectionsCuisines/omicron/omicron14.jpg","/collectionsCuisines/omicron/omicron15.jpg","/collectionsCuisines/omicron/omicron16.jpg",],
    brand: "armony",
    features: [
      { label: { fr: "Design innovant", en: "Innovative design" }, icon: Layout },
      { label: { fr: "Matériaux exclusifs", en: "Exclusive materials" }, icon: Box },
    ]
  },
  
  {
    slug: "yota",
    title: "YOTA",
    img: "/cuisines/yota.png",
    description: {
      fr: "La cuisine Yota est créée autour des personnes qui l’habitent, chaque détail a été conçu pour accompagner le client dans un voyage émotionnel. Une riche porte de 22 millimètres d’épaisseur confère une importance particulière à la cuisine. Elle est mise en valeur par un vaste choix de matériaux tels que les bois plaqués finement travaillés et les laqués brillants, mats et autres laquages spéciaux.",
      en: "The Yota kitchen is created around the people who live in it; every detail has been designed to accompany the client on an emotional journey. A rich 22mm thick door lends special importance to the kitchen. It is enhanced by a wide choice of materials such as finely crafted wood veneers and glossy, matte, or other special lacquers."
    },
    images: ["/collectionsCuisines/yota/yota1.jpg", "/collectionsCuisines/yota/yota2.jpg", "/collectionsCuisines/yota/yota3.jpg","/collectionsCuisines/yota/yota4.jpg","/collectionsCuisines/yota/yota5.jpg","/collectionsCuisines/yota/yota6.jpg","/collectionsCuisines/yota/yota7.jpg","/collectionsCuisines/yota/yota8.jpg","/collectionsCuisines/yota/yota9.jpg","/collectionsCuisines/yota/yota10.jpg","/collectionsCuisines/yota/yota11.jpg","/collectionsCuisines/yota/yota12.jpg","/collectionsCuisines/yota/yota13.jpg","/collectionsCuisines/yota/yota14.jpg","/collectionsCuisines/yota/yota15.jpg","/collectionsCuisines/yota/yota16.jpg","/collectionsCuisines/yota/yota17.jpg","/collectionsCuisines/yota/yota18.jpg","/collectionsCuisines/yota/yota19.jpg","/collectionsCuisines/yota/yota20.jpg","/collectionsCuisines/yota/yota21.jpg","/collectionsCuisines/yota/yota22.jpg","/collectionsCuisines/yota/yota23.jpg","/collectionsCuisines/yota/yota24.jpg","/collectionsCuisines/yota/yota25.jpg","/collectionsCuisines/yota/yota26.jpg","/collectionsCuisines/yota/yota27.jpg","/collectionsCuisines/yota/yota28.jpg","/collectionsCuisines/yota/yota29.jpg"],
    brand: "armony",
    features: [
      { label: { fr: "Design moderne", en: "Modern design" }, icon: Layout },
      { label: { fr: "Finitions premium", en: "Premium finishes" }, icon: Box },
    ]
  }, 
  // BAUFORMAT 
  {
    slug: "salzburg-paris",
    title: "SALZBURG | PARIS",
    img: "/collectionsCuisines/salzburgparis/salzburgparis01.png",
    description: {
      fr: "Pour une esthétique intemporelle : la nouvelle façade Paris plaquée, entourée d’un cadre étroit, répond aux exigences d’un look en filigrane. Nos plans de travail, en seulement 12 mm d’épaisseur, viennent compléter l’élégance de cette cuisine.",
      en: "For timeless aesthetic appeal: the new, narrow-framed Paris veneered front meets the preference for a delicate look. The perfect companion: our slim-line worktops in a thickness of only 12 mm."
    },
    images: [
      "/collectionsCuisines/salzburgparis/salzburgparis01.png",
      "/collectionsCuisines/salzburgparis/salzburgparis02.webp",
      "/collectionsCuisines/salzburgparis/salzburgparis03.webp",
      "/collectionsCuisines/salzburgparis/salzburgparis04.webp",
      "/collectionsCuisines/salzburgparis/salzburgparis05.webp",
      "/collectionsCuisines/salzburgparis/salzburgparis06.webp",
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Cadre étroit Paris", en: "Narrow frame Paris" }, icon: Layout },
      { label: { fr: "HPL mat Salzburg", en: "Matt HPL Salzburg" }, icon: Box },
      { label: { fr: "Plans de travail 12mm", en: "12mm worktops" }, icon: Maximize },
      { label: { fr: "Style Industriel", en: "Industrial Style" }, icon: Utensils },
    ]
  },
  {
    slug: "paris-porto",
    title: "PARIS | PORTO",
    img: "/collectionsCuisines/parisporto/parisporto01.png",
    description: {
      fr: "Davantage de nature ? Notre façade Paris, subtilement veinée, le permet grâce à son aspect bois : les décors chêne naturel, chêne fumé et noyer s’harmonisent parfaitement avec les touches vertes.",
      en: "A touch more natural authenticity? Our finely grained Paris front in reproduction wood invites you to achieve precisely this: in the company of accent green, the natural oak, smoked oak and walnut decors feel authentic and particularly at home."
    },
    images: [
      "/collectionsCuisines/parisporto/parisporto01.png",
      "/collectionsCuisines/parisporto/parisporto02.webp",
       "/collectionsCuisines/parisporto/parisporto03.webp",
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Retour à la nature", en: "Back to nature" }, icon: Layout },
      { label: { fr: "Façade Paris veinée", en: "Grained Paris front" }, icon: Box },
      { label: { fr: "Décors bois authentiques", en: "Authentic wood decors" }, icon: Maximize },
      { label: { fr: "Harmonie de couleurs", en: "Color harmony" }, icon: Utensils },
    ]
  },{
    slug: "sydney-strassburg",
    title: "SYDNEY | STRASSBURG",
    img: "/collectionsCuisines/sydneystrassburg/sydneystrassburg01.png",
    description: {
      fr: "Des petits changements suffisent parfois pour un nouveau mode de vie. Les portes escamotables transforment, en un tournemain, les meubles fermés en espace ouvert. Pour un intérieur fonctionnel qui s’adapte aux besoins de chacun. Range-couverts, coulissants intérieurs ou espace pratique autour de la table de cuisson, le rangement bien pensé est essentiel dans une cuisine conçue jusque dans les moindres détails.",
      en: "Sometimes small changes are all it takes for a new outlook on life. Without further ado, pocket-door systems transform living-room furniture from closed to open fronted. For a multifunctional interior that falls in with personal needs. Whether cutlery tray, spacious interior pull-outs or welcome surface around the hob – logically designed storage is the be-all and end-all of a carefully planned kitchen."
    },
    images: [
      "/collectionsCuisines/sydneystrassburg/sydneystrassburg01.png",
      "/collectionsCuisines/sydneystrassburg/sydneystrassburg02.webp",
      "/collectionsCuisines/sydneystrassburg/sydneystrassburg03.webp",
      "/collectionsCuisines/sydneystrassburg/sydneystrassburg04.webp",
      "/collectionsCuisines/sydneystrassburg/sydneystrassburg05.webp",
      "/collectionsCuisines/sydneystrassburg/sydneystrassburg06.webp",
      "/collectionsCuisines/sydneystrassburg/sydneystrassburg07.webp",
      "/collectionsCuisines/sydneystrassburg/sydneystrassburg08.webp",
      "/collectionsCuisines/sydneystrassburg/sydneystrassburg09.webp",
      "/collectionsCuisines/sydneystrassburg/sydneystrassburg10.webp",
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Portes escamotables", en: "Pocket-door systems" }, icon: Layout },
      { label: { fr: "Rangement bien pensé", en: "Logical storage" }, icon: Box },
      { label: { fr: "Coulissants intérieurs", en: "Interior pull-outs" }, icon: Maximize },
      { label: { fr: "Conception raffinée", en: "Cleverly designed" }, icon: Utensils },
    ]
  },{
    slug: "porto-paris",
    title: "PORTO | PARIS",
    img: "/collectionsCuisines/portoparis/portoparis01.png",
    description: {
      fr: "Davantage de nature ? Notre façade Paris, subtilement veinée, le permet grâce à son aspect bois : les décors chêne naturel, chêne fumé et noyer s’harmonisent parfaitement avec les touches vertes. La façade Porto 390, quant à elle, offre une surface mate soyeuse déclinée dans une vaste palette de coloris pour un toucher doux et une grande résistance.",
      en: "A touch more natural authenticity? Our finely grained Paris front in reproduction wood invites you to achieve precisely this: in the company of accent green, the natural oak, smoked oak and walnut decors feel authentic and particularly at home. The Porto 390 range is characterized by its silky matt fronts, available in various colors for a soft touch and high resistance."
    },
    images: [
      "/collectionsCuisines/portoparis/portoparis01.png",
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Retour à la nature", en: "Back to nature" }, icon: Layout },
      { label: { fr: "Façade Paris veinée", en: "Grained Paris front" }, icon: Box },
      { label: { fr: "Finitions Porto mates soyeuses", en: "Silky matt Porto finishes" }, icon: Maximize },
      { label: { fr: "Authenticité et design", en: "Authenticity and design" }, icon: Utensils },
    ]
  },{
    slug: "salzburg",
    title: "SALZBURG",
    img: "/collectionsCuisines/salzburg/salzburg01.png",
    description: {
      fr: "Le blanc convient à tous les intérieurs. Diamétralement opposé, le noir se réserve, par exemple, aux poignées, au verre fumé foncé ou à la crédence. L’organisation intérieure des coulissants se revêt de gris Orion pour un côté chic et élégant. La façade Salzburg 360 se distingue par son aspect robuste en stratifié, offrant une durabilité extrême, une résistance aux traces de doigts et une facilité d'entretien exceptionnelle.",
      en: "White is a classic furnishing color that fits every interior. In dramatic contrast, black accents are used for handles, dark smoky glass, or splashbacks. The interior organization of pull-outs in Orion grey adds a chic and elegant touch. The Salzburg 360 range features a robust laminate front, known for its extreme durability, resistance to fingerprints, and ease of cleaning."
    },
    images: [
      "/collectionsCuisines/salzburg/salzburg01.png",
       "/collectionsCuisines/salzburg/salzburg02.webp",
      "/collectionsCuisines/salzburg/salzburg03.webp",
      "/collectionsCuisines/salzburg/salzburg04.webp",
      "/collectionsCuisines/salzburg/salzburg05.webp",
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Architecture exigeante", en: "Demanding architecture" }, icon: Layout },
      { label: { fr: "Stratifié haute résistance", en: "High-resistance laminate" }, icon: Box },
      { label: { fr: "Organisation gris Orion", en: "Orion grey organization" }, icon: Maximize },
      { label: { fr: "Design chic et élégant", en: "Chic and elegant design" }, icon: Utensils },
    ]
  },{
    slug: "rhodos-bali",
    title: "RHODOS | BALI",
    img: "/collectionsCuisines/rhodosbali/rhodosbali01.png",
    description: {
      fr: "L’heure est aux bonnes idées pour vivre et travailler : un bureau confortable se cache dans l’armoire, équipée d’un éclairage DEL intégré et d’une belle porte pliante relevable. Les coulissants intérieurs flexibles permettent d’organiser aisément les fournitures de bureau. Les tablettes pivotantes ergonomiques LeMans et les meubles coulissants ultra-minces exploitent chaque recoin avec intelligence.",
      en: "It's high time for good ideas in home and working life: with integrated LED lighting and elegant folding lifter, the tall unit provides convenient space for working from home in comfort. Versatile interior pullouts, ergonomic LeMans swivel shelves, and extra-narrow pull-out units utilise every last inch of space with effortless ease."
    },
    images: [
      "/collectionsCuisines/rhodosbali/rhodosbali01.png",
       "/collectionsCuisines/rhodosbali/rhodosbali02.webp",
      "/collectionsCuisines/rhodosbali/rhodosbali03.webp",
      "/collectionsCuisines/rhodosbali/rhodosbali04.webp",
      "/collectionsCuisines/rhodosbali/rhodosbali05.webp",
      "/collectionsCuisines/rhodosbali/rhodosbali06.webp",
      "/collectionsCuisines/rhodosbali/rhodosbali07.webp",
      "/collectionsCuisines/rhodosbali/rhodosbali08.webp",
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Bureau dissimulé", en: "Hidden home office" }, icon: Layout },
      { label: { fr: "Éclairage DEL intégré", en: "Integrated LED lighting" }, icon: Box },
      { label: { fr: "Tablettes pivotantes LeMans", en: "LeMans swivel shelves" }, icon: Maximize },
      { label: { fr: "Conception intelligente", en: "Cleverly designed" }, icon: Utensils },
    ]
  },{
    slug: "kalmar-glasgow",
    title: "KALMAR | GLASGOW",
    img: "/collectionsCuisines/kalmarglasgow/kalmarglasgow01.png",
    description: {
      fr: "Le Lightbridge éclaire, protège des éclaboussures et permet de ranger les accessoires. Les éclairages DEL Malindi ou UP & DOWN créent une ambiance chaleureuse. La façade Glasgow, avec son aspect verre véritable et ses chants biseautés à 45°, offre un effet de profondeur exclusif. Ce matériau est dix fois plus résistant et deux fois plus léger que le verre, avec un revêtement anti-traces de doigts pour une hygiène parfaite.",
      en: "The Lightbridge provides lighting, splash protection, and storage for everyday accessories. Vertical Malindi LED lights or UP & DOWN strips create a warm atmosphere. The Glasgow front, with its real-glass look and 45° beveled edges, offers an exclusive depth effect. This smart material is ten times more unbreakable and 50% lighter than real glass, featuring an anti-fingerprint coating for effortless maintenance."
    },
    images: [
      "/collectionsCuisines/kalmarglasgow/kalmarglasgow01.png",
       "/collectionsCuisines/kalmarglasgow/kalmarglasgow02.webp",
      "/collectionsCuisines/kalmarglasgow/kalmarglasgow03.webp",
      "/collectionsCuisines/kalmarglasgow/kalmarglasgow04.webp",
      "/collectionsCuisines/kalmarglasgow/kalmarglasgow05.webp",
      "/collectionsCuisines/kalmarglasgow/kalmarglasgow06.webp",
      "/collectionsCuisines/kalmarglasgow/kalmarglasgow07.webp",
    
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Éclairage Lightbridge", en: "Lightbridge lighting" }, icon: Layout },
      { label: { fr: "Aspect verre Glasgow", en: "Glasgow glass look" }, icon: Box },
      { label: { fr: "Matériau haute résistance", en: "High-resistance material" }, icon: Maximize },
      { label: { fr: "Finition anti-traces", en: "Anti-fingerprint finish" }, icon: Utensils },
    ]
  },
  {
    slug: "gotland",
    title: "GOTLAND",
    img: "/collectionsCuisines/gotland/gotland01.png",
    description: {
      fr: "Notre modèle Gotland 644 - 486 est une déclaration de design contemporain. Alliant le bois véritable (Chêne foncé) à une architecture précise, il crée une atmosphère de chaleur sensuelle et de modernité. Les détails raffinés comme les poignées et systèmes de crédence en noir mat, ainsi que l’évier intégré, soulignent son élégance exclusive.",
      en: "Our Gotland 644 - 486 model is a statement of contemporary design. Combining genuine timber (Dark Oak) with precise architecture, it creates an atmosphere of sensual warmth and modernity. Refined details like matt black handles and railing systems, along with the integrated sink, underline its exclusive elegance."
    },
    images: [
      "/collectionsCuisines/gotland/gotland01.png",
      
    
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Bois véritable Chêne", en: "Genuine Oak timber" }, icon: Layout },
      { label: { fr: "Architecture géométrique", en: "Geometric architecture" }, icon: Box },
      { label: { fr: "Détails noir mat", en: "Matt black details" }, icon: Maximize },
      { label: { fr: "Rangement SpaceFlexx", en: "SpaceFlexx organization" }, icon: Utensils },
    ]
  },
{
    slug: "Göteborg",
    title: "GÖTEBORG",
    img: "/collectionsCuisines/Göteborg/Göteborg01.png",
    description: {
      fr: "Le modèle Göteborg 640 - 459 se distingue par sa finition premium en bois de hêtre, offrant un design contemporain et architectural. Son esthétique minimaliste peut être soulignée par une configuration sans poignées, créant un look épuré. Ce matériau intelligent allie la chaleur naturelle du bois à une durabilité exceptionnelle, caractéristique du savoir-faire allemand Bauformat.",
      en: "The Göteborg 640 - 459 model is distinguished by its premium Beach Wood finish, offering a contemporary and architectural design. Its minimalist aesthetic can be highlighted by a handleless configuration, creating a sleek look. This smart material combines the natural warmth of wood with exceptional durability, characteristic of Bauformat's German engineering."
    },
    images: [
      "/collectionsCuisines/Göteborg/Göteborg01.png",
      
    
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Finition bois de hêtre", en: "Beach Wood finish" }, icon: Layout },
      { label: { fr: "Design architectural", en: "Architectural design" }, icon: Box },
      { label: { fr: "Minimalisme sans poignée", en: "Minimalist handleless" }, icon: Maximize },
      { label: { fr: "Qualité allemande Bauformat", en: "German Bauformat quality" }, icon: Utensils },
    ]
  },{
    slug: "girona-bali",
    title: "GIRONA | BALI",
    img: "/collectionsCuisines/girona-bali/girona-bali01.png",
    description: {
      fr: "L'élégance du modèle Girona 540 s'associe au naturel de la gamme Bali. La façade Girona en laque mate (Brun intense) apporte une touche sophistiquée et soyeuse, tandis que le décor Chêne ambre de la série Bali offre une chaleur authentique. Ce mélange de textures et de matériaux crée un équilibre parfait entre modernité raffinée et robustesse quotidienne.",
      en: "The elegance of the Girona 540 model meets the natural feel of the Bali range. The Girona front in silky matt lacquer (Intense Brown) provides a sophisticated touch, while the Amber Oak decor from the Bali series offers authentic warmth. This blend of textures and materials creates a perfect balance between refined modernity and everyday robustness."
    },
    images: [
      "/collectionsCuisines/girona-bali/girona-bali01.png",
      
    
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Laque mate Girona", en: "Girona silky matt lacquer" }, icon: Layout },
      { label: { fr: "Décor Chêne ambre Bali", en: "Bali Amber Oak decor" }, icon: Box },
      { label: { fr: "Surface haute durabilité", en: "High durability surface" }, icon: Maximize },
      { label: { fr: "Esthétique sans poignée", en: "Minimalist handleless look" }, icon: Utensils },
    ]
  },
  {
    slug: "london-potsdam",
    title: "LONDON | POTSDAM",
    img: "/collectionsCuisines/london-potsdam/london-potsdam01.png",
    description: {
      fr: "Le modèle London 466 | Potsdam 281 place l'aménagement sous le signe du confort et du style. La façade CP sans poignée fait preuve d'une grande élégance, complétée par des solutions innovantes comme le meuble haut à lamelles en verre Climber pour plus de liberté de mouvement et une coulisse à ouverture intégrale accessible des deux côtés.",
      en: "The London 466 | Potsdam 281 model focuses on comfort and style. The handleless CP front demonstrates great elegance, complemented by innovative solutions such as the Climber glass louvred wall unit for more freedom of movement and a full-extension pull-out accessible from both sides."
    },
    images: [
      "/collectionsCuisines/london-potsdam/london-potsdam01.png",
      "/collectionsCuisines/london-potsdam/london-potsdam02.webp",
      "/collectionsCuisines/london-potsdam/london-potsdam03.webp",
      "/collectionsCuisines/london-potsdam/LONDON-potsdam04.webp",
      
    
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Façade CP sans poignée", en: "Handleless CP front" }, icon: Layout },
      { label: { fr: "Meuble haut Climber", en: "Climber wall unit" }, icon: Box },
      { label: { fr: "Coulisse intégrale double accès", en: "Dual-access full pull-out" }, icon: Maximize },
      { label: { fr: "Confort et style Bauformat", en: "Bauformat comfort and style" }, icon: Utensils },
    ]
  },
   {
    slug: "potsdam-siena",
    title: "POTSDAM | SIENA",
    img: "/collectionsCuisines/potsdam-siena/potsdam-siena01.png",
    description: {
      fr: "L'harmonie parfaite entre la douceur du Greige mat soyeux (Potsdam 276) et l'aspect naturel du Chêne Alpine (Siena 161). Cette collection Bauformat incarne une élégance intemporelle et une qualité allemande exceptionnelle. Les surfaces mates soyeuses sont non seulement esthétiques mais aussi durables, offrant une résistance accrue aux rayures et une facilité d'entretien au quotidien.",
      en: "A perfect harmony between the soft Greige silky matt finish (Potsdam 276) and the natural look of Alpine Oak (Siena 161). This Bauformat collection embodies timeless elegance and exceptional German quality. The silky matt surfaces are not only aesthetic but also durable, offering increased scratch resistance and effortless everyday maintenance."
    },
    images: [
      "/collectionsCuisines/potsdam-siena/potsdam-siena01.png",
      
      
    
      
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Greige mat soyeux", en: "Greige silky matt finish" }, icon: Layout },
      { label: { fr: "Décor Chêne Alpine", en: "Alpine Oak decor" }, icon: Box },
      { label: { fr: "Qualité allemande", en: "German quality" }, icon: Maximize },
      { label: { fr: "Durabilité certifiée", en: "Certified durability" }, icon: Utensils },
    ]
  },{
    slug: "cambridge",
    title: "CAMBRIDGE",
    img: "/collectionsCuisines/cambridge/cambridge01.png",
    description: {
      fr: "Le modèle Cambridge revisite le style campagne avec une élégance intemporelle. Ses façades à cadre en bois massif et placage bois véritable apportent une chaleur naturelle et une authenticité incomparable. Finie avec une laque mate soyeuse, cette collection allie le charme rustique à une robustesse moderne, créant une atmosphère accueillante et harmonieuse.",
      en: "The Cambridge model reinterprets the country house style with timeless elegance. Its framed fronts, crafted from solid wood and real wood veneer, bring natural warmth and incomparable authenticity. Finished with a silky matt lacquer, this collection combines rustic charm with modern durability."
    },
    images: [
      "/collectionsCuisines/cambridge/cambridge01.png",
      "/collectionsCuisines/cambridge/cambridge02.webp",
      "/collectionsCuisines/cambridge/cambridge03.webp",
      "/collectionsCuisines/cambridge/cambridge04.webp",
      "/collectionsCuisines/cambridge/cambridge05.webp",
      "/collectionsCuisines/cambridge/cambridge06.webp",
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Style Campagne chic", en: "Chic Country House style" }, icon: Layout },
      { label: { fr: "Façades en bois véritable", en: "Real wood fronts" }, icon: Box },
      { label: { fr: "Laque mate soyeuse", en: "Silky matt lacquer" }, icon: Maximize },
      { label: { fr: "Charme authentique", en: "Authentic charm" }, icon: Utensils },
    ]
  },
{
    slug: "torino",
    title: "TORINO",
    img: "/collectionsCuisines/torino/torino01.png",
    description: {
      fr: "Le modèle Torino mise sur le confort culinaire avec un vaste espace de rangement et une technique écophile. Sa pièce maîtresse est sa station de mise sous vide intégrée, idéale pour préserver la fraîcheur des aliments plus longtemps. Ses surfaces bénéficient d'un effet anti-traces pour un entretien facilité et une hygiène irréprochable.",
      en: "The Torino model focuses on culinary convenience with large storage volumes and eco-friendly technology. Its centerpiece is the integrated vacuum sealing station, perfect for keeping food fresh longer. Surfaces feature an anti-fingerprint effect for easy maintenance and impeccable hygiene."
    },
    images: [
      "/collectionsCuisines/torino/torino01.png",
      "/collectionsCuisines/torino/torino02.webp",
      "/collectionsCuisines/torino/torino03.webp",
      "/collectionsCuisines/torino/torino04.webp",
      "/collectionsCuisines/torino/torino05.webp",
      "/collectionsCuisines/torino/torino06.webp",
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Station de mise sous vide", en: "Integrated vacuum station" }, icon: Layout },
      { label: { fr: "Grand volume de rangement", en: "Large storage volume" }, icon: Box },
      { label: { fr: "Effet anti-traces", en: "Anti-fingerprint effect" }, icon: Maximize },
      { label: { fr: "Technique écophile", en: "Eco-friendly technology" }, icon: Utensils },
    ]
  },
{
    slug: "porto",
    title: "PORTO",
    img: "/collectionsCuisines/porto/porto01.png",
    description: {
      fr: "Le modèle Porto 390 - 307 incarne un design minimaliste avec sa finition laquée mat soyeux Vert noir (FG 307). Ses façades en MDF de haute qualité sont revêtues d'une laque résistante aux rayures, offrant une durabilité exceptionnelle pour un usage quotidien. Cette collection est idéale pour créer une atmosphère sereine et moderne grâce à ses surfaces lisses et sa structure subtile.",
      en: "The Porto 390 - 307 model embodies a minimalist design with its Black Green silky matt lacquer finish (FG 307). Its high-quality MDF fronts are coated with a scratch-resistant lacquer, providing exceptional durability for daily use. This collection is ideal for creating a serene and modern atmosphere with its smooth surfaces and subtle structure."
    },
    images: [
      "/collectionsCuisines/porto/porto01.png",
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Laque mat soyeux", en: "Silky matt lacquer" }, icon: Layout },
      { label: { fr: "Design minimaliste", en: "Minimalist design" }, icon: Box },
      { label: { fr: "Surface anti-rayures", en: "Scratch-resistant surface" }, icon: Maximize },
      { label: { fr: "Finition Vert noir", en: "Black green finish" }, icon: Utensils },
    ]
  },
  { 
    slug: "cambridge249",
    title: "CAMBRIDGE | 249",
    img: "/collectionsCuisines/cambridge249/cambridge24901.png",
    description: {
      fr: "Le modèle Cambridge 550 - 249 | 248 revisite le style cottage avec une élégance moderne. Sa finition Carbon mat soyeux (FG 249) ou Beige sable (FG 248) s'associe à des façades à cadre en bois massif pour un look authentique et chaleureux. Cette collection se distingue par ses vitrines lumineuses et ses solutions de rangement ergonomiques, alliant charme traditionnel et fonctionnalité contemporaine.",
      en: "The Cambridge 550 - 249 | 248 model reinterprets the cottage style with modern elegance. Its Carbon silky matt (FG 249) or Sand beige (FG 248) finish combines with solid wood framed fronts for an authentic and warm look. This collection stands out with its luminous display cabinets and ergonomic storage solutions, blending traditional charm with contemporary functionality."
    },
    images: [
      "/collectionsCuisines/cambridge249/cambridge24901.png",
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Style Cottage moderne", en: "Modern Cottage style" }, icon: Layout },
      { label: { fr: "Cadre en bois massif", en: "Solid wood frame" }, icon: Box },
      { label: { fr: "Vitrines lumineuses", en: "Luminous display cabinets" }, icon: Maximize },
      { label: { fr: "Ergonomie cottage", en: "Ergonomic cottage charm" }, icon: Utensils },
    ]
  }, { 
    slug: "postdam",
    title: "POTSDAM",
    img: "/collectionsCuisines/postdam/postdam01.png",
    description: {
      fr: "Le modèle Potsdam 279 se distingue par sa finition en laque Matrix Noir mat soyeux. Cette surface haute technologie est non seulement esthétique mais aussi extrêmement pratique grâce à son effet anti-traces et sa résistance accrue aux rayures. Son design épuré peut être accentué par une configuration sans poignées, offrant un look minimaliste et moderne typique de la qualité Bauformat.",
      en: "The Potsdam 279 model stands out with its Black silky matt Matrix lacquer finish. This high-tech surface is not only aesthetic but also extremely practical thanks to its anti-fingerprint effect and increased scratch resistance. Its sleek design can be accentuated by a handleless configuration, offering a minimalist and modern look typical of Bauformat quality."
    },
    images: [
      "/collectionsCuisines/postdam/postdam01.png",
      "/collectionsCuisines/postdam/postdam02.webp",
      "/collectionsCuisines/postdam/postdam03.webp",
      "/collectionsCuisines/postdam/postdam04.webp",
      "/collectionsCuisines/postdam/postdam05.webp",
      "/collectionsCuisines/postdam/postdam06.webp",
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Laque Matrix mat soyeux", en: "Silky matt Matrix lacquer" }, icon: Layout },
      { label: { fr: "Effet anti-traces", en: "Anti-fingerprint effect" }, icon: Box },
      { label: { fr: "Design sans poignée", en: "Handleless design" }, icon: Maximize },
      { label: { fr: "Résistance aux rayures", en: "Scratch resistance" }, icon: Utensils },
    ]
  },
{ 
    slug: "siena-pamplona",
    title: "SIENA | PAMPLONA",
    img: "/collectionsCuisines/siena-pamplona/siena-pamplona01.png",
    description: {
      fr: "Le modèle Siena 147 | Pamplona 343 propose un jeu d'éléments sophistiqué, alliant la finition bois brûlé (Siena 147) au gris clair brillant (Pamplona 343). Cette combinaison est sublimée par des accents en verre noir et des effets miroir, créant une atmosphère chaleureuse et moderne typique du savoir-faire Bauformat.",
      en: "The Siena 147 | Pamplona 343 model offers a sophisticated interplay of elements, combining the 'Black burned' wood finish (Siena 147) with a high-gloss Moonlight grey (Pamplona 343). This combination is enhanced by black glass accents and mirror effects, creating a warm and modern atmosphere."
    },
    images: [
      "/collectionsCuisines/siena-pamplona/siena-pamplona01.png",
      "/collectionsCuisines/siena-pamplona/siena-pamplona02.webp",
      "/collectionsCuisines/siena-pamplona/siena-pamplona03.webp",
      "/collectionsCuisines/siena-pamplona/siena-pamplona04.webp",
      "/collectionsCuisines/siena-pamplona/siena-pamplona05.webp",
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Mélange Siena | Pamplona", en: "Siena | Pamplona blend" }, icon: Layout },
      { label: { fr: "Finition bois brûlé", en: "Black burned wood finish" }, icon: Box },
      { label: { fr: "Gris clair brillant", en: "High-gloss Moonlight grey" }, icon: Maximize },
      { label: { fr: "Accents en verre noir", en: "Black glass accents" }, icon: Utensils },
    ]
  },


  { 
    slug: "siena-potsdam",
    title: "SIENA | POTSDAM",
    img: "/collectionsCuisines/siena-potsdam/siena-potsdam01.png",
    description: {
      fr: "Le modèle Siena 147 | Potsdam 287 marie l'aspect brut du 'Black burned' (Siena 147) à la douceur du Gris brume mat soyeux (Potsdam 287). Cette laque Matrix haute performance offre une résistance exceptionnelle aux rayures et un effet anti-traces, tandis que les textures bois brûlé apportent un caractère unique et une profondeur visuelle remarquable.",
      en: "The Siena 147 | Potsdam 287 model pairs the raw 'Black burned' finish (Siena 147) with the softness of Mist grey silky matt (Potsdam 287). This high-performance Matrix lacquer provides exceptional scratch resistance and an anti-fingerprint effect, while the burned wood textures bring a unique character and remarkable visual depth."
    },
    images: [
      "/collectionsCuisines/siena-potsdam/siena-potsdam01.png",
     
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Mélange Siena | Potsdam", en: "Siena | Potsdam blend" }, icon: Layout },
      { label: { fr: "Finition bois brûlé", en: "Black burned finish" }, icon: Box },
      { label: { fr: "Gris brume mat soyeux", en: "Mist grey silky matt" }, icon: Maximize },
      { label: { fr: "Laque Matrix anti-traces", en: "Anti-fingerprint Matrix lacquer" }, icon: Utensils },
    ]
  },

 { 
    slug: "porto-kitzbuhel",
    title: "PORTO | KITZBÜHEL",
    img: "/collectionsCuisines/porto-kitzbuhel/porto-kitzbuhel01.png",
    description: {
      fr: "L'alliance du modèle Porto 390 - 308 et de la gamme Kitzbühel 204 crée un contraste élégant entre modernité et caractère. La finition Gris noble (Kitzbühel 204) s'harmonise parfaitement avec les surfaces laquées Porto, offrant un design aux facettes chatoyantes. Cette collection incarne le savoir-faire Bauformat à travers une planification personnalisée et une qualité de fabrication allemande d'exception.",
      en: "The combination of the Porto 390 - 308 model and the Kitzbühel 204 range creates an elegant contrast between modernity and character. The Noble grey finish (Kitzbühel 204) harmonizes perfectly with the Porto lacquered surfaces, offering a design with shimmering facets. This collection embodies Bauformat's craftsmanship through personalized planning and exceptional German manufacturing quality."
    },
    images: [
      "/collectionsCuisines/porto-kitzbuhel/porto-kitzbuhel01.png",
     
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Mélange Porto | Kitzbühel", en: "Porto | Kitzbühel blend" }, icon: Layout },
      { label: { fr: "Finition Gris noble", en: "Noble grey finish" }, icon: Box },
      { label: { fr: "Facettes chatoyantes", en: "Shimmering facets" }, icon: Maximize },
      { label: { fr: "Qualité de marque Bauformat", en: "Bauformat brand quality" }, icon: Utensils },
    ]
  },
  { 
    slug: "enigma-porto",
    title: "ENIGMA | PORTO",
    img: "/collectionsCuisines/enigma-porto/enigma-porto01.png",
    description: {
      fr: "L'union du modèle exclusif Enigma 224 et de la gamme Porto 390 - 457 crée un contraste fascinant. La façade Enigma aux reflets métalliques chatoyants 'Oilslick' apporte une touche de magie, tandis que la finition Porto Vert Sauge mat soyeux (FG 457) offre une sérénité intemporelle. Cette collection allie design d'avant-garde et durabilité exceptionnelle grâce à ses surfaces laquées de haute précision.",
      en: "The union of the exclusive Enigma 224 model and the Porto 390 - 457 range creates a fascinating contrast. The Enigma front with its shimmering metallic 'Oilslick' reflections adds a touch of magic, while the Porto Sage silky matt finish (FG 457) offers timeless serenity. This collection combines avant-garde design with exceptional durability thanks to its high-precision lacquered surfaces."
    },
    images: [
      "/collectionsCuisines/enigma-porto/enigma-porto01.png",
     
     
    ],
    brand: "bauformat",
    features: [
      { label: { fr: "Mélange Enigma | Porto", en: "Enigma | Porto blend" }, icon: Layout },
      { label: { fr: "Finition Sage mat soyeux", en: "Sage silky matt finish" }, icon: Box },
      { label: { fr: "Reflets métalliques Oilslick", en: "Oilslick metallic shimmer" }, icon: Maximize },
      { label: { fr: "Design avant-gardiste", en: "Avant-garde design" }, icon: Utensils },
    ]
  },

];

const TRANSLATIONS = {
  fr: {
    heroTitle: "Nos collections de cuisines",
    heroDesc: "Design, élégance et savoir-faire, découvrez l’univers de CMC à travers nos collections.",
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

 
  const BURGER = COLLECTIONS.filter(c => c.brand === "burger");
  const BAUFORMAT = COLLECTIONS.filter(c => c.brand === "bauformat");
  const ARMONY = COLLECTIONS.filter(c => c.brand === "armony");

  return (
    <section className={styles.section}>
      {/* --- Bandeau top --- */}
      <div className={styles.hero}>
        <Image
          src="/banner/cuisine.webp"
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

        {/* BURGER SECTION */}
        <div className={styles.brandHeader}>
          <div className={styles.brandKicker}>BURGER</div>
          <div className={styles.brandLine} />
        </div>
        <div className={styles.grid}>
          {BURGER.map((col) => (
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

        {/* BAUFORMAT SECTION */}
        <div className={styles.brandHeader}>
          <div className={styles.brandKicker}>BAUFORMAT</div>
          <div className={styles.brandLine} />
        </div>
        <div className={styles.grid}>
          {BAUFORMAT.map((col) => (
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

        {/* ARMONY SECTION */}
        <div className={styles.brandHeader}>
          <div className={styles.brandKicker}>ARMONY</div>
          <div className={styles.brandLine} />
        </div>
        <div className={styles.grid}>
          {ARMONY.map((col) => (
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
