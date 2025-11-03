import styles from "../styles/Middlemain.module.css";
import LogoMiddleMainUn from "./logo/LogoMiddleMainUn";
import LogoMiddleMainDeux from "./logo/LogoMiddleMainDeux";
import LogoMiddleMainTrois from "./logo/LogoMiddleMainTrois";
import LogoMiddleMainQuatre from "./logo/LogoMiddleMainQuatre";
import { useLang } from "../context/LangContext"; // ✅ import du contexte

export default function MiddleMain() {
  const { lang } = useLang();

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        {lang === "fr" ? "Nous sommes à vos côtés" : "We are by your side"}
      </h2>

      <div className={styles.row}>
        <LogoMiddleMainUn />
        <LogoMiddleMainDeux />
        <LogoMiddleMainTrois />
        <LogoMiddleMainQuatre />
      </div>
    </section>
  );
}
