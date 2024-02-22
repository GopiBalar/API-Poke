import React, { useCallback, useState } from "react";
import { useMultipleFetch } from "../customHooks/useFetch";
import PaginationBtn from "../Components/pokedex/PaginationBtn";
import PokemonList from "../Components/pokedex/PokemonList";
import SerchBar from "../Components/pokedex/SerchBar";
import { apis } from "../Services/apiServices";

function Pokedex() {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [serchedData, setSerchedData] = useState(null);

  const limit = 20;
  const offset = page * limit;

  const getData = useCallback((data) => {
    return data.results.map((result) => {
      return result.url;
    });
  }, []);

  const { loading, data, error } = useMultipleFetch(
    apis.getPokemonList(offset, limit),
    getData
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
        setSerchedData={setSerchedData}
      />
      <h1 style={{ textAlign: "center" }}>Pokemons</h1>

      <PaginationBtn setPage={setPage} />
      <PokemonList data={data} serchedData={serchedData} />
    </>
  );
}

export default Pokedex;
