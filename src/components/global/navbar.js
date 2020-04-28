import React from "react"
import { Link } from "gatsby"
import styles from "../styles/navbar.module.scss"
import Button from "./button"
import logo from "../../images/svg/logo.svg"

const NavLink = props => {
  return (
    <Link className={styles.link} to={props.to}>
      {props.text}
    </Link>
  )
}

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.linkwrapper}>
        <NavLink to="/" text="home" />
        <NavLink to="/order" text="bestel" />
        <NavLink to="/vacancies" text="vacature" />
        <NavLink to="/contact" text="contact" />
      </div>
      <Button style={styles.button} text="plaats bestelling" />
    </nav>
  )
}
