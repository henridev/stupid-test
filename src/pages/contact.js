import React from "react"
import Layout from "../components/global/layout"

import styles from "./styles/contact.module.scss"
import ContactForm from "../components/contact/ContactForm"
import Banner from "../components/contact/Banner"
import InfoSection from "../components/contact/InfoSection"

export default function ContactPage() {
  const width = 700
  const height = 400
  return (
    <Layout>
      <Banner styles={styles} />
      <div className={styles.middle}>
        <InfoSection styles={styles} />
        <ContactForm styles={styles} />
      </div>
      <img
        className={styles.mapimg}
        width="500"
        height="300"
        src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-marker+ff0000(3.733121,51.066234)/3.733121,51.066234,15,0/${width}x${height}@2x?access_token=pk.eyJ1IjoiYmVsa2UwNSIsImEiOiJjazBzNDFnY2owYzQ0M21xbGxwZnNqZW91In0.uiusgRl10zeCVqvUH6PtMg`}
        alt="Mapbox Map of 3.733121,51.066234"
      />
    </Layout>
  )
}
