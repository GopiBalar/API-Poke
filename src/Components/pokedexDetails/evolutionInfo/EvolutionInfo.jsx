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

      function getAllSpecies(chain) {
        for (const c in chain) {
          if (
            c === "evolves_to" &&
            Array.isArray(chain[c]) &&
            chain[c].length > 0
          ) {
            getAllSpecies(chain[c][0]);
          } else {
            if (c === "species") {
              temp.push(chain[c]);
              return;
            }
          }
        }
      }
      getAllSpecies(data.chain);

      const names = temp.reverse().map((value) => {
        return value.name;
      });

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
