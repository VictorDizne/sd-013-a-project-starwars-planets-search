import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { useData, dataTable } = useContext(MyContext);
  console.log(useData);

  if (useData === undefined) return <p>Loading...</p>;
  return (
    <div>
      <table>
        <thead>
          <tr>
            {
              Object.keys(dataTable).map((column, index) => (
                <th key={ index }>{column}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {
            useData.map((row, index) => (
              <tr key={ index }>
                <td>{ row.name }</td>
                <td>{ row.rotation_period }</td>
                <td>{ row.orbital_period }</td>
                <td>{ row.diameter }</td>
                <td>{ row.climate }</td>
                <td>{ row.gravity }</td>
                <td>{ row.terrain }</td>
                <td>{ row.surface_water }</td>
                <td>{ row.population }</td>
                <td>{ row.films }</td>
                <td>{ row.created }</td>
                <td>{ row.edited }</td>
                <td>{ row.url }</td>
              </tr>
            ))

          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
