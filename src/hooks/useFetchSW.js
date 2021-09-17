import { useEffect, useState } from 'react';

function useFetchSW() {
  const [planets, setPlanets] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((planetsSW) => {
        const data = planetsSW.results.map((planetSW) => {
          delete planetSW.residents;
          return planetSW;
        });
        setPlanets(data);
        setIsLoading(false);
      });
  }, []);
  return [planets, isLoading];
}

export default useFetchSW;
