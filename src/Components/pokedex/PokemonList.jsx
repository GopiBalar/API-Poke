import React from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/pokedex/pokemonList.module.css";

function PokemonList(props) {
  return (
    <div className={styles.container}>
      {props.serchedData ? (
        <PokemonCard
          key={props.serchedData.id}
          name={props.serchedData.name}
          image={
            props.serchedData.sprites.other["official-artwork"].front_default
          }
          tags={props.serchedData.types.map((type) => {
            return type.type.name;
          })}
          id={props.serchedData.id}
        />
      ) : (
        <>
          {props.data.map(function (pkm) {
            return (
              <PokemonCard
                name={pkm.name}
                image={pkm.sprites.other["official-artwork"].front_default}
                tags={pkm.types.map((ty) => {
                  return ty.type.name;
                })}
                id={pkm.id}
              />
            );
          })}
        </>
      )}
      ;
    </div>
  );
}

export default PokemonList;
