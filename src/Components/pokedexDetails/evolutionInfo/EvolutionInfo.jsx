import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../../../Services/apiServices";

function Bedge(props) {
  return (
    <div>
      <img src={props.src} alt={props.name} />
    </div>
  );
}

function EvolutionInfo() {
  const temp = [];
  const [evolutions, setEvolutions] = useState([]);

  useEffect(() => {
    async function fethchAll() {
      const data = {
        baby_trigger_item: null,
        chain: {
          evolution_details: [],
          evolves_to: [
            {
              evolution_details: [],
              evolves_to: [
                {
                  evolution_details: [],
                  evolves_to: [],
                  is_baby: false,
                  species: {
                    name: "venusaur",
                    url: "https://pokeapi.co/api/v2/pokemon-species/3/",
                  },
                },
              ],
              is_baby: false,
              species: {
                name: "ivysaur",
                url: "https://pokeapi.co/api/v2/pokemon-species/2/",
              },
            },
          ],
          is_baby: false,
          species: {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon-species/1/",
          },
        },
        id: 1,
      };

      

      const evs = names.map(async (name) => {
        return await getPokemonDetails(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
      });
      setEvolutions(await Promise.all(evs));
    }
    fethchAll();
  }, []);

  // console.log("evolutions", evolutions);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "64px 0",
      }}
    >
      <div style={{ display: "flex", gap: "18px" }}>
        {evolutions.map((value) => (
          <Bedge src={value.sprites.other["official-artwork"].front_default} />
        ))}
      </div>
    </div>
  );
}

export default EvolutionInfo;
