import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import Input from './Input';
import formatDate from '../services/formatDate';

// gustavo moraes
const GenerateTable = (data) => data.map((planet) => (
  <tr key={ planet.name }>
    <td data-testid="planet-name">{planet.name}</td>
    <td>{planet.rotation_period}</td>
    <td>{planet.orbital_period}</td>
    <td>{planet.diameter}</td>
    <td>{planet.climate}</td>
    <td>{planet.gravity}</td>
    <td>{planet.terrain}</td>
    <td>{planet.surface_water}</td>
    <td>{planet.population}</td>
    <td>{planet.films.length}</td>
    <td>{formatDate(planet.created)}</td>
    <td>{formatDate(planet.edited)}</td>
    <td>
      <a href={ planet.url } rel="noreferrer" target="_blank">{planet.url}</a>
    </td>
  </tr>
));

const filterPlanets = ({ filterByName, filterByNumericValues }, prevData) => {
  let filteredPlanets = prevData.filter((planet) => (
    planet.name.toLowerCase().includes(filterByName.name.toLowerCase())
  ));
  if (filterByNumericValues.length === 0) return filteredPlanets;

  const functionn = (...args) => {
    console.log(args.length);
  };
  functionn(5, 2, 'a');

  filterByNumericValues.forEach((filter) => {
    filteredPlanets = filteredPlanets.filter((planet) => {
      if (filter.comparison === 'maior que') {
        return parseInt(planet[filter.column], 10) > parseInt(filter.value, 10);
      }

      if (filter.comparison === 'menor que') {
        return parseInt(planet[filter.column], 10) < parseInt(filter.value, 10);
      }

      return parseInt(planet[filter.column], 10) === parseInt(filter.value, 10);
    });
  });

  return filteredPlanets;
};

const Table = () => {
  const { data, filters } = useContext(Context);
  const [filteredData, setFilteredData] = useState([]);
  // const { filterByNumericValues } = filters;
  // console.log(filteredData);

  // luiz casimiro

  useEffect(() => {
    setFilteredData(filterPlanets(filters, data));
  }, [data, filters]);

  return (
    <>
      <div>
        <h1>Star Wars Planets</h1>
        <Input />
      </div>

      <table>
        <tbody>
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
            <th>Create</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
          {GenerateTable(filteredData)}
        </tbody>
      </table>

    </>
  );
};

export default Table;
