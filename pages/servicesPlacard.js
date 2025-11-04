import Head from "next/head";
import Navbar from "../components/NavBarNew.js";
import ServicesPlacardCat from "../components/ServicesPlacard.js";
import FooterSection from "../components/FooterSection.js";

export default function ServicesPlacard() {
  return (
    <>
      <Head>
        <title>Nos collections de placard — CMC Cuisine</title>
        <meta
          name="description"
          content="Découvrez nos collections de placard sur-mesure : Verso, Delta, Kyoto, et bien d'autres modèles design et fonctionnels."
        />
      </Head>

      <Navbar />
      <main>
        <ServicesPlacardCat />
      </main>
      <FooterSection />
    </>
  );
}
