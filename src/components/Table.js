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

const filterPlanets = ({ filterByName }, oldData) => {
  const filtered = oldData.filter((planet) => (
    planet.name.includes(filterByName.name)
  ));
  return filtered;
};

const RenderTable = () => {
  const { data, filters } = useContext(PlanetsContext);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(filterPlanets(filters, data));
  }, [data, filters]);

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
        {Table(filteredData)}
      </tbody>
    </table>
  );
};

export default RenderTable;
