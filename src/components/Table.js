import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data } = useContext(AppContext);

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
        { data.map((planet) => (
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
