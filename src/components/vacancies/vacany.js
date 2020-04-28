import React from "react"

export default function Vacancy({ title, content }) {
  return (
    <article>
      <h2>{title}</h2>
      <div>{content}</div>
    </article>
  )
}
