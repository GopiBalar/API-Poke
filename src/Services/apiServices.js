export async function getPokemons(pageNumber) {
  const limit = 20;
  const offset = pageNumber * limit;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();

  return console.log(data);
}

export async function getPokemonDetails(url) {
  const response = await fetch(url);
  const data = await response.json();

  return console.log(data);
}
