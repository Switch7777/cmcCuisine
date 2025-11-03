import styles from "../../styles/MiddleMain.module.css";
import { Hammer } from "lucide-react";
import { useLang } from "../../context/LangContext";

function LogoMiddleMainTrois() {
  const { lang } = useLang();

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Hammer />
      </div>
      <p>
        {lang === "fr" ? (
          <>
            Un réseau de <strong>partenaires artisans</strong> poseurs qualifiés
          </>
        ) : (
          <>
            A network of qualified <strong>craftsman partners</strong> and
            installers
          </>
        )}
      </p>
    </div>
  );
}

export default LogoMiddleMainTrois;
