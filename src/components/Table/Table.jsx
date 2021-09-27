import React from 'react';
import { htmlID } from '../../util';

const Table = ({ data }) => {
  // console.log('rendering Table');
  function generateColumns(planets) {
    const columns = { ...planets[0] };
    delete columns.residents; // a coluna residents não deve ser inserida na tabela
    return (
      <tr>
        { Object.keys(columns).map((column) => (
          <th name={ column } key={ htmlID({ name: column }) }>{ column }</th>
        ))}
      </tr>);
  }

  function generateRows(planets) {
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
      } = planet; // lint não aceita camel_case, é preciso acessar a property pelo objeto
      const planetRow = (
        <tr key={ htmlID({ name: `linha${index}` }) } data-testid="planet-name">
          <td key={ htmlID({ name }) }>{ name }</td>
          <td key={ htmlID({ name: 'rotation' }) }>{ planet.rotation_period }</td>
          <td key={ htmlID({ name: 'orbital' }) }>{ planet.orbital_period }</td>
          <td key={ htmlID({ name: diameter }) }>{ diameter }</td>
          <td key={ htmlID({ name: climate }) }>{ climate }</td>
          <td key={ htmlID({ name: gravity }) }>{ gravity }</td>
          <td key={ htmlID({ name: terrain }) }>{ terrain }</td>
          <td key={ htmlID({ name: 'surface' }) }>{ planet.surface_water }</td>
          <td key={ htmlID({ name: population }) }>{ population }</td>
          <td key={ htmlID({ name: films }) }>{ films }</td>
          <td key={ htmlID({ name: created }) }>{ created }</td>
          <td key={ htmlID({ name: edited }) }>{ edited }</td>
          <td key={ htmlID({ name: url }) }>{ url }</td>
        </tr>);
      return planetRow;
    });
  }

  function renderTable(planets) {
    return (
      <table>
        <thead>{ generateColumns(planets) }</thead>
        <tbody>{ generateRows(planets) }</tbody>
      </table>
    );
  }
  return (renderTable(data));
};

export default Table;
