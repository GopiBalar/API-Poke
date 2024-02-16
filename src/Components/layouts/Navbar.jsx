import React from "react";
import styles from "../../styles/layouts/navbar.module.css";

function Navbar() {
  console.log("styles", styles);
  return (
    <div className={styles.container}>
      <div>
        <h1>Pokemon</h1>
      </div>
      <ul className={styles.navlist}>
        <li>Home</li>
        <li>Pokemon</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
