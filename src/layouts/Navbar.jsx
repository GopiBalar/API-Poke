import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav id="mainNav" className={styles.container}>
      <div>
        <h1>Pokemon</h1>
      </div>
      <ul className={styles.navlist}>
        <li>
          <NavLink to="/" state={{ name: "gops" }}>
            {(obj) => {
              return obj.isActive ? "Home Page" : "Home";
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to="/pokedex">
            {(obj) => {
              return obj.isActive ? "Pokedex Page" : "Pokedex";
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            {(obj) => {
              return obj.isActive ? "About Page" : "About";
            }}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            {(obj) => {
              return obj.isActive ? "Contact Page" : "Contact";
            }}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

/* <a href="/contact">Contact</a> */
/* <Link to={"/contact"}>Contact</Link> */

// className={({ isActive }) => {
//   return isActive ? styles.active : "";
// }}
export default Navbar;
