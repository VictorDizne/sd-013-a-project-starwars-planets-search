import React, { useContext, useEffect, useState } from 'react';
import TableContext from '../context/TableContext';

function TableContent() {
  const { data: { results }, filter } = useContext(TableContext);

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(results);
  }, [results]);

  // Filter Planets by Name
  const filterPlanetsByName = () => {
    const { filters: { filterByName: { name: filterName } } } = filter;
    const planetsFilterByName = results
      .filter(({ name }) => name.toLowerCase().includes(filterName));
    setPlanets(planetsFilterByName);
  };
  useEffect(filterPlanetsByName, [filter.filters.filterByName]);

  // Filter Planets by Numeric Value
  const filterPlanetsByNumericValue = () => {
    const { filters: { filterByNumericValues } } = filter;
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      if (comparison === 'maior que') {
        const filteredPlanets = planets
          .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
        setPlanets(filteredPlanets);
      }
      if (comparison === 'menor que') {
        const filteredPlanets = planets
          .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
        setPlanets(filteredPlanets);
      }
      if (comparison === 'igual a') {
        const filteredPlanets = planets
          .filter((planet) => parseInt(planet[column], 10) === parseInt(value, 10));
        setPlanets(filteredPlanets);
      }
      return planets;
    });
  };
  useEffect(filterPlanetsByNumericValue, [filter.filters.filterByNumericValues]);

  const renderPlanetRow = () => planets.map((planet) => {
    const plantetInfos = Object.values(planet);
    return (
      <tr key={ planet.name }>
        {plantetInfos.map((info) => <td key={ info }>{info}</td>)}
      </tr>);
  });

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(results[0]).map((info) => <th key={ info }>{info}</th>)}
        </tr>
      </thead>
      <tbody>
        {renderPlanetRow()}
      </tbody>
    </table>
  );
}

export default TableContent;
