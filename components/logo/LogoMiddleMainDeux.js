import styles from "../../styles/Middlemain.module.css";
import { ShieldCheck } from "lucide-react";
import { useLang } from "../../context/LangContext";

function LogoMiddleMainDeux() {
  const { lang } = useLang();

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <ShieldCheck />
      </div>
      <p>
        {lang === "fr" ? (
          <>
            Des meubles de qualité <strong>allemande</strong>,{" "}
            <strong>italienne</strong> et <strong>française</strong>, garantis{" "}
            <strong>10 ans</strong>.
          </>
        ) : (
          <>
            <strong>High-quality German, Italian and French furniture</strong>,{" "}
            guaranteed for <strong>10 years</strong>.
          </>
        )}
      </p>
    </div>
  );
}

export default LogoMiddleMainDeux;
