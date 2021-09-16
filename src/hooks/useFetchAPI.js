import { useEffect, useState } from 'react';

function useFetchAPI() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
        setLoading(false);
      });
  }, []);

  return [data, loading];
}

export default useFetchAPI;
