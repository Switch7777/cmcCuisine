// pages/qui-sommes-nous.js
import Head from "next/head";
import Navbar from "../components/NavBarNew.js";
import FooterSection from "../components/FooterSection";
import { useLang } from "../context/LangContext";
import QuiSommesNousContent from "../components/QuiSommesNousContent";

const META = {
  fr: {
    title: "Qui sommes-nous — CMC Cuisine",
    desc: "Découvrez notre histoire, notre savoir-faire et nos engagements.",
  },
  en: {
    title: "About Us — CMC Cuisine",
    desc: "Discover our story, expertise and commitments.",
  },
};

export default function PageQuiSommesNous() {
  const { lang } = useLang();
  const m = META[lang] ?? META.fr;

  return (
    <>
      <Navbar transparent />
      <Head>
        <title>{m.title}</title>
        <meta name="description" content={m.desc} />
      </Head>

      <QuiSommesNousContent />

      <FooterSection />
    </>
  );
}
