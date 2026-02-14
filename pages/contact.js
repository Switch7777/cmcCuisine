import Head from "next/head";
import Navbar from "../components/NavBarNew.js";
import ContactSection from "../components/ContactSection.js";
import FooterSection from "../components/FooterSection.js";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — CMC Cuisine</title>
        <meta
          name="description"
          content="Contactez CMC Cuisine : demande de rendez-vous, devis, informations."
        />
      </Head>

      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
}
