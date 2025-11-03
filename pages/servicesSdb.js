import Head from "next/head";
import RealisationsSection from "../components/RealisationsSection.js";
import Navbar from "../components/NavBarNew.js";
import FooterSection from "../components/FooterSection.js";

export default function RealisationsPage() {
  return (
    <>
      <Navbar />
      <Head>
        <title>Nos réalisations — CMC Cuisine</title>
        <meta
          name="description"
          content="Découvrez une sélection de nos réalisations : cuisines sur-mesure, détails de finitions et matériaux premium."
        />
      </Head>

      <FooterSection />
    </>
  );
}
