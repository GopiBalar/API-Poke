import React from "react";
import styles from "../../../styles/pokedexDetails/basicInfo.module.css";

function Title(props) {
  const { name, id } = props;

  return (
    <div className={styles.titleContainer}>
      <h2>
        <span>{name}</span>
        <span>#{id}</span>
      </h2>
    </div>
  );
}

export default Title;
