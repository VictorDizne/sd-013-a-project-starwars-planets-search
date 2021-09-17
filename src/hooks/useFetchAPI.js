import { useEffect, useState } from 'react';

function useFetchAPI() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        setLoading(false);
      });
  }, []);

  return [data];
}

export default useFetchAPI;
