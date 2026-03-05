import { useState } from "react";
import HeaderHero from "./HeaderHero.js";
import Middlemain from "./MiddleMain";
import MiddleBottomMain from "./MiddleBottomMain";
import ShowroomSection from "./ShowroomSection.js";
import FooterSection from "./FooterSection.js";
import NavBar from "../components/NavBarNew.js";
import ServicesSection from "../components/ServicesSection";
import LogoLoader from "./LogoLoader";

function Home() {
  const [appReady, setAppReady] = useState(false);

  return (
    <div style={{ position: "relative", height: appReady ? "auto" : "100vh", overflow: appReady ? "visible" : "hidden" }}>
      <LogoLoader hidden={appReady} />
      <NavBar variant="transparent" />
      <HeaderHero onLoaded={() => setAppReady(true)} />
      <ServicesSection />
      <Middlemain />
      <MiddleBottomMain />
      <ShowroomSection />
      <FooterSection />
    </div>
  );
}

export default Home;
