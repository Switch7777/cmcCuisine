import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/LoginPage.module.css";
import Navbar from "../components/NavBarNew";
import FooterSection from "../components/FooterSection";
import { useLang } from "../context/LangContext";

const LABELS = {
  fr: {
    title: "Connexion",
    subtitle: "Accédez à votre espace professionnel.",
    identifier: "Identifiant",
    password: "Mot de passe",
    remember: "Se souvenir de moi",
    forgot: "Mot de passe oublié ?",
    login: "Se connecter",
    identifierPlaceholder: "Votre identifiant",
    passwordPlaceholder: "Votre mot de passe",
    show: "Afficher",
    hide: "Masquer",
    error: "Identifiants incorrects.",
  },
  en: {
    title: "Login",
    subtitle: "Access your professional space.",
    identifier: "Username",
    password: "Password",
    remember: "Remember me",
    forgot: "Forgot password?",
    login: "Sign in",
    identifierPlaceholder: "Your username",
    passwordPlaceholder: "Your password",
    show: "Show",
    hide: "Hide",
    error: "Invalid credentials.",
  },
};

export default function LoginPage() {
  const { lang } = useLang();
  const L = LABELS[lang] ?? LABELS.fr;
  const router = useRouter();

  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({
    identifier: "",
    password: "",
    remember: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const API_BASE =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || L.error);
      }

      // on stocke le token pour les futurs appels protégés
      if (typeof window !== "undefined") {
        localStorage.setItem("cmc_token", data.token);
        localStorage.setItem(
          "cmc_user",
          JSON.stringify({
            id: data.user.id,
            identifier: data.user.identifier,
          })
        );
      }

      router.push("/admin");
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
              {/* Identifiant */}
              <label className={styles.label} htmlFor="identifier">
                {L.identifier}
              </label>
              <input
                id="identifier"
                type="text"
                required
                className={styles.input}
                placeholder={L.identifierPlaceholder}
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                autoComplete="username"
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

              {/* message d'erreur */}
              {error ? <p className={styles.error}>{error}</p> : null}

              {/* Option "remember" + mot de passe oublié (si tu la veux encore) */}
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
              <button
                type="submit"
                className={styles.submit}
                disabled={loading}
              >
                {loading ? "..." : L.login}
              </button>
            </form>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
