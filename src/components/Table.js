import React, { useContext } from 'react';
import { Context } from '../context/Provider';
import FilterByName from './FilterByName';
import FilterByNumbers from './FilterByNumbers';
import FiltersList from './FiltersList';
import TableRow from './TableRow';

function Table() {
  const { data, fetching, filters } = useContext(Context);

  if (fetching) return <h1>Loading...</h1>;

  if (!data.length) return null;

  const getOperator = (filter) => {
    const { column, comparison, value } = filter;

    const gt = (planet) => Number(planet[column]) > Number(value);
    const lt = (planet) => Number(planet[column]) < Number(value);
    const eq = (planet) => Number(planet[column]) === Number(value);
    if (comparison === 'maior que') return gt;
    if (comparison === 'menor que') return lt;
    return eq;
  };

  const filterByName = () => {
    const { filterByName: { name } } = filters;
    return data
      .filter((planet) => planet.name.toLowerCase().includes(name));
  };

  const filterPlanetsByNumericValue = () => {
    const { filterByNumericValues } = filters;
    let filteredSoFar = filterByName();

    if (!filterByNumericValues.length) return filteredSoFar;

    filterByNumericValues.forEach((f) => {
      filteredSoFar = filteredSoFar.filter(getOperator(f));
    });

    return filteredSoFar;
  };

  const planets = filterPlanetsByNumericValue();

  return (
    <main>
      <FilterByName />
      <FilterByNumbers />
      <FiltersList />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => <TableRow key={ planet.name } planet={ planet } />)}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
