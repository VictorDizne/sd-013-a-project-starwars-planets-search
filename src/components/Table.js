import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data, filters } = useContext(AppContext);
  const { filterByName: { name } } = filters;

  if (!data.length) return <p>Loading</p>;

  const headers = Object.keys(data[0]).filter((key) => key !== 'residents');
  const dataFilter = data
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
        { dataFilter.map((planet) => (
          <tr key={ planet.name }>
            { headers.map((header) => (
              <td key={ planet[header] }>
                { planet[header] }
              </td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
};

export default Table;
