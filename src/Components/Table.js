import React, { useState, useEffect, useContext } from 'react';
import { InputFilter, FiltersOptions } from './index';
import MyContext from '../Context/MyContext';

function Table() {
  const { data, setData } = useContext(MyContext);
  const [nameFilt, setNameFilt] = useState('');

  useEffect(() => {
    const requestApi = async () => {
      const fetchPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const responseJson = await fetchPlanets.json();
      const { results } = responseJson;
      setData(results);
    };
    requestApi();
  }, []);

  const onChangeInputFilter = (e) => {
    setNameFilt(e.target.value);
  };

  return (
    <div>
      <InputFilter onChange={ onChangeInputFilter } />
      <FiltersOptions />
      <table>
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
        <tbody>
          { data.filter((result) => nameFilt === '' || result.name.includes(nameFilt))
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
