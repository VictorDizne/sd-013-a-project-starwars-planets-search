import React, { useContext } from 'react';
import StarWarsContext from '../context';

const TablePlanets = () => {
  const contextValue = useContext(StarWarsContext);
  const { data: { results }, isLoading } = contextValue;
  if (isLoading === true) {
    return 'Carregando Tabela';
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Name</th>
          <th>Orbital Period</th>
          <th>Population</th>
          <th>Residents</th>
          <th>Rotation Period</th>
          <th>Surface Water</th>
          <th>Terrain</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={ result.name }>
            <td>{result.climate}</td>
            <td>{result.created}</td>
            <td>{result.diameter}</td>
            <td>{result.edited}</td>
            <td>{result.films}</td>
            <td>{result.gravity}</td>
            <td>{result.name}</td>
            <td>{result.orbital_period}</td>
            <td>{result.population}</td>
            <td>{result.population}</td>
            <td>{result.residents}</td>
            <td>{result.rotation_period}</td>
            <td>{result.surface_water}</td>
            <td>{result.terrain}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablePlanets;
