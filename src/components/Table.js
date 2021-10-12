import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context';

const Table = (data) => (
  data.map((planet) => (
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
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  ))
);

const filterPlanets = ({ filterByOtherFilters, filterByName }, oldData) => {
  let filtered = oldData.filter((planet) => (
    planet.name.includes(filterByName.name)
  ));

  if (!filterByOtherFilters.length === 0) {
    return filtered;
  }

  filterByOtherFilters.forEach((filter) => {
    filtered = filtered.filter((planet) => {
      if (filter.comparison === 'maior que') {
        return parseInt(planet[filter.column], 10) > parseInt(filter.value, 10);
      }

      if (filter.comparison === 'menor que') {
        return parseInt(planet[filter.column], 10) < parseInt(filter.value, 10);
      }

      return parseInt(planet[filter.column], 10) === parseInt(filter.value, 10);
    });
  });

  return filtered;
};

const sortPlanets = (data, filters) => {
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

    return Table(data);
  };

  return Table(sortByColumn());
};

const RenderTable = () => {
  const { data, filters } = useContext(PlanetsContext);
  const [filteredData, setFilteredData] = useState([]);
  const { filterByOtherFilters } = filters;

  useEffect(() => {
    setFilteredData(filterPlanets(filters, data));
  }, [data, filters, filterByOtherFilters]);

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Período</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Link</th>
        </tr>
        {sortPlanets(filteredData, filters)}
      </tbody>
    </table>
  );
};

export default RenderTable;
