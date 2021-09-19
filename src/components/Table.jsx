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
      let nameFilter = data.filter((planet) => planet.name.includes(name));

      filterByNumerics.forEach((f) => {
        const { column, comparison, value } = f;
        nameFilter = nameFilter.filter((planet) => {
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
      });
      return nameFilter;
    };

    const filteredData = filterPlanets();
    setPlanets(filteredData);
  }, [data, filter]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((field, index) => <th key={ index }>{ field }</th>)}
          </tr>
        </thead>
        <tbody>
          { planets.map((planet) => (
            <tr key={ planet.name }>
              { headers.map((field, index) => <td key={ index }>{ planet[field] }</td>)}
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
