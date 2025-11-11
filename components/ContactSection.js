import { useState } from "react";
import Image from "next/image";
import { useLang } from "../context/LangContext";
import styles from "../styles/ContactSection.module.css";

export default function ContactSection() {
  const { lang } = useLang();
  const [state, setState] = useState({ loading: false, ok: null, msg: "" });

  const T = {
    fr: {
      kicker: "CONTACT",
      heroTitle: "Parlons de votre projet",
      heroSubtitle:
        "Cuisines, aménagements, rénovations : dites-nous ce dont vous avez besoin.",
      contactTitle: "Coordonnées",
      formTitle: "Demande de rendez-vous",
      name: "Nom *",
      phone: "Téléphone",
      email: "Email *",
      message: "Message *",
      namePh: "Votre nom",
      phonePh: "06 12 34 56 78",
      emailPh: "nom@exemple.com",
      messagePh: "Parlez-nous de votre projet…",
      button: "Demander un rendez-vous",
      success: "Message envoyé.",
      error: "Erreur d’envoi.",
      hours: "Horaires",
      mapNote: "Parking visiteurs disponible.",
      openInMaps: "Ouvrir dans Google Maps",
    },
    en: {
      kicker: "CONTACT",
      heroTitle: "Tell us about your project",
      heroSubtitle:
        "Kitchens, interiors, renovations – we’ll get back to you quickly.",
      contactTitle: "Contact details",
      formTitle: "Appointment request",
      name: "Name *",
      phone: "Phone",
      email: "Email *",
      message: "Message *",
      namePh: "Your name",
      phonePh: "+33...",
      emailPh: "name@example.com",
      messagePh: "Describe your project…",
      button: "Request a meeting",
      success: "Message sent.",
      error: "Sending failed.",
      hours: "Opening hours",
      mapNote: "Visitor parking available.",
      openInMaps: "Open in Google Maps",
    },
  }[lang];

  async function onSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = Object.fromEntries(form.entries());
    setState({ loading: true, ok: null, msg: "" });

    try {
      const API_BASE =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      setState({
        loading: false,
        ok: res.ok,
        msg: data?.message || (res.ok ? T.success : T.error),
      });

      if (res.ok) formEl.reset();
    } catch (err) {
      setState({ loading: false, ok: false, msg: "Erreur réseau." });
    }
  }

  return (
    <section id="contact" className={styles.section}>
      {/* ===== BANNIÈRE ===== */}
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>{T.heroTitle}</h1>
          <p className={styles.subtitle}>{T.heroSubtitle}</p>
        </div>
        <div className={styles.bgWrap}>
          <Image
            src="/banner/cuisine.jpg"
            alt="Bannière contact CMC Cuisine"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      {/* ===== CONTENU ===== */}
      <div className={styles.wrap}>
        {/* Infos */}
        <div className={styles.card}>
          <h2 className={styles.h2}>{T.contactTitle}</h2>
          <address className={styles.addr}>
            MARINA BURO, 1752 RN 7 Bât A
            <br />
            06270 Villeneuve-Loubet
          </address>
          <p className={styles.contactLines}>
            Tél : <a href="tel:+33493201918">04 93 20 19 18</a>
            <br />
            Mail :{" "}
            <a href="mailto:contact@cmc-cuisine.com">contact@cmc-cuisine.com</a>
          </p>
          <div className={styles.hours}>
            <h3>{T.hours}</h3>
            <ul>
              <li>Lun–Ven : 9h00–12h00 / 14h00–18h00</li>
            </ul>
          </div>
        </div>

        {/* Formulaire */}
        <form className={styles.card} onSubmit={onSubmit}>
          <h2 className={styles.h2}>{T.formTitle}</h2>

          <div className={styles.row2}>
            <div className={styles.field}>
              <label htmlFor="name">{T.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={T.namePh}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone">{T.phone}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder={T.phonePh}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">{T.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={T.emailPh}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">{T.message}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder={T.messagePh}
            />
          </div>

          <button
            type="submit"
            className={styles.button}
            disabled={state.loading}
          >
            {state.loading ? "…" : T.button}
          </button>

          {state.ok === true && <p className={styles.noteOk}>{state.msg}</p>}
          {state.ok === false && <p className={styles.noteErr}>{state.msg}</p>}
        </form>

        {/* Map */}
        <div className={styles.card}>
          <h2 className={styles.h2}>Google Maps</h2>
          <div className={styles.mapWrap}>
            <iframe
              title="CMC Cuisine - Villeneuve-Loubet"
              src="https://www.google.com/maps?q=MARINA%20BURO%201752%20RN%207%2006270%20Villeneuve-Loubet&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className={styles.mapNote}>
            {T.mapNote}{" "}
            <a href="https://goo.gl/maps" target="_blank" rel="noreferrer">
              {T.openInMaps}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
