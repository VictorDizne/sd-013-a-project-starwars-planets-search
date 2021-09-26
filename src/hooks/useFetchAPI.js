import { useEffect, useState } from 'react';

export default function useFetchAPI() {
  const [data, setData] = useState([]);
  const [planetsKeys, setPlanetsKeys] = useState([]);
  const [planetsList, setPlanetsList] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await (await fetch(url)).json();

      const removeResidents = results.map((result) => {
        const object = result;
        delete result.residents;
        return object;
      });

      const getKeys = Object.keys(removeResidents[0]);
      setData(removeResidents);
      setPlanetsKeys(getKeys);
      setPlanetsList(removeResidents);
    };

    fetchAPI();
  }, []);

  return { data, planetsKeys, planetsList, setPlanetsList };
}
// código refeito com a explicação de Gessé Carlos e Emanoel Mattos
