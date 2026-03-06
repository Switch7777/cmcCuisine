import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Grid3X3, 
  Archive, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  Sun, 
  LayoutDashboard, 
  LogOut,
  ShieldCheck, 
  Inbox,
  Leaf,
  Hand,
  ArrowDownRight,
  RotateCcw
} from "lucide-react";
import { useLang } from "../context/LangContext"; 
import styles from "../styles/ServicesSdbCat.module.css";

const COLLECTIONS = [
  {
    slug: "verso",
    title: "VERSO",
    img: "/sdb/verso.webp",
    description: {
      fr: "Découvrez notre nouvelle collection Verso, conçue pour maximiser le rangement avec un tiroir innovant d’une hauteur supérieure à la norme. Dotés d’une palette de couleurs moderne et polyvalente, ces meubles allient fonctionnalité et style pour s’adapter à tous les espaces.",
      en: "Discover our new Verso collection, designed to maximize storage with an innovative drawer height above standard. Featuring a modern and versatile color palette, these units combine functionality and style to fit any space."
    },
    dimensions: {
      width: "60/80/100/120",
      depth: "45",
      height: "65"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Ceniza", color: "#666666" },
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" } 
    ],
    features: [
      { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
      { label: { fr: "Tiroir textile Play", en: "Play textile drawer" }, icon: Grid3X3 },
      { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
      { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
      { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
      { label: { fr: "Organisateur integré", en: "Integrated organizer" }, icon: LayoutDashboard },
      { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
    ],
    images: ["/collections/verso/verso-1.webp","/collections/verso/verso-2.webp","/collections/verso/verso-3.webp","/collections/verso/verso-4.webp","/collections/verso/verso-5.webp","/collections/verso/verso-6.webp"],
    brand: "viso"
  },
  {
    slug: "delta",
    title: "DELTA",
    img: "/sdb/delta.webp",
    description: {
      fr: "Delta est une collection modulaire et personnalisable distinguée par sa polyvalence et son design.",
      en: "Delta is a modular and customizable collection distinguished by its versatility and design."
    },
    dimensions: {
        width: "60 / 80 / 100 / 40 1P",
        depth: "45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Quarzo", color: "#a59c94" }, 
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" },
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" } 
    ],
    features: [
        { label: { fr: "Tiroir métallique Iron", en: "Iron metal drawer" }, icon: Inbox },
        { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
        { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
        { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
        { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
        { label: { fr: "Mélaminé 3D", en: "3D Melamine" }, icon: Layers },
        { label: { fr: "Organisateur integré", en: "Integrated organizer" }, icon: LayoutDashboard },
        { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
    ],
    images: ["/collections/delta/Delta_1.webp", "/collections/delta/Delta_2.webp", "/collections/delta/Delta_3.webp", "/collections/delta/Delta_4.webp", "/collections/delta/Delta_5.webp"],
    brand: "viso"
  },
  {
    slug: "kyoto",  
    title: "KYOTO",
    img: "/sdb/kyoto.webp",
    description: {
      fr: "Finitions tendances, design chaleureux et élégant.",
      en: "Trendy finishes, warm and elegant design."
    },
    dimensions: {
      width: "60 / 80 / 100 / 120",
      depth: "45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Quarzo", color: "#a59c94" }, 
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" },
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" } 
    ],
    features: [
        { label: { fr: "Tiroir métallique Iron", en: "Iron metal drawer" }, icon: Inbox },
        { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
        { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
        { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
        { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
        { label: { fr: "Mélaminé 3D", en: "3D Melamine" }, icon: Layers },
        { label: { fr: "Organisateur integré", en: "Integrated organizer" }, icon: LayoutDashboard },
        { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
    ],
    images: ["/collections/kyoto/Kyoto_new_1.webp", "/collections/kyoto/Kyoto_new_2.webp", "/collections/kyoto/Kyoto_new_3.webp", "/collections/kyoto/Kyoto_new_4.webp", "/collections/kyoto/Kyoto_new_5.webp", "/collections/kyoto/Kyoto_new_6.webp", "/collections/kyoto/Kyoto_new_7.webp", "/collections/kyoto/Kyoto_new_8.webp", "/collections/kyoto/Kyoto_new_9.webp", "/collections/kyoto/Kyoto_new_10.webp", "/collections/kyoto/Kyoto_new_11.webp", "/collections/kyoto/Kyoto_new_12.webp", "/collections/kyoto/Kyoto_new_13.webp", "/collections/kyoto/Kyoto_new_14.webp", "/collections/kyoto/Kyoto_new_15.webp", "/collections/kyoto/Kyoto_new_16.webp"],
    brand: "viso"
  },
  {
    slug: "granada",
    title: "GRANADA",
    img: "/sdb/granada.webp",
    description: {
      fr: "Combinaison de poignées et de meubles pour créer la salle de bain que vous souhaitez.",
      en: "Combination of handles and furniture to create the bathroom you wish for."
    },
    dimensions: {
      width: "60 / 80 / 100 / 120",
      depth: "45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" },
      { name: "Abedul", color: "#f3e5dc" }, 
      { name: "Aliso", color: "#d6c0a6" }, 
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" } 
    ],
    features: [
        { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
        { label: { fr: "Tiroir textile Play", en: "Play textile drawer" }, icon: Grid3X3 },
        { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
        { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
        { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
        { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
        { label: { fr: "Organisateur integré", en: "Integrated organizer" }, icon: LayoutDashboard },
        { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
    ],
    images: ["/collections/granada/Granada_new_1.webp", "/collections/granada/Granada_new_2.webp", "/collections/granada/Granada_new_3.webp",  "/collections/granada/Granada_new_5.webp", "/collections/granada/Granada_new_6.webp", "/collections/granada/Granada_new_7.webp", "/collections/granada/Granada_new_8.webp", "/collections/granada/Granada_new_9.webp", "/collections/granada/Granada_new_10.webp", "/collections/granada/Granada_new_11.webp", "/collections/granada/Granada_new_12.webp", "/collections/granada/Granada_new_13.webp", "/collections/granada/Granada_new_14.webp", "/collections/granada/Granada_new_15.webp", "/collections/granada/Granada_new_16.webp", "/collections/granada/Granada_new_17.webp", "/collections/granada/Granada_new_18.webp", "/collections/granada/Granada_new_19.webp"],
    brand: "viso"
  },
  {
    slug: "aqua",
    title: "AQUA",
    img: "/sdb/aqua.webp",
    description: {
      fr: "La série Aqua présente un mobilier de salle de bains moderne avec une combinaison de couleurs très actuelle. La simplicité et l’élégance sont deux des éléments qui donneront du caractère à votre salle de bains.",
      en: "The Aqua series presents modern bathroom furniture with a very current color combination. Simplicity and elegance are two elements that will give character to your bathroom."
    },
    dimensions: {
      width: "60 / 70 / 80 / 100",
      depth: "45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Quarzo", color: "#a59c94" }, 
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" },
      { name: "Abedul", color: "#f3e5dc" }, 
      { name: "Aliso", color: "#d6c0a6" }, 
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" } 
    ],
    features: [
        { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
        { label: { fr: "Tiroir textile Play", en: "Play textile drawer" }, icon: Grid3X3 },
        { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
        { label: { fr: "Sortie partielle", en: "Partial extension" }, icon: Minimize2 },
        { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
        { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
        { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
    ],
    images: ["/collections/aqua/Aqua_new_1.webp", "/collections/aqua/Aqua_new_2.webp", "/collections/aqua/Aqua_new_3.webp", "/collections/aqua/Aqua_new_4.webp", "/collections/aqua/Aqua_new_5.webp", "/collections/aqua/Aqua_new_6.webp", "/collections/aqua/Aqua_new_7.webp", "/collections/aqua/Aqua_new_8.webp", "/collections/aqua/Aqua_new_9.webp", "/collections/aqua/Aqua_new_10.webp", "/collections/aqua/Aqua_new_11.webp"],
    brand: "viso"
  },
  {
    slug: "box",  
    title: "BOX",
    img: "/sdb/box.webp",
    description: {
      fr: "Meubles qui s'adaptent facilement à tous les goûts et à tous les espaces.",
      en: "Furniture that easily adapts to all tastes and spaces."
    },
    dimensions: {
      width: "60 / 70 / 80 / 90 / 100 / 120",
      depth: "38,5 / 45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Ceniza", color: "#666666" },
      { name: "Abedul", color: "#f3e5dc" }, 
      { name: "Aliso", color: "#d6c0a6" }, 
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" },
      { name: "Gris Oscuro Brillo", color: "#4a4a4a" },
      { name: "Nieve Brillo", color: "#f5faff" }
    ],
    features: [
        { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
        { label: { fr: "Tiroir textile Play", en: "Play textile drawer" }, icon: Grid3X3 },
        { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
        { label: { fr: "Sortie partielle", en: "Partial extension" }, icon: Minimize2 },
        { label: { fr: "Laque haute brillance", en: "High gloss lacquer" }, icon: Sparkles },
        { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
        { label: { fr: "Organisateur integré", en: "Integrated organizer" }, icon: LayoutDashboard },
        { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
    ],
    images: ["/collections/box/Box_new_1.webp", "/collections/box/Box_new_2.webp", "/collections/box/Box_new_3.webp", "/collections/box/Box_new_4.webp", "/collections/box/Box_new_5.webp", "/collections/box/Box_new_6.webp",  "/collections/box/Box_new_8.webp", "/collections/box/Box_new_9.webp", "/collections/box/Box_new_10.webp", "/collections/box/Box_new_11.webp", "/collections/box/Box_new_12.webp", "/collections/box/Box_new_13.webp", "/collections/box/Box_new_14.webp"],
    brand: "viso"
  },
  {
    slug: "indico",
    title: "INDICO",
    img: "/sdb/indico.webp",
    description: {
      fr: "Découvrez notre collection Bondi où vous pouvez choisir entre différentes finitions pour le mobilier et pour les façades. Sans aucun doute, une série qui conviendra parfaitement à votre style.",
      en: "Discover our Bondi collection where you can choose between different finishes for furniture and facades. Without a doubt, a series that will perfectly suit your style."
    },
    dimensions: {
      width: "60 / 80 / 100 / 120",
      depth: "45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Quarzo", color: "#a59c94" }, 
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" },
      { name: "Aliso", color: "#d6c0a6" }, 
      { name: "Valenti", color: "#8b5a2b" } 
    ],
    features: [
        { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
        { label: { fr: "Tiroir métallique Iron", en: "Iron metal drawer" }, icon: Inbox },
        { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
        { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
        { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
        { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
        { label: { fr: "Organisateur integré", en: "Integrated organizer" }, icon: LayoutDashboard },
        { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
    ],
    images: ["/collections/indico/Indico_new_1.webp", "/collections/indico/Indico_new_2.webp", "/collections/indico/Indico_new_3.webp", "/collections/indico/Indico_new_4.webp", "/collections/indico/Indico_new_5.webp", "/collections/indico/Indico_new_6.webp", "/collections/indico/Indico_new_7.webp", "/collections/indico/Indico_new_8.webp", "/collections/indico/Indico_new_9.webp", "/collections/indico/Indico_new_10.webp", "/collections/indico/Indico_new_11.webp", "/collections/indico/Indico_new_12.webp"],
    brand: "viso"
  },
  {
    slug: "eleven",
    title: "ELEVEN",
    img: "/sdb/eleven.webp",
    description: {
      fr: "La nouvelle collection Eleven présente un meuble contemporain qui s’adaptera parfaitement à tous les styles. Il dispose d’une gamme de finitions très actuelles et tendances.",
      en: "The new Eleven collection presents a contemporary piece of furniture that will adapt perfectly to all styles. It features a range of very current and trendy finishes."
    },
    dimensions: {
      width: "60 / 80 / 100 / 120",
      depth: "45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Quarzo", color: "#a59c94" }, 
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" },
      { name: "Abedul", color: "#f3e5dc" }, 
      { name: "Aliso", color: "#d6c0a6" }, 
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" } 
    ],
    features: [
        { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
        { label: { fr: "Tiroir textile Play", en: "Play textile drawer" }, icon: Grid3X3 },
        { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
        { label: { fr: "Sortie partielle", en: "Partial extension" }, icon: Minimize2 },
        { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
        { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
        { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
    ],
    images: ["/collections/eleven/Eleven_new_1.webp", "/collections/eleven/Eleven_new_2.webp", "/collections/eleven/Eleven_new_3.webp", "/collections/eleven/Eleven_new_4.webp", "/collections/eleven/Eleven_new_5.webp", "/collections/eleven/Eleven_new_6.webp", "/collections/eleven/Eleven_new_7.webp", "/collections/eleven/Eleven_new_8.webp"],
    brand: "viso"
  },
  {
    slug: "nomad",
    title: "NOMAD",
    img: "/sdb/nomad.webp",
    description: {
      fr: "Concevez la structure de l'espace qui vous convient.",
      en: "Design the structure of the space that suits you."
    },
    dimensions: {
      width: "60 / 80 / 100",
      depth: "46"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Quarzo", color: "#a59c94" }, 
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" },
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" },
      { name: "Cala", color: "#e6e6e6" }, // Placeholder for white marble/stone
      { name: "Harlem", color: "#4a4a4a" } // Placeholder for dark stone
    ],
    features: [
        { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
        { label: { fr: "Tiroir métallique Iron", en: "Iron metal drawer" }, icon: Inbox },
        { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
        { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
        { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
        { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
    ],
    images: ["/collections/nomad/Nomad_new_1.webp", "/collections/nomad/Nomad_new_2.webp", "/collections/nomad/Nomad_new_3.webp", "/collections/nomad/Nomad_new_4.webp", "/collections/nomad/Nomad_new_5.webp", "/collections/nomad/Nomad_new_6.webp", "/collections/nomad/Nomad_new_7.webp", "/collections/nomad/Nomad_new_8.webp", "/collections/nomad/Nomad_new_9.webp", "/collections/nomad/Nomad_new_10.webp"],
    brand: "viso"
  },
  {
    slug: "icon",
    title: "ICON",
    img: "/sdb/icon.webp",
    description: {
      fr: "Style à la fois élégant et décontracté, tiroirs à grande capacité et détails précis.",
      en: "Style that is both elegant and casual, large capacity drawers and precise details."
    },
    dimensions: {
      width: "80 / 100 / 120",
      depth: "45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" }
    ],
    features: [
      { label: { fr: "Tiroir métallique Iron", en: "Iron metal drawer" }, icon: Inbox },
      { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
      { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
      { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
      { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
      { label: { fr: "Organisateur integré", en: "Integrated organizer" }, icon: LayoutDashboard },
      { label: { fr: "Poignée en bois naturel", en: "Natural wood handle" }, icon: Leaf },
    ],
    images: ["/collections/icon/Icon_new_1.webp","/collections/icon/Icon_new_2.webp","/collections/icon/Icon_new_3.webp","/collections/icon/Icon_new_4.webp","/collections/icon/Icon_new_5.webp","/collections/icon/Icon_new_6.webp","/collections/icon/Icon_new_7.webp","/collections/icon/Icon_new_8.webp","/collections/icon/Icon_new_9.webp","/collections/icon/Icon_new_10.webp"],
    brand: "viso"
  },  
  {
    slug: "arco",
    title: "ARCO",
    img: "/sdb/arco.webp",
    description: {
      fr: "Solutions pour que votre salle de bain intègre des détails en bois, fruit de notre passion pour la nature.",
      en: "Solutions so that your bathroom integrates wooden details, fruit of our passion for nature."
    },
    dimensions: {
      width: "60 / 80 / 100 / 120",
      depth: "45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Quarzo", color: "#a59c94" }, 
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" }
    ],
    features: [
      { label: { fr: "Tiroir métallique Iron", en: "Iron metal drawer" }, icon: Inbox },
      { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
      { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
      { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
      { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
      { label: { fr: "Organisateur integré", en: "Integrated organizer" }, icon: LayoutDashboard },
      { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
      { label: { fr: "Poignée en bois naturel", en: "Natural wood handle" }, icon: Leaf },
    ],
    images: ["/collections/arco/Arco_new_1.webp","/collections/arco/Arco_new_2.webp","/collections/arco/Arco_new_3.webp","/collections/arco/Arco_new_4.webp","/collections/arco/Arco_new_5.webp"],
    brand: "viso"
  }, {
    slug: "bari",
    title: "BARI",
    img: "/sdb/bari.webp",
    description: {
      fr: "Union du design et de l’organisation pour mieux répondre à votre espace.",
      en: "Union of design and organization to better respond to your space."
    },
    dimensions: {
      width: "60 / 80 / 100 / 120",
      depth: "45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Quarzo", color: "#a59c94" }, 
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" }
    ],
    features: [
      { label: { fr: "Tiroir métallique Iron", en: "Iron metal drawer" }, icon: Inbox },
      { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
      { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
      { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
      { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
      { label: { fr: "Système PUSH", en: "PUSH system" }, icon: Hand },
    ],
    images: ["/collections/bari/Bari_new_1.webp","/collections/bari/Bari_new_2.webp","/collections/bari/Bari_new_3.webp","/collections/bari/Bari_new_4.webp","/collections/bari/Bari_new_5.webp"],
    brand: "viso"
  }, {
    slug: "vision",
    title: "VISION",
    img: "/sdb/vision.webp",
    description: {
      fr: "Vision s'intègre parfaitement à tout autre meuble dans votre salle de bain.",
      en: "Vision integrates perfectly with any other furniture in your bathroom."
    },
    dimensions: {
      width: "60 / 80 / 100 / 120",
      depth: "45"
    },
    finishes: [
      { name: "Abedul", color: "#f3e5dc" }, 
      { name: "Aliso", color: "#d6c0a6" }, 
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" },
      { name: "Gris Oscuro Brillo", color: "#4a4a4a" },
      { name: "Nieve Brillo", color: "#f5faff" }
    ],
    features: [
      { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
      { label: { fr: "Tiroir textile Play", en: "Play textile drawer" }, icon: Grid3X3 },
      { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
      { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
      { label: { fr: "Laque haute brillance", en: "High gloss lacquer" }, icon: Sparkles },
      { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
      { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
    ],
    images: ["/collections/vision/vision-new-1.webp","/collections/vision/vision-new-2.webp","/collections/vision/vision-new-3.webp","/collections/vision/vision-new-4.webp","/collections/vision/vision-new-5.webp","/collections/vision/vision-new-6.webp"],
    brand: "viso"
  }, {
    slug: "midi",
    title: "MIDI",
    img: "/sdb/midi.webp",
    description: {
      fr: "Midi est une collection idéale pour les petits espaces. Petite mais avec beaucoup de capacité.",
      en: "Midi is an ideal collection for small spaces. Small but with a lot of capacity."
    },
    dimensions: {
      width: "50 / 60",
      depth: "35,5"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Cotton", color: "#e8dedb" },
      { name: "Griggio", color: "#b0b0b0" }, 
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Quarzo", color: "#a59c94" }, 
      { name: "Ceniza", color: "#666666" },
      { name: "Navy", color: "#000080" }, 
      { name: "Black", color: "#000000" },
      { name: "Abedul", color: "#f3e5dc" }, 
      { name: "Aliso", color: "#d6c0a6" }, 
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" } 
    ],
    features: [
      { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
      { label: { fr: "Tiroir textile Play", en: "Play textile drawer" }, icon: Grid3X3 },
      { label: { fr: "Tiroir Soft close", en: "Soft close drawer" }, icon: Archive },
      { label: { fr: "Sortie totale", en: "Full extension" }, icon: Maximize2 },
      { label: { fr: "Faible profondeur", en: "Low depth" }, icon: ArrowDownRight },
      { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
      { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
      { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
    ],
    images: ["/collections/midi/Midi_new_1.webp","/collections/midi/Midi_new_2.webp","/collections/midi/Midi_new_3.webp","/collections/midi/Midi_new_4.webp","/collections/midi/Midi_new_5.webp","/collections/midi/Midi_new_6.webp","/collections/midi/Midi_new_7.webp"],
    brand: "viso"
  }, {
    slug: "lagos",
    title: "LAGOS",
    img: "/sdb/lagos.webp",
    description: {
      fr: "Conçu pour tirer le meilleur parti des petits espaces.",
      en: "Designed to make the most of small spaces."
    },
    dimensions: {
      width: "40",
      depth: "22"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Musgo", color: "#8da399" },
      { name: "Avio", color: "#7a8b9f" },
      { name: "Ceniza", color: "#666666" },
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Crudo", color: "#f3e0d0" }
    ],
    features: [
      { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
      { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
      { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
      { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
      { label: { fr: "Reversible", en: "Reversible" }, icon: RotateCcw },
    ],
    images: ["/collections/lagos/Lagos_new_1.webp","/collections/lagos/Lagos_new_2.webp","/collections/lagos/Lagos_new_3.webp","/collections/lagos/Lagos_new_4.webp","/collections/lagos/Lagos_new_5.webp","/collections/lagos/Lagos_new_6.webp","/collections/lagos/Lagos_new_7.webp","/collections/lagos/Lagos_new_8.webp","/collections/lagos/Lagos_new_9.webp","/collections/lagos/Lagos_new_10.webp","/collections/lagos/Lagos_new_11.webp","/collections/lagos/Lagos_new_12.webp"],
    brand: "viso"
  },{
    slug: "quadro",
    title: "QUADRO",
    img: "/sdb/quadro.webp",
    description: {
      fr: "Quadro est une collection très polyvalente, avec un style moderne et minimaliste. C'est un meuble avec une structure métallique et ouverte, donc il vous aidera à nettoyer facilement et rendra votre salle de bains plus spacieuse.",
      en: "Quadro is a very versatile collection, with a modern and minimalist style. It is a piece of furniture with a metallic and open structure, so it will help you clean easily and make your bathroom more spacious."
    },
    dimensions: {
      width: "60 / 80 / 100",
      depth: "45"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Ceniza", color: "#666666" },
      { name: "Roble Costa", color: "#d2b48c" }, 
      { name: "Valenti", color: "#8b5a2b" } 
    ],
    features: [
      { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
      { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
      { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
    ],
    images: ["/collections/quadro/Quadro_new_1.webp","/collections/quadro/Quadro_new_2.webp","/collections/quadro/Quadro_new_3.webp","/collections/quadro/Quadro_new_4.webp"],
    brand: "viso"
  },{
    slug: "loft",
    title: "LOFT",
    img: "/sdb/loft.webp",
    description: {
      fr: "Conçu pour tirer le meilleur parti des petits espaces.",
      en: "Designed to make the most of small spaces."
    },
    dimensions: {
      width: "40",
      depth: "22"
    },
    finishes: [
      { name: "Blanco Ada", color: "#f0f0f0" },
      { name: "Ceniza", color: "#666666" },
      { name: "Roble Costa", color: "#d2b48c" }, 
    ],
    features: [
      { label: { fr: "Finition melaminée", en: "Melamine finish" }, icon: Layers },
      { label: { fr: "Laque antibactérienne", en: "Antibacterial lacquer" }, icon: ShieldCheck },
      { label: { fr: "Laqué mat", en: "Matte lacquer" }, icon: Sun },
      { label: { fr: "Portes Soft close", en: "Soft close doors" }, icon: LogOut },
      { label: { fr: "Système PUSH", en: "PUSH system" }, icon: Hand },
    ],
    images: ["/collections/loft/Loft_01.webp","/collections/loft/Loft_02.webp","/collections/loft/Loft_03.webp","/collections/loft/Loft_04.webp","/collections/loft/Loft_05.webp"],
    brand: "viso"
  },
  {
    slug: "badea-098",
    title: "BADEA 098",
    img: "/sdb/098.jpg",
    description: {
      fr: "L’ordre règne. Les tiroirs sous la vasque facilitent l’accès aux effets personnels. Un plan de vasque remarquable en structure minérale, 12 mm d’épaisseur, sublime le meuble lave-linge.",
      en: "Everything neat and tidy. The drawers under the washbasin make it easier to access personal belongings. An impressive washbasin top with mineral structure, 12 mm thick, refines the washing machine unit."
    },
    dimensions: {
      width: "90.5",
      depth: "46",
      height: "Standard"
    },
    finishes: [
      { name: "Blanc brillant (098)", color: "#ffffff" },
      { name: "Caramel (018)", color: "#af8a54" }, 
      { name: "Beige sable mat (143)", color: "#d2b48c" }, 
      { name: "Structure minérale Patina (841)", color: "#9a8b7c" } 
    ],
    features: [
      { label: { fr: "Plan structure minérale 12mm", en: "12mm mineral structure top" }, icon: Layers },
      { label: { fr: "Meuble lave-linge intégré", en: "Integrated washing machine unit" }, icon: Archive },
      { label: { fr: "Tiroirs sous vasque", en: "Under-sink drawers" }, icon: Inbox },
      { label: { fr: "Sortie totale Soft close", en: "Full extension Soft close" }, icon: Maximize2 },
    ],
    images: [
      "/collections/098/098-1.jpg",
      "/collections/098/098-2.jpg",
      "/collections/098/098-3.jpg",
      "/collections/098/098-4.jpg",
      "/collections/098/098-5.jpg",
      "/collections/098/098-6.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-276-1",
    title: "BADEA 276",
    img: "/sdb/276-1.jpg",
    description: {
      fr: "La force du grège décent réside dans son harmonie holistique. Le meuble sous vasque permettant d’intégrer votre lave-linge attire tous les regards.",
      en: "The strength of the discreet greige lies in its holistic harmony. The washbasin base unit for integrating your washing machine is a real eye-catcher."
    },
    dimensions: {
      width: "151.2",
      depth: "Standard",
      height: "Standard"
    },
    finishes: [
      { name: "Greige mat (276)", color: "#bdaea0" },
      { name: "Greige mat (127)", color: "#bdaea0" },
      { name: "Profil Greige (253)", color: "#bdaea0" }
    ],
    features: [
      { label: { fr: "Vasque Contour", en: "Contour washbasin" }, icon: Layers },
      { label: { fr: "Meuble lave-linge intégré", en: "Integrated washing machine unit" }, icon: Archive },
      { label: { fr: "Harmonie Ton sur Ton", en: "Tone-on-tone harmony" }, icon: Sparkles },
      { label: { fr: "Finition Greige mat", en: "Matte Greige finish" }, icon: Sun },
    ],
    images: [
      "/collections/276-1/276-1-1.jpg",
      "/collections/276-1/276-1-2.jpg",
      "/collections/276-1/276-1-3.jpg",
      "/collections/276-1/276-1-4.jpg",
      "/collections/276-1/276-1-5.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-031-2",
    title: "BADEA 031 Quartz",
    img: "/sdb/031-2.jpg",
    description: {
      fr: "Quand tout est conçu jusque dans les moindres détails, tout est à sa place. Une vasque noire, un banc et des poignées assorties apportent la sérénité à cette planification.",
      en: "When everything is planned down to the smallest detail, everything is in its place. A black washbasin, bench and matching handles bring peace to this planning."
    },
    dimensions: {
      width: "60",
      depth: "42",
      height: "13.2"
    },
    finishes: [
      { name: "Gris quartz mat (031)", color: "#6a6a6a" },
      { name: "Worktop Marmor Grigio (969)", color: "#4a4a4a" },
      { name: "Profil Gris quartz (254)", color: "#6a6a6a" }
    ],
    features: [
      { label: { fr: "Vasque Modena noire", en: "Black Modena washbasin" }, icon: Layers },
      { label: { fr: "Banc assorti", en: "Matching bench" }, icon: Inbox },
      { label: { fr: "Étagères Gris quartz", en: "Quartz grey shelves" }, icon: Grid3X3 },
      { label: { fr: "Design Ton sur Ton", en: "Tone-on-tone design" }, icon: Sparkles },
    ],
    images: [
      "/collections/031-2/031-2-1.jpg",
      "/collections/031-2/031-2-2.jpg",
      "/collections/031-2/031-2-3.jpg",
      "/collections/031-2/031-2-4.jpg",
      "/collections/031-2/031-2-5.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-252",
    title: "BADEA 252 Urban",
    img: "/sdb/252.jpg",
    description: {
      fr: "Une élégance urbaine avec un cachet industriel. Le plan de vasque en décor pierre combiné aux façades vert foncé crée une atmosphère harmonieuse.",
      en: "Urban elegance with industrial charm. The stone-look washbasin top combined with deep green fronts creating a harmonious atmosphere."
    },
    dimensions: {
      width: "36 (vasque)",
      depth: "Standard",
      height: "Standard"
    },
    finishes: [
      { name: "Black Green (252)", color: "#2e3a23" },
      { name: "Matt Grey", color: "#666666" },
      { name: "Stone Decor", color: "#8a8a8a" }
    ],
    features: [
      { label: { fr: "Vasque Bari", en: "Bari washbasin" }, icon: Layers },
      { label: { fr: "Charme Industriel", en: "Industrial charm" }, icon: Archive },
      { label: { fr: "Console de support", en: "Bracket consoles" }, icon: Maximize2 },
      { label: { fr: "Accessibilité", en: "Accessibility" }, icon: Hand },
    ],
    images: [
      "/collections/252/252-1.jpg",
      "/collections/252/252-2.jpg",
      "/collections/252/252-3.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-158",
    title: "BADEA 158 Pure",
    img: "/sdb/158.jpg",
    description: {
      fr: "Un concept d'éclairage aménagé individuellement. Ce meuble au design épuré sans poignées mise sur une esthétique moderne et une fonctionnalité optimale.",
      en: "An individually tailored lighting concept. This handleless design focuses on modern aesthetics and optimal functionality."
    },
    dimensions: {
      width: "36 (vasque)",
      depth: "Standard",
      height: "Standard"
    },
    finishes: [
      { name: "Sand (158)", color: "#d2b48c" },
      { name: "Sand (527)", color: "#d2b48c" },
      { name: "Sand panel (979)", color: "#d2b48c" },
      { name: "Poignée Noir poudré", color: "#000000" }
    ],
    features: [
      { label: { fr: "Éclairage sur mesure", en: "Tailored lighting" }, icon: Sun },
      { label: { fr: "Vasque à poser ronde", en: "Round countertop washbasin" }, icon: Layers },
      { label: { fr: "Miroir éclairé 3 faces", en: "3-side light mirror" }, icon: LayoutDashboard },
      { label: { fr: "Tiroir avec prise interne", en: "Drawer with internal socket" }, icon: Archive },
    ],
    images: [
      "/collections/158/158-1.jpg",
      "/collections/158/158-2.jpg",
      "/collections/158/158-3.jpg",
      "/collections/158/158-4.jpg",
      "/collections/158/158-5.jpg",
      "/collections/158/158-6.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-572",
    title: "BADEA 572 Sabbia",
    img: "/sdb/572.jpg",
    description: {
      fr: "Notre verre stratifié garantit la propreté de la surface derrière la vasque. Les accessoires en aspect laiton brossé sont parfaitement assortis.",
      en: "Our glass laminate reliably keeps everything clean in the area behind the washbasin. Brass-effect accessories harmonize for a consistent look."
    },
    dimensions: {
      width: "121.2",
      depth: "46",
      height: "Standard"
    },
    finishes: [
      { name: "Sabbia mat (572)", color: "#c2b2a1" },
      { name: "Beige sable mat (143)", color: "#d2b48c" },
      { name: "Laiton brossé (790)", color: "#c5a059" }
    ],
    features: [
      { label: { fr: "Crédence verre stratifié", en: "Glass laminate backsplash" }, icon: Layers },
      { label: { fr: "Accessoires Laiton", en: "Brass-effect accessories" }, icon: Sparkles },
      { label: { fr: "Vasque Cubus 2.0", en: "Cubus 2.0 washbasin" }, icon: Grid3X3 },
      { label: { fr: "Éclairage intégré", en: "Integrated lighting" }, icon: Sun },
    ],
    images: [
      "/collections/572/572-1.jpg",
      "/collections/572/572-2.jpg",
      "/collections/572/572-3.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-574",
    title: "BADEA 574 Piano",
    img: "/sdb/574.jpg",
    description: {
      fr: "Le programme Plus sublime la salle de bains avec des vasques exclusives. La finition noire du meuble apporte un contraste et une finesse incomparable.",
      en: "The Plus range creates wonderful bathrooms centred around high-quality brand-name washbasins. The black cabinet finish reflects a level of finesse second to none."
    },
    dimensions: {
      width: "100",
      depth: "47",
      height: "Standard"
    },
    finishes: [
      { name: "Piano mat (574)", color: "#1a1a1a" },
      { name: "Noir mat (160)", color: "#1a1a1a" },
      { name: "Chrome (271)", color: "#c0c0c0" }
    ],
    features: [
      { label: { fr: "Gamme PLUS luxe", en: "PLUS premium range" }, icon: Sparkles },
      { label: { fr: "Compatible Subway 2.0", en: "Subway 2.0 compatible" }, icon: Layers },
      { label: { fr: "Éclairage LED SOL", en: "SOL LED lighting" }, icon: Sun },
      { label: { fr: "Design Contrasté", en: "Contrast design" }, icon: Maximize2 },
    ],
    images: [
      "/collections/574/574-1.jpg",
      "/collections/574/574-2.jpg",
      "/collections/574/574-3.jpg",
      "/collections/574/574-4.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-251",
    title: "BADEA 251 Visit",
    img: "/sdb/251.jpg",
    description: {
      fr: "Design à la perfection. De la vasque sur plan noire au meuble étagère ERRE8 spacieux, tout a été prévu pour la créativité dans la salle de bains moderne.",
      en: "Design perfection. From the black topmounted washbasin to the spacious ERRE8 shelf element, every detail is ideal for creativity in the modern bathroom."
    },
    dimensions: {
      width: "45.4",
      depth: "25",
      height: "12.5"
    },
    finishes: [
      { name: "Black blue (251)", color: "#1a2a3a" },
      { name: "Kito acier (521)", color: "#4a4a4a" },
      { name: "Bouton Inox (129)", color: "#c0c0c0" }
    ],
    features: [
      { label: { fr: "Vasque Visit 4", en: "Visit 4 washbasin" }, icon: Layers },
      { label: { fr: "Étagère ERRE8", en: "ERRE8 shelf" }, icon: Grid3X3 },
      { label: { fr: "Pied de support discret", en: "Understated support leg" }, icon: Maximize2 },
      { label: { fr: "Design créatif", en: "Creative design" }, icon: Sparkles },
    ],
    images: [
      "/collections/251/251-1.jpg",
      "/collections/251/251-2.jpg",
      "/collections/251/251-3.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-202",
    title: "BADEA 202 VariPro",
    img: "/sdb/202.jpg",
    description: {
      fr: "Un éclairage chaud et doux pour se détendre – notre miroir DEL Flat met tout en valeur. Réglez en continu l’intensité lumineuse d'un simple bouton.",
      en: "Relaxing in warm, soft lighting – our Flat LED wall mirror puts everything in the right light. Infinitely variable and dimmable at the press of a button."
    },
    dimensions: {
      width: "240",
      depth: "46",
      height: "Standard"
    },
    finishes: [
      { name: "Natural Oak (202)", color: "#d2b48c" }
    ],
    features: [
      { label: { fr: "Miroir DEL Flat", en: "Flat LED mirror" }, icon: LayoutDashboard },
      { label: { fr: "Vasque Contour", en: "Contour washbasin" }, icon: Layers },
      { label: { fr: "Lumière modulable", en: "Modulable light" }, icon: Sun },
      { label: { fr: "Finition Chêne naturel", en: "Natural Oak finish" }, icon: Sparkles },
    ],
    images: [
      "/collections/202/202-1.jpg",
      "/collections/202/202-2.jpg",
      "/collections/202/202-3.jpg",
      "/collections/202/202-4.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-084-1",
    title: "BADEA 084 Wild",
    img: "/sdb/084-1.jpg",
    description: {
      fr: "Ici, tout est parfait jusque dans les moindres détails. La teinte noire sublime le style contemporain tandis que la vasque Cubus 2.0 incarne l’élégance.",
      en: "This is where every single detail is just right. Accent colour black underscores the contemporary feel, complemented by the Cubus 2.0 washbasin."
    },
    dimensions: {
      width: "121.2",
      depth: "46",
      height: "Standard"
    },
    finishes: [
      { name: "Wild Oak (084)", color: "#8b5a2b" },
      { name: "Noir mat (160)", color: "#1a1a1a" },
      { name: "Poignée Noire (226)", color: "#000000" }
    ],
    features: [
      { label: { fr: "Vasque Cubus 2.0", en: "Cubus 2.0 washbasin" }, icon: Layers },
      { label: { fr: "Style contemporain", en: "Contemporary style" }, icon: Sparkles },
      { label: { fr: "Accents Noirs", en: "Black accents" }, icon: Maximize2 },
      { label: { fr: "Finition Chêne sauvage", en: "Wild Oak finish" }, icon: Sun },
    ],
    images: [
      "/collections/084-1/084-1-1.jpg",
      "/collections/084-1/084-1-2.jpg",
      "/collections/084-1/084-1-3.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-049",
    title: "BADEA 049 VariPro",
    img: "/sdb/049.jpg",
    description: {
      fr: "Des solutions de rangement innovantes et des détails convaincants, tels que les charnières fiables avec amortissement intégré pour plus de confort.",
      en: "Clever storage solutions and details such as reliable hinges with integrated, user-friendly soft-closing for enhanced quality."
    },
    dimensions: {
      width: "80",
      depth: "55.5",
      height: "Standard"
    },
    finishes: [
      { name: "Nero horizontal (049)", color: "#1a1a1a" },
      { name: "Grège brillant (742)", color: "#c2b2a1" },
      { name: "Poignée Noir mat (261)", color: "#000000" }
    ],
    features: [
      { label: { fr: "Vasque Futura 2", en: "Futura 2 washbasin" }, icon: Layers },
      { label: { fr: "Charnières amorties", en: "Soft-close hinges" }, icon: Archive },
      { label: { fr: "Applique DEL Elba", en: "Elba LED light" }, icon: Sun },
      { label: { fr: "Capteur de mouvement", en: "Motion sensor" }, icon: Sparkles },
    ],
    images: [
      "/collections/049/049-1.jpg",
      "/collections/049/049-2.jpg",
      "/collections/049/049-3.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-155",
    title: "BADEA 155 Kito",
    img: "/sdb/155.jpg",
    description: {
      fr: "Conçues pour une bonne prise en main, nos poignées disponibles en plusieurs largeurs et couleurs subliment le mobilier de votre salle de bains.",
      en: "Designed for easy handling: our handles are available in various widths and colours – adding a touch of distinction to your bathroom furniture."
    },
    dimensions: {
      width: "80",
      depth: "55.5",
      height: "Standard"
    },
    finishes: [
      { name: "Kito acier (155)", color: "#4a4a4a" },
      { name: "Gris quartz (225)", color: "#6a6a6a" }
    ],
    features: [
      { label: { fr: "Vasque Organic", en: "Organic washbasin" }, icon: Layers },
      { label: { fr: "Poignées ergonomiques", en: "Ergonomic handles" }, icon: Inbox },
      { label: { fr: "Finition Kito acier", en: "Kito steel finish" }, icon: Grid3X3 },
      { label: { fr: "Design Distinctif", en: "Distinctive design" }, icon: Sparkles },
    ],
    images: [
      "/collections/155/155-1.jpg",
      "/collections/155/155-2.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-031-1",
    title: "BADEA 031 Roma",
    img: "/sdb/031-1.jpg",
    description: {
      fr: "VariPro s'adapte à toutes les situations : notre plan de toilette en verre de 12 mm d'épaisseur s'intègre parfaitement aux formes rectilignes.",
      en: "VariPro adapts to all kinds of situations: our 12 mm thick glass washbasin table perfectly complements linear shapes."
    },
    dimensions: {
      width: "101.2",
      depth: "50",
      height: "Standard"
    },
    finishes: [
      { name: "Gris quartz mat (031)", color: "#6a6a6a" },
      { name: "Arctique (224)", color: "#e0e0e0" }
    ],
    features: [
      { label: { fr: "Vasque Roma", en: "Roma washbasin" }, icon: Layers },
      { label: { fr: "Verre 12mm", en: "12mm glass top" }, icon: Sun },
      { label: { fr: "Formes rectilignes", en: "Linear shapes" }, icon: Maximize2 },
      { label: { fr: "Finition Gris quartz", en: "Quartz grey finish" }, icon: Sparkles },
    ],
    images: [
      "/collections/031-1/031-1-1.jpg",
      "/collections/031-1/031-1-2.jpg",
      "/collections/031-1/031-1-3.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-276",
    title: "BADEA 276 Pure",
    img: "/sdb/276.jpg",
    description: {
      fr: "Notre série Pure sans poignée se distingue par ses lignes minimalistes et son élégance sobre. Un design d’une qualité exceptionnelle, prévu pour durer.",
      en: "Our handleless Pure range is based on reduced lines and elegant understatement. Irresistible design quality that will retain its validity for many years."
    },
    dimensions: {
      width: "51",
      depth: "38",
      height: "12"
    },
    finishes: [
      { name: "Greige mat (276)", color: "#bdaea0" },
      { name: "Mocca (962)", color: "#4d3932" },
      { name: "Noir poudre (456)", color: "#000000" }
    ],
    features: [
      { label: { fr: "Série sans poignée", en: "Handleless range" }, icon: LayoutDashboard },
      { label: { fr: "Lignes minimalistes", en: "Minimalist lines" }, icon: Maximize2 },
      { label: { fr: "Design Architectural", en: "Architectural design" }, icon: Layers },
      { label: { fr: "Vasque Livorno", en: "Livorno washbasin" }, icon: Grid3X3 },
    ],
    images: [
      "/collections/276/276-1.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-155-1",
    title: "BADEA 155 Pure",
    img: "/sdb/155-1.jpg",
    description: {
      fr: "Accrocheur de regards avec ses poignées profilées. Un coulissant où chaque chose est à sa place pour une organisation parfaite.",
      en: "A real eye-catcher with its profile handles. Neat and tidy interior dividers in pull-outs provide a place for everything."
    },
    dimensions: {
      width: "36 (vasque)",
      depth: "Standard",
      height: "Standard"
    },
    finishes: [
      { name: "Kito acier (155)", color: "#4a4a4a" },
      { name: "Couleur inox (399)", color: "#c0c0c0" }
    ],
    features: [
      { label: { fr: "Poignées profilées", en: "Profile handles" }, icon: Layers },
      { label: { fr: "Éclairage ambiance", en: "Ambient lighting" }, icon: Sun },
      { label: { fr: "Organisation optimisée", en: "Optimized organization" }, icon: LayoutDashboard },
      { label: { fr: "Vasque Bari", en: "Bari washbasin" }, icon: Grid3X3 },
    ],
    images: [
      "/collections/155-1/155-1-1.jpg",
      "/collections/155-1/155-1-2.jpg",
      "/collections/155-1/155-1-3.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-281",
    title: "BADEA 281 VariPro",
    img: "/sdb/281.jpg",
    description: {
      fr: "Mat et structuré. Le coloris beige sable et l’imitation bois Toffee interprètent à merveille le look naturel avec des notes brillantes.",
      en: "Matt meets texture. The sand beige colour and toffee wood texture interpret the natural look, while shining elements make statements."
    },
    dimensions: {
      width: "120.5",
      depth: "46",
      height: "Standard"
    },
    finishes: [
      { name: "Beige sable mat (281)", color: "#d2b48c" },
      { name: "Texture bois Toffee (168)", color: "#8b5a2b" },
      { name: "Poignée profil Inox", color: "#c0c0c0" }
    ],
    features: [
      { label: { fr: "Look Naturel", en: "Natural look" }, icon: Sparkles },
      { label: { fr: "Éclairage Sicilia", en: "Sicilia lighting" }, icon: Sun },
      { label: { fr: "Mélange de textures", en: "Texture mix" }, icon: Layers },
      { label: { fr: "Vasque Contour", en: "Contour washbasin" }, icon: Grid3X3 },
    ],
    images: [
      "/collections/281/281-1.jpg",
      "/collections/281/281-2.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-233",
    title: "BADEA 233 Stormgrey",
    img: "/sdb/233.jpg",
    description: {
      fr: "L'élégance du gris tempête alliée à la chaleur de l'orme blanchi. Cette planification harmonieuse apporte une sérénité immédiate à votre espace bain.",
      en: "The elegance of stormgrey combined with the warmth of white washed elm. This harmonious planning brings immediate serenity to your bathroom space."
    },
    dimensions: {
      width: "120.5",
      depth: "46",
      height: "Standard"
    },
    finishes: [
      { name: "Stormgrey (233)", color: "#7a7a7a" },
      { name: "White washed elm (205)", color: "#c1b5a0" }
    ],
    features: [
      { label: { fr: "Vasque Contour", en: "Contour washbasin" }, icon: Layers },
      { label: { fr: "Mélange de textures", en: "Texture mix" }, icon: Sparkles },
      { label: { fr: "Poignée Inox", en: "Stainless handle" }, icon: Maximize2 },
      { label: { fr: "Design équilibré", en: "Balanced design" }, icon: LayoutDashboard },
    ],
    images: [
      "/collections/233/233-1.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-031",
    title: "BADEA 031 Classic",
    img: "/sdb/031.jpg",
    description: {
      fr: "Le corps et l’esprit trouvent ici leur plein épanouissement. L’armoire à glace souligne l’incroyable sensation d’espace grâce à un éclairage DEL attrayant.",
      en: "Where body and soul can relax. The mirror cabinet emphasises the generous impression of space with attractive LED lighting."
    },
    dimensions: {
      width: "122.2",
      depth: "46.5",
      height: "Standard"
    },
    finishes: [
      { name: "Gris quartz mat (031)", color: "#6a6a6a" },
      { name: "Chrome (263)", color: "#c0c0c0" }
    ],
    features: [
      { label: { fr: "Vasque Eden", en: "Eden washbasin" }, icon: Layers },
      { label: { fr: "Applique DEL Elba", en: "Elba LED light" }, icon: Sun },
      { label: { fr: "Rangement spacieux", en: "Spacious storage" }, icon: Archive },
      { label: { fr: "Design Intemporel", en: "Timeless design" }, icon: Sparkles },
    ],
    images: [
      "/collections/031/031-1.jpg",
      "/collections/031/031-2.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-027",
    title: "BADEA 027 Visit",
    img: "/sdb/027.jpg",
    description: {
      fr: "La façade en verre stratifié séduit par sa beauté intemporelle. L’applique DEL Capri peut être réglée en intensité et température de couleur.",
      en: "The glass laminate front enthralls with timeless beauty. The Capri LED light can be adjusted in brightness and colour temperature."
    },
    dimensions: {
      width: "36 (vasque)",
      depth: "Standard",
      height: "Standard"
    },
    finishes: [
      { name: "Black burned (027)", color: "#1a1a1a" },
      { name: "Aureo mat (575)", color: "#b5a642" }
    ],
    features: [
      { label: { fr: "Vasque Bari", en: "Bari washbasin" }, icon: Layers },
      { label: { fr: "Verre stratifié", en: "Glass laminate" }, icon: Sparkles },
      { label: { fr: "Applique DEL Capri", en: "Capri LED light" }, icon: Sun },
      { label: { fr: "Poignée profil", en: "Grip ledge" }, icon: Maximize2 },
    ],
    images: [
      "/collections/027/027-1.jpg",
      "/collections/027/027-2.jpg",
      "/collections/027/027-3.jpg"
    ],
    brand: "badea"
  },
  {
    slug: "badea-070-1",
    title: "BADEA 070 Classic",
    img: "/sdb/070-1.jpg",
    description: {
      fr: "La fonction TipOn permet d’ouvrir le coulissant qui dévoile son organisation intérieure. Les façades structurées décor bois créent une ambiance chaleureuse.",
      en: "The pull-out opens with TipOn function, presenting its interior in quartz grey. Textured wood-decor fronts convey a feel-good mood."
    },
    dimensions: {
      width: "55",
      depth: "36",
      height: "12"
    },
    finishes: [
      { name: "Grain clair (070)", color: "#e3d5c1" },
      { name: "Gris quartz (TipOn)", color: "#6a6a6a" }
    ],
    features: [
      { label: { fr: "Fonction TipOn", en: "TipOn function" }, icon: Hand },
      { label: { fr: "Vasque Pisa", en: "Pisa washbasin" }, icon: Layers },
      { label: { fr: "Décor bois structuré", en: "Textured wood decor" }, icon: Grid3X3 },
      { label: { fr: "Organisation interne", en: "Interior organization" }, icon: LayoutDashboard },
    ],
    images: ["/collections/070-1/070-1-1.jpg", "/collections/070-1/070-1-2.jpg"],
    brand: "badea"
  },
  {
    slug: "badea-011",
    title: "BADEA 011 VariPro",
    img: "/sdb/011.jpg",
    description: {
      fr: "La vasque design Organic 2.0, à dimensions variables, s’intègre parfaitement dans chaque niche pour un gain de place optimal.",
      en: "Variable in size, the Organic 2.0 designer washstand fits seamlessly into the space available, ideal for any niche."
    },
    dimensions: {
      width: "191.2",
      depth: "55.5",
      height: "Standard"
    },
    finishes: [
      { name: "Blanc mat (011)", color: "#ffffff" },
      { name: "Black blue (251)", color: "#1a2a3a" }
    ],
    features: [
      { label: { fr: "Vasque Organic 2.0", en: "Organic 2.0 washbasin" }, icon: Layers },
      { label: { fr: "Dimensions variables", en: "Variable dimensions" }, icon: Maximize2 },
      { label: { fr: "Fonction TipOn", en: "TipOn function" }, icon: Hand },
      { label: { fr: "Design épuré", en: "Sleek design" }, icon: Sparkles },
    ],
    images: ["/collections/011/011-1.jpg", "/collections/011/011-2.jpg", "/collections/011/011-3.jpg"],
    brand: "badea"
  },
  {
    slug: "badea-011-2",
    title: "BADEA 011 Contrast",
    img: "/sdb/011-2.jpg",
    description: {
      fr: "Le cadre métallique noir du miroir rond est repris par les poignées. Le jeu entre le corps et la façade mise sur les contrastes frappants.",
      en: "The black metal frame of the round mirror communicates with the material quality of the handles. Interplay sets store by richness of contrast."
    },
    dimensions: {
      width: "121.2",
      depth: "55.5",
      height: "Standard"
    },
    finishes: [
      { name: "Blanc mat (011)", color: "#ffffff" },
      { name: "Gris quartz mat (126)", color: "#6a6a6a" },
      { name: "Black burned (941)", color: "#1a1a1a" }
    ],
    features: [
      { label: { fr: "Richesse des contrastes", en: "Richness of contrast" }, icon: Maximize2 },
      { label: { fr: "Miroir rond cadre noir", en: "Round black frame mirror" }, icon: LayoutDashboard },
      { label: { fr: "Vasque Organic 2.0", en: "Organic 2.0 washbasin" }, icon: Layers },
      { label: { fr: "Poignées Noir mat", en: "Black matt handles" }, icon: Hand },
    ],
    images: ["/collections/011-2/011-2-1.jpg"],
    brand: "badea"
  },
  {
    slug: "badea-011-1",
    title: "BADEA 011 Elba",
    img: "/sdb/011-1.jpg",
    description: {
      fr: "L'applique DEL Elba peut être réglée en intensité et température de couleur grâce au système LightMotion, du blanc froid au blanc chaud.",
      en: "The Elba LED top-mounted light can be controlled and dimmed thanks to our LightMotion system. Colour temperature can be continuously varied."
    },
    dimensions: {
      width: "161.2",
      depth: "46",
      height: "Standard"
    },
    finishes: [
      { name: "Blanc mat (011)", color: "#ffffff" },
      { name: "Grain clair (196)", color: "#e3d5c1" },
      { name: "Noir mat (2226)", color: "#000000" }
    ],
    features: [
      { label: { fr: "Système LightMotion", en: "LightMotion system" }, icon: Sun },
      { label: { fr: "Vasque Futura 2", en: "Futura 2 washbasin" }, icon: Layers },
      { label: { fr: "Lumière modulable", en: "Modulable light" }, icon: Sparkles },
      { label: { fr: "Design Contrasté", en: "Contrast design" }, icon: Maximize2 },
    ],
    images: ["/collections/011-1/011-1-1.jpg", "/collections/011-1/011-1-2.jpg"],
    brand: "badea"
  },
  {
    slug: "badea-069-1",
    title: "BADEA 069 Concrete",
    img: "/sdb/069-1.jpg",
    description: {
      fr: "Aspect béton moderne. La vasque, l’étagère et l’armoire murale optimisent l'espace tandis que la banquette apporte une touche pratique.",
      en: "Contemporary in concrete look. Washstand, shelf unit and wall cabinet create storage space, complemented by a practical bench."
    },
    dimensions: {
      width: "101.2",
      depth: "50",
      height: "Standard"
    },
    finishes: [
      { name: "Concrete grey (069)", color: "#8b8c8d" },
      { name: "Chrome (797)", color: "#c0c0c0" }
    ],
    features: [
      { label: { fr: "Aspect Béton", en: "Concrete look" }, icon: Sparkles },
      { label: { fr: "Vasque Roma", en: "Roma washbasin" }, icon: Layers },
      { label: { fr: "Banquette pratique", en: "Practical bench" }, icon: Inbox },
      { label: { fr: "Rangement optimisé", en: "Optimized storage" }, icon: Grid3X3 },
    ],
    images: ["/collections/069-1/069-1-1.jpg", "/collections/069-1/069-1-2.jpg", "/collections/069-1/069-1-3.jpg"],
    brand: "badea"
  },
  {
    slug: "badea-279",
    title: "BADEA 279 Stockholm",
    img: "/sdb/279.jpg",
    description: {
      fr: "Technologie brevetée anti-traces de doigts. La surface mate soyeuse de cette façade Stockholm allie esthétique irrésistible et entretien facilité.",
      en: "Patented anti-fingerprint technology. The Stockholm front impresses with low maintenance, warm feel and an irresistible silky matt look."
    },
    dimensions: {
      width: "81.2",
      depth: "50",
      height: "Standard"
    },
    finishes: [
      { name: "Black mat Stockholm (279)", color: "#1a1a1a" },
      { name: "Gris quartz mat (126)", color: "#6a6a6a" }
    ],
    features: [
      { label: { fr: "Anti-traces de doigts", en: "Anti-fingerprint" }, icon: Sparkles },
      { label: { fr: "Ouverture TipOn", en: "TipOn opening" }, icon: Hand },
      { label: { fr: "Vasque Roma", en: "Roma washbasin" }, icon: Layers },
      { label: { fr: "Miroir rond coordonné", en: "Coordinated round mirror" }, icon: LayoutDashboard },
    ],
    images: ["/collections/279/279-1.jpg", "/collections/279/279-2.jpg"],
    brand: "badea"
  },
];

const TRANSLATIONS = {
  fr: {
    heroTitle: "Nos collections de salle de bains",
    heroDesc: "Explorez l'excellence du design signé CMC.",
    title: "Découvrez nos collections",
    subtitle: "Plongez dans l'univers CMC et découvrez une vision singulière de la salle de bains contemporaine.",
    dimensions: "DIMENSIONS",
    finishes: "FINITIONS",
    width: "Largeur (cm)",
    depth: "Profondeur (cm)",
    height: "Hauteur (cm)",
  },
  en: {
    heroTitle: "Our Bathroom Collections",
    heroDesc: "Explore the excellence of CMC design.",
    title: "Discover our collections",
    subtitle: "Dive into the CMC universe and discover a unique vision of the contemporary bathroom.",
    dimensions: "DIMENSIONS",
    finishes: "FINISHES",
    width: "Width (cm)",
    depth: "Depth (cm)",
    height: "Height (cm)",
  }
};

function Modal({ collection, onClose, lang }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

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

  // Auto-slide effect (5 seconds)
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

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
          {/* SLIDESHOW */}
          <div className={styles.slideshowContainer}>
            <div className={styles.slideImageWrapper}>
              <Image 
                src={images[currentSlide]} 
                alt={collection.title} 
                layout="fill" 
                objectFit="contain"
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

          {/* DETAILS */}
          <div className={styles.detailsContainer}>
            <h2 className={styles.modalTitle}>{collection.title}</h2>
            
            {collection.description && (
              <p className={styles.modalDesc}>{getLoc(collection.description)}</p>
            )}

            {collection.dimensions && (
              <div className={styles.dimensionSection}>
                <h4>{t.dimensions}</h4>
                <div className={styles.dimRow}>
                  <span>{t.width}:</span> <strong>{collection.dimensions.width}</strong>
                </div>
                {collection.dimensions.depth && (
                  <div className={styles.dimRow}>
                    <span>{t.depth}:</span> <strong>{collection.dimensions.depth}</strong>
                  </div>
                )}
                {collection.dimensions.height && (
                  <div className={styles.dimRow}>
                    <span>{t.height}:</span> <strong>{collection.dimensions.height}</strong>
                  </div>
                )}
              </div>
            )}

            {collection.finishes && (
              <div className={styles.finishesSection}>
                <h4>{t.finishes}</h4>
                <div className={styles.finishesGrid}>
                  {collection.finishes.map((finish, idx) => (
                    <div key={idx} className={styles.finishItem}>
                      <div 
                        className={styles.finishSwatch} 
                        style={{ backgroundColor: finish.color }}
                      />
                      <span>{finish.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {collection.features && (
              <div className={styles.featuresSection}>
                {collection.features.map((feat, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    <feat.icon size={20} strokewidth={2.5} />
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

export default function ServicesSdbCat() {
  const { lang } = useLang(); // use hook
  const [selectedCollection, setSelectedCollection] = useState(null);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.fr;

  const openModal = (col) => setSelectedCollection(col);
  const closeModal = () => setSelectedCollection(null);

  const VISO = COLLECTIONS.filter(col => col.brand === "viso");
  const BADEA = COLLECTIONS.filter(col => col.brand === "badea");

  return (
    <section className={styles.section}>
      {/* --- Bandeau top --- */}
      <div className={styles.hero}>
        <Image
          src="/banner/sdb.webp"
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

        {/* VISO SECTION */}
        <div className={styles.brandHeader}>
          <div className={styles.brandKicker}>VISO</div>
          <div className={styles.brandLine} />
        </div>
        <div className={styles.grid}>
          {VISO.map((col) => (
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

        {/* BADEA SECTION */}
        <div className={styles.brandHeader}>
          <div className={styles.brandKicker}>BADEA</div>
          <div className={styles.brandLine} />
        </div>
        <div className={styles.grid}>
          {BADEA.map((col) => (
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
          lang={lang} // Pass lang to modal
        />
      )}
    </section>
  );
}
