import React from "react";
import styles from "../../styles/layouts/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div style={{ width: "100px", height: "70px" }}>
        <img
          src="https://i.pinimg.com/736x/9e/39/23/9e3923825ba4a4fa967858f980b8460f.jpg"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
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
