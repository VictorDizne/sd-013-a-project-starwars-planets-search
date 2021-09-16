import { useEffect, useState } from 'react';

const useFetch = (URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const { results } = await fetch(URL).then((response) => response.json());
      setData(results);
    };
    fetchAPI();
  }, [URL]);

  return { data };
};

export default useFetch;
