import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const headers = ['climate', 'created', 'diameter', 'edited', 'films', 'gravity',
  'name', 'orbital_period', 'population', 'rotation_period', 'surface_water',
  'terrain', 'url'];

function Table() {
  const { data, filter } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const { filterByName: name } = filter;
    const filteredData = data.filter((planet) => planet.name.includes(name));
    setPlanets(filteredData);
  }, [data, filter]);

  return (
    <div>
      <table>
        <tr>
          {headers.map((field, index) => <th key={ index }>{ field }</th>)}
        </tr>
        { planets.map((planet) => (
          <tr key={ planet.name }>
            { headers.map((field, index) => <td key={ index }>{ planet[field] }</td>)}
          </tr>))}
      </table>
    </div>
  );
}

export default Table;
