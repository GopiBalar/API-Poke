import React, { useState } from "react";
import { useFetch } from "../customHooks/useFetch";
import NextPrev from "../Components/pokedexDetails/NextPrev";
import { useParams } from "react-router-dom";
import BasicInfo from "../Components/pokedexDetails/basicInfo/BasicInfo";
import MoreInfo from "../Components/pokedexDetails/moreInfo/MoreInfo";
import EvolutionInfo from "../Components/pokedexDetails/evolutionInfo/EvolutionInfo";

function PokemonDetails() {
  const { id } = useParams();

  const [name, setName] = useState(id);

  const { loading, data, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading ...</h1>;
  }

  if (error || (!loading && !data)) return <h1>Something Went Wrong ...</h1>;

  const { id: number } = data;

  return (
    <div>
      <NextPrev number={number} setName={setName} />
      <BasicInfo data={data} />
      <MoreInfo stats={data.stats} types={data.types} />
      <EvolutionInfo />
    </div>
  );
}

export default PokemonDetails;
