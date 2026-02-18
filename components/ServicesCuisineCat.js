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
    title: "BURGER COLLECTION AMELIE | SUSANN",
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
    features: [
      { label: { fr: "Kito acier", en: "Steel Kito" }, icon: Layout },
      { label: { fr: "Blanc polaire brillant", en: "High gloss polar white" }, icon: Box },
    ]
  },
  {
    slug: "celine-jette",
    title: "COLLECTION CELINE | JETTE",
    img: "/collectionsCuisines/celine_jette/celine_jette_1.webp",
    description: {
      fr: "L'alliance brute du béton et l'élégance du noir mat pour une cuisine au caractère affirmé. Un style industriel chic pour un intérieur moderne.",
      en: "The raw combination of concrete and the elegance of matte black for a kitchen with a strong character. A chic industrial style for a modern interior."
    },
    images: [
      "/collectionsCuisines/celine_jette/celine_jette_1.webp"
    ],
    features: [
      { label: { fr: "Concrete Grey", en: "Concrete Grey" }, icon: Layout },
      { label: { fr: "Noir mat soyeux", en: "Silky matte Black" }, icon: Box },
    ]
  },
  {
    slug: "cindy-2",
    title: "COLLECTION CINDY",
    img: "/collectionsCuisines/cindy_2/cindy_2_1.webp",
    description: {
      fr: "Une palette de couleurs froides et apaisantes pour une cuisine moderne et sereine. La finition mat soyeux offre un toucher agréable et un look sophistiqué.",
      en: "A cool and soothing color palette for a modern and serene kitchen. The silky matte finish offers a pleasant touch and a sophisticated look."
    },
    images: [
      "/collectionsCuisines/cindy_2/cindy_2_1.webp"
    ],
    features: [
      { label: { fr: "Stormgrey mat soyeux", en: "Silky matte Stormgrey" }, icon: Layout },
      { label: { fr: "Almost Blue mat soyeux", en: "Silky matte Almost Blue" }, icon: Box },
    ]
  },
  {
    slug: "lara",
    title: "COLLECTION LARA",
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
    features: [
      { label: { fr: "Perspectives lumineuses", en: "Luminous perspectives" }, icon: Layout },
      { label: { fr: "Organisation parfaite", en: "Perfect organization" }, icon: Box },
    ]
  },
  {
    slug: "cindy-leni",
    title: "COLLECTION CINDY | LENI",
    img: "/collectionsCuisines/cindy_leni/cindy_leni_1.webp",
    description: {
      fr: "Une combinaison audacieuse de vert sombre et de rainures douces pour un style unique et contemporain. L'élégance à l'état pur.",
      en: "A bold combination of dark green and soft grooves for a unique and contemporary style. Pure elegance."
    },
    images: [
      "/collectionsCuisines/cindy_leni/cindy_leni_1.webp"
    ],
    features: [
      { label: { fr: "Black Green mat soyeux", en: "Silky matte Black Green" }, icon: Layout },
      { label: { fr: "Soft Groove", en: "Soft Groove" }, icon: Box },
    ]
  },
  {
    slug: "cora-cindy-2",
    title: "COLLECTION CORA | CINDY",
    img: "/collectionsCuisines/cora_cindy_2/cora_cindy_1.webp",
    description: {
      fr: "L'alliance du bois sombre et du mat soyeux pour une cuisine élégante et chaleureuse. Des finitions haut de gamme pour un intérieur d'exception.",
      en: "The combination of dark wood and silky matte for an elegant and warm kitchen. High-end finishes for an exceptional interior."
    },
    images: [
      "/collectionsCuisines/cora_cindy_2/cora_cindy_1.webp"
    ],
    features: [
      { label: { fr: "Chêne café", en: "Coffee Oak" }, icon: Layout },
      { label: { fr: "Marshmallow mat", en: "Matte marshmallow" }, icon: Box },
    ]
  },
  {
    slug: "cindy",
    title: "COLLECTION CINDY GREIGE",
    img: "/collectionsCuisines/cindy/cindy_1.webp",
    description: {
      fr: "Greige. Une teinte douce et naturelle pour une ambiance chaleureuse et apaisante. Le greige, mariage subtil du gris et du beige, apporte une élégance intemporelle à votre cuisine.",
      en: "Greige. A soft and natural shade for a warm and soothing atmosphere. Greige, a subtle blend of grey and beige, brings timeless elegance to your kitchen."
    },
    images: [
      "/collectionsCuisines/cindy/cindy_1.webp"
    ],
    features: [
      { label: { fr: "Teinte Greige", en: "Greige shade" }, icon: Layout },
      { label: { fr: "Ambiance naturelle", en: "Natural atmosphere" }, icon: Box },
    ]
  },
  {
    slug: "jette",
    title: "COLLECTION JETTE",
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
    features: [
      { label: { fr: "Blanc polaire mat", en: "Matte polar white" }, icon: Layout },
      { label: { fr: "Verre fumé", en: "Smoked glass" }, icon: Box },
    ]
  },
  {
    slug: "mara",
    title: "COLLECTION MARA",
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
    features: [
      { label: { fr: "Blanc et verre", en: "White and glass" }, icon: Layout },
      { label: { fr: "Rangement astucieux", en: "Smart storage" }, icon: Box },
    ]
  },
  {
    slug: "sophie-jette",
    title: "COLLECTION SOPHIE | JETTE",
    img: "/collectionsCuisines/sophie_jette/sophie_jette_1.webp",
    description: {
      fr: "Gris brume mat soyeux | Noir mat soyeux. L'accord parfait entre le gris brume et le noir mat pour une cuisine élégante et intemporelle.",
      en: "Silky matte mist grey | Silky matte black. The perfect match between mist grey and matte black for an elegant and timeless kitchen."
    },
    images: [
      "/collectionsCuisines/sophie_jette/sophie_jette_1.webp"
    ],
    features: [
      { label: { fr: "Gris brume mat soyeux", en: "Silky matte mist grey" }, icon: Layout },
      { label: { fr: "Noir mat soyeux", en: "Silky matte black" }, icon: Box },
    ]
  },
  {
    slug: "sophie",
    title: "COLLECTION SOPHIE",
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
    features: [
      { label: { fr: "Style Cottage", en: "Cottage Style" }, icon: Layout },
      { label: { fr: "Finition artisanale", en: "Artisanal finish" }, icon: Box },
    ]
  },
  {
    slug: "jette-amelie",
    title: "COLLECTION JETTE | AMELIE",
    img: "/collectionsCuisines/jette_amelie/jette_amelie_1.webp",
    description: {
      fr: "Greige mat soyeux | Mocca. Une harmonie parfaite de couleurs pour un intérieur moderne et apaisant.",
      en: "Silky matt greige | Mocca. A perfect harmony of colors for a modern and soothing interior."
    },
    images: [
      "/collectionsCuisines/jette_amelie/jette_amelie_1.webp"
    ],
    features: [
      { label: { fr: "Greige mat soyeux", en: "Silky matt greige" }, icon: Layout },
      { label: { fr: "Mocca", en: "Mocca" }, icon: Box },
    ]
  },
  {
    slug: "amelie-1",
    title: "COLLECTION AMELIE | SAND",
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
    features: [
      { label: { fr: "Tout rangé", en: "Everything organized" }, icon: Layout },
      { label: { fr: "Rangement réinventé", en: "Reinvented storage" }, icon: Box },
    ]
  },
  {
    slug: "amelie",
    title: "COLLECTION AMELIE",
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
    features: [
      { label: { fr: "Art de la cuisine", en: "Art of cooking" }, icon: Layout },
      { label: { fr: "Ergonomie", en: "Ergonomics" }, icon: Box },
    ]
  },
  {
    slug: "cora-susann",
    title: "COLLECTION CORA | SUSANN",
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
    features: [
      { label: { fr: "Vue globale", en: "Global view" }, icon: Layout },
      { label: { fr: "Bois véritable", en: "Real wood" }, icon: Box },
    ]
  },
  {
    slug: "cora-cindy",
    title: "COLLECTION CORA | CINDY",
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
    features: [
      { label: { fr: "Lieu de rencontre", en: "Meeting place" }, icon: Layout },
      { label: { fr: "Comptoir intégré", en: "Integrated counter" }, icon: Box },
    ]
  },
  {
    slug: "susann",
    title: "COLLECTION SUSANN",
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
    features: [
      { label: { fr: "Beige sable brillant", en: "High gloss sand beige" }, icon: Layout },
      { label: { fr: "Verre fumé", en: "Smoked glass" }, icon: Box },
    ]
  },
  {
    slug: "leni-amelie",
    title: "COLLECTION LENI | AMELIE",
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
    features: [
      { label: { fr: "Look rainuré", en: "Grooved look" }, icon: Layout },
      { label: { fr: "Effet de profondeur", en: "Depth effect" }, icon: Box },
    ]
  },
  {
    slug: "leni-paula",
    title: "COLLECTION LENI | PAULA",
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
    features: [
      { label: { fr: "Structure rainurée", en: "Grooved structure" }, icon: Layout },
      { label: { fr: "Noir mat soyeux", en: "Silky matte black" }, icon: Box },
    ]
  },
  {
    slug: "etro",
    title: "ARMONY COLLECTION ETRO",
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
    features: [
      { label: { fr: "Style traditionnel réinventé", en: "Reinvented traditional style" }, icon: Layout },
      { label: { fr: "Coupes géométriques", en: "Geometric cuts" }, icon: Box },
    ]
  },
  {
    slug: "ligna",
    title: "COLLECTION LIGNA",
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
    features: [
      { label: { fr: "Bois massif", en: "Solid wood" }, icon: Layout },
      { label: { fr: "Technologie de haut niveau", en: "High-level technology" }, icon: Box },
    ]
  },
  {
    slug: "riga",
    title: "COLLECTION RIGA",
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
    features: [
      { label: { fr: "Porte nervurée", en: "Ribbed door" }, icon: Layout },
      { label: { fr: "Surface cannetée 3D", en: "3D ribbed surface" }, icon: Box },
    ]
  },
  {
    slug: "kappa",
    title: "COLLECTION KAPPA",
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
    features: [
      { label: { fr: "Traits énergiques", en: "Energetic traits" }, icon: Layout },
      { label: { fr: "Espaces modernes", en: "Modern spaces" }, icon: Box },
    ]
  },
  {
    slug: "ypsilon",
    title: "COLLECTION YPSILON",
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
    features: [
      { label: { fr: "Formes essentielles", en: "Essential forms" }, icon: Layout },
      { label: { fr: "Géométries limpides", en: "Clear geometries" }, icon: Box },
    ]
  },
  {
    slug: "tau",
    title: "COLLECTION TAU",
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
    features: [
      { label: { fr: "Lignes sobres", en: "Sober lines" }, icon: Layout },
      { label: { fr: "Qualité artisanale", en: "Craftsmanship quality" }, icon: Box },
    ]
  },
  {
    slug: "diamond",
    title: "COLLECTION DIAMOND",
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
    features: [
      { label: { fr: "Minimalisme et raffinement", en: "Minimalism and refinement" }, icon: Box },
      { label: { fr: "Concept unique", en: "Unique concept" }, icon: Layout },
    ]
  },
  {
    slug: "rho",
    title: "COLLECTION RHO",
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
    features: [
      { label: { fr: "Innovation et tradition", en: "Innovation and tradition" }, icon: Box },
      { label: { fr: "Structures fortes", en: "Strong structures" }, icon: Layout },
    ]
  },
  {
    slug: "skyline",
    title: "COLLECTION SKYLINE",
    img: "/collectionsCuisines/skyline/skyline01.jpg",
    description: {
      fr: "Une cuisine qui interprète la modernité, en alliant l’élégance de matériaux innovants à la technologie de la porte avec cadre en aluminium. La porte en aluminium anodisé noir Skyline, unique en son genre, combine en un seul corps différents matériaux et offre des choix raffinés de revêtement frontal: le verre trempé brillant, mat et métallisé, le Corian et le Gres dans différentes variantes de couleur.",
      en: "A kitchen that interprets modernity, combining the elegance of innovative materials with the technology of the aluminum frame door. The Skyline black anodized aluminum door, one of a kind, combines different materials in a single body and offers refined choices of frontal cladding: glossy, matte and metallic tempered glass, Corian and Gres in different color variations."
    },
    images: ["/collectionsCuisines/skyline/skyline01.jpg","/collectionsCuisines/skyline/skyline02.jpg","/collectionsCuisines/skyline/skyline03.jpg","/collectionsCuisines/skyline/skyline04.jpg","/collectionsCuisines/skyline/skyline05.jpg","/collectionsCuisines/skyline/skyline06.jpg","/collectionsCuisines/skyline/skyline07.jpg","/collectionsCuisines/skyline/skyline08.jpg","/collectionsCuisines/skyline/skyline09.jpg","/collectionsCuisines/skyline/skyline10.jpg","/collectionsCuisines/skyline/skyline11.jpg"],
    features: [
      { label: { fr: "Matériaux innovants", en: "Innovative materials" }, icon: Box },
      { label: { fr: "Design éclectique", en: "Eclectic design" }, icon: Layout },
    ]
  },
  {
    slug: "omicron",
    title: "COLLECTION OMICRON",
    img: "/collectionsCuisines/omicron/omicron01.jpg",
    description: {
      fr: "Un modèle innovant qui propose des associations modernes entre lignes droites, matériaux inédits et configurations suggestives de l’espace. Des solutions caractérisées par une attention particulière aux détails qu’on retrouve notamment dans le profil de la porte de 22 mm d’épaisseur façonné à 33°.",
      en: "An innovative model offering modern combinations of straight lines, new materials and suggestive space configurations. Solutions characterized by special attention to detail, particularly in the 22mm thick door profile shaped at 33°."
    },
    images: ["/collectionsCuisines/omicron/omicron01.jpg","/collectionsCuisines/omicron/omicron02.jpg","/collectionsCuisines/omicron/omicron03.jpg","/collectionsCuisines/omicron/omicron04.jpg","/collectionsCuisines/omicron/omicron05.jpg","/collectionsCuisines/omicron/omicron06.jpg","/collectionsCuisines/omicron/omicron07.jpg","/collectionsCuisines/omicron/omicron08.jpg","/collectionsCuisines/omicron/omicron09.jpg","/collectionsCuisines/omicron/omicron10.jpg","/collectionsCuisines/omicron/omicron11.jpg","/collectionsCuisines/omicron/omicron12.jpg","/collectionsCuisines/omicron/omicron13.jpg","/collectionsCuisines/omicron/omicron14.jpg","/collectionsCuisines/omicron/omicron15.jpg","/collectionsCuisines/omicron/omicron16.jpg",],
    features: [
      { label: { fr: "Design innovant", en: "Innovative design" }, icon: Layout },
      { label: { fr: "Matériaux exclusifs", en: "Exclusive materials" }, icon: Box },
    ]
  },
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
          {[...COLLECTIONS].map((col) => (
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
