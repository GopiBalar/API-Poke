import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        try {
          setLoading(true);
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.log(error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    },
    [url]
  );

  return [loading, data, error];
}

export default useFetch;
