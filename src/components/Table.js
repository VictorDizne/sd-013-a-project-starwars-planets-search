import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { planets, setPlanets, isLoading, setIsLoading } = useContext(AppContext);

  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    const fetchData = async () => {
      const { results } = await fetch(url).then((response) => response.json());
      setPlanets(results);
      setIsLoading(false);
    };
    fetchData();
  }, [setIsLoading, setPlanets]);

  const filteredPlanets = planets.map((planet) => {
    delete planet.residents;
    return planet;
  });

  if (isLoading) {
    return (
      <div>Carregando...</div>
    );
  }

  return (
    <div>
      <table>
        <tr>
          {Object.keys(filteredPlanets[0]).map((key) => (

            <th key={ key }>{ key}</th>
          ))}
        </tr>
        {filteredPlanets.map((planet) => (
          <tr key={ planet.name }>
            {Object.values(planet).map((value) => (
              <td key={ value }>{value}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
