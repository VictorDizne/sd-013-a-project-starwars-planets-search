import React, { useContext } from 'react';
import Context from '../context/index';
import HeaderTable from './HeaderTable';

function Table() {
  const { data, filters: { filterByName: { name } } } = useContext(Context);

  const filterPlanets = () => {
    const namePlanet = data.filter((planet) => (
      name ? planet.name.includes(name) : data
    ));

    return namePlanet;
  };

  return (
    <table>
      <HeaderTable />
      { filterPlanets().map((item) => (
        <tr key={ item }>
          <td>{item.name}</td>
          <td>{item.rotation_period}</td>
          <td>{item.orbital_period}</td>
          <td>{item.diameter}</td>
          <td>{item.climate}</td>
          <td>{item.gravity}</td>
          <td>{item.terrain}</td>
          <td>{item.surface_water}</td>
          <td>{item.population}</td>
          <td>
            {item.films.map((film, index) => (<a key={ index } href={ film }>Filme</a>))}
          </td>
          <td>{item.created}</td>
          <td>{item.edited}</td>
          <td><a href={ item.url }>URL</a></td>
        </tr>
      )) }
    </table>
  );
}

export default Table;
