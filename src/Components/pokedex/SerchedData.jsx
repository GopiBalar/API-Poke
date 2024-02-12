import React from "react";
import PokemonCard from "./PokemonCard";

function SerchedData(props) {
  const { pkm } = props;
  const imgContainer = {
    display: "flex",
    gridTemplateColumns: "repeat(auto-fill,minmax(300px,2fr))",
    gridGap: "16px",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    width: "100%",
  };
  return (
    <div style={imgContainer}>
      <PokemonCard
        key={pkm.id}
        name={pkm.name}
        image={pkm.sprites.other["official-artwork"].front_default}
        tags={pkm.types.map((type) => {
          return type.type.name;
        })}
        id={pkm.id}
      />
    </div>
  );
}

export default SerchedData;
