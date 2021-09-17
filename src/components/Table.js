import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { data, filter } = useContext(PlanetsContext);

  const filteredTable = () => {
    const filtering = data.filter((planet) => (
      planet.name.includes(filter.filterByName.name)));
    return filtering;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {filteredTable().map((planet) => (
          <tr key={ `${planet.name} ${planet.rotation_period}` }>
            <td key={ planet.name }>{planet.name}</td>
            <td key={ planet.rotation_period }>{planet.rotation_period}</td>
            <td key={ planet.orbital_period }>{planet.orbital_period}</td>
            <td key={ planet.diameter }>{planet.diameter}</td>
            <td key={ planet.climate }>{planet.climate}</td>
            <td key={ planet.gravity }>{planet.gravity}</td>
            <td key={ planet.terrain }>{planet.terrain}</td>
            <td key={ planet.surface_water }>{planet.surface_water}</td>
            <td key={ planet.population }>{planet.population}</td>
            <td key={ planet.films }>{planet.films}</td>
            <td key={ planet.created }>{planet.created}</td>
            <td key={ planet.edited }>{planet.edited}</td>
            <td key={ planet.url }>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
