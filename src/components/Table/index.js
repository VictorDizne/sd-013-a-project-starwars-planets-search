import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

const Table = () => {
  const { data, filters } = useContext(AppContext);

  if (!data.length) return <p>Loading</p>;

  const headers = Object.keys(data[0]).filter((key) => key !== 'residents');

  const { filterByName: { name } } = filters;

  const filteredData = data
    .filter((planet) => planet.name.toLowerCase()
      .includes(name.toLowerCase()));

  return (
    <table>

      <thead>
        <tr>
          { headers.map((head) => (
            <th key={ head }>{ head }</th>
          )) }
        </tr>
      </thead>

      <tbody>
        { filteredData.map((planet) => (
          <tr key={ planet.name }>
            { headers.map((header) => (
              <td key={ planet[header] }>
                { header !== 'films' ? planet[header] : planet[header].length }
              </td>
            )) }
          </tr>
        )) }
      </tbody>

    </table>
  );
};

export default Table;
