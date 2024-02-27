export function getAllSpecies(chain) {
  function getAllNames(chain) {
    if (chain.evolves_to.length === 0) {
      return chain.species.name;
    } else {
      return getAllNames(chain.evolves_to[0]) + "," + chain.species.name;
    }
  }
  return getAllNames(chain).split(",").reverse();

}
