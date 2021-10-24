import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import Input from './Input';
import formatDate from '../services/formatDate';

// Ajude de Gustavo Moraes

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

  // const functionn = (...args) => {
  //   console.log(args.length);
  // };
  // functionn(5, 2, 'a');

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

const SortPlanets = (data, filters) => {
  const { order } = filters;
  const { column, sort } = order;

  const sortByColumn = () => {
    if (column === 'population') {
      const sortByPopulation = sort === 'ASC'
        ? data.sort((a, b) => a.population - b.population)
        : data.sort((a, b) => b.population - a.population);

      return sortByPopulation;
    }

    if (column === 'name') {
      const sortByName = sort === 'ASC'
        ? data.sort((a, b) => a.name.localeCompare(b.name))
        : data.sort((a, b) => b.name.localeCompare(a.name));

      return sortByName;
    }

    if (column === 'orbital_period') {
      const sortByOrbitalPeriod = sort === 'ASC'
        ? data.sort((a, b) => a.orbital_period - b.orbital_period)
        : data.sort((a, b) => b.orbital_period - a.orbital_period);

      return sortByOrbitalPeriod;
    }

    return GenerateTable(data);
  };

  return GenerateTable(sortByColumn());
};

const Table = () => {
  const { data, filters } = useContext(Context);
  const [filteredData, setFilteredData] = useState([]);
  // const { filterByNumericValues } = filters;
  // console.log(filteredData);

  // ajude de Luiz Casimiro

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
          {SortPlanets(filteredData, filters)}
        </tbody>
      </table>

    </>
  );
};

export default Table;
