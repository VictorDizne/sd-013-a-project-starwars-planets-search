import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import InputFilter from './InputFilter';

function Table() {
  const { data, setData } = useContext(Context);
  const [filtered, setFilter] = useState('');

  useEffect(() => {
    const getData = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchUrl = await fetch(url);
      const { results } = await fetchUrl.json();
      setData(results);
    };
    getData();
  }, []);

  const onChangeHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <InputFilter onChange={ onChangeHandler } />
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
          {data.filter((d) => filtered === '' || d.name.includes(filtered))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
