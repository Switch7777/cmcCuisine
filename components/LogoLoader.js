import Image from "next/image";
import styles from "../styles/LogoLoader.module.css";

export default function LogoLoader({ hidden = false }) {
  return (
    <div className={`${styles.loaderOverlay} ${hidden ? styles.hidden : ""}`}>
      <div className={styles.logoBox}>
        <Image
          src="/NavBarNew/logo1.png"
          alt="CMC"
          width={220}
          height={80}
          priority
        />
      </div>
    </div>
  );
}
