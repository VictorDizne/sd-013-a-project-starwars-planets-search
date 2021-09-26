import React, { useEffect, useContext } from 'react';
import context from '../context/Context';

function Tabela() {
  const { item, setItem } = useContext(context);

  useEffect(() => {
    const getItem = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const fetchApi = await fetch(url);
      const json = await fetchApi.json();
      const { results } = json;
      setItem(results);
    };
    // faz a requisição API e  o new state
    getItem();
  }, [setItem]);

  return (
    <div>
      <table>
        <tbody>
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
        </tbody>
        <tbody>
          { item.map((planet) => (
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

// sobre criar tabela https://www.delftstack.com/pt/howto/javascript/create-table-javascript/#:~:text=Para%20criar%20um%20elemento%20HTML,createElement('table')%20.
export default Tabela;
