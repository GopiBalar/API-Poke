import React from "react";
import Title from "./Title";
import Image from "./Image";
import Detaile from "./Detaile";
import styles from "../../../styles/pokedexDetails/basicInfo.module.css";

function BasicInfo(props) {
  const { data } = props;

  if (!data) return null;

  const {
    id,
    name,
    sprites: {
      other: {
        "official-artwork": { front_default },
      },
    },
    height,
    weight,
    abilities,
  } = data;

  // console.log("data", data);

  return (
    <div className={styles.basicContainer}>
      <Title id={id} name={name} />
      <div className={styles.basicContainerInner}>
        <Image name={name} img={front_default} />
        <Detaile height={height} weight={weight} abilities={abilities} />
      </div>
    </div>
  );
}

export default BasicInfo;
