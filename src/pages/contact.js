import React from "react"
import Layout from "../components/global/layout"

import styles from "./styles/contact.module.scss"

export default function ContactPage() {
  return (
    <Layout>
      <h2 className={styles.title}>Ons team staat voor u klaar</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className={styles.form}
      >
        <p>
          <label>
            naam{" "}
            <input
              placeholder="naam"
              className={styles.input}
              type="text"
              name="name"
            />
          </label>
        </p>
        <p>
          <label>
            email
            <input
              placeholder="email"
              className={styles.input}
              type="email"
              name="email"
            />
          </label>
        </p>
        <p className={styles.message}>
          <label for="message">bericht</label>
          <textarea className={styles.textarea} name="message"></textarea>
        </p>
        <p>
          <button className={styles.button} type="submit">
            Send
          </button>
        </p>
      </form>
    </Layout>
  )
}
