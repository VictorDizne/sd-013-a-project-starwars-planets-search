import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, filter: { filterByName } } = useContext(MyContext);

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>suface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>

      <tbody>
        {/* {data.map((item, index) => (
          filterByName === ''
            ? (
              <tr key={ index }>
                <td>{ item.name }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.diameter }</td>
                <td>{ item.climate }</td>
                <td>{ item.gravity }</td>
                <td>{ item.terrain }</td>
                <td>{ item.surface_water }</td>
                <td>{ item.population}</td>
                <td>{ item.films }</td>
                <td>{ item.created }</td>
                <td>{ item.edited }</td>
                <td>{ item.url }</td>
              </tr>
            )
            : null
        ))} */}
        {data.map((item, index) => (
          item.name.toUpperCase().includes(filterByName.toUpperCase())
            ? (
              <tr key={ index }>
                <td>{ item.name }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.diameter }</td>
                <td>{ item.climate }</td>
                <td>{ item.gravity }</td>
                <td>{ item.terrain }</td>
                <td>{ item.surface_water }</td>
                <td>{ item.population}</td>
                <td>{ item.films }</td>
                <td>{ item.created }</td>
                <td>{ item.edited }</td>
                <td>{ item.url }</td>
              </tr>
            )
            : null
        ))}
      </tbody>
    </table>
  );
}

export default Table;
