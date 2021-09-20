import React, { useContext } from 'react';
import PlanetContext from '../../context/PlanetContext';
import { htmlID } from '../../util';

const Table = () => {
  const { planets } = useContext(PlanetContext);
  function generateColumns() {
    const columns = { ...planets[0] };
    delete columns.residents; // a coluna residents não deve ser inserida na tabela
    return (
      <tr>
        { Object.keys(columns).map((column) => (
          <th name={ column } key={ htmlID({ name: column }) }>{ column }</th>
        ))}
      </tr>);
  }

  function generateRows() {
    return planets.map((planet, index) => {
      const {
        name,
        diameter,
        climate,
        gravity,
        terrain,
        population,
        films,
        created,
        edited,
        url,
      } = planet;
      const planetRow = (
        <tr key={ htmlID({ name: `linha${index}` }) }>
          <td key={ htmlID({ name }) }>{ name }</td>
          <td key={ htmlID({ name: 'rotation_period' }) }>{ planet.rotation_period }</td>
          <td key={ htmlID({ name: 'orbital_period' }) }>{ planet.orbital_period }</td>
          <td key={ htmlID({ name: diameter }) }>{ diameter }</td>
          <td key={ htmlID({ name: climate }) }>{ climate }</td>
          <td key={ htmlID({ name: gravity }) }>{ gravity }</td>
          <td key={ htmlID({ name: terrain }) }>{ terrain }</td>
          <td key={ htmlID({ name: 'surface_water' }) }>{ planet.surface_water }</td>
          <td key={ htmlID({ name: population }) }>{ population }</td>
          <td key={ htmlID({ name: films }) }>{ films }</td>
          <td key={ htmlID({ name: created }) }>{ created }</td>
          <td key={ htmlID({ name: edited }) }>{ edited }</td>
          <td key={ htmlID({ name: url }) }>{ url }</td>
        </tr>);
      return planetRow;
    });
  }

  function generateTable() {
    return (
      <table>
        <thead>{ generateColumns() }</thead>
        <tbody>{ generateRows() }</tbody>
      </table>
    );
  }
  return (generateTable());
};

export default Table;
