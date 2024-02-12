import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonList(props) {
  const imgContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(300px,2fr))",
    gridGap: "16px",
    justifyContent: "center",
    padding: "1rem",
    width: "100%",
  };

  return (
    <>
      <div style={imgContainer}>
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
      </div>
    </>
  );
}

export default PokemonList;
