import React, { useContext, useState, useEffect } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const renderPlanets = (planets) => (
  planets.map((p) => (
    <tr key={ p.name }>
      <td data-testid="planet-name">{p.name}</td>
      <td>{p.rotation_period}</td>
      <td>{p.orbital_period}</td>
      <td>{p.diameter}</td>
      <td>{p.climate}</td>
      <td>{p.gravity}</td>
      <td>{p.terrain}</td>
      <td>{p.surface_water}</td>
      <td>{p.population}</td>
      <td>{p.films}</td>
      <td>{p.created}</td>
      <td>{p.edited}</td>
      <td>{p.url}</td>
    </tr>
  ))
);

const compare = (a, b) => {
  const minusOne = -1;

  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = minusOne;
  }
  return comparison;
};

const filterPlanets = ({ filterByName, filterByNumericValues, order }, originalData) => {
  const { name } = filterByName;
  const { column, sort } = order;

  let filteredPlanets = originalData.filter((p) => (
    p.name.includes(name)
  ));

  filterByNumericValues.forEach((f) => {
    filteredPlanets = filteredPlanets.filter((p) => {
      if (f.comparison === 'maior que') {
        return parseInt(p[f.column], 10) > parseInt(f.value, 10);
      }
      if (f.comparison === 'menor que') {
        return parseInt(p[f.column], 10) < parseInt(f.value, 10);
      }
      return parseInt(p[f.column], 10) === parseInt(f.value, 10);
    });
  });

  filteredPlanets.sort(compare);

  if (column !== 'Name') {
    filteredPlanets.sort((a, b) => parseInt(a[column], 10) - parseInt(b[column], 10));
  }

  if (sort === 'DESC') {
    filteredPlanets.reverse();
  }

  return filteredPlanets;
};

function Table() {
  const { data, filters } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(filterPlanets(filters, data));
  }, [filters, data]);

  return (
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
        {renderPlanets(planets)}
      </tbody>
    </table>
  );
}

export default Table;
