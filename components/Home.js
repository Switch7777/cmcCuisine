import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";
import Topmain from "./Topmain";
import HeaderHero from "./HeaderHero.js";
import Middlemain from "./MiddleMain";
import MiddleBottomMain from "./MiddleBottomMain";
import SavoirFaireSection from "./SavoirFaireSection.js";
import ShowroomSection from "./ShowroomSection.js";
import FooterSection from "./FooterSection.js";
import NavBar from "../components/NavBarNew.js";
import ServicesSection from "../components/ServicesSection";

function Home() {
  return (
    <div>
      {/* <Navbar />
      <Topmain /> */}
      <NavBar variant="transparent" />
      <HeaderHero />
      <ServicesSection />
      <Middlemain />
      <MiddleBottomMain />

      <ShowroomSection />
      <FooterSection />
    </div>
  );
}

export default Home;
