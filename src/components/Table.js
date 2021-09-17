import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { data } = useContext(PlanetsContext);
  console.log(data);
  // Ensina a como fazer uma tabela com filtros
  // https://edrodrigues.com.br/blog/criando-tabelas-com-filtros-%E2%80%8B%E2%80%8Busando-react/
  return (
    <table>
      <caption> Tabela de Planetas</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Orbital period</th>
          <th>Population</th>
          <th>Rotation period</th>
          <th>Surface water</th>
          <th>Terrain</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {data.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.edited}</td>
            <td>{planet.films}</td>
            <td>{planet.gravity}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
