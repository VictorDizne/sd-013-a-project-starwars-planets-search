import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext';

const Table = () => {
  const {
    data,
    filteredData,
  } = useContext(AppContext);

  // let { filteredData } = useContext(AppContext);
  // const { filterByName: { name } } = filters;

  if (!data.length) return <p>Loading</p>;

  const headers = Object.keys(data[0]).filter((key) => key !== 'residents');

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
