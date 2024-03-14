import React from "react";
import DetailsTable from "./DetailsTable";
import styles from "../../../styles/pokedexDetails/basicInfo.module.css";

function Detaile(props) {
  const { height, weight, abilities } = props;
  return (
    <div className={styles.detaileContainer}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum
        dolores incidunt laboriosam nobis aliquam, blanditiis sed at harum
        labore atque fuga magnam ea cupiditate accusantium odit quibusdam,
        quaerat veniam.
      </p>
      <DetailsTable height={height} weight={weight} abilities={abilities} />
    </div>
  );
}

export default Detaile;
