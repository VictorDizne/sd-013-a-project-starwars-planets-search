import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function TableContent() {
  const { data: { results }, filter } = useContext(TableContext);

  const filterPlanetsByName = () => {
    const { filters: { filterByName: { name: filterName } } } = filter;
    return results
      .filter(({ name }) => name.toLowerCase().includes(filterName));
  };

  const filterPlanetsByNumericValue = () => {
    const { filters: { filterByNumericValues } } = filter;
    const [firstFilter] = filterByNumericValues;
    const { comparison, column, value } = firstFilter;
    if (comparison === 'maior que') {
      const filteredPlanets = filterPlanetsByName()
        .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
      return filteredPlanets;
    }
    if (comparison === 'menor que') {
      const filteredPlanets = filterPlanetsByName()
        .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
      return filteredPlanets;
    }
    if (comparison === 'igual a') {
      const filteredPlanets = filterPlanetsByName()
        .filter((planet) => parseInt(planet[column], 10) === parseInt(value, 10));
      return filteredPlanets;
    }
    return filterPlanetsByName();
  };

  const renderPlanetRow = () => filterPlanetsByNumericValue().map((planet) => {
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
