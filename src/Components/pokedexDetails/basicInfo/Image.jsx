import React from "react";
import styles from "../../../styles/pokedexDetails/basicInfo.module.css";

function Image(props) {
  const { name, img } = props;

  // console.log("name & img", name, img);
  return (
    <div className={styles.imageContainer}>
      <img src={img} alt={name} className={styles.image} />
    </div>
  );
}

export default Image;
