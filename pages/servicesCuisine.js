import Head from "next/head";
import Navbar from "../components/NavBarNew.js";
import ServicesCuisineCat from "../components/ServicesCuisineCat.js";
import FooterSection from "../components/FooterSection.js";

export default function ServicesCuisine() {
  return (
    <>
      <Head>
        <title>Nos collections de cuisines — CMC Cuisine</title>
        <meta
          name="description"
          content="Découvrez nos collections de cuisines sur-mesure : Verso, Delta, Kyoto, et bien d'autres modèles design et fonctionnels."
        />
      </Head>

      <Navbar />
      <main>
        <ServicesCuisineCat />
      </main>
      <FooterSection />
    </>
  );
}
