import React from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../styles/pokedex/pokemonList.module.css";

function PokemonList(props) {
  const { data } = props;

  function render() {
    if (Array.isArray(props.data)) {
      return (
        <>
          {data.map(function (pokemon) {
            return (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other["official-artwork"].front_default}
                tags={pokemon.types.map((type) => {
                  return type.type.name;
                })}
                id={pokemon.id}
              />
            );
          })}
        </>
      );
    }
    return (
      <PokemonCard
        name={data.name}
        image={data.sprites.other["official-artwork"].front_default}
        tags={data.types.map((ty) => {
          return ty.type.name;
        })}
        // id={data.id}
      />
    );
  }

  return <div className={styles.container}>{render()}</div>;
}

export default PokemonList;
