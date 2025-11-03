import styles from "../../styles/MiddleMain.module.css";
import { UserCheck } from "lucide-react";
import { useLang } from "../../context/LangContext";

function LogoMiddleMainUn() {
  const { lang } = useLang();

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <UserCheck />
      </div>
      <p>
        {lang === "fr" ? (
          <>
            Des <strong>concepteurs formés</strong> pour vous accompagner
          </>
        ) : (
          <>
            <strong>Trained designers</strong> to guide and support you
          </>
        )}
      </p>
    </div>
  );
}

export default LogoMiddleMainUn;
