import Head from "next/head";
import Navbar from "../components/NavBarNew.js";
import ServicesSdbCat from "../components/ServicesSdbCat.js";
import FooterSection from "../components/FooterSection.js";

export default function ServicesSdb() {
  return (
    <>
      <Head>
        <title>Nos collections de salle de bain — CMC Cuisine</title>
        <meta
          name="description"
          content="Découvrez nos collections de salle de bain sur-mesure : Verso, Delta, Kyoto, et bien d'autres modèles design et fonctionnels."
        />
      </Head>

      <Navbar />
      <main>
        <ServicesSdbCat />
      </main>
      <FooterSection />
    </>
  );
}
