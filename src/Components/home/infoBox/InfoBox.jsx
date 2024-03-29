import React, { useState } from "react";
import styles from "../../../styles/home/infoBox.module.css";

function InfoBox(props) {
  const [isContent, setIsContent] = useState(props.contantFirst);

  if (isContent) {
    return (
      <div className={styles.container}>
        <div className={`${styles.desContainer} ${styles.desContainerCF}`}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <button>Learn More</button>
        </div>
        <div className={`${styles.imgContainer} ${styles.imgContainerCF}`}>
          <img src={props.src} alt={props.alt} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={props.src} alt={props.alt} />
        </div>
        <div className={styles.desContainer}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <button>Learn More</button>
        </div>
      </div>
    );
  }
}

export default InfoBox;
