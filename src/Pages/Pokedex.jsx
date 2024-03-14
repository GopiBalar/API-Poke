import React, { useState } from "react";
import { useMultipleFetch } from "../customHooks/useFetch";
import PaginationBtn from "../Components/pokedex/PaginationBtn";
import PokemonList from "../Components/pokedex/PokemonList";
import SerchBar from "../Components/pokedex/SerchBar";
// import { apis } from "../Services/apiServices";

function Pokedex() {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [serchedResult, setSerchedResult] = useState(null);

  const limit = 20;
  const offset = page * limit;

  const { loading, data, error } = useMultipleFetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`,
    (response) => {
      return response.results.map((value) => {
        return value.url;
      });
    }
  );

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
        setSerchedResult={setSerchedResult}
      />

      <PokemonList data={serchedResult & query ? serchedResult : data} />
      <PaginationBtn setPage={setPage} />
    </>
  );
}

export default Pokedex;
