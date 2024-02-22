// function getAllSpecies(chain) {
//     for (const c in chain) {
//       if (
//         c === "evolves_to" &&
//         Array.isArray(chain[c]) &&
//         chain[c].length > 0
//       ) {
//         getAllSpecies(chain[c][0]);
//       } else {
//         if (c === "species") {
//           temp.push(chain[c]);
//           return;
//         }
//       }
//     }
//   }
//   getAllSpecies(data.chain);

//   const names = temp.reverse().map((value) => {
//     return value.name;
//   });
export function getAllSpecies(chain) {
  function getAllNames(chain) {
    if (chain.evolves_to.length === 0) {
      return chain.species.name;
    } else {
      return getAllNames(chain.evolves_to[0]) + "," + chain.species.name;
    }
  }
  const names = getAllNames(chain).split(",").reverse();

  return names;
}
