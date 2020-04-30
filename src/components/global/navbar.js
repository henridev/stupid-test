import React from "react"
import { Link } from "gatsby"
import styles from "../styles/navbar.module.scss"
import Button from "./button"

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
      <img
        src={"/assets/images/svg/logo.svg"}
        alt="logo"
        className={styles.logo}
      />
      <div className={styles.linkwrapper}>
        <NavLink to="/" text="home" />
        <NavLink to="/vacancies" text="vacature" />
        <NavLink to="/contact" text="contact" />
        {/* <NavLink to="/order" text="bestel" /> */}
      </div>
      {/* <Link to="/order">
        <Button style={styles.button} text="plaats bestelling" />
      </Link> */}
    </nav>
  )
}
