import React from "react"

export default function Button(props) {
  return (
    <button
      onClick={props.handleClick ? props.handleClick : null}
      className={props.style}
    >
      {props.text || props.children}
    </button>
  )
}
