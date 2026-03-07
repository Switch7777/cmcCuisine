import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/LoginPage.module.css";
import Navbar from "../../components/NavBarNew";
import { useLang } from "../../context/LangContext";

const LABELS = {
  fr: {
    title: "Mot de passe oublié",
    subtitle: "Entrez votre email pour recevoir un lien de réinitialisation.",
    email: "Email",
    emailPlaceholder: "votre@email.com",
    submit: "Envoyer le lien",
    back: "Retour à la connexion",
    success: "Si cet email existe, un lien de confirmation vous a été envoyé. Veuillez vérifier votre boîte mail.",
    error: "Une erreur est survenue. Veuillez réessayer.",
  },
  en: {
    title: "Forgot Password",
    subtitle: "Enter your email to receive a reset link.",
    email: "Email",
    emailPlaceholder: "your@email.com",
    submit: "Send Link",
    back: "Back to Login",
    success: "If this email exists, a confirmation link has been sent. Please check your inbox.",
    error: "An error occurred. Please try again.",
  },
};

export default function ForgotPasswordPage() {
  const { lang } = useLang();
  const L = LABELS[lang] ?? LABELS.fr;
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${API_BASE}/api/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error(L.error);
      }

      setMessage(L.success);
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
              <p className={styles.subtitle}>{L.subtitle}</p>
            </header>

            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="email">
                  {L.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className={styles.input}
                  placeholder={L.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {error ? <p className={styles.error}>{error}</p> : null}
              {message ? <p className={styles.success} style={{ color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(74, 222, 128, 0.2)', textAlign: 'center', fontSize: '0.875rem' }}>{message}</p> : null}

              <button
                type="submit"
                className={styles.submit}
                disabled={loading}
              >
                {loading ? "..." : L.submit}
              </button>

              <button
                type="button"
                className={styles.forgotLink}
                style={{ alignSelf: 'center', marginTop: '0' }}
                onClick={() => router.push("/login")}
              >
                {L.back}
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
