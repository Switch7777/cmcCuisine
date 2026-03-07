import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/LoginPage.module.css";
import Navbar from "../components/NavBarNew";
import { useLang } from "../context/LangContext";

const LABELS = {
  fr: {
    title: "Réinitialisation",
    loading: "Validation de votre demande...",
    success: "Votre mot de passe a été réinitialisé ! Un nouvel email contenant votre mot de passe temporaire vient de vous être envoyé. Vous pouvez maintenant vous connecter.",
    error: "Le lien est invalide ou a expiré. Veuillez refaire une demande.",
    back: "Retour à la connexion",
    confirm: "Confirmer la réinitialisation",
  },
  en: {
    title: "Reset Password",
    loading: "Validating your request...",
    success: "Your password has been reset! A new email containing your temporary password has been sent to you. You can now log in.",
    error: "The link is invalid or has expired. Please make a new request.",
    back: "Back to Login",
    confirm: "Confirm Reset",
  },
};

export default function ResetPasswordPage() {
  const { lang } = useLang();
  const L = LABELS[lang] ?? LABELS.fr;
  const router = useRouter();
  const { token } = router.query;

  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState("");
  const isProcessing = useRef(false);

  const handleReset = async (tokenValue) => {
    if (!tokenValue || isProcessing.current) return;
    isProcessing.current = true;

    setStatus("loading");
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${API_BASE}/api/auth/reset-confirm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: tokenValue }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || L.error);
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
      isProcessing.current = false; // Permettre de réessayer si erreur (ex: réseau)
    }
  };

  useEffect(() => {
    if (token) {
      handleReset(token);
    }
  }, [token]);

  return (
    <>
      <Head>
        <title>{L.title} — CMC Cuisine</title>
      </Head>

      <Navbar transparent />

      <main className={styles.main}>
        <div className={styles.hero} aria-hidden="true">
          <Image
            src="/login/bureau.webp"
            alt=""
            layout="fill"
            className={styles.bg}
            priority
          />
          <div className={styles.overlay} />
        </div>

        <section className={styles.section}>
          <div className={styles.card}>
            <header className={styles.header}>
              <h1 className={styles.title}>{L.title}</h1>
            </header>

            <div className={styles.form}>
              {status === "loading" && (
                <p className={styles.subtitle} style={{ textAlign: 'center' }}>{L.loading}</p>
              )}

              {status === "success" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p className={styles.success} style={{ color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(74, 222, 128, 0.2)', textAlign: 'center', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {L.success}
                  </p>
                  <button
                    onClick={() => router.push("/login")}
                    className={styles.submit}
                  >
                    {L.back}
                  </button>
                </div>
              )}

              {status === "error" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p className={styles.error}>{errorMsg}</p>
                  <button
                    onClick={() => router.push("/admin/forgot-password")}
                    className={styles.submit}
                  >
                    {L.back}
                  </button>
                </div>
              )}

              {status === "idle" && !token && (
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <p className={styles.error}>{L.error}</p>
                    <button
                        onClick={() => router.push("/admin/forgot-password")}
                        className={styles.submit}
                    >
                        {L.back}
                    </button>
                 </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
