import { useEffect, useState } from 'react';

function useFetchAPI() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
      });
  }, []);

  return [data];
}

export default useFetchAPI;
