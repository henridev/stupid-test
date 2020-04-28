import React from "react"
import { Link } from "gatsby"

export default function Vacancy({ title, content, to }) {
  return (
    <article>
      <h2>{title}</h2>
      <div>{content}</div>
      <Link to={to}>full page</Link>
    </article>
  )
}
