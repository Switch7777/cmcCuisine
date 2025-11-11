import Head from "next/head";
import Navbar from "../components/NavBarNew";
import FooterSection from "../components/FooterSection";
import { useLang } from "../context/LangContext";

export default function PolitiqueConfidentialite() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  const T = {
    fr: {
      title: "Politique de confidentialité | CMC Cuisine",
      h1: "Politique de confidentialité",
      updated: "Dernière mise à jour",
      intro:
        "Cette page explique comment CMC Cuisine collecte et utilise vos données personnelles.",
      dataTitle: "1. Données collectées",
      dataList: [
        "Identité et coordonnées (nom, e-mail, téléphone) quand vous nous contactez",
        "Contenu de votre message",
        "Données de navigation (cookies, statistiques)",
      ],
      purposes: "2. Finalités",
      purposesList: [
        "Répondre à vos demandes",
        "Vous recontacter pour un rendez-vous ou un devis",
        "Améliorer le site et sa sécurité",
      ],
      legal: "3. Base légale",
      legalText:
        "Le traitement est fondé sur votre consentement (formulaire) et sur l’intérêt légitime de l’entreprise (sécurité, statistiques).",
      rights: "4. Vos droits",
      rightsText:
        "Vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition et de limitation.",
      contact: "Pour exercer vos droits, contactez-nous à : ",
    },
    en: {
      title: "Privacy Policy | CMC Cuisine",
      h1: "Privacy Policy",
      updated: "Last update",
      intro:
        "This page explains how CMC Cuisine collects and uses your personal data.",
      dataTitle: "1. Data we collect",
      dataList: [
        "Identity and contact details (name, email, phone) when you contact us",
        "Content of your request",
        "Browsing data (cookies, analytics)",
      ],
      purposes: "2. Purposes",
      purposesList: [
        "Reply to your requests",
        "Contact you back for appointments or quotes",
        "Improve the website and its security",
      ],
      legal: "3. Legal basis",
      legalText:
        "Processing is based on your consent (contact form) and on our legitimate interest (security, analytics).",
      rights: "4. Your rights",
      rightsText:
        "You have the right to access, rectify, erase or object to the processing of your data.",
      contact: "To exercise your rights, contact us at: ",
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
          {T.updated} : {year}
        </p>
        <p>{T.intro}</p>

        <h2>{T.dataTitle}</h2>
        <ul>
          {T.dataList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{T.purposes}</h2>
        <ul>
          {T.purposesList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>{T.legal}</h2>
        <p>{T.legalText}</p>

        <h2>{T.rights}</h2>
        <p>{T.rightsText}</p>
        <p>
          {T.contact}
          <a href="mailto:contact@cmc-cuisine.com">contact@cmc-cuisine.com</a>
        </p>
      </main>

      <FooterSection />
    </div>
  );
}
