import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { state: { planets }, filters } = useContext(Context);
  const { filterByName: { name } } = filters;

  const renderTableHeaders = () => (
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
  );

  const renderTableBody = () => {
    // trecho de codigo retirado do Thalles Carneiro - Turma 12
    // https://github.com/tryber/sd-012-project-starwars-planets-search/pull/107/commits/d6ceb78803965ab83793da3601d9b3c06fd73454
    const filterByName = planets
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    return (
      <tbody>
        {filterByName.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
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
          </tr>))}
      </tbody>
    );
  };

  return (
    <div className="table-container">
      <table className="table">
        {renderTableHeaders()}
        {renderTableBody()}
      </table>
    </div>
  );
}

export default Table;
