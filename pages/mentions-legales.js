import Head from "next/head";
import Navbar from "../components/NavBarNew";
import FooterSection from "../components/FooterSection";
import { useLang } from "../context/LangContext";

export default function MentionsLegales() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  const T = {
    fr: {
      title: "Mentions légales | CMC Cuisine",
      h1: "Mentions légales",
      updated: "Dernière mise à jour",
      editor: "1. Éditeur du site",
      director: "2. Directeur de la publication",
      hosting: "3. Hébergement",
      ip: "4. Propriété intellectuelle",
      liability: "5. Responsabilité",
      editorContent: (
        <>
          <strong>CMC Cuisine</strong>
          <br />
          MARINA BURO, 1752 RN 7 Bât A
          <br />
          06270 Villeneuve-Loubet
          <br />
          Téléphone : <a href="tel:+33493201918">04 93 20 19 18</a>
          <br />
          E-mail :{" "}
          <a href="mailto:contact@cmc-cuisine.com">contact@cmc-cuisine.com</a>
          <br />
          SIRET : {/* à compléter */}
        </>
      ),
      directorContent: "Le directeur de la publication est : à compléter.",
      hostingContent: (
        <>
          Le site est hébergé par :
          <br />
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723, USA
        </>
      ),
      ipContent:
        "L’ensemble du contenu du site est protégé par le droit de la propriété intellectuelle. Toute reproduction est interdite sans autorisation écrite préalable.",
      liabilityContent:
        "CMC Cuisine s’efforce de fournir des informations à jour mais ne peut garantir l’absence d’erreurs ou d’omissions.",
    },
    en: {
      title: "Legal Notice | CMC Cuisine",
      h1: "Legal Notice",
      updated: "Last update",
      editor: "1. Website Publisher",
      director: "2. Publishing Director",
      hosting: "3. Hosting",
      ip: "4. Intellectual Property",
      liability: "5. Liability",
      editorContent: (
        <>
          <strong>CMC Cuisine</strong>
          <br />
          MARINA BURO, 1752 RN 7 Bât A
          <br />
          06270 Villeneuve-Loubet – France
          <br />
          Phone: <a href="tel:+33493201918">+33 4 93 20 19 18</a>
          <br />
          Email:{" "}
          <a href="mailto:contact@cmc-cuisine.com">contact@cmc-cuisine.com</a>
          <br />
          Company ID (SIRET): {/* to be completed */}
        </>
      ),
      directorContent: "Publishing director: to be completed.",
      hostingContent: (
        <>
          Website hosted by:
          <br />
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723, USA
        </>
      ),
      ipContent:
        "All content on this website is protected by intellectual property law. Any reproduction without prior written consent is prohibited.",
      liabilityContent:
        "CMC Cuisine strives to provide accurate information but cannot guarantee completeness or absence of errors.",
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

        <h2>{T.editor}</h2>
        <p>{T.editorContent}</p>

        <h2>{T.director}</h2>
        <p>{T.directorContent}</p>

        <h2>{T.hosting}</h2>
        <p>{T.hostingContent}</p>

        <h2>{T.ip}</h2>
        <p>{T.ipContent}</p>

        <h2>{T.liability}</h2>
        <p>{T.liabilityContent}</p>
      </main>

      <FooterSection />
    </div>
  );
}
