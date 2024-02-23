import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Pokemon</h1>
      </div>
      <ul className={styles.navlist}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? styles.active : "";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pokemon"
            className={({ isActive }) => {
              return isActive ? styles.active : "";
            }}
          >
            Pokemon
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return isActive ? styles.active : "";
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return isActive ? styles.active : "";
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

/* <a href="/contact">Contact</a> */
/* <Link to={"/contact"}>Contact</Link> */

export default Navbar;
