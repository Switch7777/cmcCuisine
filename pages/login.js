import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/LoginPage.module.css";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import { useLang } from "../context/LangContext";

const LABELS = {
  fr: {
    title: "Connexion",
    subtitle: "Accédez à votre espace professionnel.",
    email: "Adresse e-mail",
    password: "Mot de passe",
    remember: "Se souvenir de moi",
    forgot: "Mot de passe oublié ?",
    login: "Se connecter",
    emailPlaceholder: "vous@exemple.com",
    passwordPlaceholder: "Votre mot de passe",
    show: "Afficher",
    hide: "Masquer",
  },
  en: {
    title: "Login",
    subtitle: "Access your professional space.",
    email: "Email address",
    password: "Password",
    remember: "Remember me",
    forgot: "Forgot password?",
    login: "Sign in",
    emailPlaceholder: "you@example.com",
    passwordPlaceholder: "Your password",
    show: "Show",
    hide: "Hide",
  },
};

export default function LoginPage() {
  const { lang } = useLang();
  const L = LABELS[lang] ?? LABELS.fr;

  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", remember: true });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("login ->", form);
    // TODO: branchement de ton appel API (POST /api/auth/login)
  };

  return (
    <>
      <Head>
        <title>{L.title} — CMC Cuisine</title>
        <meta
          name="description"
          content="Connectez-vous à votre espace professionnel CMC Cuisine."
        />
      </Head>

      <Navbar transparent />

      <main className={styles.main}>
        {/* IMAGE DE FOND */}
        <div className={styles.hero} aria-hidden="true">
          <Image
            src="/atelier.jpg"
            alt=""
            layout="fill"
            className={styles.bg}
            priority
          />
          <div className={styles.overlay} />
        </div>

        {/* FORMULAIRE DE CONNEXION */}
        <section className={styles.section}>
          <div className={styles.card}>
            <h1 className={styles.title}>{L.title}</h1>
            <p className={styles.subtitle}>{L.subtitle}</p>

            <form className={styles.form} onSubmit={onSubmit}>
              {/* Email */}
              <label className={styles.label} htmlFor="email">
                {L.email}
              </label>
              <input
                id="email"
                type="email"
                required
                className={styles.input}
                placeholder={L.emailPlaceholder}
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                autoComplete="email"
              />

              {/* Mot de passe */}
              <label className={styles.label} htmlFor="password">
                {L.password}
              </label>
              <div className={styles.pwdWrap}>
                <input
                  id="password"
                  type={showPwd ? "text" : "password"}
                  required
                  className={styles.input}
                  placeholder={L.passwordPlaceholder}
                  value={form.password}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, password: e.target.value }))
                  }
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.pwdToggle}
                  onClick={() => setShowPwd((s) => !s)}
                  aria-label={showPwd ? L.hide : L.show}
                >
                  {showPwd ? L.hide : L.show}
                </button>
              </div>

              {/* Options */}
              <div className={styles.row}>
                <label className={styles.check}>
                  <input
                    type="checkbox"
                    checked={form.remember}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, remember: e.target.checked }))
                    }
                  />
                  <span>{L.remember}</span>
                </label>

                <Link href="/reset-password" legacyBehavior>
                  <a className={styles.link}>{L.forgot}</a>
                </Link>
              </div>

              {/* Bouton de connexion */}
              <button type="submit" className={styles.submit}>
                {L.login}
              </button>
            </form>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
