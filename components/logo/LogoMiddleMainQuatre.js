import styles from "../../styles/Middlemain.module.css";
import { Wallet } from "lucide-react";
import { useLang } from "../../context/LangContext";

function LogoMiddleMainQuatre() {
  const { lang } = useLang();

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Wallet />
      </div>
      <p>
        {lang === "fr" ? (
          <>
            Des <strong>solutions de financement</strong> adaptées à vos besoins
          </>
        ) : (
          <>
            <strong>Financing solutions</strong> tailored to your needs
          </>
        )}
      </p>
    </div>
  );
}

export default LogoMiddleMainQuatre;
