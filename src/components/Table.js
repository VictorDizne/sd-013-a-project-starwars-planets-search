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
          {data.map((item, index) => (
            <tr key={ index }>
              {Object.values(item).map((values, i) => (
                <td key={ i }>{values}</td>
              ))}
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
