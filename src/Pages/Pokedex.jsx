import React, { useEffect, useState } from "react";
import { getPokemonDetails, getPokemons } from "../Services/apiServices";
import PokemonCard from "../Components/PokemonCard";

function Pokedex() {
  const gridStyls = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(200px,10fr))",
    gridGap: "20px",
    justifyContent: "center",
    padding: "20px",
    width: "100%",
  };

  const [pokemons, setPokemons] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  async function fetchData() {
    const temp = [];
    setLoading(true);
    try {
      const data = await getPokemons(page);
      for (const p of data.results) {
        const pokemon = await getPokemonDetails(p.url);
        temp.push(pokemon);
      }
      setPokemons(temp);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(
    function () {
      fetchData();
    },
    [page]
  );

  console.log(pokemons);

  function next() {
    setPage((page) => {
      return ++page;
    });
  }

  function preview() {
    setPage((page) => {
      return --page;
    });
  }

  console.log("page", page);
  if (loading) return <h1>Loading ...</h1>;
  if ((!loading && error) || (!loading && !pokemons))
    return <h1>Something Went Wrong ...</h1>;

  const btnStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "12px",
    backgroundColor: "#00001a",
    padding: "2rem",
  };

  const style = {
    padding: "10px",
  };
  return (
    <>
      <div style={gridStyls}>
        {pokemons.map(function (pkm) {
          return (
            <PokemonCard
              name={pkm.name}
              image={pkm.sprites.other["official-artwork"].front_default}
              idx={pkm.id}
              tags={pkm.types.map((type) => {
                return type.type.name;
              })}
            />
          );
        })}
      </div>
      <div style={btnStyle}>
        <button onClick={next} style={style}>
          Next
        </button>
        <button onClick={preview} style={style}>
          Preview
        </button>
      </div>
    </>
  );
}

export default Pokedex;
