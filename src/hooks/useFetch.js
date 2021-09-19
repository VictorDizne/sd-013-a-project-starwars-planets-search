import { useEffect, useState } from 'react';

const FETCH_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const { results } = await fetch(FETCH_URL).then((response) => response.json());
      setData(results);
    };
    fetchAPI();
  }, []);

  return { data };
};

export default useFetch;
