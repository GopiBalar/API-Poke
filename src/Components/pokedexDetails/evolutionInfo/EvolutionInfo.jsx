import React, { useEffect, useState } from "react";
import {
  fetchEvoulutionChain,
  fetchMultipleData,
} from "../../../Services/apiServices";
import { getAllSpecies } from "../../../utils/evolutionHelper";
import styles from "../../../styles/pokedexDetails/evolutionInfo.module.css";

function Bedge(props) {
  return (
    <div>
      <img src={props.src} alt={props.name} />
    </div>
  );
}

function EvolutionInfo(props) {
  const { id } = props;
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    async function fethchDataFromAPI() {
      const evolutionChain = await fetchEvoulutionChain(id);
      const names = getAllSpecies(evolutionChain);

      const urls = names.map((name) => {
        return `https://pokeapi.co/api/v2/pokemon/${name}`;
      });
      const data = await fetchMultipleData(urls);
      setEvolutions(data);
    }
    fethchDataFromAPI();
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        {evolutions.map((value) => (
          <Bedge src={value.sprites.other["official-artwork"].front_default} />
        ))}
        {evolutions.map((evolution, index) => (
          <Bedge
            key={index}
            src={evolution.sprites.other["official-artwork"].front_default}
          />
        ))}
      </div>
    </div>
  );
}

export default EvolutionInfo;
