import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import FetchAPI from '../services/FetchAPI';
import FilterByName from './FilterByName';

function Table() {
  const { data } = FetchAPI();
  const { loading } = useContext(MyContext);
  const [filteredNames, setFilteredNames] = useState('');

  if (loading) {
    return <p>loading</p>;
  }

  const handleChange = (event) => {
    setFilteredNames(event.target.value);
  };

  return (
    <div>
      <FilterByName onChange={ handleChange } />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { data.filter((f) => filteredNames === '' || f.name.includes(filteredNames))
            .map((p) => (
              <tr key={ p.name }>
                <td>{ p.name }</td>
                <td>{ p.rotation_period }</td>
                <td>{ p.orbital_period }</td>
                <td>{ p.diameter }</td>
                <td>{ p.climate }</td>
                <td>{ p.gravity }</td>
                <td>{ p.terrain }</td>
                <td>{ p.surface_water }</td>
                <td>{ p.population }</td>
                <td>{ p.films }</td>
                <td>{ p.created }</td>
                <td>{ p.edited }</td>
                <td>{ p.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
