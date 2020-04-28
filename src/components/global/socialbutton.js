import React from "react"
import styles from "../styles/socialbutton.module.scss"

export default function socialbutton({ socialnetwork }) {
  let url = null
  let style = styles.facebookbutton
  let imgurl = "/png/facebook.png"

  switch (socialnetwork) {
    case "facebook":
      style = styles.facebookbutton
      url =
        "https://www.facebook.com/DelhaizeDokNoord/?ref=br_tf&epa=SEARCH_BOX"
      break

    default:
      style = styles.facebookbutton
      url =
        "https://www.facebook.com/DelhaizeDokNoord/?ref=br_tf&epa=SEARCH_BOX"
      break
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `Url(${imgurl})`,
        }}
        className={style}
      ></button>
    </a>
  )
}
