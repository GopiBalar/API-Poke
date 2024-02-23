import React from "react";
import styles from "../styles/layouts/footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        &copy;
        <span className={styles.span}> CopyRight</span>
        <p>Specify Sine copyright text to show at the bottom of the website.</p>
      </div>
      <ul className={styles.footlist}>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Footer;
