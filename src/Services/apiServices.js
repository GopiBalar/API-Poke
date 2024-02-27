import emailjs from "@emailjs/browser";

export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchMultipleData(urls) {
  const promises = urls.map(async (url) => await fetchData(url));
  const data = await Promise.all(promises);
  return data;
}

export async function fetchEvoulutionChain(id) {
  const species = await fetchData(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );
  const evolutionChain = await fetchData(species.evolution_chain.url);
  return evolutionChain.chain;
}

export async function sendEmail(form) {
  // console.log(process.env);
  const response = await emailjs.sendForm(
    process.env.REACT_APP_EMJS_SERVICE_ID,
    process.env.REACT_APP_EMJS_TEMPLATE_ID,
    form,
    {
      publicKey: process.env.REACT_APP_EMJS_PUBLIC_KEY,
    }
  );
  return response;
}
