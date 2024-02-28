import { useEffect, useState } from "react";
import { fetchData, fetchMultipleData } from "../Services/apiServices";

export function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function fetchDataFromAPI() {
        try {
          setLoading(true);
          const response = await fetchData(endpoint);
          setData(response);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }

      fetchDataFromAPI();
    },
    [endpoint]
  );

  return { loading, data, error };
}

export function useMultipleFetch(url, getUrls) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchDataFromAPI() {
        try {
          setLoading(true);
          const response = await fetchData(url);
          const urls = getUrls(response);
          const multipleResponse = await fetchMultipleData(urls);
          setData(multipleResponse);
        } catch (error) {
          console.log("Error", error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }
      fetchDataFromAPI();
    },
    [url]
  );

  return { loading, data, error };
}
