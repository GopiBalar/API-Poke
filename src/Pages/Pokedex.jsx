import React, { useState } from "react";
import { useMultipleFetch } from "../customHooks/useFetch";
// import { Pagination } from "react-bootstrap";
import PaginationBtn from "../Components/pokedex/PaginationBtn";
import PokemonList from "../Components/pokedex/PokemonList";
import SerchBar from "../Components/pokedex/SerchBar";
import SerchedData from "../Components/pokedex/SerchedData";

function Pokedex() {
  const [page, setPage] = useState(0);
  const limit = 20;
  const offset = page * limit;
  const { loading, data, error } = useMultipleFetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  );

  // console.log("data", data);

  const [query, setQuery] = useState();
  const [serchedData, setSerchedData] = useState(null);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading ...</h1>;
  }

  if ((!loading && error) || (!loading && !data))
    return <h1>Something Went Wrong ...</h1>;

  return (
    <>
      <SerchBar
        query={query}
        setQuery={setQuery}
        setSerchedData={setSerchedData}
      />
      <h1 style={{ textAlign: "center" }}>Pokemons</h1>
      
      <PaginationBtn setPage={setPage} />
      {serchedData && query ? (
        <SerchedData pkm={serchedData} />
      ) : (
        <PokemonList data={data} />
      )}
    </>
  );
}

export default Pokedex;
