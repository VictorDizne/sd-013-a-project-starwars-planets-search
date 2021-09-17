import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { tableData } = useContext(PlanetContext);

  if (!tableData.length) return <p> Loading ... </p>;

  const keys = Object.keys(tableData[0]);

  const cols = keys.filter((key) => key !== 'residents');

  return (
    <table>
      <thead>
        <tr>
          {cols.map((col) => (<th key={ col }>{col}</th>))}
        </tr>
      </thead>
      <tbody>
        {tableData
          .map((planet) => (
            <tr key={ planet.name }>
              {cols.map((col) => (<td key={ planet[col] }>{planet[col]}</td>))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
export default Table;
