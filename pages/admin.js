// pages/admin.js
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/AdminPage.module.css";

export default function AdminPage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [images, setImages] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
  });

  // pour pouvoir clear le timeout sur unmount
  const reloadTimeout = useRef(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL;

  // récupérer le token
  useEffect(() => {
    if (typeof window !== "undefined") {
      const t = localStorage.getItem("cmc_token");
      if (!t) {
        router.push("/login");
      } else {
        setToken(t);
      }
    }
    // clean timeout au démontage
    return () => {
      if (reloadTimeout.current) clearTimeout(reloadTimeout.current);
    };
  }, [router]);

  const fetchImages = async () => {
    try {
      setLoadingList(true);
      const res = await fetch(`${API_BASE}/api/realisations`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setImages(data);
      }
    } catch (err) {
      console.warn("Erreur de chargement:", err);
    } finally {
      setLoadingList(false);
    }
  };

  // charger au montage
  useEffect(() => {
    fetchImages();
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cmc_token");
      localStorage.removeItem("cmc_user");
    }
    router.push("/");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!token) {
      setError("Vous devez être connecté.");
      return;
    }
    if (!form.image) {
      setError("Veuillez choisir une image.");
      return;
    }

    const body = new FormData();
    body.append("image", form.image);
    body.append("title", form.title);
    body.append("description", form.description);

    try {
      setUploading(true);
      const res = await fetch(`${API_BASE}/api/realisations`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || "Échec de l’envoi");
      }

      setSuccess("Photo ajoutée ✅ (rafraîchissement dans 5s)");
      setForm({ title: "", description: "", image: null });

      // on recharge tout de suite
      fetchImages();
      // et on relance un reload 5s après (Cloudinary peut mettre 1–2s)
      reloadTimeout.current = setTimeout(() => {
        fetchImages();
      }, 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const onDelete = async (public_id) => {
    if (!token) {
      setError("Vous devez être connecté.");
      return;
    }
    const ok = confirm("Supprimer cette réalisation ?");
    if (!ok) return;

    try {
      const res = await fetch(
        `${API_BASE}/api/realisations/${encodeURIComponent(public_id)}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || "Suppression impossible");
      }
      // on retire côté front
      setImages((imgs) => imgs.filter((img) => img.public_id !== public_id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Admin — CMC Cuisine</title>
      </Head>
      <div className={styles.page}>
        <header className={styles.topbar}>
          <h1 className={styles.logo}>
            CMC Cuisine — Gestion de la banque de photo
          </h1>
          <div className={styles.topActions}>
            <button onClick={fetchImages} className={styles.secondaryBtn}>
              Rafraîchir
            </button>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Se déconnecter
            </button>
          </div>
        </header>

        <main className={styles.main}>
          {/* Bloc upload */}
          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>Ajouter une réalisation</h2>
            {error ? <p className={styles.error}>{error}</p> : null}
            {success ? <p className={styles.success}>{success}</p> : null}
            <form className={styles.form} onSubmit={onSubmit}>
              <label className={styles.label}>
                Titre (optionnel)
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, title: e.target.value }))
                  }
                  className={styles.input}
                  placeholder="Titre du projet"
                />
              </label>

              <label className={styles.label}>
                Description (optionnel)
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, description: e.target.value }))
                  }
                  className={styles.textarea}
                  placeholder="Emplacement du projet, type du projet,...."
                />
              </label>

              <label className={styles.label}>
                Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setForm((f) => ({ ...f, image: e.target.files[0] }))
                  }
                  className={styles.file}
                />
              </label>

              <button
                type="submit"
                className={styles.primaryBtn}
                disabled={uploading}
              >
                {uploading ? "Envoi en cours..." : "Ajouter la photo"}
              </button>
            </form>
          </section>

          {/* Bloc liste */}
          <section className={styles.panel}>
            <div className={styles.panelHeader}>
              <h2 className={styles.panelTitle}>Réalisations en ligne</h2>
              {loadingList ? (
                <span className={styles.badge}>Chargement…</span>
              ) : null}
            </div>

            {loadingList ? (
              <p className={styles.muted}>Chargement des photos…</p>
            ) : images.length === 0 ? (
              <p className={styles.muted}>
                Aucune photo trouvée. Ajoutez-en une.
              </p>
            ) : (
              <div className={styles.grid}>
                {images.map((img) => (
                  <article key={img.public_id} className={styles.card}>
                    <div className={styles.thumb}>
                      <img
                        src={img.url}
                        alt={img.context?.alt || img.public_id}
                        className={styles.img}
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <p className={styles.cardTitle}>
                        {img.context?.alt || "Réalisation"}
                      </p>
                      <button
                        onClick={() => onDelete(img.public_id)}
                        className={styles.deleteBtn}
                      >
                        Supprimer
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
