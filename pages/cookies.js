import Head from "next/head";
import Navbar from "../components/NavBarNew";
import FooterSection from "../components/FooterSection";
import { useLang } from "../context/LangContext";

export default function CookiesPage() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  const T = {
    fr: {
      title: "Cookies | CMC Cuisine",
      h1: "Cookies",
      intro:
        "Cette page explique ce que sont les cookies et comment nous les utilisons sur ce site.",
      what: "1. Qu’est-ce qu’un cookie ?",
      whatText:
        "Un cookie est un petit fichier déposé sur votre appareil lors de votre navigation. Il permet au site de fonctionner correctement ou d’améliorer votre expérience.",
      types: "2. Cookies utilisés",
      typesList: [
        "Cookies techniques / nécessaires",
        "Cookies de mesure d’audience",
        "Cookies tiers éventuels (ex. réseaux sociaux intégrés)",
      ],
      manage: "3. Gestion des cookies",
      manageText:
        "Vous pouvez paramétrer votre navigateur pour refuser les cookies. Certains services peuvent alors ne plus fonctionner correctement.",
      duration: "4. Durée de conservation",
      durationText:
        "Les cookies sont conservés au maximum 13 mois, conformément aux recommandations de la CNIL.",
      contact: "5. Contact",
      contactText: "Pour toute question sur les cookies : ",
    },
    en: {
      title: "Cookies | CMC Cuisine",
      h1: "Cookies",
      intro:
        "This page explains what cookies are and how we use them on this website.",
      what: "1. What is a cookie?",
      whatText:
        "A cookie is a small text file stored on your device when you browse. It allows the website to work properly or to improve your experience.",
      types: "2. Cookies we use",
      typesList: [
        "Technical / necessary cookies",
        "Analytics cookies",
        "Third-party cookies (e.g. embedded social content)",
      ],
      manage: "3. Managing cookies",
      manageText:
        "You can configure your browser to refuse cookies. Some features may no longer work properly.",
      duration: "4. Retention period",
      durationText:
        "Cookies are kept for a maximum of 13 months, in line with CNIL recommendations.",
      contact: "5. Contact",
      contactText: "For any question regarding cookies: ",
    },
  }[lang];

  return (
    <div style={{ backgroundColor: "#f9f5f2", minHeight: "100vh" }}>
      <Head>
        <title>{T.title}</title>
      </Head>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "64px", // même hauteur que la navbar
          backgroundColor: "#e5e5e5", // gris clair
          zIndex: 0, // reste derrière la navbar
        }}
      />
      <Navbar />

      <main
        style={{
          padding: "110px 16px 40px",
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#f9f5f2",
        }}
      >
        <h1>{T.h1}</h1>
        <p>
          {T.intro} ({year})
        </p>

        <h2>{T.what}</h2>
        <p>{T.whatText}</p>

        <h2>{T.types}</h2>
        <ul>
          {T.typesList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{T.manage}</h2>
        <p>{T.manageText}</p>

        <h2>{T.duration}</h2>
        <p>{T.durationText}</p>

        <h2>{T.contact}</h2>
        <p>
          {T.contactText}
          <a href="mailto:contact@cmc-cuisine.com">contact@cmc-cuisine.com</a>
        </p>
      </main>

      <FooterSection />
    </div>
  );
}
