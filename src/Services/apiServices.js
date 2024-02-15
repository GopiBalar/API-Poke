export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchMultipleData(urls) {
  const promises = urls.map(async (url) => {
    return await fetchData(url);
  });
  const data = await Promise.all(promises);
  return data;
}
