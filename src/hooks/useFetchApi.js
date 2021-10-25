import { useEffect, useState } from 'react';

export default function useFetchApi() {
  const [data, setData] = useState([]);
  const [planetKeys, setPlanetKeys] = useState([]);
  const [listPlanets, setListPlanets] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchResults = await (await fetch(url)).json();
      const number = -1;
      const results = fetchResults.results.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return number;
        }
        return 0;
      });

      const removeResidents = results.map((result) => {
        delete result.residents;
        return result;
      });

      const keys = Object.keys(removeResidents[0]);

      setData(removeResidents);
      setPlanetKeys(keys);
      setListPlanets(removeResidents);
    };

    fetchAPI();
  }, []);

  return { data, planetKeys, listPlanets, setListPlanets, setData };
}

// Feito com ajuda dos colegas Luiza e Gessé
