import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const data = useContext(MyContext);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
  });

  const handleChange = ({ target }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: target.value,
      },
    });
  };

  const [filtered, setfiltered] = useState([]);

  useEffect(() => {
    function filterByInput() {
      let newArray = data;
      if (newArray.length > 0 && filter.filterByName.name) {
        newArray = newArray
          .filter((item) => item.name.toLowerCase()
            .includes(filter.filterByName.name.toLowerCase()));
      }
      setfiltered(newArray);
    }
    filterByInput();
  },
  [data, filter]);

  return (
    <>
      <input
        type="text"
        onChange={ (e) => handleChange(e) }
        data-testid="name-filter"
      />
      <table>
        <tbody>
          <tr>
            <th>Planet</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
          {
            filtered.map((planet, index) => (
              <tr key={ index }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films.map((film, i) => (<p key={ i }>{ film }</p>)) }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>
                  <a
                    href={ planet.url }
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    { planet.url }
                  </a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;
