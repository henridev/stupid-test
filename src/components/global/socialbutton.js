import React from "react"

export default function socialbutton({ socialnetwork }) {
  let url = null
  let style = null

  switch (socialnetwork) {
    case "facebook":
      style = styles.facebookbutton
      url =
        "https://www.facebook.com/DelhaizeDokNoord/?ref=br_tf&epa=SEARCH_BOX"
      break

    default:
      break
  }

  return (
    <a className={style} href={url} target="_blank" rel="noopener noreferrer">
      <button></button>
    </a>
  )
}
