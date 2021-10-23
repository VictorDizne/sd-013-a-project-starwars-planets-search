import React, { useContext } from 'react';
import starWarsContext from '../context';

function Table() {
  const { data, title } = useContext(starWarsContext);

  function tableBody() {
    return (
      <table>
        <thead>
          <tr>
            {title.map((item, index) => (
              <th key={ index }>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((it, ind) => (
            <tr key={ ind }>
              <td data-testid="planet-name">{it.name}</td>
              <td>{it.rotation_period}</td>
              <td>{it.orbital_period}</td>
              <td>{it.diameter}</td>
              <td>{it.climate}</td>
              <td>{it.gravity}</td>
              <td>{it.terrain}</td>
              <td>{it.surface_water}</td>
              <td>{it.population}</td>
              <td>{it.films}</td>
              <td>{it.created}</td>
              <td>{it.edited}</td>
              {/*  {Object.values(item).map((values, i) => (
                <td key={ i }>{values}</td>
              ))} */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      {tableBody()}
    </div>
  );
}

export default Table;

/* Refatorado com a ajuda da pessoa estudante Douglas Santos Turma 13 Tribo A */
