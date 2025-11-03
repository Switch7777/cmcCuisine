import { useState } from "react";
import styles from "../styles/ContactSection.module.css";

export default function ContactSection() {
  const [state, setState] = useState({ loading: false, ok: null, msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    setState({ loading: true, ok: null, msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setState({
        loading: false,
        ok: res.ok,
        msg: data?.message || (res.ok ? "Message envoyé." : "Erreur d’envoi."),
      });
      if (res.ok) e.currentTarget.reset();
    } catch (err) {
      setState({ loading: false, ok: false, msg: "Erreur réseau." });
    }
  }

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.headerRow}>
        <div className={styles.kicker}>CONTACT</div>

        <p className={styles.lead}>
          Parlez-nous de votre projet, nous revenons vers vous sous 24–48h
          ouvrées.
        </p>
      </div>

      <div className={styles.grid}>
        {/* Infos */}
        <div className={styles.infoCard}>
          <h2 className={styles.h2}>Coordonnées</h2>
          <address className={styles.addr}>
            MARINA BURO, 1752 RN 7 Bât A<br />
            06270 Villeneuve-Loubet
          </address>
          <p className={styles.contactLines}>
            Tél : <a href="tel:+33493201918">04 93 20 19 18</a>
            <br />
            Mail :{" "}
            <a href="mailto:contact@cmc-cuisine.com">contact@cmc-cuisine.com</a>
          </p>

          <div className={styles.hours}>
            <h3>Horaires</h3>
            <ul>
              <li>Lun–Ven : 9h00–12h00 / 14h00–18h00</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={onSubmit}>
          <h2 className={styles.h2}>Demande de rendez-vous</h2>

          <div className={styles.row2}>
            <div className={styles.field}>
              <label htmlFor="name">Nom *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Votre nom"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">Téléphone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="nom@exemple.com"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Parlez-nous de votre projet…"
            />
          </div>

          <button
            type="submit"
            className={styles.button}
            disabled={state.loading}
            aria-busy={state.loading ? "true" : "false"}
          >
            {state.loading ? "Envoi…" : "Prendre rendez-vous"}
          </button>

          {state.ok === true && <p className={styles.noteOk}>{state.msg}</p>}
          {state.ok === false && <p className={styles.noteErr}>{state.msg}</p>}
        </form>

        {/* Map */}
        <div className={styles.mapCard} aria-label="Carte d'accès">
          <div className={styles.mapWrap}>
            <iframe
              title="CMC Cuisine - Villeneuve-Loubet"
              src="https://www.google.com/maps?q=MARINA%20BURO%201752%20RN%207%2006270%20Villeneuve-Loubet&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className={styles.mapNote}>
            Parking visiteurs disponible.{" "}
            <a href="https://goo.gl/maps" target="_blank" rel="noreferrer">
              Ouvrir dans Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
