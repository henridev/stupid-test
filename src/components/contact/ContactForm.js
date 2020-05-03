import React from "react"

export default function ContactForm({ styles }) {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={styles.form}
    >
      <h3>Verzend uw bericht</h3>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label className={styles.label} htmlFor="naam">
          naam
        </label>
        <input
          placeholder="naam"
          className={styles.input}
          type="text"
          name="name"
        />
      </p>
      <p>
        <label className={styles.label} htmlFor="email">
          email
        </label>
        <input
          placeholder="email"
          className={styles.input}
          type="email"
          name="email"
        />
      </p>
      <p className={styles.message}>
        <label className={styles.label} htmlFor="message">
          bericht
        </label>
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="bericht"
        ></textarea>
      </p>
      <p>
        <button className={styles.button} type="submit">
          VERZENDEN
        </button>
      </p>
    </form>
  )
}
