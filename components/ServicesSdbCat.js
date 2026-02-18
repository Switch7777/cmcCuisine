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
    title: "COLLECTION VERSO",
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
    images: ["/collections/verso/verso-1.webp","/collections/verso/verso-2.webp","/collections/verso/verso-3.webp","/collections/verso/verso-4.webp","/collections/verso/verso-5.webp","/collections/verso/verso-6.webp"] 
  },
  {
    slug: "delta",
    title: "COLLECTION DELTA",
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
    images: ["/collections/delta/Delta_1.webp", "/collections/delta/Delta_2.webp", "/collections/delta/Delta_3.webp", "/collections/delta/Delta_4.webp", "/collections/delta/Delta_5.webp"]
  },
  {
    slug: "kyoto",  
    title: "COLLECTION KYOTO",
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
    images: ["/collections/kyoto/Kyoto_new_1.webp", "/collections/kyoto/Kyoto_new_2.webp", "/collections/kyoto/Kyoto_new_3.webp", "/collections/kyoto/Kyoto_new_4.webp", "/collections/kyoto/Kyoto_new_5.webp", "/collections/kyoto/Kyoto_new_6.webp", "/collections/kyoto/Kyoto_new_7.webp", "/collections/kyoto/Kyoto_new_8.webp", "/collections/kyoto/Kyoto_new_9.webp", "/collections/kyoto/Kyoto_new_10.webp", "/collections/kyoto/Kyoto_new_11.webp", "/collections/kyoto/Kyoto_new_12.webp", "/collections/kyoto/Kyoto_new_13.webp", "/collections/kyoto/Kyoto_new_14.webp", "/collections/kyoto/Kyoto_new_15.webp", "/collections/kyoto/Kyoto_new_16.webp"]
  },
  {
    slug: "granada",
    title: "COLLECTION GRANADA",
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
    images: ["/collections/granada/Granada_new_1.webp", "/collections/granada/Granada_new_2.webp", "/collections/granada/Granada_new_3.webp",  "/collections/granada/Granada_new_5.webp", "/collections/granada/Granada_new_6.webp", "/collections/granada/Granada_new_7.webp", "/collections/granada/Granada_new_8.webp", "/collections/granada/Granada_new_9.webp", "/collections/granada/Granada_new_10.webp", "/collections/granada/Granada_new_11.webp", "/collections/granada/Granada_new_12.webp", "/collections/granada/Granada_new_13.webp", "/collections/granada/Granada_new_14.webp", "/collections/granada/Granada_new_15.webp", "/collections/granada/Granada_new_16.webp", "/collections/granada/Granada_new_17.webp", "/collections/granada/Granada_new_18.webp", "/collections/granada/Granada_new_19.webp"]
  },
  {
    slug: "aqua",
    title: "COLLECTION AQUA",
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
    images: ["/collections/aqua/Aqua_new_1.webp", "/collections/aqua/Aqua_new_2.webp", "/collections/aqua/Aqua_new_3.webp", "/collections/aqua/Aqua_new_4.webp", "/collections/aqua/Aqua_new_5.webp", "/collections/aqua/Aqua_new_6.webp", "/collections/aqua/Aqua_new_7.webp", "/collections/aqua/Aqua_new_8.webp", "/collections/aqua/Aqua_new_9.webp", "/collections/aqua/Aqua_new_10.webp", "/collections/aqua/Aqua_new_11.webp"]
  },
  {
    slug: "box",  
    title: "COLLECTION BOX",
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
    images: ["/collections/box/Box_new_1.webp", "/collections/box/Box_new_2.webp", "/collections/box/Box_new_3.webp", "/collections/box/Box_new_4.webp", "/collections/box/Box_new_5.webp", "/collections/box/Box_new_6.webp",  "/collections/box/Box_new_8.webp", "/collections/box/Box_new_9.webp", "/collections/box/Box_new_10.webp", "/collections/box/Box_new_11.webp", "/collections/box/Box_new_12.webp", "/collections/box/Box_new_13.webp", "/collections/box/Box_new_14.webp"]
  },
  {
    slug: "indico",
    title: "COLLECTION INDICO",
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
    images: ["/collections/indico/Indico_new_1.webp", "/collections/indico/Indico_new_2.webp", "/collections/indico/Indico_new_3.webp", "/collections/indico/Indico_new_4.webp", "/collections/indico/Indico_new_5.webp", "/collections/indico/Indico_new_6.webp", "/collections/indico/Indico_new_7.webp", "/collections/indico/Indico_new_8.webp", "/collections/indico/Indico_new_9.webp", "/collections/indico/Indico_new_10.webp", "/collections/indico/Indico_new_11.webp", "/collections/indico/Indico_new_12.webp"]
  },
  {
    slug: "eleven",
    title: "COLLECTION ELEVEN",
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
    images: ["/collections/eleven/Eleven_new_1.webp", "/collections/eleven/Eleven_new_2.webp", "/collections/eleven/Eleven_new_3.webp", "/collections/eleven/Eleven_new_4.webp", "/collections/eleven/Eleven_new_5.webp", "/collections/eleven/Eleven_new_6.webp", "/collections/eleven/Eleven_new_7.webp", "/collections/eleven/Eleven_new_8.webp"]
  },
  {
    slug: "nomad",
    title: "COLLECTION NOMAD",
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
    images: ["/collections/nomad/Nomad_new_1.webp", "/collections/nomad/Nomad_new_2.webp", "/collections/nomad/Nomad_new_3.webp", "/collections/nomad/Nomad_new_4.webp", "/collections/nomad/Nomad_new_5.webp", "/collections/nomad/Nomad_new_6.webp", "/collections/nomad/Nomad_new_7.webp", "/collections/nomad/Nomad_new_8.webp", "/collections/nomad/Nomad_new_9.webp", "/collections/nomad/Nomad_new_10.webp"]
  },
  {
    slug: "icon",
    title: "COLLECTION ICON",
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
    images: ["/collections/icon/Icon_new_1.webp","/collections/icon/Icon_new_2.webp","/collections/icon/Icon_new_3.webp","/collections/icon/Icon_new_4.webp","/collections/icon/Icon_new_5.webp","/collections/icon/Icon_new_6.webp","/collections/icon/Icon_new_7.webp","/collections/icon/Icon_new_8.webp","/collections/icon/Icon_new_9.webp","/collections/icon/Icon_new_10.webp"]
  },  
  {
    slug: "arco",
    title: "COLLECTION ARCO",
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
    images: ["/collections/arco/Arco_new_1.webp","/collections/arco/Arco_new_2.webp","/collections/arco/Arco_new_3.webp","/collections/arco/Arco_new_4.webp","/collections/arco/Arco_new_5.webp"]
  }, {
    slug: "bari",
    title: "COLLECTION BARI",
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
    images: ["/collections/bari/Bari_new_1.webp","/collections/bari/Bari_new_2.webp","/collections/bari/Bari_new_3.webp","/collections/bari/Bari_new_4.webp","/collections/bari/Bari_new_5.webp"]
  }, {
    slug: "vision",
    title: "COLLECTION VISION",
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
    images: ["/collections/vision/vision-new-1.webp","/collections/vision/vision-new-2.webp","/collections/vision/vision-new-3.webp","/collections/vision/vision-new-4.webp","/collections/vision/vision-new-5.webp","/collections/vision/vision-new-6.webp"]
  }, {
    slug: "midi",
    title: "COLLECTION MIDI",
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
    images: ["/collections/midi/Midi_new_1.webp","/collections/midi/Midi_new_2.webp","/collections/midi/Midi_new_3.webp","/collections/midi/Midi_new_4.webp","/collections/midi/Midi_new_5.webp","/collections/midi/Midi_new_6.webp","/collections/midi/Midi_new_7.webp"]
  }, {
    slug: "lagos",
    title: "COLLECTION LAGOS",
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
    images: ["/collections/lagos/Lagos_new_1.webp","/collections/lagos/Lagos_new_2.webp","/collections/lagos/Lagos_new_3.webp","/collections/lagos/Lagos_new_4.webp","/collections/lagos/Lagos_new_5.webp","/collections/lagos/Lagos_new_6.webp","/collections/lagos/Lagos_new_7.webp","/collections/lagos/Lagos_new_8.webp","/collections/lagos/Lagos_new_9.webp","/collections/lagos/Lagos_new_10.webp","/collections/lagos/Lagos_new_11.webp","/collections/lagos/Lagos_new_12.webp"]
  },{
    slug: "quadro",
    title: "COLLECTION QUADRO",
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
    images: ["/collections/quadro/Quadro_new_1.webp","/collections/quadro/Quadro_new_2.webp","/collections/quadro/Quadro_new_3.webp","/collections/quadro/Quadro_new_4.webp"]
  },{
    slug: "loft",
    title: "COLLECTION Loft",
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
    images: ["/collections/loft/Loft_01.webp","/collections/loft/Loft_02.webp","/collections/loft/Loft_03.webp","/collections/loft/Loft_04.webp","/collections/loft/Loft_05.webp"]
  },
];

const TRANSLATIONS = {
  fr: {
    heroTitle: "Nos collections de salle de bains",
    heroDesc: "Design, élégance et savoir-faire , découvrez l’univers de CMC à travers nos collections.",
    title: "Découvrez nos collections",
    subtitle: "Des lignes modernes, des matériaux premium et des finitions soignées pour chaque projet.",
    dimensions: "DIMENSIONS",
    finishes: "FINITIONS",
    width: "Largeur (cm)",
    depth: "Profondeur (cm)",
    height: "Hauteur (cm)",
  },
  en: {
    heroTitle: "Our Bathroom Collections",
    heroDesc: "Design, elegance and craftsmanship, discover the CMC universe through our collections.",
    title: "Discover our collections",
    subtitle: "Modern lines, premium materials and neat finishes for every project.",
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
          lang={lang} // Pass lang to modal
        />
      )}
    </section>
  );
}
