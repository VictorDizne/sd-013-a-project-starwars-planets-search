import { useEffect, useState } from 'react';

function useFetch() {
  const [planets, setPlanets] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((planetsAPI) => {
        const data = planetsAPI.results.map((planet) => {
          delete planet.residents;
          return planet;
        });
        setPlanets(data);
        setLoaded(true);
      });
  }, []);
  return [planets, loaded];
}

// Obrigado ao querido @LuizFJP.

export default useFetch;
