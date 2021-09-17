import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const headers = ['name', 'climate', 'created', 'diameter', 'edited', 'films', 'gravity',
  'orbital_period', 'population', 'rotation_period', 'surface_water',
  'terrain', 'url'];

function Table() {
  const { data, filter } = useContext(PlanetsContext);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const { filterByName: name, filterByNumerics } = filter;

    const filterPlanets = () => {
      const nameFilter = data.filter((planet) => planet.name.includes(name));

      if (filterByNumerics.length > 0) {
        const { column, comparison, value } = filterByNumerics[0];
        const applyFilter = nameFilter.filter((planet) => {
          switch (comparison) {
          case 'maior que':
            return parseInt(planet[column], 10) > value;
          case 'menor que':
            return parseInt(planet[column], 10) < value;
          case 'igual a':
            return planet[column] === value;
          default:
            return '';
          }
        });
        return applyFilter;
      }

      return nameFilter;
    };

    const filteredData = filterPlanets();
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
