import React from "react";
import styles from "../../../styles/home/slide.module.css";

function Slide(props) {
  return (
    <div className={styles.slideContainer}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default Slide;
