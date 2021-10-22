import { useEffect, useState } from 'react';

export default function useFetchApi() {
  const [data, setData] = useState([]);
  const [planetKeys, setPlanetKeys] = useState([]);
  const [listPlanets, setListPlanets] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await (await fetch(url)).json();

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

  return { data, planetKeys, listPlanets, setListPlanets };
}

// Feito com ajuda dos colegas Luiza e Gessé
